import type { ReactNode } from 'react'
import type { SerializedLexicalNode } from 'lexical'

export type HTMLConverter<T = SerializedLexicalNode> = {
  converter: ({
    childIndex,
    converters,
    node,
    parent,
  }: {
    childIndex: number
    converters: HTMLConverter[]
    node: T
    parent: SerializedLexicalNodeWithParent
    config?: SerializeConfig
  }) => ReactNode
  nodeTypes: string[]
}

export type SerializedLexicalNodeWithParent = SerializedLexicalNode & {
  parent?: SerializedLexicalNode
}

export interface SerializeConfig {
  disableContainer?: boolean
  disableStyles?: boolean
}
