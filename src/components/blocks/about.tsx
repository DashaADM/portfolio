import React from 'react'
import {
  ComputerDesktopIcon,
  CodeBracketIcon,
  DocumentMagnifyingGlassIcon,
  PresentationChartBarIcon,
} from '@heroicons/react/24/outline'
import { Title } from '../ui/title'

const features = [
  {
    name: 'Дизайн',
    description:
      'Дизайн сайта, интернет-магазина, приложения. Графический дизайн. Создание бренд-айдентики.',
    icon: PresentationChartBarIcon,
  },
  {
    name: 'Разработка сайта / интернет-магазина / маркетплейса',
    description:
      'Верстка с адаптацией под все устройства, настройка анимаций, форм заявок, системы оплаты, доставки и т.д.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Поисковая оптимизация (SEO)',
    description: 'Продвижение вашего сайта в поисковых системах (Яндекс, Google, Mail.ru и т.п).',
    icon: DocumentMagnifyingGlassIcon,
  },
]

export function About() {
  return (
    <section className="container my-16 md:my-32">
      <Title order={2}>Услуги</Title>

      <div className="max-w-[85rem] pt-8 md:pt-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-auto-rows gap-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="z-20 p-8 relative rounded-xl bg-transparent hover:bg-zinc-50 dark:hover:bg-zinc-900"
            >
              <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-10 before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-zinc-950">
                <feature.icon className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-500" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
                  {feature.name}
                </h3>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400">{feature.description}</p>
              </div>
            </div>
          ))}

          {/* <div>
      <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-zinc-900">
        <svg className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"/><path d="M8 18h.01"/></svg>
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">{features.name}/h3>
        <p className="mt-1 text-zinc-600 dark:text-zinc-400">{features.description}</p>
      </div>
    </div> */}
        </div>
      </div>
    </section>
  )
}
