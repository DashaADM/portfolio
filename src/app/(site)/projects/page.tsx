import React from 'react'
import { PageTemplate } from '@/components/layout/page-template'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@/payload.config'
import { getCachedPayload } from '@/plugins/cachedPayload'
import { COLLECTION_SLUG } from '@/constants'
import { AllProjects } from '@/components/projects/AllProjects'
import { BasicHero } from '@/components/blocks/BasicHero'

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
      {/* <TemplateHeroBlock /> */}
      <BasicHero
        prefix="Проекты"
        suffix="Эффективное использование ресурсов и адаптация решений под&nbsp;конкретные цели каждого клиента."
      >
        Практические решения для&nbsp;реальных&nbsp;задач
      </BasicHero>
      <AllProjects data={projects} />
    </PageTemplate>
  )
}

export default ProjectsPage
