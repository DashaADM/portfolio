import React from 'react'
import { PageTemplate } from '@/components/layout/page-template'
import config from '@/payload.config'
import { getCachedPayload } from '@/plugins/cachedPayload'
import { COLLECTION_SLUG } from '@/constants'
import { AllProjects } from '@/components/projects/AllProjects'
import { BasicHero } from '@/components/blocks/BasicHero'
import { getPayload } from 'payload'

const ProjectsPage = async ({ searchParams }: { searchParams: Promise<{ page: number }> }) => {
  const { page = 1 } = await searchParams
  const payload = await getPayload({
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
