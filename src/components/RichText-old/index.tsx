import { cn } from '@/lib/utils'
import React from 'react'
import { serializeLexical } from './serializeLexical'
import { SerializedEditorState } from 'lexical'

type Props = {
  className?: string
  content: SerializedEditorState
  enableGutter?: boolean
  enableProse?: boolean
}

export const RichText: React.FC<Props> = ({
  className,
  content,
  enableGutter = true,
  enableProse = true,
}) => {
  if (!content) {
    return null
  }

  return (
    <div
      className={cn(
        {
          'container max-w-3xl': enableGutter,
          'max-w-none': !enableGutter,
          'max-auto prose dark:prose-invert': enableProse,
        },
        className,
      )}
    >
      {content && serializeLexical(content)}
    </div>
  )
}
