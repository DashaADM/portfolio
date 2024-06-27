import { Field, FieldHook } from 'payload'

const syncPathname: FieldHook = ({ siblingData, originalDoc, operation }) => {
  if (
    operation === 'create' ||
    (operation === 'update' &&
      originalDoc?.breadcrumbs?.at(-1)?.url !== siblingData?.breadcrumbs?.at(-1)?.url)
  ) {
    return siblingData?.breadcrumbs?.at(-1)?.url
  }
}

export const pathname: Field = {
  name: 'pathname',
  type: 'text',
  unique: true,
  index: true,
  hooks: {
    beforeChange: [syncPathname],
  },
  admin: {
    readOnly: true,
    position: 'sidebar',
  },
}
