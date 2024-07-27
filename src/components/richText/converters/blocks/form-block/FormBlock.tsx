import 'server-only'
import { Container } from '@/modules/common/components/Container'
import { FormBlock as FormBlockType } from '@/payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { SerializedBlockNode } from '@payloadcms/richtext-lexical'
import React from 'react'
import config from '@/payload.config'
import { getCachedPayload } from '@/plugins/cached-payload'
import { getInitialValues } from './getInitialValues'
import { serializeLexical } from '../../../serializeLexical'
import { FormComponent } from './FormComponent'
import { RenderFields } from './RenderFields'

export const FormBlock: React.FC<{
  node: SerializedBlockNode & { fields: FormBlockType }
}> = async ({ node }) => {
  const { fields } = node
  let form

  if (typeof fields.form === 'object') {
    form = fields.form
  } else if (typeof fields.form === 'string') {
    const payload = await getPayloadHMR({ config })
    const cachedPayload = getCachedPayload(payload)

    form = await cachedPayload.findByID({
      collection: 'forms',
      id: fields.form,
    })
  }

  if (form && form.fields && form.fields.length > 0) {
    let confirmationMessage

    if (form.confirmationType === 'message' && form.confirmationMessage) {
      confirmationMessage = await serializeLexical(form.confirmationMessage, {
        disableContainer: true,
        disableStyles: true,
      })
    }

    const initialValues = getInitialValues(form)

    return (
      <Container size={fields.containerSize || 'app'}>
        <FormComponent form={form} initialValues={initialValues}>
          <RenderFields fields={form.fields} />
        </FormComponent>
      </Container>
    )
  } else {
    return null
  }
}
