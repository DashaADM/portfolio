import { About } from '@/components/blocks/about'
import { Blog } from '@/components/blocks/blog'
import { FAQ } from '@/components/blocks/faq'
import { Price } from '@/components/blocks/price'
import { PrimaryHeroBlock } from '@/components/blocks/primaryHero'
import config from '@/payload.config'

import { PageTemplate } from '@/components/layout/page-template'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'
import { COLLECTION_SLUG } from '@/constants'
import { getCachedPayload } from '@/plugins/cachedPayload'
import { ProjectsPreview } from '@/components/projects/ProjectsPreview'

const Page = async () => {
  const payload = await getPayloadHMR({
    config,
  })

  const cachedPayload = getCachedPayload(payload)

  const projects = await cachedPayload.find({ collection: COLLECTION_SLUG.PROJECTS, limit: 4 })
  const { docs: posts } = await cachedPayload.find({
    collection: COLLECTION_SLUG.POSTS,
    limit: 3,
    sort: 'publishedAt:desc',
  })
  return (
    <PageTemplate withHeaderPadding={false}>
      <PrimaryHeroBlock />
      <About id="about" />
      <ProjectsPreview data={projects.docs} />
      <Price />
      <FAQ id="faq" />
      <Blog posts={posts} />
    </PageTemplate>
  )
}

export default Page
