import { PageTemplate } from '@/components/layout/page-template'
import { Title } from '@/components/ui/title'
import React from 'react'

const page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  return (
    <PageTemplate>
      <div className="container">
        <Title>Project page for: {slug}</Title>
      </div>
    </PageTemplate>
  )
}

export default page
