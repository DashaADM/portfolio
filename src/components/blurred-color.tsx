import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'

const blurredColorVariants = cva('absolute', {
  variants: {
    c: {
      indigo: 'bg-indigo-300',
      blue: 'bg-blue-500',
      violet: 'bg-violet-500',
    },
  },
  defaultVariants: {
    c: 'indigo',
  },
})

export interface BlurredColorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof blurredColorVariants> {}

const BlurredColor = React.forwardRef<HTMLDivElement, BlurredColorProps>(
  ({ className, c, ...props }, ref) => {
    return <div className={cn(blurredColorVariants({ c, className }))} ref={ref} {...props} />
  },
)

BlurredColor.displayName = 'BlurredColor'

export { BlurredColor, blurredColorVariants }
