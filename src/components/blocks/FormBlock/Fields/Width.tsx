import { cn } from '@/lib/utils'
import * as React from 'react'

export const Width: React.FC<{
  children: React.ReactNode
  className?: string
  width?: number | string
}> = ({ children, className, width }) => {
  const getColumnSpan = (width: number | string): number => {
    const percentage = typeof width === 'string' ? parseFloat(width) : width
    return Math.max(1, Math.min(12, Math.round((percentage / 100) * 12)))
  }

  const columnSpan = width ? getColumnSpan(width) : 12

  return (
    <div className={className} style={{ gridColumn: `span ${columnSpan} / span ${columnSpan}` }}>
      {children}
    </div>
  )
}
