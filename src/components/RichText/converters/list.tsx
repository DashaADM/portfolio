import type { HTMLConverter } from '../types'

import { convertLexicalNodesToReactNode } from '../serializeLexical'
import { SerializedListItemNode, SerializedListNode } from '@lexical/list'

export const ListHTMLConverter: HTMLConverter<SerializedListNode> = {
  converter: ({ converters, node, parent }) => {
    const childrenText = convertLexicalNodesToReactNode({
      converters,
      lexicalNodes: node.children,
      parent: {
        ...node,
        parent,
      },
    })

    switch (node?.tag) {
      case 'ol':
        return (
          <div>
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{childrenText}</ol>
          </div>
        )
      case 'ul':
        return (
          <div>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{childrenText}</ul>
          </div>
        )
      default:
        return <span>unsupported list type {node?.tag}</span>
    }
  },
  nodeTypes: ['list'],
}

export const ListItemHTMLConverter: HTMLConverter<SerializedListItemNode> = {
  converter: ({ converters, node, parent }) => {
    const childrenText = convertLexicalNodesToReactNode({
      converters,
      lexicalNodes: node.children,
      parent: {
        ...node,
        parent,
      },
    })

    return <li>{childrenText}</li>
  },
  nodeTypes: ['listitem'],
}
