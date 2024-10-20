'use client'
import { CheckboxField } from '@payloadcms/plugin-form-builder/types'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Width } from './Width'
import { Checkbox as CheckboxUI } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Error } from './Error'

export const Checkbox: React.FC<CheckboxField> = ({
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
      <div className="flex items-center gap-2">
        <CheckboxUI
          defaultChecked={defaultValue}
          id={name}
          {...register(name, { required: requiredFromProps })}
        />
        <Label htmlFor={name}>{label}</Label>
      </div>
      {requiredFromProps && errors[name] && <Error />}
    </Width>
  )
}
