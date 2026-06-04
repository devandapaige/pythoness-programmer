const fs = require('fs')
const path = require('path')

const MIME_BY_EXT = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
}

/**
 * Replace remote image URLs with base64 data URLs so Resend draft previews
 * show images before the site is deployed. Production sends can use hosted URLs.
 */
const embedLocalImagesInHtml = (html, localImages, rootDir) => {
  if (!localImages?.length) return html

  let result = html

  for (const entry of localImages) {
    const { url, path: filePath, emailPath, contentType } = entry
    if (!url || !filePath) continue

    const embedPath = emailPath ?? filePath
    const absolutePath = path.isAbsolute(embedPath)
      ? embedPath
      : path.join(rootDir, embedPath)

    if (!fs.existsSync(absolutePath)) {
      throw new Error(`Local image not found for Resend embed: ${absolutePath}`)
    }

    const ext = path.extname(absolutePath).toLowerCase()
    const mime = contentType ?? MIME_BY_EXT[ext] ?? 'application/octet-stream'
    const base64 = fs.readFileSync(absolutePath).toString('base64')
    const dataUrl = `data:${mime};base64,${base64}`

    result = result.split(url).join(dataUrl)
  }

  return result
}

module.exports = { embedLocalImagesInHtml }
