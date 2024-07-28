import { Project } from '@/payload-types'
import React from 'react'
import { Title } from '../ui/title'
import { ProjectCard } from './ProjectCard'

interface ProjectsPreviewProps {
  data: Project[]
  title?: string | React.ReactNode
}

export const ProjectsPreview: React.FC<ProjectsPreviewProps> = ({
  title = 'Недавние проекты',
  data,
}) => {
  return (
    <section className="container my-16 md:my-32">
      {typeof title === 'string' ? <Title order={2}>{title}</Title> : title}
      <div className="my-8 md:my-12 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-16">
        {data.map(
          (project) =>
            typeof project === 'object' && <ProjectCard key={project?.id} data={project} />,
        )}
      </div>
    </section>
  )
}
