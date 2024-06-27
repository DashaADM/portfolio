import { COLLECTION_SLUG } from '@/constants'
import { slug } from '@/fields/slug'
import { CollectionConfig } from 'payload'
import { pathname } from './pathname'
import { fullTitle } from '@/fields/fullTitle'

export const Pages: CollectionConfig = {
  slug: COLLECTION_SLUG.PAGES,
  admin: {
    useAsTitle: 'fullTitle',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    fullTitle,
    {
      name: 'content',
      type: 'richText',
    },
    slug(),
    pathname,
  ],
}
