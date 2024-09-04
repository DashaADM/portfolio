import React from 'react'
import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { getCachedPayload } from '@/plugins/cachedPayload'
import { COLLECTION_SLUG } from '@/constants'
import { PageTemplate } from '@/components/layout/page-template'
import { Title } from '@/components/ui/title'
import { Badge } from '@/components/ui/badge'
import { notFound } from 'next/navigation'
import { RichText } from '@/components/RichText'
import Image from 'next/image'

interface BlogPostProps {
  params: {
    slug: string
  }
}

const BlogPost = async ({ params }: BlogPostProps) => {
  const { slug } = params

  const payload = await getPayloadHMR({ config })
  const cachedPayload = getCachedPayload(payload)

  const post = await cachedPayload.findOne({ collection: COLLECTION_SLUG.POSTS, value: slug })

  if (!post) {
    notFound()
  }

  const date = post?.publishedAt
    ? new Intl.DateTimeFormat('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date(post.publishedAt))
    : null

  return (
    <PageTemplate>
      <div className="relative">
        {post?.coverImage && typeof post?.coverImage === 'object' && (
          <div className="absolute inset-0 z-0">
            <Image
              src={post.coverImage?.url}
              alt={post.coverImage?.alt || ''}
              layout="fill"
              objectFit="cover"
              quality={90}
              priority
            />
          </div>
        )}
        <div className="relative z-10 bg-black bg-opacity-50 py-32">
          <div className="container max-w-3xl text-center">
            <div className="text-white text-opacity-90 uppercase text-xs tracking-wide font-medium mb-4">
              {date}
            </div>
            <Title className="mb-8 text-white">{post?.title}</Title>
            <div className="flex gap-4 justify-center">
              {post?.tags?.map(
                (tag) =>
                  typeof tag?.value === 'object' && (
                    <Badge key={tag.value.id}>{tag?.value?.title}</Badge>
                  ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Rich text content */}
      <div className="container max-w-3xl py-16">
        <RichText content={post?.content} />
      </div>
      {/* <div className="my-32">
        <div className="container max-w-3xl text-center mb-24">
          <div className="text-muted-foreground uppercase text-xs tracking-wide font-medium mb-4">
            {date}
          </div>
          <Title className="mb-8">{post?.title}</Title>
          <div className="flex gap-4 justify-center">
            {post?.tags?.map(
              (tag) =>
                typeof tag?.value === 'object' && (
                  <Badge key={tag.value.id}>{tag?.value?.title}</Badge>
                ),
            )}
          </div>
        </div>
        <RichText content={post?.content} />
      </div> */}
    </PageTemplate>
  )
}

export default BlogPost
