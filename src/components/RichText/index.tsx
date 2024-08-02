import React from 'react'

import { SerializeConfig, serializeLexical } from './serialize'

type Props = {
  className?: string
  content: Record<string, any>
} & SerializeConfig

export const RichText: React.FC<Props> = ({
  className,
  content,
  enableGutter = true,
  enableMargin = true,
  containerSize = '3xl',
}) => {
  if (!content) {
    return null
  }

  return (
    <div className={className}>
      {content &&
        !Array.isArray(content) &&
        typeof content === 'object' &&
        'root' in content &&
        serializeLexical({
          nodes: content?.root?.children,
          config: { enableGutter, enableMargin, containerSize },
        })}
    </div>
  )
}
