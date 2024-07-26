import React from 'react'
import { Title } from '../ui/title'
import { AspectRatio } from '../ui/aspect-ratio'
import Image from 'next/image'

const features = [
  {
    name: 'Веб-дизайн',
    tags: [`design`, `development`],
  },
  {
    name: 'Веб-дизайн',
    tags: [`design`, `development`],
  },
  {
    name: 'Веб-дизайн',
    tags: [`design`, `development`],
  },
]

export const Blog = () => {
  return (
    <section className="py-8 lg:py-12 container">
      <Title order={2} className="mb-6">
        Важно знать
      </Title>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <a
            key={index}
            className="group block hover:bg-zinc-100/60 rounded-xl p-5 transition-all dark:hover:bg-white/10"
            href="#"
          >
            <div className="relative">
              <AspectRatio ratio={16 / 10}>
                <Image
                  className="w-full object-cover rounded-xl"
                  fill
                  src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                  alt="Image Description"
                />
              </AspectRatio>
            </div>

            <Title order={3} className="pt-3 text-lg">
              Unity’s inside sales team drives 80% of its revenue with Preline.
            </Title>
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
          </a>
        ))}
      </div>
    </section>
  )
}
