import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'

export const pluginFormBuilder = formBuilderPlugin({
  fields: {
    payment: false,
    country: false,
    state: false,
  },
})
