import React from 'react'

export const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="py-1.5 px-3 bg-white text-zinc-600 border border-zinc-200 text-xs sm:text-sm rounded-xl dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-400">
      {children}
    </span>
  )
}
