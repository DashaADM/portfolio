import { PageTemplate } from '@/components/layout/page-template'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'
import React from 'react'

const page = (props) => {
  props.children
  const { children } = props

  return (
    <PageTemplate withHeaderPadding={false}>
      <AuroraBackground>
        <div className="h-[40rem] flex justify-center items-center px-4">
          <div className="text-5xl tracking-tight mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            Build
            <FlipWords words={[`Testing`, `Words`, `More`]} /> <br />
            websites with Aceternity UI
          </div>
        </div>
      </AuroraBackground>
    </PageTemplate>
  )
}

export default page
