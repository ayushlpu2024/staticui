import type { CollectionAfterChangeHook } from 'payload'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Go up from src/collections/hooks to project root then to src/registry
const registryDir = path.resolve(dirname, '../../registry')

export const createGenerateTSXHook = (typeFolder: string): CollectionAfterChangeHook => async ({
  doc,
  req,
}) => {
  if (doc.code && doc.slug) {
    const folderPath = path.join(registryDir, typeFolder)
    
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true })
    }

    const filePath = path.join(folderPath, `${doc.slug}.tsx`)
    
    try {
      fs.writeFileSync(filePath, doc.code, 'utf-8')
      req.payload.logger.info(`Generated TSX file for ${typeFolder}/${doc.slug}`)
    } catch (err) {
      req.payload.logger.error(`Error generating TSX file for ${typeFolder}/${doc.slug}: ${err}`)
    }
  }

  return doc
}
