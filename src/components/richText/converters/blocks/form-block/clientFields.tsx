'use client'
import { NumberInput, TextInput } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'

import {
  Select as MantineSelect,
  Checkbox as MantineCheckbox,
  Textarea as MantineTextarea,
} from '@mantine/core'
import { serializeLexical } from '../../../serializeLexical'
import { useFormBlockContext } from './FormComponent'

interface FieldProps {
  name: string
  label?: string
  placeholder?: string
  description?: string
  options?: any
  form: UseFormReturnType<any>
}

export const Text = ({ name, label, placeholder, description }: FieldProps) => {
  const form = useFormBlockContext()

  return (
    <TextInput
      label={label}
      description={description}
      placeholder={placeholder}
      {...form.getInputProps(name)}
    />
  )
}

export const Email = ({ name, label, placeholder, description }: FieldProps) => {
  const form = useFormBlockContext()
  return (
    <TextInput
      label={label}
      description={description}
      placeholder={placeholder}
      {...form.getInputProps(name)}
    />
  )
}

export const Number = ({ name, label, placeholder, description }: FieldProps) => {
  const form = useFormBlockContext()
  return (
    <NumberInput
      label={label}
      placeholder={placeholder}
      description={description}
      {...form.getInputProps(name)}
    />
  )
}

export const Select = ({ name, label, placeholder, description, options }: FieldProps) => {
  const form = useFormBlockContext()
  return (
    <MantineSelect
      label={label}
      description={description}
      placeholder={placeholder}
      data={options}
      {...form.getInputProps(name)}
    />
  )
}

export const Checkbox = ({ name, label, description }: FieldProps) => {
  const form = useFormBlockContext()
  return <MantineCheckbox label={label} description={description} {...form.getInputProps(name)} />
}

export const Textarea = ({ name, label, placeholder, description }: FieldProps) => {
  const form = useFormBlockContext()
  return (
    <MantineTextarea
      label={label}
      placeholder={placeholder}
      description={description}
      {...form.getInputProps(name)}
    />
  )
}
