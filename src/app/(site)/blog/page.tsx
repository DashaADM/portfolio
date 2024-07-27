import { PageTemplate } from '@/components/layout/page-template'
import { Separator } from '@/components/ui/separator'
import { Title } from '@/components/ui/title'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'
import config from '@/payload.config'
import { getCachedPayload } from '@/plugins/cachedPayload'
import { COLLECTION_SLUG } from '@/constants'
import { BlogCard } from '@/components/blog/blog-card'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import Link from 'next/link'
import { generatePageNumbers } from '@/utils/generatePageNumbers'

interface AllBlogPostsProps {
  searchParams: {
    page: number
  }
}

const AllBlogPosts: React.FC<AllBlogPostsProps> = async ({ searchParams }) => {
  const { page } = searchParams
  const payload = await getPayloadHMR({ config })
  const cachedPayload = getCachedPayload(payload)

  const data = await cachedPayload.find({
    collection: COLLECTION_SLUG.POSTS,
    limit: 12,
    page,
  })

  const paginationVisible = data.totalPages > 1
  const pageNumbers = generatePageNumbers(data.totalPages, data.page)

  return (
    <PageTemplate>
      <div className="container py-12 md:py-24">
        <Title>Блог</Title>
        <Separator className="my-8" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.docs?.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        {paginationVisible && (
          <Pagination className="mt-12">
            <PaginationContent>
              {data?.hasPrevPage && (
                <PaginationItem>
                  <Link href={`/blog?page=${data.prevPage}`} legacyBehavior passHref>
                    <PaginationPrevious />
                  </Link>
                </PaginationItem>
              )}
              {pageNumbers.map((pageNumber, index) => (
                <PaginationItem key={index}>
                  {pageNumber === '...' ? (
                    <PaginationEllipsis />
                  ) : (
                    <Link href={`/blog?page=${pageNumber}`} legacyBehavior passHref>
                      <PaginationLink isActive={pageNumber === data?.page}>
                        {pageNumber}
                      </PaginationLink>
                    </Link>
                  )}
                </PaginationItem>
              ))}

              {data?.hasNextPage && (
                <PaginationItem>
                  <Link href={`/blog?page=${data.nextPage}`} legacyBehavior passHref>
                    <PaginationNext />
                  </Link>
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        )}

        {/* {paginationVisible && (
          <Pagination className="mt-12">
            <PaginationContent>
              {data?.hasPrevPage && (
                <PaginationItem>
                  <Link href={`/blog?page=${data.prevPage}`} legacyBehavior passHref>
                    <PaginationPrevious />
                  </Link>
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationLink>{data.page}</PaginationLink>
              </PaginationItem>
              {data?.hasNextPage && (
                <PaginationItem>
                  <Link href={`/blog?page=${data.nextPage}`} legacyBehavior passHref>
                    <PaginationNext />
                  </Link>
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        )} */}
      </div>
    </PageTemplate>
  )
}

export default AllBlogPosts
