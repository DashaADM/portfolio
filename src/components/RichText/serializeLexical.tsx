import type { HTMLConverter, SerializeConfig, SerializedLexicalNodeWithParent } from './types'

import type { SerializedEditorState, SerializedLexicalNode } from 'lexical'
import { Fragment, type ReactNode } from 'react'
import { defaultHTMLConverters } from './defaultConverters'

export function serializeLexical(
  data?: SerializedEditorState,
  config?: SerializeConfig,
): ReactNode {
  const converters: HTMLConverter[] = defaultHTMLConverters

  if (data?.root?.children?.length) {
    return convertLexicalNodesToReactNode({
      converters,
      lexicalNodes: data?.root?.children,
      parent: data?.root,
      config: {
        ...config,
      },
    })
  }

  return ''
}

export function convertLexicalNodesToReactNode({
  converters,
  lexicalNodes,
  parent,
  config,
}: {
  converters: HTMLConverter[]
  lexicalNodes: SerializedLexicalNode[]
  parent: SerializedLexicalNodeWithParent
  config?: SerializeConfig
}): ReactNode {
  const unknownConverter = converters?.find((converter) =>
    converter?.nodeTypes?.includes('unknown'),
  )
  const htmlArray = lexicalNodes.map(
    (node, i): { lexicalNode: SerializedLexicalNode; reactNode: ReactNode } => {
      const converterForNode = converters.find((converter) =>
        converter.nodeTypes.includes(node.type),
      )
      if (!converterForNode) {
        if (unknownConverter) {
          return {
            lexicalNode: node,
            reactNode: unknownConverter.converter({
              childIndex: i,
              converters,
              node,
              parent,
            }),
          }
        }
        return { lexicalNode: node, reactNode: <span>unknown node</span> }
      }

      return {
        lexicalNode: node,
        reactNode: converterForNode.converter({
          childIndex: i,
          converters,
          node,
          parent,
          config,
        }),
      }
    },
  )

  return (
    <Fragment>
      {htmlArray.map(({ reactNode }, idx) => {
        return <Fragment key={idx}>{reactNode}</Fragment>
      })}
    </Fragment>
  )
}
