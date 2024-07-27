import { Media } from '@/payload-types'
import { HTMLConverter } from '../types'
import type { SerializedUploadNode } from '@payloadcms/richtext-lexical'
import Image from 'next/image'

export const UploadHTMLConverter: HTMLConverter<SerializedUploadNode & { value: Media }> = {
  converter({ node }) {
    if ((node.value.mimeType ?? '').startsWith('image')) {
      return (
        <div className="my-12">
          <Image
            src={node.value.url ?? ''}
            alt={node.value.alt ?? ''}
            width={node.value.width ?? 500}
            height={node.value.height ?? 500}
            sizes="(max-width: 480px) 100vw, 50vw"
            className="rounded-sm"
          />
        </div>
      )
    }
    return <p>Unsupported MIME type {node.value.mimeType}</p>
  },
  nodeTypes: ['upload'],
}
