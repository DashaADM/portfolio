import { PageTemplate } from '@/components/layout/page-template'
import { RichText } from '@/components/RichText'
import { Title } from '@/components/ui/title'
import { getCachedPayload } from '@/plugins/cachedPayload'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'
import config from '@/payload.config'
import { COLLECTION_SLUG } from '@/constants'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params

  const payload = await getPayloadHMR({ config })
  const cachedPayload = getCachedPayload(payload)

  const project = await cachedPayload.findOne({ collection: COLLECTION_SLUG.PROJECTS, value: slug })

  if (!project) {
    notFound()
  }

  return (
    <PageTemplate>
      <div className="my-28">
        <div className="container max-w-3xl text-center mb-28">
          <Title className="mb-8">{project?.title}</Title>
          <div className="flex gap-4 justify-center">
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
