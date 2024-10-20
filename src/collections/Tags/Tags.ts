import { COLLECTION_SLUG } from '@/constants'
import { slug } from '@/fields/slug'
import { CollectionConfig } from 'payload'

export const Tags: CollectionConfig = {
  slug: COLLECTION_SLUG.TAGS,
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'createdAt', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    slug('title'),
  ],
}
