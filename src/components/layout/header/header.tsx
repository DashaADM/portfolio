import { Button } from '@/components/ui/button'
import React from 'react'
import { ThemeSwitcher } from './theme-switcher'
import { Logo } from '@/components/logo'
import { DesktopNav } from './desktop-nav'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="z-50 fixed top-0 left-0 w-full bg-background border-b h-[var(--header-height)] flex">
      <nav className="mx-auto flex container items-center justify-between" aria-label="Global">
        <div className="flex flex-1">
          <Link href="/" legacyBehavior passHref={true}>
            <Button variant="transparent" className="px-0">
              <Logo />
            </Button>
          </Link>
        </div>

        <div className="hidden lg:flex lg:w-3/4 justify-center">
          <DesktopNav />
        </div>
        <div className="flex lg:flex-1 lg:justify-end">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  )
}
