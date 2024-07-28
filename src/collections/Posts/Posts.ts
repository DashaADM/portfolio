import { COLLECTION_SLUG } from '@/constants'
import { slug } from '@/fields/slug'
import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: COLLECTION_SLUG.POSTS,
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'createdAt', 'updatedAt'],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
    },
    maxPerDoc: 100,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    slug(),
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: [COLLECTION_SLUG.TAGS],
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: COLLECTION_SLUG.MEDIA,
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
}
