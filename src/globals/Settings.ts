import { COLLECTION_SLUG, GLOBAL_SLUG } from '@/constants'
import { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: GLOBAL_SLUG.SETTINGS,
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'general',
          label: 'General',
          fields: [],
        },
        {
          name: 'navigation',
          label: 'Navigation',
          fields: [
            {
              name: 'links',
              type: 'array',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                },
                {
                  name: 'isPage',
                  type: 'checkbox',
                  defaultValue: true,
                },
                {
                  name: 'page',
                  type: 'relationship',
                  relationTo: [COLLECTION_SLUG.PAGES as any, COLLECTION_SLUG.MEDIA],
                  admin: {
                    condition: (_, siblingData) => siblingData?.isPage,
                  },
                },
                {
                  name: 'url',
                  type: 'text',
                  admin: {
                    condition: (_, siblingData) => !siblingData?.isPage,
                  },
                },
              ],
            },
          ],
        },
        {
          name: 'forms',
          label: 'Forms',
          fields: [
            {
              name: 'footerForm',
              label: 'Footer Form',
              type: 'relationship',
              relationTo: [COLLECTION_SLUG.FORMS],
            },
            {
              name: 'contactForm',
              label: 'Contact Form',
              type: 'relationship',
              relationTo: [COLLECTION_SLUG.FORMS],
            },
          ],
        },
      ],
    },
  ],
}
