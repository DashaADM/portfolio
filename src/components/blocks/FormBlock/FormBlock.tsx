import React from 'react'
import { FormProvider } from './FormProvider'
import { Form as FormType } from '@/payload-types'
import { RenderFields } from './Fields/RenderFields'
import { Form } from './Form'

interface FormProps {
  form: FormType
}

export const FormBlock: React.FC<FormProps> = ({ form }) => {
  return (
    <FormProvider form={form}>
      <Form form={form}>
        <RenderFields fields={form.fields} />
      </Form>
    </FormProvider>
  )
}
