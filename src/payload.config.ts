import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { resendAdapter } from '@payloadcms/email-resend'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Categories } from './collections/Categories'
import { Components } from './collections/Components'
import { Contacts } from './collections/Contacts'
import { Plans } from './collections/Plans'
import { Subscriptions } from './collections/Subscriptions'
import { Payments } from './collections/Payments'
import { Webhooks } from './collections/Webhooks'
import { Tags } from './collections/Tags'
import { Blocks } from './collections/Blocks'
import { Pages } from './collections/Pages'
import { Templates } from './collections/Templates'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Categories, Tags, Components, Blocks, Pages, Templates, Contacts, Plans, Subscriptions, Payments, Webhooks],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  email: resendAdapter({
    defaultFromAddress: process.env.RESEND_DEFAULT_EMAIL || 'onboarding@resend.dev',
    defaultFromName: process.env.RESEND_DEFAULT_NAME || 'Static UI Team',
    apiKey: process.env.RESEND_API_KEY || '',
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
})
