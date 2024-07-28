import React from 'react'
import { Separator } from '../ui/separator'

interface Props {
  children?: React.ReactNode
  prefix?: React.ReactNode | string
  suffix?: React.ReactNode | string
}

export const BasicHero: React.FC<Props> = ({ children, prefix, suffix }) => {
  return (
    <div className="container mt-12 md:mt-24">
      <div className="max-w-full md:max-w-2xl">
        <h1>
          {prefix ? (
            typeof prefix === 'string' ? (
              <div className="text-lg text-zinc-600 dark:text-zinc-400 font-semibold">{prefix}</div>
            ) : (
              prefix
            )
          ) : null}
          <div className="my-4 scroll-m-20 tracking-tight text-3xl sm:text-4xl md:text-5xl font-normal">
            {children}
          </div>
        </h1>
        {suffix ? (
          typeof suffix === 'string' ? (
            <div className="text-md md:text-xl text-zinc-600 dark:text-zinc-400">{suffix}</div>
          ) : (
            suffix
          )
        ) : null}
      </div>

      <Separator className="my-8" />
    </div>
  )
}
