import { PageTemplate } from '@/components/layout/page-template'
import { Title } from '@/components/ui/title'
import React from 'react'
import config from '@payload-config'
import { getCachedPayload } from '@/plugins/cachedPayload'
import { RichText } from '@/components/RichText'
import { getPayload } from 'payload'

const PrivacyPolicy = async () => {
  const payload = await getPayload({ config })
  const cachedPayload = getCachedPayload(payload)

  const data = await cachedPayload.findGlobal({ slug: 'privacy-policy' })

  const date = data?.updatedAt
    ? new Intl.DateTimeFormat('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date(data.updatedAt))
    : null

  console.log(data)

  return (
    <PageTemplate>
      <div className="my-32">
        <div className="container max-w-3xl text-center mb-24">
          {date && (
            <div className="text-muted-foreground uppercase text-xs tracking-wide font-medium mb-4">
              Обновлено {date}
            </div>
          )}

          <Title className="mb-8">
            {data?.title || 'Политика в отношении обработки персональных данных'}
          </Title>
        </div>
      </div>
      <RichText content={data?.content} />
    </PageTemplate>
  )
}

export default PrivacyPolicy
