import React from 'react'
import { AuroraBackground } from '../ui/aurora-background'
import { FlipWords } from '../ui/flip-words'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Title } from '../ui/title'

export const TemplateHeroBlock = () => {
  return (
    <AuroraBackground className="flex flex-col justify-center h-[70vh]">
      <div
        // className="container h-[40rem] flex flex-col justify-center items-start"
        className="container"
      >
        <Title order={4} className="text-indigo-600 dark:text-indigo-400">
          Проекты
        </Title>
        <Title order={1} className="my-6 text-zinc-600 dark:text-zinc-200">
          Практические решения {<br className="md:hidden" />}для реальных задач
        </Title>
        <p className="max-w-screen-md text-md md:text-xl text-zinc-600 dark:text-zinc-400">
          Эффективное использование ресурсов и адаптация решений под конкретные цели каждого
          клиента.
        </p>
      </div>
    </AuroraBackground>
  )
}
