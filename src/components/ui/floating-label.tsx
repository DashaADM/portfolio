import React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'

interface FloatingLabelProps {
  children: React.ReactNode
  inputProps?: Partial<HTMLInputElement>
}

export const FloatingLabel: React.FC<FloatingLabelProps> = React.forwardRef<
  React.ComponentRef<any>,
  React.ComponentPropsWithoutRef<any>
>(({ children }, ref) => {
  return (
    <div className="relative" ref={ref as any}>
      <label
        data-floating={false}
        className="absolute transition-transform text-zinc-600/50 dark:text-zinc-400/50 text-s top-2 left-3 pointer-events-none data-[floating=true]:text-zinc-600 data-[floating=true]:text-xs data-[floating=true]:font-semibold data-[floating=true]:pt-1 data-[floating=true]:-translate-y-8 data-[floating=true]:-translate-x-3"
      >
        FloatingLabel
      </label>
      {children}
    </div>
  )
})
