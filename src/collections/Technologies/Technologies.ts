import { COLLECTION_SLUG } from '@/constants'
import { slug } from '@/fields/slug'
import { CollectionConfig } from 'payload'

export const Technologies: CollectionConfig = {
  slug: COLLECTION_SLUG.TECHNOLOGIES,
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
