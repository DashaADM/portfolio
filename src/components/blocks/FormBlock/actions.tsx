'use server'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { COLLECTION_SLUG } from '@/constants'

export const submitForm = async (formId: string, data: any) => {
  const payload = await getPayloadHMR({ config })

  try {
    const response = await payload.create({
      collection: COLLECTION_SLUG.FORM_SUBMISSIONS,
      data: {
        form: formId,
        submissionData: data,
      },
    })

    if (response.id) {
      return {
        success: true,
      }
    } else {
      return {
        success: false,
      }
    }
  } catch (error) {
    console.error(error)

    return {
      success: false,
    }
  }
}
