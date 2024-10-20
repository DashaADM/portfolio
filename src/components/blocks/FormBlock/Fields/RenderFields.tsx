import { Form } from '@/payload-types'
import React from 'react'
import { fields as fieldComponents } from '../fields'

export const RenderFields: React.FC<{ fields: Form['fields'] }> = ({ fields }) => {
  return (
    <>
      {fields?.map((field, index) => {
        const Field: React.FC<any> = fieldComponents[field.blockType]

        if (Field) {
          return <Field key={`${field.blockType}-${index}`} {...field} />
        }

        return null
      })}
    </>
  )
}
