import type { HTMLConverter } from '../types'
import { SerializedBlockNode } from '@payloadcms/richtext-lexical'
import { FormBlock } from './blocks/form-block'
import { AccordionBlock as AccordionBlockType, FormBlock as FormBlockType } from '@/payload-types'
import { AccordionBlock } from './blocks/accordion-block'

function isAccordionBlock(
  node: SerializedBlockNode,
): node is SerializedBlockNode & { fields: AccordionBlockType } {
  return node.fields.blockType === 'accordion'
}

function isFormBlock(
  node: SerializedBlockNode,
): node is SerializedBlockNode & { fields: FormBlockType } {
  return node.fields.blockType === 'form'
}

export const BlockHtmlConverter: HTMLConverter<SerializedBlockNode> = {
  converter({ node }) {
    switch (node.fields.blockType) {
      case 'accordion':
        if (isAccordionBlock(node)) {
          return <AccordionBlock node={node} />
        }
      case 'form':
        if (isFormBlock(node)) {
          return <FormBlock node={node} />
        }
        break
      default:
        return <span>Unknown block type {node.fields.blockType}</span>
    }
  },
  nodeTypes: ['block'],
}
