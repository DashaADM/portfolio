import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'

const titleVariants = cva('font-semibold leading-7', {
  variants: {
    order: {
      1: 'scroll-m-20 tracking-tight text-3xl sm:text-4xl lg:text-5xl font-normal text-zinc-600 dark:text-zinc-200',
      2: 'scroll-m-20 text-3xl lg:text-4-xl',
      3: 'text-2xl lg:text-3-xl',
      4: 'text-md font-semibold',
      5: 'text-md font-semibold',
      6: 'text-md font-semibold',
    },
  },
  defaultVariants: {
    order: 1,
  },
})

export interface TitleProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof titleVariants> {
  asChild?: boolean
}

const Title = React.forwardRef<HTMLElement, TitleProps>(
  ({ className, order = 1, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : `h${order}`
    return <Comp className={cn(titleVariants({ order, className }))} ref={ref} {...props} />
  },
)

Title.displayName = 'Title'

export { Title, titleVariants }
