import { APIError, CollectionBeforeValidateHook, CollectionConfig } from 'payload'
import { getPlaiceholder } from 'plaiceholder'

export const generateBlurHash: CollectionBeforeValidateHook = async ({ data, operation, req }) => {
  if (operation === 'create' || operation === 'update') {
    try {
      const buffer = req?.file?.data

      if (buffer) {
        const { base64 } = await getPlaiceholder(buffer, { size: 32 })

        return {
          ...data,
          blurHash: base64,
        }
      }
    } catch (error) {
      throw new APIError('Failed to generate blur data url')
    }
  }
}

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: true,
  hooks: {
    beforeValidate: [generateBlurHash],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'blurHash',
      type: 'text',
      admin: {
        hidden: true,
      },
    },
  ],
}
