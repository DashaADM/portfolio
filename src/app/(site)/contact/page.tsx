import { PageTemplate } from '@/components/layout/page-template'
import React from 'react'
import {
  ClockIcon,
  DevicePhoneMobileIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline'
import config from '@payload-config'
import { getCachedPayload } from '@/plugins/cachedPayload'
import { GLOBAL_SLUG } from '@/constants'
import { FormBlock } from '@/components/blocks/FormBlock'
import { BasicHero } from '@/components/blocks/BasicHero'
import { getPayload } from 'payload'

const features = [
  {
    name: 'Позвоните',
    icon: DevicePhoneMobileIcon,
    href: 'tel:79165638418',
    hrefLabel: '+7 (916) 563 84 18',
  },
  {
    name: 'Или напишите',
    icon: PencilSquareIcon,
    href: [
      {
        element: (
          <div className="flex flex-nowrap gap-2 items-center">
            <p className="text-md font-semibold">Email:</p>
            <a href="mailto:hello@dashadesign.ru">hello@dashadesign.ru</a>
          </div>
        ),
      },
      {
        element: (
          <div className="flex flex-nowrap gap-2 items-center">
            <p className="text-md font-semibold">Телеграм:</p>
            <a href="https://t.me/DaryaAbrams">@DaryaAbrams</a>
          </div>
        ),
      },
      {
        element: (
          <div className="flex flex-nowrap gap-2 items-center">
            <p className="text-md font-semibold">WhatsApp:</p>
            <a href="https://wa.me/79165638418">+7 (916) 563 84 18</a>
          </div>
        ),
      },
    ],
  },
  {
    name: 'Отвечу в рабочее время',
    description: 'Пн-Сб 10:00-20:00',
    icon: ClockIcon,
  },
]

const ContactPage = async () => {
  // const [agreed, setAgreed] = useState(false)
  const payload = await getPayload({ config })
  const cachedPayload = getCachedPayload(payload)

  const settings = await cachedPayload.findGlobal({ slug: GLOBAL_SLUG.SETTINGS })

  const form =
    typeof settings?.forms?.contactForm?.value === 'object'
      ? settings?.forms?.contactForm?.value
      : null

  return (
    <PageTemplate>
      <main>
        <BasicHero
          prefix="Контакты"
          suffix="Какая бы ни была ваше цель, я помогу вам к ней прийти."
        >
          Давайте работать вместе
        </BasicHero>
        <div className="container relative md:flex flex-nowrap gap-12 md:gap-24 lg:gap-36 my-8 md:my-16 justify-between">
          <div className="flex-none pb-12 md:pb-0 md:pt-12 flex flex-col gap-12">
            {features.map((feature, index) => (
              <div key={index} className="">
                <div className="flex">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-xl border-2 border-indigo-100 dark:border-indigo-900 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 stroke-1.5 text-indigo-600 dark:text-indigo-400" />
                  </div>

                  <div className="ml-4 flex flex-col justify-start">
                    <h3 className="text-lg font-semibold mb-2 text-zinc-800 dark:text-white">
                      {feature.name}
                    </h3>
                    {feature?.description ? (
                      <p className="text-zinc-900 dark:text-zinc-100">{feature.description}</p>
                    ) : null}
                    {typeof feature?.href === 'string' ? (
                      <a href={feature?.href}>{feature?.hrefLabel}</a>
                    ) : Array.isArray(feature?.href) ? (
                      <div className="flex flex-col gap-2 md:gap-4">
                        {feature?.href?.map((link, index) => (
                          <React.Fragment key={index}>{link.element}</React.Fragment>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl md:flex-1 flex flex-col justify-end relative md:border rounded-md p-4 md:p-12 bg-indigo-100/10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold pb-8 ">
              Есть идея? Заполните форму и расскажите, какой у вас проект
            </h2>

            <div className="">{form ? <FormBlock form={form} /> : null}</div>
          </div>
        </div>
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-auto left-0 transform-gpu overflow-hidden blur-3xl -z-10"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            // className="relative left-1/2 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            className="relative aspect-[1155/678] w-[50rem] max-w-none  bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72.1875rem] -translate-x-1/2 -translate-y-1/2"
          />
        </div> */}
      </main>
    </PageTemplate>
  )
}

export default ContactPage
