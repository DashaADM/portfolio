import { COLLECTION_SLUG } from '@/constants'
import { buildCachedPayload } from '@payload-enchants/cached-local-api'
import { revalidateTag, unstable_cache } from 'next/cache'

export const { cachedPayloadPlugin, getCachedPayload } = buildCachedPayload({
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
  ],
  // Log when revalidation runs or operation cache HIT / SKIP
  loggerDebug: true,
  // globals: [{ slug: 'header' }],
  revalidateTag,
  options: {},
  unstable_cache,
})
