import { Project } from '@/payload-types'
import { PaginatedDocs } from 'payload'
import React from 'react'
import { Title } from '../ui/title'
import { ProjectCard } from './ProjectCard'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination'
import Link from 'next/link'

interface AllProjectsProps {
  data: PaginatedDocs<Project>
}

export const AllProjects: React.FC<AllProjectsProps> = ({ data }) => {
  const paginationVisible = data.totalPages > 1

  return (
    <section className="container pt-16 sm:pt-24">
      <Title order={2}>Недавние проекты</Title>
      <div className="py- lg:py-14 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
        {data.docs.map((project) => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </div>
      {paginationVisible && (
        <Pagination>
          <PaginationContent>
            {data?.hasPrevPage && (
              <PaginationItem>
                <Link href={`/projects?page=${data.prevPage}`} legacyBehavior passHref>
                  <PaginationPrevious />
                </Link>
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink>{data.page}</PaginationLink>
            </PaginationItem>
            {data?.hasNextPage && (
              <PaginationItem>
                <Link href={`/projects?page=${data.nextPage}`} legacyBehavior passHref>
                  <PaginationNext />
                </Link>
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </section>
  )
}
