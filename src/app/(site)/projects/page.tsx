import { TemplateHeroBlock } from '@/components/blocks/templateHeroBlock'

import React, { useState } from 'react'
import { PageTemplate } from '@/components/layout/page-template'
import { ProjectsBlock } from '@/components/blocks/projectsBlock'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@/payload.config'
import { getCachedPayload } from '@/plugins/CachedPayload'
import { COLLECTION_SLUG } from '@/constants'
import { AllProjects } from '@/components/projects/AllProjects'

const features = [
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    tags: [`design`, `development`, `else`],
    picture: {
      src: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: `image description`,
    },
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    tags: [`design`, `development`, `else`],
    picture: {
      src: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: `image description`,
    },
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    tags: [`design`, `development`, `else`],
    picture: {
      src: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: `image description`,
    },
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    tags: [`design`, `development`, `else`],
    picture: {
      src: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: `image description`,
    },
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    tags: [`design`, `development`, `else`],
    picture: {
      src: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: `image description`,
    },
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    tags: [`design`, `development`, `else`],
    picture: {
      src: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: `image description`,
    },
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    tags: [`design`, `development`, `else`],
    picture: {
      src: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: `image description`,
    },
  },
]

const ProjectsPage = async ({ searchParams: { page = 1 } }: { searchParams: { page: number } }) => {
  const payload = await getPayloadHMR({
    config,
  })

  const cachedPayload = getCachedPayload(payload)

  const projects = await cachedPayload.find({ collection: COLLECTION_SLUG.PROJECTS, page })

  console.log(projects)

  // const postBySlug = await cachedPayload.findOne({ collection: 'posts', value: 'home', depth: 2 });

  return (
    <PageTemplate>
      <TemplateHeroBlock />
      <AllProjects data={projects} />
    </PageTemplate>
  )
}

export default ProjectsPage
