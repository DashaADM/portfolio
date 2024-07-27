'use client'
import React, { useState } from 'react'
import { Form as FormType } from '@/payload-types'
import { createFormContext } from '@mantine/form'
import { useRouter } from 'next/navigation'
import { useValidate } from './useValidate'
import { InitialValues } from './getInitialValues'
import { submitForm } from './actions'
import { notifications } from '@mantine/notifications'
import { Box, Button } from '@mantine/core'

export const [FormBlockProvider, useFormBlockContext, useFormBlock] = createFormContext()

interface FormProviderProps {
  form: FormType
  initialValues: InitialValues
  confirmationMessage?: React.ReactNode | undefined
  children: React.ReactNode
}

export const FormComponent = ({
  form,
  initialValues,
  confirmationMessage,
  children,
}: FormProviderProps) => {
  const [isPending, setIsPending] = useState(false)
  const router = useRouter()
  const validate = useValidate(form)

  const mantineForm = useFormBlock({
    initialValues,
    validate,
  })

  const handleSubmit = async (values: any) => {
    setIsPending(true)

    const dataToSend = Object.entries(values).map(([name, value]) => ({
      field: name,
      value,
    }))

    try {
      const response = await submitForm(form.id, dataToSend)

      if (response.success) {
        if (form.confirmationType === 'redirect' && typeof form.redirect === 'string') {
          router.push(form.redirect)
        } else if (form.confirmationType === 'message') {
          notifications.show({
            title: 'Успешно',
            message: confirmationMessage || 'Спасибо за ваше сообщение.',
            color: 'blue',
          })
        }
        mantineForm.reset()
      } else {
        notifications.show({
          title: 'Ошибка',
          message: 'Пожалуйста, попробуйте еще раз.',
          color: 'red',
        })
      }
    } catch (error) {
      notifications.show({
        title: 'Ошибка',
        message: 'Пожалуйста, попробуйте еще раз.',
        color: 'red',
      })
    }

    setIsPending(false)
  }

  return (
    <FormBlockProvider form={mantineForm}>
      <Box component="form" onSubmit={mantineForm.onSubmit((values) => handleSubmit(values))}>
        {children}
        <Button type="submit" loading={isPending} variant="default" mt="xl" ml="auto">
          {form.submitButtonLabel}
        </Button>
      </Box>
    </FormBlockProvider>
  )
}
