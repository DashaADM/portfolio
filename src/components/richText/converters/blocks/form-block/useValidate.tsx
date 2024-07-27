import { Form } from '@/payload-types'
import { useMemo } from 'react'

export interface Validate {
  [key: string]: (value: string | boolean) => string | null
}

export const useValidate = (form: Form): Validate => {
  const validate = useMemo(() => {
    let validations: Validate = {}

    if (form?.fields) {
      form.fields.forEach((field) => {
        if ('required' in field && field.required) {
          validations[field.name] = (value) => {
            if (typeof value === 'string' && value.trim().length === 0) {
              return 'Обязательно'
            }
            if (typeof value === 'boolean' && !value) {
              return 'Обязательно'
            }
            return null
          }
        }

        if (field.blockType === 'email' && field.required) {
          validations[field.name] = (value) => {
            if (
              typeof value === 'string' &&
              !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
            ) {
              return 'Email недействителен'
            }
            return null
          }
        }
      })
    }

    return validations
  }, [form.fields])

  return validate
}
