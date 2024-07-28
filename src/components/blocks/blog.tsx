import React from 'react'
import { Title } from '../ui/title'
import { BlogCard } from '../blog/blog-card'
import { Post } from '@/payload-types'

interface BlogProps {
  posts: Post[]
}

export const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <section className="my-16 lg:my-32 container">
      <Title order={2} className="mb-8 md:mb-12">
        Полезно знать
      </Title>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
