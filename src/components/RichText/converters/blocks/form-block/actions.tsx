'use server'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@/payload.config'

interface FormState {
  success: boolean
}

export const submitForm = async (id: string, data: any): Promise<FormState> => {
  try {
    const payload = await getPayloadHMR({ config })

    const result = await payload.create({
      collection: 'form-submissions',
      data: {
        form: id,
        submissionData: data,
      },
    })

    if (result.id) {
      return {
        success: true,
      }
    } else {
      return {
        success: false,
      }
    }
  } catch (error) {
    return {
      success: false,
    }
  }
}
