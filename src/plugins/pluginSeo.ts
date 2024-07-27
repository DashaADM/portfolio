import { COLLECTION_SLUG } from '@/constants'
import { Page, Post } from '@/payload-types'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'

const generateTitle: GenerateTitle<Post | Page> = ({ doc }) => {
  return doc?.title
    ? `${doc.title} | Разработка сайтов и интернет-магазинов`
    : 'Разработка сайтов и интернет-магазинов'
}

const generateURL: GenerateURL<Post | Page> = ({ doc, collectionSlug }) => {
  return doc?.slug && collectionSlug === COLLECTION_SLUG.PAGES
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/${doc?.slug}`
    : collectionSlug === COLLECTION_SLUG.POSTS
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${doc?.slug}`
    : process.env.NEXT_PUBLIC_SITE_URL
}

export const pluginSeo = seoPlugin({
  collections: [COLLECTION_SLUG.PAGES, COLLECTION_SLUG.POSTS],
  generateTitle,
  generateURL,
})
