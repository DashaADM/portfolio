import { About } from '@/components/blocks/about'
import { Blog } from '@/components/blocks/blog'
import { FAQ } from '@/components/blocks/faq'
import { Price } from '@/components/blocks/price'
import { PrimaryHeroBlock } from '@/components/blocks/primaryHero'
import { ProjectsBlock } from '@/components/blocks/projectsBlock'
import config from '@/payload.config'

import { PageTemplate } from '@/components/layout/page-template'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'
import { COLLECTION_SLUG } from '@/constants'
import { getCachedPayload } from '@/plugins/CachedPayload'
import { ProjectsPreview } from '@/components/projects/ProjectsPreview'

const Page = async () => {
  const payload = await getPayloadHMR({
    config,
  })

  const cachedPayload = getCachedPayload(payload)

  const projects = await cachedPayload.find({ collection: COLLECTION_SLUG.PROJECTS, limit: 4 })

  return (
    <PageTemplate withHeaderPadding={false}>
      <PrimaryHeroBlock />
      <About />
      {/* <ProjectsBlock /> */}
      <ProjectsPreview data={projects.docs} />
      <Price />
      <FAQ />
      <Blog />
    </PageTemplate>
  )
}

export default Page
