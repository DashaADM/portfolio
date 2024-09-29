import type { MessageField } from '@payloadcms/plugin-form-builder/types'

import { RichText } from '@/components/RichText'
import React from 'react'

import { Width } from './Width'

export const Message: React.FC<MessageField> = ({ message }: { message: any }) => {
  return (
    <Width className="" width="100">
      <RichText content={message} />
    </Width>
  )
}
