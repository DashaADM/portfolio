import React from 'react'
import { Title } from '../ui/title'
import { BlogCard } from '../blog/blog-card'
import { Post } from '@/payload-types'

interface BlogProps {
  posts: Post[]
}

export const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <section className="py-8 lg:py-12 container">
      <Title order={2} className="mb-6">
        Важно знать
      </Title>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
