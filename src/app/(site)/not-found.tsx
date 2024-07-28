'use client'
import { PageTemplate } from '@/components/layout/page-template'
import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/title'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <PageTemplate>
      <div>
        <main className="grid min-h-full place-items-center px-6 pt-32 sm:pt-48 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">404</p>
            <Title order={1}>Страница не найдена</Title>
            <p className="mt-6 text-base leading-7 text-zinc-400">
              Ой, кажется, вы куда-то не туда нажали :(
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-2">
              <Button size="lg" variant="primary" asChild>
                <Link href="/">Вернуться на главную</Link>
              </Button>
              <Button variant="link" size="lg" asChild>
                <Link href="/contact">
                  Связаться
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </PageTemplate>
  )
}

export default NotFoundPage
