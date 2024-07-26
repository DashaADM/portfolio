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
    <section className="container pt-16 sm:pt-24">
      {typeof title === 'string' ? <Title order={2}>{title}</Title> : title}
      <div className="py- lg:py-14 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
        {data.map((project) => typeof project === 'object' && <ProjectCard data={project} />)}
      </div>
    </section>
  )
}
