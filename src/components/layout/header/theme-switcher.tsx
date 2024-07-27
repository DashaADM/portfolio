'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'

export const ThemeSwitcher = () => {
  const { setTheme, resolvedTheme } = useTheme()

  const handleThemeChange = () => {
    setTheme((c) => (resolvedTheme === 'dark' ? 'light' : 'dark'))
  }
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleThemeChange}
      className="border"
      aria-label="Поменять цвет темы"
    >
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="dark:hidden" />
    </Button>
  )
}
