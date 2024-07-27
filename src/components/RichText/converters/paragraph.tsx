import type { HTMLConverter } from '../types'

import { convertLexicalNodesToReactNode } from '../serializeLexical'
import { SerializedParagraphNode } from '@payloadcms/richtext-lexical'

export const ParagraphHTMLConverter: HTMLConverter<SerializedParagraphNode> = {
  converter({ converters, node, parent, config }) {
    const childrenText = convertLexicalNodesToReactNode({
      converters,
      lexicalNodes: node.children,
      parent: {
        ...node,
        parent,
      },
    })
    /**
     * todo:
     * check alignment
     * "node.format"
     */
    return (
      <p
        className={`text-${node.format} ${
          !config.disableStyles && 'leading-7 [&:not(:first-child)]:mt-6'
        }`}
      >
        {childrenText}
      </p>
    )
  },
  nodeTypes: ['paragraph'],
}
