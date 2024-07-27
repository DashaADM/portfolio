import { Form } from '@/payload-types'

export interface InitialValues {
  [key: string]: string | boolean
}

export const getInitialValues = (form: Form): InitialValues => {
  let initialValues: InitialValues = {}

  form?.fields &&
    form.fields.forEach((field) => {
      if ('name' in field) {
        if (field.blockType === 'checkbox') {
          initialValues[field.name] = field.defaultValue || false
        } else {
          initialValues[field.name] =
            'defaultValue' in field && typeof field.defaultValue === 'string'
              ? field.defaultValue
              : ''
        }
      }
    })

  return initialValues
}
