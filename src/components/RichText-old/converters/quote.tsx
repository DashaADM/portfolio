import type { HTMLConverter } from '../types'

import { convertLexicalNodesToReactNode } from '../serializeLexical'
import { SerializedQuoteNode } from '@lexical/rich-text'

export const QuoteHTMLConverter: HTMLConverter<SerializedQuoteNode> = {
  converter({ converters, node, parent }) {
    const childrenText = convertLexicalNodesToReactNode({
      converters,
      lexicalNodes: node.children,
      parent: {
        ...node,
        parent,
      },
    })

    return <blockquote>{childrenText}</blockquote>
  },
  nodeTypes: ['quote'],
}
