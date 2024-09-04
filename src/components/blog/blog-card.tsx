'use client'

import { Post } from '@/payload-types'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState, useEffect } from 'react'
import { Title } from '../ui/title'
import { Badge } from '../ui/badge'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface BlogCardProps {
  post: Post
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const [cardWidth, setCardWidth] = useState<number>(0)

  useEffect(() => {
    const updateWidth = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)

    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return (
    <Link
      ref={cardRef}
      className="group flex flex-col h-full hover:bg-zinc-100/60 rounded-xl p-5 transition-all dark:hover:bg-white/10"
      href={`/blog/${post?.slug}`}
    >
      <div className="relative">
        <AspectRatio ratio={16 / 10}>
          {post?.coverImage && typeof post?.coverImage === 'object' ? (
            <Image
              className="w-full object-cover rounded-xl"
              fill
              src={post.coverImage?.url}
              alt="Image Description"
            />
          ) : (
            <div className="w-full h-full bg-zinc-100 dark:bg-zinc-800" />
          )}
        </AspectRatio>
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Title
              order={4}
              className="pt-3 text-lg line-clamp-2 overflow-hidden transition-colors group-hover:text-indigo-900"
            >
              <span>{post?.title}</span>
            </Title>
          </TooltipTrigger>
          <TooltipContent style={{ maxWidth: `${cardWidth}px` }} className="break-words">
            <p>{post?.title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="mt-auto pt-3 flex flex-wrap gap-2">
        {post?.tags?.map(
          (tag) =>
            typeof tag?.value === 'object' && (
              <Badge key={tag?.value?.id}>{tag?.value?.title}</Badge>
            ),
        )}
      </div>
    </Link>
  )
}
