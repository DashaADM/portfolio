import { Project } from '@/payload-types'
import { PaginatedDocs } from 'payload'
import React from 'react'
import { Title } from '../ui/title'
import { ProjectCard } from './ProjectCard'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination'
import Link from 'next/link'
import { generatePageNumbers } from '@/utils/generatePageNumbers'

interface AllProjectsProps {
  data: PaginatedDocs<Project>
}

export const AllProjects: React.FC<AllProjectsProps> = ({ data }) => {
  const paginationVisible = data.totalPages > 1
  const pageNumbers = generatePageNumbers(data.totalPages, data.page)

  return (
    <section className="container ">
      {/* <Title order={2}>Недавние проекты</Title> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
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
            {pageNumbers.map((pageNumber, index) => (
              <PaginationItem key={index}>
                {pageNumber === '...' ? (
                  <PaginationEllipsis />
                ) : (
                  <Link href={`/projects?page=${pageNumber}`} legacyBehavior passHref>
                    <PaginationLink isActive={pageNumber === data?.page}>
                      {pageNumber}
                    </PaginationLink>
                  </Link>
                )}
              </PaginationItem>
            ))}
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
