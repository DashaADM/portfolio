import React from 'react'
import { Title } from '../ui/title'
import { CheckIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'
import Link from 'next/link'

const includedFeatures = [
  {
    name: `Многостраничные сайты и лендинги`,
    description: `Лендинги для продвижения продуктов и услуг. Корпоративные сайты с обширным контентом и сложной структурой.`,

    points: [
      'Формы заявок и подписок',
      'Удобная система управления контентом (CMS)',
      'Базовые SEO-настройки',
      'Система аналитики (Яндекс Метрика)',
    ],
    price: `80 000`,
  },
  {
    name: `Интернет-магазины`,
    description: `Полный цикл создания интернет-магазинов с функционалом, адаптированным под ваш бизнес. Интеграция с необходимыми сервисами (эквайрингом, сервисами доставок, CRM-системой и т.п).`,
    include: 'Все, что в "Многостраничные сайты и лендинги" +',
    points: [
      'Каталог с фильтрами и сортировкой',
      'Корзина и оформление заказа',
      'Сервис по доставке',
      'Сервис онлайн-оплаты',
    ],
    price: `100 000`,
  },
  {
    name: `Дизайн`,
    description: `Дизайн макета в Figma для лендинга, многостраничника или любого другого проекта без верстки.`,
    points: ['Макет сайта', 'UI/UX-дизайн', 'Адаптация под 3 типа устройств', 'UI-kit'],
    price: `60 000`,
  },
]

export const Price = () => {
  return (
    <section className="container my-16 sm:my-32">
      <Title order={2}>Стоимость</Title>
      <div className="flex flex-col my-8 md:my-16 gap-8 lg:gap-12">
        {includedFeatures.map((feature, index) => (
          <div
            key={index}
            className="mx-auto max-w-2xl rounded-3xl ring-1 ring-border lg:mx-0 lg:flex lg:max-w-none  dark:bg-zinc-900/30"
          >
            <div className="p-8 sm:p-10 lg:flex-auto">
              <Title order={3}>{feature.name}</Title>
              <p className="mt-6 leading-7 text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <Title order={4} className=" text-indigo-500 dark:text-indigo-400">
                  Что включено
                </Title>
                <p className="leading-7 text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                  {feature.include}
                </p>

                <div className="h-px flex-auto bg-border" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-zinc-600 sm:grid-cols-2 sm:gap-6 dark:text-zinc-400"
              >
                {feature.points.map((point, index) => (
                  <li key={index} className="flex gap-x-3 items-start">
                    <CheckIcon
                      // className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400"
                      className="h-6 w-6 rounded-full bg-indigo-600 text-indigo-100 "
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-zinc-50 py-10 text-center ring-1 ring-inset ring-border lg:flex lg:flex-col lg:justify-center lg:py-16 dark:bg-zinc-900">
                <div className="mx-auto max-w-xs px-8">
                  <Title order={4} className="text-zinc-600 dark:text-zinc-200">
                    Инвестиция в бизнес
                  </Title>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-3xl sm:text-4xl  font-bold tracking-tight text-zinc-900 dark:text-white">
                      от {feature.price}
                    </span>
                    <span className="text-xl font-semibold leading-6 tracking-wide text-zinc-600 dark:text-zinc-200">
                      ₽
                    </span>
                  </p>
                  <Button size="lg" variant="primary" className="mt-10 w-full" asChild>
                    <Link href="/contact">Обсудить проект</Link>
                  </Button>
                  <p className="mt-6 text-xs leading-5 text-zinc-600 dark:text-zinc-400">
                    Цена и сроки реализации зависят от сложности проекта и скорости обратной связи
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
