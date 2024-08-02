import React from 'react'
import { SerializeConfig } from '../serialize'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export const Container = ({
  children,
  config,
  asChild = true,
  className,
}: {
  children: React.ReactNode
  config: SerializeConfig
  asChild?: boolean
  className?: string
}) => {
  const Comp = asChild ? Slot : 'div'

  return config.enableGutter ? (
    <Comp
      className={cn(
        'container',
        {
          'max-w-3xl': config.containerSize === '3xl',
          'max-w-4xl': config.containerSize === '4xl',
          'max-w-5xl': config.containerSize === '5xl',
        },
        className,
      )}
    >
      {children}
    </Comp>
  ) : (
    children
  )
}
