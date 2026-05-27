/**
 * One-time migration: download Beehiiv-hosted images into public/ and rewrite MDX URLs.
 *
 * Usage (from repo root):
 *   node scripts/migrate-beehiiv-images.js
 *   npm run migrate-beehiiv-images
 */
const fs = require('fs')
const path = require('path')

const SIGNATURE_ASSET_UUID = '5abd08ee-bc4d-49f0-9303-3d5d75ef4359'
const SIGNATURE_LOCAL_PATH = '/images/email-signature.png'

const ASSETS_DIR = path.join(process.cwd(), 'public/newsletter/assets')
const SCAN_DIRS = [
  path.join(process.cwd(), 'src/content/newsletter/posts'),
  path.join(process.cwd(), 'src/content/blog/posts'),
]

const ASSET_FILE_PATTERN =
  /https?:\/\/(?:beehiiv-images-production\.s3\.amazonaws\.com|media\.beehiiv\.com[^"'\s>]*?)\/uploads\/asset\/file\/([a-f0-9-]+)\/([^?"'\s>]+)(?:\?[^"'\s>]*)?/gi

const PUBLICATION_LOGO_PATTERN =
  /https?:\/\/beehiiv-images-production\.s3\.amazonaws\.com\/uploads\/publication\/logo\/([a-f0-9-]+)\/([^?"'\s>]+)(?:\?[^"'\s>]*)?/gi

const STATIC_ASSET_PATTERN =
  /https?:\/\/media\.beehiiv\.com\/cdn-cgi\/image\/[^"'\s>]*?\/static_assets\/([^?"'\s>]+)(?:\?[^"'\s>]*)?/gi

const ALL_IMAGE_PATTERNS = [
  ASSET_FILE_PATTERN,
  PUBLICATION_LOGO_PATTERN,
  STATIC_ASSET_PATTERN,
]

function listMdxFiles(dir) {
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx') && !f.endsWith('.mdx.bak'))
    .map((f) => path.join(dir, f))
}

function localPathForAsset(uuid, filename) {
  if (uuid === SIGNATURE_ASSET_UUID) {
    return SIGNATURE_LOCAL_PATH
  }
  return `/newsletter/assets/${uuid}/${filename}`
}

function localPathForPublicationLogo(uuid, filename) {
  return `/newsletter/assets/publication/${uuid}/${filename}`
}

function localPathForStaticAsset(relativePath) {
  return `/newsletter/static/${relativePath}`
}

function diskPathForAsset(uuid, filename) {
  return path.join(ASSETS_DIR, uuid, filename)
}

function diskPathForPublicationLogo(uuid, filename) {
  return path.join(ASSETS_DIR, 'publication', uuid, filename)
}

function diskPathForStaticAsset(relativePath) {
  return path.join(process.cwd(), 'public/newsletter/static', relativePath)
}

function s3UrlForAsset(uuid, filename) {
  return `https://beehiiv-images-production.s3.amazonaws.com/uploads/asset/file/${uuid}/${filename}`
}

function extractAssetsFromContent(content) {
  const assets = new Map()

  let match
  const assetRe = new RegExp(ASSET_FILE_PATTERN.source, 'gi')
  while ((match = assetRe.exec(content)) !== null) {
    const uuid = match[1]
    const filename = decodeURIComponent(match[2])
    const key = `asset:${uuid}/${filename}`
    if (!assets.has(key)) {
      assets.set(key, {
        type: 'asset',
        uuid,
        filename,
        downloadUrl: s3UrlForAsset(uuid, filename),
        localPath: localPathForAsset(uuid, filename),
        diskPath: diskPathForAsset(uuid, filename),
      })
    }
  }

  const logoRe = new RegExp(PUBLICATION_LOGO_PATTERN.source, 'gi')
  while ((match = logoRe.exec(content)) !== null) {
    const uuid = match[1]
    const filename = decodeURIComponent(match[2])
    const key = `logo:${uuid}/${filename}`
    if (!assets.has(key)) {
      const downloadUrl = `https://beehiiv-images-production.s3.amazonaws.com/uploads/publication/logo/${uuid}/${filename}`
      assets.set(key, {
        type: 'logo',
        uuid,
        filename,
        downloadUrl,
        localPath: localPathForPublicationLogo(uuid, filename),
        diskPath: diskPathForPublicationLogo(uuid, filename),
      })
    }
  }

  const staticRe = new RegExp(STATIC_ASSET_PATTERN.source, 'gi')
  while ((match = staticRe.exec(content)) !== null) {
    const relativePath = decodeURIComponent(match[1])
    const key = `static:${relativePath}`
    if (!assets.has(key)) {
      const downloadUrl = `https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/static_assets/${relativePath}`
      assets.set(key, {
        type: 'static',
        relativePath,
        downloadUrl,
        localPath: localPathForStaticAsset(relativePath),
        diskPath: diskPathForStaticAsset(relativePath),
      })
    }
  }

  return assets
}

function rewriteContent(content) {
  let result = content.replace(
    new RegExp(ASSET_FILE_PATTERN.source, 'gi'),
    (_full, uuid, filename) => localPathForAsset(uuid, decodeURIComponent(filename))
  )
  result = result.replace(
    new RegExp(PUBLICATION_LOGO_PATTERN.source, 'gi'),
    (_full, uuid, filename) => localPathForPublicationLogo(uuid, decodeURIComponent(filename))
  )
  result = result.replace(
    new RegExp(STATIC_ASSET_PATTERN.source, 'gi'),
    (_full, relativePath) => localPathForStaticAsset(decodeURIComponent(relativePath))
  )
  return result
}

async function downloadEntry(entry) {
  if (entry.type === 'asset' && entry.uuid === SIGNATURE_ASSET_UUID) {
    return { status: 'mapped' }
  }

  if (fs.existsSync(entry.diskPath)) {
    return { status: 'skipped', diskPath: entry.diskPath }
  }

  const res = await fetch(entry.downloadUrl)
  if (!res.ok) {
    return { status: 'failed', url: entry.downloadUrl, error: `${res.status} ${res.statusText}` }
  }

  const buffer = Buffer.from(await res.arrayBuffer())
  fs.mkdirSync(path.dirname(entry.diskPath), { recursive: true })
  fs.writeFileSync(entry.diskPath, buffer)
  return { status: 'downloaded', diskPath: entry.diskPath }
}

async function main() {
  const mdxFiles = SCAN_DIRS.flatMap(listMdxFiles)
  if (mdxFiles.length === 0) {
    console.error('No MDX files found to scan.')
    process.exit(1)
  }

  const allAssets = new Map()
  for (const filePath of mdxFiles) {
    const content = fs.readFileSync(filePath, 'utf8')
    for (const [key, asset] of extractAssetsFromContent(content)) {
      if (!allAssets.has(key)) allAssets.set(key, asset)
    }
  }

  const toDownload = [...allAssets.values()].filter(
    (a) => !(a.type === 'asset' && a.uuid === SIGNATURE_ASSET_UUID)
  )

  const signatureMapped = allAssets.size - toDownload.length

  console.log(`Found ${allAssets.size} unique Beehiiv image assets across ${mdxFiles.length} files.`)
  console.log(
    `Downloading ${toDownload.length} assets${signatureMapped ? ` (${signatureMapped} mapped to existing signature)` : ''}.`
  )

  const downloadResults = { downloaded: 0, skipped: 0, mapped: signatureMapped, failed: [] }

  for (const entry of toDownload) {
    const label =
      entry.type === 'static'
        ? entry.relativePath
        : `${entry.uuid}/${entry.filename}`
    const result = await downloadEntry(entry)
    if (result.status === 'downloaded') {
      downloadResults.downloaded += 1
      console.log(`  ✓ ${label}`)
    } else if (result.status === 'skipped') {
      downloadResults.skipped += 1
    } else {
      downloadResults.failed.push({ ...entry, ...result })
      console.error(`  ✗ ${label}: ${result.error}`)
    }
  }

  let filesUpdated = 0
  for (const filePath of mdxFiles) {
    const original = fs.readFileSync(filePath, 'utf8')
    const rewritten = rewriteContent(original)
    if (rewritten !== original) {
      fs.writeFileSync(filePath, rewritten, 'utf8')
      filesUpdated += 1
      console.log(`Updated: ${path.relative(process.cwd(), filePath)}`)
    }
  }

  console.log('\n--- Summary ---')
  console.log(
    `Assets: ${downloadResults.downloaded} downloaded, ${downloadResults.skipped} already on disk, ${downloadResults.mapped} signature alias`
  )
  console.log(`MDX files updated: ${filesUpdated}`)
  if (downloadResults.failed.length > 0) {
    console.error(`Failed downloads: ${downloadResults.failed.length}`)
    process.exit(1)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
