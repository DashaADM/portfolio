import { notFound } from 'next/navigation'
import React from 'react'

const FallbackPage = ({ params }: { params: { fallback: string[] } }) => {
  if (params.fallback) {
    notFound()
  }
  return <></>
}

export default FallbackPage
