import React from 'react'
import { Title as BaseTitle } from '@/components/ui/title'
import { cn } from '@/lib/utils'
import { SerializedHeadingNode } from '@payloadcms/richtext-lexical'

type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6

export const Title = ({
  node,
  children,
}: {
  node: SerializedHeadingNode
  children: React.ReactNode
}) => {
  const order = {
    h1: 1,
    h2: 2,
    h3: 3,
    h4: 4,
    h5: 5,
    h6: 6,
  }[node.tag || 'h1'] as TitleOrder

  return (
    <BaseTitle
      order={order}
      className={cn({
        'text-left': node.format === 'left',
        'text-right': node.format === 'right',
        'text-center': node.format === 'center',
        'text-start': node.format === 'start',
        'text-end': node.format === 'end',
        'text-justify': node.format === 'justify',
        'mt-0.5em mb-1.5em ': order === 1,
        'mt-0.5em mb-1.4em': order === 2,
        'mt-0.5em mb-1.3em': order === 3,
        'mt-0.5em mb-1.2em': order === 4,
        'mt-0.5em mb-1.1em': order === 5,
        'mt-0.5em mb-1em': order === 6,
      })}
    >
      {children}
    </BaseTitle>
  )
}
