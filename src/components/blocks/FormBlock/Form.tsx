'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { toast } from 'sonner'
import { Form as FormType } from '@/payload-types'
import { Button } from '@/components/ui/button'
import { submitForm } from './actions'
import { redirect } from 'next/navigation'
import { RichText } from '@/components/RichText'

export const Form = ({ form, children }: { form: FormType; children: React.ReactNode }) => {
  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useFormContext()

  const onSubmit = (data: any) => {
    return new Promise(async (resolve, reject) => {
      const dataToSend = Object.entries(data).map(([name, value]) => ({
        field: name,
        value,
      }))

      const result = await submitForm(form.id, dataToSend)

      console.log(result)

      if (result.success) {
        reset()
        if (form.confirmationType === 'message') {
          toast.success(<RichText content={form.confirmationMessage} />)
        } else {
          redirect(form?.redirect?.url)
        }
        resolve(result) // Resolve the promise with the result
      } else {
        toast.error('There was an error submitting your form...')
        reject(result) // Reject the promise with the result
      }
    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {children}
      <Button type="submit" loading={isSubmitting}>
        {form.submitButtonLabel}
      </Button>
    </form>
  )
}
