import { createStore } from 'zustand'

export type FormBlockState = {
  isPending: boolean
}

export type FormBlockActions = {
  setIsPending: (value: boolean) => void
}

export type FormBlockStore = FormBlockState & FormBlockActions

export const defaultInitState: FormBlockState = {
  isPending: false,
}

/**
 * this is unused, in favor of `formState.isSubmitting` from react-hook-form
 */
export const createFormBlockStore = (initState: FormBlockState = defaultInitState) => {
  return createStore<FormBlockStore>()((set) => ({
    ...initState,
    setIsPending: (value) => set({ isPending: value }),
  }))
}
