'use client'
import type { TextField } from '@payloadcms/plugin-form-builder/types'
import {
  useFormContext,
  type FieldErrorsImpl,
  type FieldValues,
  type UseFormRegister,
} from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

import { Error } from './Error'
import { Width } from './Width'

export const Text: React.FC<TextField> = ({
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
        {...register(name, { required: requiredFromProps })}
      />
      {requiredFromProps && errors[name] && <Error />}
    </Width>
  )
}
