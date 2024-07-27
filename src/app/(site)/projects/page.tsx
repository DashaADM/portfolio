import { TemplateHeroBlock } from '@/components/blocks/templateHeroBlock'

import React from 'react'
import { PageTemplate } from '@/components/layout/page-template'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@/payload.config'
import { getCachedPayload } from '@/plugins/cachedPayload'
import { COLLECTION_SLUG } from '@/constants'
import { AllProjects } from '@/components/projects/AllProjects'

const ProjectsPage = async ({ searchParams: { page = 1 } }: { searchParams: { page: number } }) => {
  const payload = await getPayloadHMR({
    config,
  })

  const cachedPayload = getCachedPayload(payload)

  const projects = await cachedPayload.find({
    collection: COLLECTION_SLUG.PROJECTS,
    page,
    limit: 6,
  })

  return (
    <PageTemplate>
      <TemplateHeroBlock />
      <AllProjects data={projects} />
    </PageTemplate>
  )
}

export default ProjectsPage
