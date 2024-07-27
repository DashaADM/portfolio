import { Form } from '@/payload-types'
import React from 'react'
import { Checkbox, Email, Number, Select, Text, Textarea } from './clientFields'
import { Grid, GridCol } from '@mantine/core'
import { Message } from './serverFields'

interface RenderFieldsProps {
  fields: Form['fields']
}

const fieldComponents = {
  message: Message,
  text: Text,
  email: Email,
  number: Number,
  select: Select,
  checkbox: Checkbox,
  textarea: Textarea,
}

export const RenderFields: React.FC<RenderFieldsProps> = ({ fields }) => {
  const hasFields = Array.isArray(fields) && fields.length > 0

  if (hasFields) {
    return (
      <Grid columns={100} gutter="md">
        {fields?.map((field) => {
          const { blockType } = field

          if (blockType && blockType in fieldComponents) {
            const Field = blockType in fieldComponents ? fieldComponents[blockType] : (null as any)

            if (blockType in fieldComponents) {
              return (
                <GridCol
                  key={field.id}
                  span={'width' in field && field?.width ? field?.width : 100}
                >
                  <Field {...field} />
                </GridCol>
              )
            }
          }
        })}
      </Grid>
    )
  }
  return <div>...</div>
}
