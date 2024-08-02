import { cn } from '@/lib/utils'
import './globals.css'
import { Raleway as FontSans } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { ThemeProvider } from 'next-themes'
import { Footer } from '@/components/layout/footer'
import { Toaster } from '@/components/ui/sonner'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { getCachedPayload } from '@/plugins/cachedPayload'
import { GLOBAL_SLUG } from '@/constants'
import Script from 'next/script'
import { YandexMetricaProvider } from 'next-yandex-metrica'
import { ClientLayout } from './layout.client'

export const metadata = {
  title: 'Разработка сайтов и интернет-магазинов | dashadesign',
  description:
    'Разработка кастомных сайтов и интернет-магазинов. Быстрая загрузка, удобная CMS. Дизайн, верстка, продвижение.',
}

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const payload = await getPayloadHMR({ config })
  const cachedPayload = getCachedPayload(payload)
  const settings = await cachedPayload.findGlobal({ slug: GLOBAL_SLUG.SETTINGS })
  const footerForm =
    typeof settings?.forms?.footerForm === 'object' ? settings?.forms?.footerForm : null

  return (
    <html lang="ru" suppressHydrationWarning>
      <head></head>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ClientLayout>
          <ThemeProvider
            attribute="data-mode"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </ClientLayout>
      </body>
      <Script
        defer
        src="https://analytics.boldmedia.ru/script.js"
        data-website-id={process.env.UMAMI_WEBSITE_ID}
      />
    </html>
  )
}
