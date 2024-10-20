'use client'
import type { TextField } from '@payloadcms/plugin-form-builder/types'
import { useFormContext } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

import { Error } from './Error'
import { Width } from './Width'
export const Number: React.FC<TextField> = ({
  name,
  defaultValue,
  label,
  required: requiredFromProps,
  width = 100,
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
        type="number"
        {...register(name, { required: requiredFromProps })}
      />
      {requiredFromProps && errors[name] && <Error />}
    </Width>
  )
}
