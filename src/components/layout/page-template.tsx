import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

const pageVariants = cva('min-h-screen', {
  variants: {
    withHeaderPadding: {
      true: 'pt-[var(--header-height)]',
      false: '',
    },
  },
  defaultVariants: {
    withHeaderPadding: true,
  },
})

export interface PageTemplateProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pageVariants> {
  asChild?: boolean
}

const PageTemplate = React.forwardRef<HTMLDivElement, PageTemplateProps>(
  ({ className, withHeaderPadding, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp className={cn(pageVariants({ withHeaderPadding, className }))} ref={ref} {...props} />
    )
  },
)

PageTemplate.displayName = 'PageTemplate'

export { PageTemplate, pageVariants }
