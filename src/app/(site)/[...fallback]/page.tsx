import { notFound } from 'next/navigation'
import React from 'react'

const FallbackPage = async ({ params }: { params: Promise<{ fallback: string[] }> }) => {
  const { fallback } = await params
  if (fallback) {
    notFound()
  }
  return <></>
}

export default FallbackPage