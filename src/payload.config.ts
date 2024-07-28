// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'

import { Settings } from './globals/Settings'
import { COLLECTION_SLUG } from './constants'
import { Projects } from './collections/Projects'
import { Services } from './collections/Services'
import { cachedPayloadPlugin } from './plugins/cachedPayload'
import { Posts } from './collections/Posts'
import { Tags } from './collections/Tags'
import { pluginSeo } from './plugins/pluginSeo'
import { pluginFormBuilder } from './plugins/pluginFormBuilder'
import { Features } from './collections/Features'
import { Technologies } from './collections/Technologies'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Features, Pages, Posts, Projects, Services, Tags, Technologies, Users, Media],
  globals: [Settings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    nestedDocsPlugin({
      collections: [COLLECTION_SLUG.PAGES],
      generateLabel: (_, doc) => doc?.title as string,
      generateURL: (docs) =>
        docs.reduce((url, doc) => `${url}/${doc.slug}`.replace(/^\/+/, '/'), ''),
    }),
    cachedPayloadPlugin,
    pluginSeo,
    pluginFormBuilder,
  ],
})
