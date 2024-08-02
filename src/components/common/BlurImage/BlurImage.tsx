'use client'
import React, { useState } from 'react'
import NextImage, { ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

export const BlurImage = ({
  className,
  ...props
}: Omit<ImageProps, 'placeholder' | 'onLoad' | 'draggable'>) => {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <div className="overflow-hidden">
      <NextImage
        {...props}
        placeholder={props.blurDataURL ? 'blur' : 'empty'}
        className={cn(
          'select-node',
          {
            'duration-700 ease-in-out': props.blurDataURL,
            'blur-2xl scale-110': isLoading,
            'blur-0 scale-100': !isLoading,
          },
          className,
        )}
        onLoad={() => setIsLoading(false)}
        draggable={false}
      />
    </div>
  )
}
