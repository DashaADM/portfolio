import { COLLECTION_SLUG, GLOBAL_SLUG } from '@/constants'
import { buildCachedPayload } from '@payload-enchants/cached-local-api'
import { revalidateTag, unstable_cache } from 'next/cache'
import type { Payload, PaginatedDocs } from 'payload'
import type { Config } from '@/payload-types'

// Typed cached payload operations using our generated Config types
type TypedCachedPayload = {
  find: <T extends keyof Config['collections']>(
    args: { collection: T } & Omit<Parameters<Payload['find']>[0], 'collection'>
  ) => Promise<PaginatedDocs<Config['collections'][T]>>
  findOne: <T extends keyof Config['collections']>(
    args: { collection: T; value: string; field?: string }
  ) => Promise<Config['collections'][T] | null>
  findByID: <T extends keyof Config['collections']>(
    args: { collection: T; id: string }
  ) => Promise<Config['collections'][T]>
  findGlobal: <T extends keyof Config['globals']>(
    args: { slug: T }
  ) => Promise<Config['globals'][T]>
  count: Payload['count']
}

const { cachedPayloadPlugin: plugin, getCachedPayload: getPayload } = buildCachedPayload({
  // collections list to cache
  collections: [
    {
      findOneFields: ['pathname'],
      slug: COLLECTION_SLUG.PAGES,
    },
    {
      findOneFields: ['slug'],
      slug: COLLECTION_SLUG.PROJECTS,
    },
    {
      slug: COLLECTION_SLUG.POSTS,
      findOneFields: ['slug'],
    },
    {
      slug: COLLECTION_SLUG.FORMS,
    },
  ],
  // Log when revalidation runs or operation cache HIT / SKIP
  loggerDebug: true,
  globals: [{ slug: GLOBAL_SLUG.SETTINGS }, { slug: GLOBAL_SLUG.PRIVACY_POLICY }],
  revalidateTag,
  options: {},
  unstable_cache,
})

export const cachedPayloadPlugin = plugin
export const getCachedPayload = (payload: Payload): TypedCachedPayload => 
  getPayload(payload) as unknown as TypedCachedPayload
