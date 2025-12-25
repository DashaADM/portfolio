'use client'
import { YandexMetricaProvider } from 'next-yandex-metrica'
import React from 'react'

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <YandexMetricaProvider
      tagID={Number(process.env.YANDEX_METRIKA_TAG_ID)}
      router="app"
      initParameters={{
        accurateTrackBounce: true,
        childIframe: false,
        clickmap: true,
        defer: false,
        trackHash: false,
        trackLinks: true,
        webvisor: true,
      }}
    >
      {children}
    </YandexMetricaProvider>
  )
}
