import type { HTMLConverter } from '../types'
import { SerializedBlockNode } from '@payloadcms/richtext-lexical'

export const BlockHtmlConverter: HTMLConverter<SerializedBlockNode> = {
  converter({ node }) {
    switch (node.fields.blockType) {
      default:
        return <span>Unknown block type {node.fields.blockType}</span>
    }
  },
  nodeTypes: ['block'],
}
