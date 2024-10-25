'use client'
import React from 'react'
import { Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import Link from 'next/link'

export const MobileNav = () => {
  const menuItems = [
    { title: 'Проекты', href: '/projects' },
    { title: 'Блог', href: '/blog' },
    { title: 'Стоимость', href: '/#price' },
    { title: 'Услуги', href: '/#services' },
    { title: 'Контакты', href: '/contact' },
  ]

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="mr-4">
          <Menu className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
          <span className="sr-only">Открыть меню</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-full border-none bg-white dark:bg-zinc-900 pt-0"
        onOpenAutoFocus={(e) => e.preventDefault()}
        withCloseButton={false}
      >
        <div className="flex items-center justify-between pt-6">
          <SheetClose asChild>
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <X className="h-6 w-6" />
            </Button>
          </SheetClose>
        </div>
        <div className="flex flex-col h-full mt-10">
          <nav className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <SheetClose asChild key={item.href}>
                <a
                  href={item.href}
                  className="block px-2 py-3 text-lg text-zinc-900 dark:text-zinc-100 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                >
                  {item.title}
                </a>
              </SheetClose>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
