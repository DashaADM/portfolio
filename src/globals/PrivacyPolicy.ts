import { GLOBAL_SLUG } from '@/constants'
import { GlobalConfig } from 'payload'

export const PrivacyPolicy: GlobalConfig = {
  slug: GLOBAL_SLUG.PRIVACY_POLICY,
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
}
