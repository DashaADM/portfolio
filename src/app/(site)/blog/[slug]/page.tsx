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
      <div className="my-28">
        <div className="container max-w-3xl text-center mb-28">
          <span className="text-muted-foreground uppercase text-xs tracking-wide font-medium">
            {date}
          </span>
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
      </div>
    </PageTemplate>
  )
}

export default BlogPost
