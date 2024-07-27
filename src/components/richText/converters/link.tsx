import type { HTMLConverter } from '../types'

import { convertLexicalNodesToReactNode } from '../serializeLexical'
import NextLink from 'next/link'

import { SerializedLinkNode } from '@payloadcms/richtext-lexical'

export const LinkHTMLConverter: HTMLConverter<SerializedLinkNode> = {
  converter({ converters, node, parent }) {
    const childrenText = convertLexicalNodesToReactNode({
      converters,
      lexicalNodes: node.children,
      parent: {
        ...node,
        parent,
      },
    })

    const rel: string = node.fields.newTab ? ' rel="noopener noreferrer"' : ''

    let href = ''
    if (node.fields.linkType === 'custom') {
      href = node.fields.url
    } else {
      if (typeof node.fields.doc?.value === 'string') {
        href = node.fields.doc?.value
      } else if (typeof node.fields.doc?.value?.pathname === 'string') {
        href = node.fields.doc?.value?.pathname
      } else {
        href = node.fields.doc?.value?.id ?? ''
      }
    }

    return (
      <NextLink href={href} legacyBehavior passHref>
        <a
          rel={rel}
          target={node.fields.newTab ? '_blank' : undefined}
          className="font-medium underline  hover:no-underline"
        >
          {childrenText}
        </a>
      </NextLink>
    )
  },
  nodeTypes: ['link', 'autolink'],
}
