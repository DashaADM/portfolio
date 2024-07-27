import { Post } from '@/payload-types'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Title } from '../ui/title'
import { Badge } from '../ui/badge'

interface BlogCardProps {
  post: Post
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link
      className="group block hover:bg-zinc-100/60 rounded-xl p-5 transition-all dark:hover:bg-white/10"
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
      <Title order={3} className="pt-3 text-lg">
        {post?.title}
      </Title>
      <div className="mt-3 flex flex-wrap gap-2">
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
