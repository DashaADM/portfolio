import type { HTMLConverter } from '../types'

import { convertLexicalNodesToReactNode } from '../serializeLexical'
import { SerializedHeadingNode } from '@lexical/rich-text'
import clsx from 'clsx'
import classes from './heading.module.css'
import { Title } from '@/components/ui/title'

type TitleOrder = 1 | 2 | 3 | 4

export const HeadingHTMLConverter: HTMLConverter<SerializedHeadingNode> = {
  converter({ converters, node, parent }) {
    const childrenText = convertLexicalNodesToReactNode({
      converters,
      lexicalNodes: node.children,
      parent: {
        ...node,
        parent,
      },
    })

    const order = {
      h1: 1,
      h2: 2,
      h3: 3,
      h4: 4,
    }[node.tag || 'h1'] as TitleOrder

    console.log(`text-${node.format}`)

    return (
      <div>
        <Title order={order} className={`text-${node.format}`}>
          {childrenText}
        </Title>
      </div>
    )
  },
  nodeTypes: ['heading'],
}
