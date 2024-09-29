import { Form } from '@/payload-types'
import React from 'react'
import { fields as fieldComponents } from '../fields'

export const RenderFields = ({ fields }: { fields: Form['fields'] }) => {
  return (
    fields &&
    fields?.map((field, index) => {
      const Field: React.FC<any> = fieldComponents[field.blockType]

      if (Field) {
        return (
          // <div key={index} className="mb-6 last:mb-0">
          <Field {...field} />
          // </div>
        )
      }

      return null
    })
  )
}
