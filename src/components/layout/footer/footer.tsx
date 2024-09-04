import { Button } from '@/components/ui/button'
import React from 'react'

import { Logo } from '@/components/logo'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@radix-ui/react-navigation-menu'
import { Title } from '@/components/ui/title'
import { Input } from '@/components/ui/input'
import { FloatingLabel } from '@/components/ui/floating-label'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { InstagramLogoIcon } from '@radix-ui/react-icons'
import { Form } from '@/payload-types'

const data = [
  {
    id: 1,
    name: `Основные`,
    links: [
      {
        label: `Услуги`,
        url: '/#about',
      },
      {
        label: `Проекты`,
        url: '/projects',
      },
      {
        label: `Блог`,
        url: '/blog',
      },
      {
        label: `Частые вопросы`,
        url: '/#faq',
      },
      {
        label: `Контакты`,
        url: '/contact',
      },
    ],
  },
  {
    id: 2,
    name: `Полезное`,
    links: [
      {
        label: `Кастомный vs Платформа`,
        url: '/blog/kastomnyi-sait-ili-gotovaia-platforma-kak-ne-progadat-s-vyborom',
      },
      {
        label: `Этапы разработки`,
        url: '/blog/etapy-razrabotki-saita-chto-proiskhodit-ot-idei-do-zapuska',
      },
      {
        label: `Выбор домена и хостинга`,
        url: '/blog/vybor-domennogo-imeni-i-khostinga-kliuchevye-faktory-dlia-uspeshnogo-starta-onlain-biznesa',
      },
    ],
  },
]

export const Footer = () => {
  return (
    <footer className="container py-24 mx-auto">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
        <div className="col-span-1">
          <Link href="/" legacyBehavior passHref={true}>
            <Button variant="transparent" className="px-0 pt-0 h-0">
              <Logo />
            </Button>
          </Link>
          <div className="pt-5">
            <Link href="/" legacyBehavior passHref={true}>
              <InstagramLogoIcon className="w-7 h-7 text-zinc-400 hover:text-indigo-500 hover:cursor-pointer"></InstagramLogoIcon>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-3/4 md:flex md:flex-col md:justify-start lg:w-full h-auto col-span-2 lg:order-1 rounded-2xl bg-zinc-100/60 py-10 px-10 lg:flex-col lg:justify-center dark:bg-zinc-900">
          <Title order={4}>Оставайтесь на связи</Title>
          <form>
            <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 rounded-lg pt-3">
              <div className="w-full">
                <FloatingLabel>
                  <Input />
                </FloatingLabel>
              </div>
              <Button
                size="lg"
                variant="primary"
                className="w-full sm:w-auto whitespace-nowrap"
                asChild
              >
                <Link href="/">Подписаться</Link>
              </Button>
            </div>
            <p className="mt-3 text-sm text-zinc-400">
              Нажимая на кнопку &quot;Подписаться&quot;, вы соглашаетесь с условиями{' '}
              <Link href="/" className="hover:text-zinc-400/90">
                Политики конфиденциальности
              </Link>
              .
            </p>
          </form>
        </div>
        <Accordion type="single" collapsible className="sm:hidden">
          {data.map((item) => (
            <AccordionItem key={item.id} value={`${item.id}`}>
              <AccordionTrigger className="py-5">{item.name}</AccordionTrigger>
              <AccordionContent className="leading-7">
                <NavigationMenu>
                  <NavigationMenuList>
                    {item?.links?.map((link) => (
                      <NavigationMenuItem key={link.url}>
                        <NavigationMenuLink className="hover:text-primary/90" asChild>
                          <Link href={link.url}>{link.label}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {data.map((item) => (
          <NavigationMenu
            key={item.id}
            className="hidden sm:block col-span-2 sm:col-span-1 justify-self-center sm:justify-self-start"
          >
            <Title order={4} className="pb-3">
              {item.name}
            </Title>
            <NavigationMenuList className="leading-7">
              {item.links.map((link) => (
                <NavigationMenuItem key={link.url}>
                  <NavigationMenuLink className="hover:text-primary/60" asChild>
                    <Link href={link.url}>{link.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        ))}
      </div>
      <div className="container grid grid-cols-2 grid-rows-2 px-0 gap-6 h-0 mt-10">
        <div className="col-span-2 row-span-1 px-0">
          <Link
            href={'/privacy-policy'}
            className="text-zinc-400 font-normal text-sm hover:no-underline hover:text-zinc-400/80"
          >
            Политика конфиденциальности
          </Link>

          {/* <Button
            variant="link"
            className="text-zinc-400 font-normal hover:no-underline hover:text-zinc-400/80"
          >
            <Link href="/docs">Политика конфиденциальности</Link>
          </Button> */}
        </div>
        <div className="col-span-2 row-span-1 px-0">
          <Link
            href={'/sitemap'}
            className="text-zinc-400 font-normal text-sm hover:no-underline hover:text-zinc-400/80"
          >
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  )
}
