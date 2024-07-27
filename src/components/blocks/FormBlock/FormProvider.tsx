'use client'

import { Form as FormType } from '@/payload-types'
import React, { createContext, useContext, useRef } from 'react'
import { useForm, FormProvider as RHFormProvider } from 'react-hook-form'
import { buildInitialFormState } from './buildInitialFormState'
import { FormBlockStore, createFormBlockStore } from './formBlock.store'
import { useStore } from 'zustand'

export type FormBlockStoreApi = ReturnType<typeof createFormBlockStore>

export const FormBlockStoreContext = createContext<FormBlockStoreApi | undefined>(undefined)

export const FormProvider = ({
  form,
  children,
}: {
  form: FormType
  children?: React.ReactNode
}) => {
  const methods = useForm({ defaultValues: buildInitialFormState(form.fields as any) })

  const storeRef = useRef<FormBlockStoreApi>(undefined)

  if (!storeRef.current) {
    storeRef.current = createFormBlockStore()
  }

  return (
    <FormBlockStoreContext.Provider value={storeRef.current}>
      <RHFormProvider {...methods}>{children}</RHFormProvider>
    </FormBlockStoreContext.Provider>
  )
}

export const useFormBlockStore = <T,>(selector: (store: FormBlockStore) => T): T => {
  const formBlockStoreContext = useContext(FormBlockStoreContext)

  if (!formBlockStoreContext) {
    throw new Error(`useFormBlockStore must be used within a FormBlockStoreContext.Provider`)
  }

  return useStore(formBlockStoreContext, selector)
}
