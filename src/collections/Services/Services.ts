import { COLLECTION_SLUG } from '@/constants'
import { slug } from '@/fields/slug'
import { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: COLLECTION_SLUG.SERVICES,
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'createdAt', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slug(),
  ],
}
