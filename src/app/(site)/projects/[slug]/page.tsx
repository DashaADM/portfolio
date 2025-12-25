import { PageTemplate } from '@/components/layout/page-template'
import { RichText } from '@/components/RichText'
import { getCachedPayload } from '@/plugins/cachedPayload'
import React from 'react'
import config from '@/payload.config'
import { COLLECTION_SLUG } from '@/constants'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { getPayload } from 'payload'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = await params

  const payload = await getPayload({ config })
  const cachedPayload = getCachedPayload(payload)

  const project = await cachedPayload.findOne({ collection: COLLECTION_SLUG.PROJECTS, value: slug })

  if (!project) {
    notFound()
  }

  return (
    <PageTemplate>
      <div className="my-32">
        <div className="container max-w-3xl text-center mb-24">
          {/* <Title order={4} className="mb-4">
            {project?.shortDescription}
          </Title> */}
          <h1 className="mb-4">
            <div className="text-md font-semibold mb-4">{project?.shortDescription}</div>
            <div className="scroll-m-20 tracking-tight text-3xl sm:text-4xl lg:text-5xl font-normal">
              {project?.title}
            </div>
          </h1>
          <p className="mb-8">{project?.longDescription}</p>
          <div className="flex gap-2 justify-center">
            {project?.services?.map(
              (tag) =>
                typeof tag?.value === 'object' && (
                  <Badge key={tag.value.id}>{tag?.value?.title}</Badge>
                ),
            )}
          </div>
        </div>
        <RichText content={project?.content} />
      </div>
    </PageTemplate>
  )
}

export default ProjectPage
