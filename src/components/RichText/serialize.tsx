import React, { Fragment, JSX } from 'react'
import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedUploadNode,
} from '@payloadcms/richtext-lexical'
import NextLink from 'next/link'

import {
  IS_BOLD,
  IS_CODE,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
  IS_UNDERLINE,
} from './nodeFormat'
import { Container } from './components/Container'
import { Separator } from '@/components/ui/separator'
import { Media } from '@/payload-types'
import { cn } from '@/lib/utils'
import { Title } from './components/Title'
import NextImage from 'next/image'
import { Checkbox } from '@/components/ui/checkbox'
import { SerializedListItemNode, SerializedListNode } from '@lexical/list'
import { Image } from './components/Image'

export type NodeTypes = DefaultNodeTypes | SerializedBlockNode

type Props = {
  nodes: NodeTypes[]
  config?: SerializeConfig
}

export type SerializeConfig = {
  enableGutter?: boolean
  enableMargin?: boolean
  containerSize?: 'default' | '3xl' | '4xl' | '5xl'
}

export function serializeLexical({
  nodes,
  config = { enableGutter: true, enableMargin: true, containerSize: '3xl' },
}: Props): JSX.Element {
  return (
    <Fragment>
      {nodes?.map((node, index): JSX.Element | null => {
        if (node == null) {
          return null
        }

        if (node.type === 'text') {
          let text = <React.Fragment key={index}>{node.text}</React.Fragment>
          if (node.format & IS_BOLD) {
            text = <strong key={index}>{text}</strong>
          }
          if (node.format & IS_ITALIC) {
            text = <em key={index}>{text}</em>
          }
          if (node.format & IS_STRIKETHROUGH) {
            text = (
              <span key={index} style={{ textDecoration: 'line-through' }}>
                {text}
              </span>
            )
          }
          if (node.format & IS_UNDERLINE) {
            text = (
              <span key={index} style={{ textDecoration: 'underline' }}>
                {text}
              </span>
            )
          }
          if (node.format & IS_CODE) {
            text = (
              <code key={index} className={'bg-gray-100 text-red-500 font-mono px-1 rounded'}>
                {node.text}
              </code>
            )
          }
          if (node.format & IS_SUBSCRIPT) {
            text = <sub key={index}>{text}</sub>
          }
          if (node.format & IS_SUPERSCRIPT) {
            text = <sup key={index}>{text}</sup>
          }

          return text
        }

        // NOTE: Hacky fix for
        // https://github.com/facebook/lexical/blob/d10c4e6e55261b2fdd7d1845aed46151d0f06a8c/packages/lexical-list/src/LexicalListItemNode.ts#L133
        // which does not return checked: false (only true - i.e. there is no prop for false)
        const serializedChildrenFn = (node: NodeTypes): JSX.Element | null => {
          if (node.children == null) {
            return null
          } else {
            if (node?.type === 'list' && node?.listType === 'check') {
              for (const item of node.children) {
                const itemNode = item as SerializedListItemNode
                if (!('checked' in item)) {
                  itemNode.checked = false
                }
              }
            }
            return serializeLexical({ nodes: node.children as NodeTypes[] })
          }
        }

        const serializedChildren = 'children' in node ? serializedChildrenFn(node) : ''

        if (node.type === 'block') {
          const block = node.fields

          const blockType = block?.blockType

          if (!block || !blockType) {
            return null
          }

          switch (blockType) {
            default:
              return null
          }
        } else {
          switch (node.type) {
            case 'linebreak': {
              return <br key={index} />
            }
            case 'paragraph': {
              return (
                <Container config={config} key={index}>
                  <p
                    className={cn('leading-7 [&:not(:first-child)]:mt-6', {
                      'text-left': node.format === 'left',
                      'text-right': node.format === 'right',
                      'text-center': node.format === 'center',
                      'text-start': node.format === 'start',
                      'text-end': node.format === 'end',
                      'text-justify': node.format === 'justify',
                    })}
                  >
                    {serializedChildren}
                  </p>
                </Container>
              )
            }
            case 'heading': {
              return (
                <Container config={config} key={index} asChild={false}>
                  <Title node={node}>{serializedChildren}</Title>
                </Container>
              )
            }
            case 'list': {
              const Tag = node?.tag
              return (
                <Container config={config} key={index} asChild={false}>
                  <Tag
                    className={cn('list my-6 ml-6 [&>li]:mt-2', {
                      'list-disc': node?.listType === 'bullet',
                      'list-decimal': node?.listType === 'number',
                    })}
                  >
                    {serializedChildren}
                  </Tag>
                </Container>
              )
            }
            case 'listitem': {
              if (node?.checked != null) {
                return (
                  <li
                    aria-checked={node.checked ? 'true' : 'false'}
                    className={cn('flex items-center space-x-2', {
                      'line-through text-gray-500': node.checked,
                    })}
                    key={index}
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                    role="checkbox"
                    tabIndex={-1}
                    value={node?.value}
                  >
                    <Checkbox
                      checked={node.checked}
                      aria-disabled={true}
                      className="cursor-default"
                    />
                    <div>{serializedChildren}</div>
                  </li>
                )
              } else {
                return (
                  <li key={index} value={node?.value}>
                    {serializedChildren}
                  </li>
                )
              }
            }
            case 'quote': {
              return (
                <Container config={config} key={index}>
                  <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 my-4">
                    {serializedChildren}
                  </blockquote>
                </Container>
              )
            }
            case 'link': {
              const fields = node.fields

              const rel: string = fields.newTab ? ' rel="noopener noreferrer"' : ''

              let href = ''
              if (fields.linkType === 'custom') {
                href = fields.url
              } else {
                if (typeof fields.doc?.value === 'string') {
                  href = fields.doc?.value
                } else if (typeof fields.doc?.value?.pathname === 'string') {
                  href = fields.doc?.value?.pathname
                } else {
                  href = fields.doc?.value?.id ?? ''
                }
              }
              return (
                <NextLink
                  key={index}
                  href={href}
                  rel={rel}
                  target={node.fields.newTab ? '_blank' : undefined}
                  className="font-medium underline  hover:no-underline"
                >
                  {serializedChildren}
                </NextLink>
              )
            }
            case 'horizontalrule': {
              return (
                <Container config={config} key={index}>
                  <Separator />
                </Container>
              )
            }

            case 'upload': {
              const upload = node as SerializedUploadNode & { value: Media }
              if ((upload?.value?.mimeType ?? '').startsWith('image')) {
                return (
                  <Container
                    config={{ ...config, containerSize: '5xl' }}
                    key={index}
                    className="relative"
                    asChild={false}
                  >
                    <Image node={upload} />
                  </Container>
                )
              }
              return <p>Unsupported MIME type {upload.value.mimeType}</p>
            }

            default:
              return null
          }
        }
      })}
    </Fragment>
  )
}
