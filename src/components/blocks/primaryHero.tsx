import React from 'react'
import { AuroraBackground } from '../ui/aurora-background'
import { FlipWords } from '../ui/flip-words'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Title } from '../ui/title'

export const PrimaryHeroBlock = () => {
  return (
    <AuroraBackground className="flex flex-col justify-center h-[100vh]">
      <div
        // className="container h-[40rem] flex flex-col justify-center items-start"
        className="container"
      >
        <Title order={1} className="font-normal text-neutral-600 dark:text-neutral-400">
          Разработка сайтов{<br className="md:hidden" />} и интернет-магазинов, <br /> которые
          <FlipWords
            words={[
              `привлекают`,
              `продвигают`,
              `оптимизируют`,
              `информируют`,
              `продают`,
              `автоматизируют`,
            ]}
          />
        </Title>
        <div className="flex gap-2 items-center mt-10">
          <Button size="lg" asChild>
            <Link href="/contact">Связаться</Link>
          </Button>
          <Button variant="link" size="lg" asChild>
            <Link href="/projects">
              Смотреть проекты
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </AuroraBackground>
  )
}
