import type { FieldHook } from 'payload'
import format from 'standard-slugify'

export const formatSlug =
  (source: string): FieldHook =>
  ({ operation, value, originalDoc, data }) => {
    if (value === '/') {
      return value
    }

    //slug manually entered; format it.
    if (typeof value === 'string' && value?.length > 0) {
      return format(value)
    }

    if (operation === 'create' || operation === 'update') {
      const sourceData = data?.[source] || originalDoc?.[source]

      if (sourceData && typeof sourceData === 'string') {
        return format(sourceData)
      }
    }

    return value
  }
