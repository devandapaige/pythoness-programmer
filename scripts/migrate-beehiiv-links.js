/**
 * Migrate remaining Beehiiv URLs in MDX: issue links → /newsletter/{slug}, PDFs → public/.
 *
 * Usage:
 *   node scripts/migrate-beehiiv-links.js
 *   npm run migrate-beehiiv-links
 */
const fs = require('fs')
const path = require('path')

const SCAN_DIRS = [
  path.join(process.cwd(), 'src/content/newsletter/posts'),
  path.join(process.cwd(), 'src/content/blog/posts'),
]

const ISSUE_LINK_PATTERN =
  /https?:\/\/(?:www\.)?pythoness\.beehiiv\.com\/p\/([a-z0-9-]+)([^"'>\s]*)/gi

const PDF_PATTERN =
  /https?:\/\/beehiiv-publication-files\.s3\.amazonaws\.com\/uploads\/downloadables\/[^"'>\s]+?\/([^/"'\s>]+)\/([^?"'\s>]+)(?:\?[^"'>\s>]*)?/gi

/** Beehiiv download UUID → stable local path (filename from URL path). */
const PDF_LOCAL_PATHS = {
  'digitalspringcleaningWorksheet.pdf':
    '/digital-spring-cleaning/digitalspringcleaningWorksheet.pdf',
  'Mindful%20Automation%20Documentation%20Template.pdf':
    '/newsletter/downloads/mindful-automation-documentation-template.pdf',
  'Mindful Automation Documentation Template.pdf':
    '/newsletter/downloads/mindful-automation-documentation-template.pdf',
}

function listMdxFiles(dir) {
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx') && !f.endsWith('.mdx.bak'))
    .map((f) => path.join(dir, f))
}

function localPathForPdf(filename) {
  const decoded = decodeURIComponent(filename)
  if (PDF_LOCAL_PATHS[filename]) return PDF_LOCAL_PATHS[filename]
  if (PDF_LOCAL_PATHS[decoded]) return PDF_LOCAL_PATHS[decoded]
  const slug = decoded
    .replace(/\.pdf$/i, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
  return `/newsletter/downloads/${slug}.pdf`
}

function rewriteIssueLinks(content) {
  return content.replace(ISSUE_LINK_PATTERN, (_full, slug, trailing = '') => {
    const extra = trailing.replace(/&amp;/g, '&')
    return `/newsletter/${slug}${extra}`
  })
}

function rewritePdfLinks(content) {
  return content.replace(PDF_PATTERN, (_full, _uuid, filename) =>
    localPathForPdf(filename)
  )
}

function rewriteContent(content) {
  return rewritePdfLinks(rewriteIssueLinks(content))
}

async function downloadPdfIfNeeded(localWebPath, sourceUrl) {
  const diskPath = path.join(process.cwd(), 'public', localWebPath.replace(/^\//, ''))
  if (fs.existsSync(diskPath)) {
    return { status: 'skipped', diskPath }
  }

  const normalizedUrl = sourceUrl.replace(/&amp;/g, '&')
  const res = await fetch(normalizedUrl)
  if (!res.ok) {
    return { status: 'failed', url: normalizedUrl, error: `${res.status} ${res.statusText}` }
  }

  fs.mkdirSync(path.dirname(diskPath), { recursive: true })
  fs.writeFileSync(diskPath, Buffer.from(await res.arrayBuffer()))
  return { status: 'downloaded', diskPath }
}

function collectPdfDownloads(content) {
  const downloads = new Map()
  let match
  const re = new RegExp(PDF_PATTERN.source, 'gi')
  while ((match = re.exec(content)) !== null) {
    const filename = match[2]
    const localPath = localPathForPdf(filename)
    if (!downloads.has(localPath)) {
      downloads.set(localPath, match[0].replace(/&amp;/g, '&'))
    }
  }
  return downloads
}

async function main() {
  const mdxFiles = SCAN_DIRS.flatMap(listMdxFiles)
  const allPdfs = new Map()

  for (const filePath of mdxFiles) {
    const content = fs.readFileSync(filePath, 'utf8')
    for (const [localPath, url] of collectPdfDownloads(content)) {
      if (!allPdfs.has(localPath)) allPdfs.set(localPath, url)
    }
  }

  console.log(`Downloading ${allPdfs.size} unique PDF(s)...`)
  const pdfResults = { downloaded: 0, skipped: 0, failed: [] }

  for (const [localPath, url] of allPdfs) {
    const result = await downloadPdfIfNeeded(localPath, url)
    if (result.status === 'downloaded') {
      pdfResults.downloaded += 1
      console.log(`  ✓ ${localPath}`)
    } else if (result.status === 'skipped') {
      pdfResults.skipped += 1
    } else {
      pdfResults.failed.push({ localPath, ...result })
      console.error(`  ✗ ${localPath}: ${result.error}`)
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
    `PDFs: ${pdfResults.downloaded} downloaded, ${pdfResults.skipped} already on disk`
  )
  console.log(`MDX files updated: ${filesUpdated}`)

  if (pdfResults.failed.length > 0) {
    console.error(`Failed PDF downloads: ${pdfResults.failed.length}`)
    process.exit(1)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
