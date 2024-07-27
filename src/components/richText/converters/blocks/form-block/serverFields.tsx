import { serializeLexical } from '../../../serializeLexical'

export const Message = async ({ message }: any) => {
  console.log('rendering Message')
  const serializedMessage = await serializeLexical(message || undefined, {
    disableContainer: true,
    disableStyles: true,
  })

  return serializedMessage
}
