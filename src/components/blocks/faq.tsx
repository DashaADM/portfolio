import React from 'react'
import { Title } from '../ui/title'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import Link from 'next/link'

interface FAQProps {
  id?: string
}

interface FAQItem {
  id: number
  question: string
  answer: string
  link?: {
    text: string
    url: string
  }
}

const data: FAQItem[] = [
  {
    id: 1,
    question: 'Сколько времени занимает разработка сайта?',
    answer:
      'В среднем разработка одностраничного сайта занимает около 2-4 недель, а многостраничного сайта или интернет-магазина от 4 до 16 недель, в зависимости от сложности проекта и на чем реализуется (на платформе или коде).',
    link: {
      text: 'Подробнее',
      url: '/blog/stoimost-razrabotki-saita-v-2024-godu-tseny-sroki-i-faktory-vliianiia',
    },
  },
  {
    id: 2,
    question: 'Какие технологии вы используете для создания сайтов?',
    answer:
      'Платформы — Wordpress / Woocommerce, Tilda, Shopify (не работает в России). На коде — React, Node.js, Next.js, MySQL, PostgreSQL, Payload CMS, фреймфорк Medusa для интернет-магазинов.',
  },
  {
    id: 3,
    question: 'Чем отличается сайт на платформе и кастомный на коде?',
    answer:
      'Это довольно обширный вопрос. Если коротко, то ценой и работоспособностью :) Сайт, созданный на платформе, подходит для начинающих компаний, когда нет средств или времени на кастомный. Чаще всего он быстрее реализуется, но обычно уступает кастомному в скорости, возможностях функционала, технических характеристиках, которые влияют на репрезентативность сайта. Кастомный сайт легко масштабируется, на нем можно сделать все, что хочется, имеет высокие показатели в интернете. Более подробно можете прочитать по ссылке или написать мне, и я вам расскажу!',
    link: {
      text: 'Подробнее',
      url: '/blog/kastomnyi-sait-ili-gotovaia-platforma-kak-ne-progadat-s-vyborom',
    },
  },
  {
    id: 4,
    question: 'Как происходит оплата?',
    answer:
      'Обычно 50% предоплата перед началом работ и 50% по завершении. Если это большой проект, разбиваем проект на этапы, вносите оговоренный процент предоплаты и далее по мере реализации этапов.',
  },
  {
    id: 5,
    question: 'Смогу ли я сам обновлять контент на сайте после его создания?',
    answer:
      'Да, все сайты создаются с интеграцией удобных систем управления контентом (CMS), что позволяет самостоятельно обновлять и добавлять новую информацию.',
  },
  {
    id: 6,
    question: 'Предоставляете ли дальнейшее продвижение и поддержку сайта?',
    answer: 'Да. SEO продвижение, реклама в Яндекс, поддержка/администрирование/улучшение сайта.',
  },
]

export const FAQ: React.FC<FAQProps> = ({ id }) => {
  return (
    <section id={id} className="my-16 md:my-32 container">
      <div className="grid md:grid-cols-5">
        <div className="md:col-span-2 mb-4 md:pr-20 relative">
          <div className="absolute w-96 h-96 rounded-full -z-10 bottom-0 blur-[200px] bg-gradient-to-tr from-indigo-400 to-violet-400 -translate-x-2/4 translate-y-2/4" />
          <Title order={2} className="mb-8 md:mb-10">
            Часто задаваемые вопросы
          </Title>
          <p className="text-zinc-600 dark:text-zinc-400">
            Добро пожаловать в уголок вопросов и ответов! Если у вас есть вопрос, возможно, он уже
            здесь. Если нет – не стесняйтесь задать его мне!
          </p>
        </div>
        <div className="md:col-span-3">
          <Accordion type="single" collapsible>
            {data.map((item) => (
              <AccordionItem key={item.id} value={`${item.id}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="leading-7">
                    {item.answer}
                    {item.link && (
                      <>
                        {' '}
                        <Link
                          className="font-medium underline hover:no-underline transition-colors duration-300"
                          href={item.link.url}
                        >
                          {item.link.text}
                        </Link>
                      </>
                    )}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
