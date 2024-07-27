'use client'
import type { TextField } from '@payloadcms/plugin-form-builder/types'
import {
  useFormContext,
  type FieldErrorsImpl,
  type FieldValues,
  type UseFormRegister,
} from 'react-hook-form'

import { Label } from '@/components/ui/label'
import { Textarea as TextAreaComponent } from '@/components/ui/textarea'
import React from 'react'

import { Error } from './Error'
import { Width } from './Width'

export const Textarea: React.FC<
  TextField & {
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >
    register: UseFormRegister<FieldValues>
    rows?: number
  }
> = ({ name, defaultValue, label, required: requiredFromProps, rows = 3, width }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <Width width={width}>
      <Label htmlFor={name}>{label}</Label>

      <TextAreaComponent
        defaultValue={defaultValue}
        id={name}
        rows={rows}
        {...register(name, { required: requiredFromProps })}
      />

      {requiredFromProps && errors[name] && <Error />}
    </Width>
  )
}
