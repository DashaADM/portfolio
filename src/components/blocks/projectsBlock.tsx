'use client'

import React, { useState } from 'react'

import { Title } from '../ui/title'
import { AspectRatio } from '../ui/aspect-ratio'
import Image from 'next/image'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination'

// const features = [
//   {
//     name: 'Веб-дизайн',
//     description: 'Дизайн сайта, интернет-магазина, приложения.',
//     tags: [`design`, `development`, `else`],
//     picture: {
//       src: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       alt: `image description`,
//     },
//   },
//   {
//     name: 'SSL certificates',
//     description:
//       'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
//     tags: [`design`, `development`, `else`],
//     picture: {
//       src: 'https://images.unsplash.com/photo-1649999920973-ab6bfd0c0017?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       alt: `image description`,
//     },
//   },
//   {
//     name: 'Simple queues',
//     description:
//       'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
//     tags: [`design`, `development`, `else`],
//     picture: {
//       src: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       alt: `image description`,
//     },
//   },
//   {
//     name: 'Simple queues',
//     description:
//       'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
//     tags: [`design`, `development`, `else`],
//     picture: {
//       src: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       alt: `image description`,
//     },
//   },

// ]

/* function handlePagination() { */

export const ProjectsBlock = ({ data }) => {
  const itemsPerPage = 4
  const [currentPage, setCurrentPage] = useState(1)
  const [paginationVisible, setPaginationVisible] = useState(data.length > 10)

  const pageCount = Math.ceil(data.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  const handleNext = () => {
    setCurrentPage((prev) => (prev < pageCount ? prev + 1 : prev))
  }

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
  }

  return (
    <section className="container pt-16 sm:pt-24">
      <Title order={2}>Недавние проекты</Title>

      <div className="py- lg:py-14 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
        {data.map((feature, index) => (
          <a key={index} className="group block" href="#">
            <AspectRatio
              ratio={16 / 12}
              className="overflow-hidden bg-zinc-100 rounded-2xl dark:bg-zinc-800"
            >
              <Image
                key={index}
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                fill
                src={feature.picture.src}
                alt={feature.picture.alt}
              />
            </AspectRatio>
            <div className="pt-4">
              <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-indigo-500 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                {feature.name}
              </h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">{feature.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {feature.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="py-1.5 px-3 bg-white text-zinc-600 border border-zinc-200 text-xs sm:text-sm rounded-xl dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
      {paginationVisible && (
        <Pagination>
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious onClick={handlePrevious} />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink href="#">{currentPage}</PaginationLink>
            </PaginationItem>
            {currentPage < pageCount && (
              <PaginationItem>
                <PaginationNext onClick={handleNext} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </section>
  )
}
