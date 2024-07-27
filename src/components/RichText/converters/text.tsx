import { NodeFormat } from '../nodeFormat'
import { HTMLConverter } from '../types'
import { SerializedTextNode } from 'lexical'
import { ReactElement } from 'react'

export const TextHTMLConverter: HTMLConverter<SerializedTextNode> = {
  converter({ node }) {
    const { text, format } = node

    const formatFunctions: { [key: number]: (child: ReactElement | string) => ReactElement } = {
      [NodeFormat.IS_BOLD]: (child) => <strong>{child}</strong>,
      [NodeFormat.IS_ITALIC]: (child) => <em>{child}</em>,
      [NodeFormat.IS_STRIKETHROUGH]: (child) => <del>{child}</del>,
      [NodeFormat.IS_UNDERLINE]: (child) => <u>{child}</u>,
      [NodeFormat.IS_CODE]: (child) => (
        <code className="bg-gray-100 text-red-500 font-mono px-1 rounded">{child}</code>
      ),
      [NodeFormat.IS_SUBSCRIPT]: (child) => <sub>{child}</sub>,
      [NodeFormat.IS_SUPERSCRIPT]: (child) => <sup>{child}</sup>,
    }

    const initialText: ReactElement = <>{text}</>

    const formattedText = Object.entries(formatFunctions).reduce(
      (formattedText, [key, formatter]) => {
        return format & Number(key) ? formatter(formattedText) : formattedText
      },
      initialText,
    )

    return <>{formattedText}</>
  },
  nodeTypes: ['text'],
}
