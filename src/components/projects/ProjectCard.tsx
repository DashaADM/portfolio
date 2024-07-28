import { Project } from '@/payload-types'
import Link from 'next/link'
import React from 'react'
import { AspectRatio } from '../ui/aspect-ratio'
import Image from 'next/image'
import { Badge } from '../ui/badge'

interface ProjectCardProps {
  data: Project
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <Link href={`/projects/${data?.slug}`} className="group block">
      <AspectRatio
        ratio={16 / 12}
        className="overflow-hidden bg-zinc-100 rounded-2xl dark:bg-zinc-800"
      >
        {data?.coverImage && typeof data?.coverImage === 'object' && (
          <Image
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
            fill
            src={data.coverImage?.url}
            alt={data.coverImage?.alt}
          />
        )}
      </AspectRatio>
      <div className="pt-4">
        <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-indigo-500 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
          {data.title}
        </h3>
        <p className="mt-1 text-zinc-600 dark:text-zinc-400">{data?.shortDescription}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {Array.isArray(data.tags) &&
            data?.services?.map(
              (service) =>
                typeof service?.value === 'object' && (
                  <Badge key={service?.value?.id}>{service?.value?.title}</Badge>
                ),
            )}
        </div>
      </div>
    </Link>
  )
}
