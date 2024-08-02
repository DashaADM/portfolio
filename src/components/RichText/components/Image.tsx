import { Media } from '@/payload-types'
import { SerializedUploadNode } from '@payloadcms/richtext-lexical'
import React from 'react'
import { BlurImage } from '@/components/common/BlurImage'

export const Image = ({ node }: { node: SerializedUploadNode & { value: Media } }) => {
  return (
    <div className="overflow-hidden rounded-sm my-12">
      <BlurImage
        src={node.value.url ?? ''}
        alt={node.value.alt ?? ''}
        width={node.value.width ?? 500}
        height={node.value.height ?? 500}
        sizes="(max-width: 480px) 100vw, 70vw"
        blurDataURL={node?.value?.blurHash ?? ''}
      />
    </div>
  )
}
