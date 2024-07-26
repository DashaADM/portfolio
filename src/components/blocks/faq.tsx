import React from 'react'
import { Title } from '../ui/title'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { BlurredColor } from '../blurred-color'

const data = [
  {
    id: 1,
    question: `Lorem ipsum dolor sit amet consectetur adipisicing.`,
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque excepturi sint iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque excepturi sint iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque excepturi sint iure!`,
  },
  {
    id: 2,
    question: `Lorem ipsum dolor sit amet consectetur adipisicing.`,
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque excepturi sint iure!`,
  },
  {
    id: 3,
    question: `Lorem ipsum dolor sit amet consectetur adipisicing.`,
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque excepturi sint iure!`,
  },
  {
    id: 4,
    question: `Lorem ipsum dolor sit amet consectetur adipisicing.`,
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque excepturi sint iure!`,
  },
  {
    id: 5,
    question: `Lorem ipsum dolor sit amet consectetur adipisicing.`,
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque excepturi sint iure!`,
  },
]

export const FAQ = () => {
  return (
    <section className="py-8 lg:py-12 container">
      <div className="grid md:grid-cols-5">
        <div className="md:col-span-2 md:pr-20 relative">
          <div className="absolute w-96 h-96 rounded-full -z-10 bottom-0 blur-[200px] bg-gradient-to-tr from-indigo-400 to-violet-400 -translate-x-2/4 translate-y-2/4" />
          <Title order={2} className="mb-6">
            Частозадаваемые вопросы
          </Title>
          <p className="text-zinc-600 dark:text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum alias dolorum voluptate
            deserunt esse vero accusamus, sit eveniet fugit illo.
          </p>
        </div>
        <div className="md:col-span-3">
          <Accordion type="single" collapsible>
            {data.map((item) => (
              <AccordionItem key={item.id} value={`${item.id}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="leading-7">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
