import { COLLECTION_SLUG } from '@/constants'
import { slug } from '@/fields/slug'
import { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: COLLECTION_SLUG.PROJECTS,
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'createdAt', 'updatedAt'],
  },
  access: {
    read: (args) => Boolean(args.req.user),
    create: (args) => Boolean(args.req.user),
    update: (args) => Boolean(args.req.user),
    delete: (args) => Boolean(args.req.user),
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slug(),
    {
      name: 'services',
      type: 'relationship',
      hasMany: true,
      relationTo: [COLLECTION_SLUG.SERVICES],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'technologies',
      type: 'relationship',
      hasMany: true,
      relationTo: [COLLECTION_SLUG.TECHNOLOGIES],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'features',
      type: 'relationship',
      hasMany: true,
      relationTo: [COLLECTION_SLUG.FEATURES],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tags',
      type: 'relationship',
      hasMany: true,
      relationTo: [COLLECTION_SLUG.TAGS],
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
      name: 'shortDescription',
      type: 'textarea',
    },
    {
      name: 'longDescription',
      type: 'textarea',
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
}
