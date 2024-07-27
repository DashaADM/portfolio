'use client'
import type { EmailField } from '@payloadcms/plugin-form-builder/types'
import { useFormContext } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { Width } from './Width'
import { Error } from './Error'

export const Email: React.FC<EmailField> = ({
  name,
  defaultValue,
  label,
  required: requiredFromProps,
  width,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <Width width={width}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        defaultValue={defaultValue}
        id={name}
        type="text"
        {...register(name, { pattern: /^\S[^\s@]*@\S+$/, required: requiredFromProps })}
      />

      {requiredFromProps && errors[name] && <Error />}
    </Width>
  )
}
