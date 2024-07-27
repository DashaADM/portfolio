import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'
import { PageTemplate } from '@/components/layout/page-template'
import React from 'react'
import { Title } from '@/components/ui/title'
import {
  ClockIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  EnvelopeOpenIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline'
import { InstagramLogoIcon } from '@radix-ui/react-icons'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { getCachedPayload } from '@/plugins/cachedPayload'
import { GLOBAL_SLUG } from '@/constants'
import { FormBlock } from '@/components/blocks/FormBlock'

const ContactPage = async () => {
  // const [agreed, setAgreed] = useState(false)
  const payload = await getPayloadHMR({ config })
  const cachedPayload = getCachedPayload(payload)

  const settings = await cachedPayload.findGlobal({ slug: GLOBAL_SLUG.SETTINGS })

  const form =
    typeof settings?.forms?.contactForm?.value === 'object'
      ? settings?.forms?.contactForm?.value
      : null

  return (
    <PageTemplate>
      <div className="isolate py-16 md:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          />
        </div>

        <main className="container">
          <Title order={4}>Контакты</Title>
          <Title order={1} className="my-6 text-zinc-600 dark:text-zinc-200">
            Давайте работать вместе {/* {<br className="md:hidden" />} */}
          </Title>
          <p className="max-w-screen-md text-md md:text-xl text-zinc-600 dark:text-zinc-400">
            Какая бы ни была ваша цель — мы поможем вам её достичь.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-32 ">
            <div className="text-zinc-600 dark:text-zinc-400">
              <a href="tel:+79165638418" className="block">
                <div className="flex items-start ">
                  <DevicePhoneMobileIcon
                    strokeWidth={0.8}
                    width={'2.2rem'}
                    className="text-indigo-500"
                  />
                  <div className="ml-3">
                    <Title order={4} className="mb-1">
                      Позвоните
                    </Title>
                    <p>+7 (916) 563 84 18</p>
                  </div>
                </div>
              </a>

              <div className="flex items-start mt-10">
                <PencilSquareIcon strokeWidth={0.8} width={'2.2rem'} className="text-indigo-500" />
                <div className="ml-3">
                  <Title order={4} className="mb-3">
                    Или напишите
                  </Title>

                  <div className="flex items-center mb-2">
                    <strong>Email:</strong>
                    <a href="mailto:hello@dashadesign.ru" className="block">
                      <p className="ml-1">hello@dashadesign.ru</p>
                    </a>
                  </div>

                  <div className="flex items-center mb-2 ">
                    <strong>Telegram:</strong>

                    <a href="mailto:hello@dashadesign.ru" className="block">
                      <p className="ml-1">@DaryaAbrams</p>
                    </a>
                  </div>
                  <div className="flex items-center mb-2 ">
                    <strong>WhatsApp:</strong>

                    <a href="mailto:hello@dashadesign.ru" className="block">
                      <p className="ml-1">+7 (916) 563 84 18</p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start mt-10">
                <ClockIcon strokeWidth={0.8} width={'2.2rem'} className="text-indigo-500" />
                <div className="ml-3">
                  <Title order={4} className="mb-1">
                    В это время
                  </Title>
                  <p>Пн-Сб 10:00-20:00</p>
                </div>
              </div>
            </div>
            {form ? <FormBlock form={form} /> : null}
            {/* <form action="#" method="POST" className="max-w-full">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-zinc-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold leading-6 text-zinc-900"
                  >
                    Company
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-zinc-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Phone number
                  </label>
                  <div className="relative mt-2.5">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <label htmlFor="country" className="sr-only">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      >
                        <option>US</option>
                        <option>CA</option>
                        <option>EU</option>
                      </select>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                      />
                    </div>
                    <input
                      id="phone-number"
                      name="phone-number"
                      type="tel"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <Field className="flex gap-x-4 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <Switch
                      checked={agreed}
                      onChange={setAgreed}
                      className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
                    >
                      <span className="sr-only">Agree to policies</span>
                      <span
                        aria-hidden="true"
                        className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                      />
                    </Switch>
                  </div>
                  <Label className="text-sm leading-6 text-gray-600">
                    By selecting this, you agree to our{' '}
                    <a href="#" className="font-semibold text-indigo-600">
                      privacy&nbsp;policy
                    </a>
                    .
                  </Label>
                </Field>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let's talk
                </button>
              </div>
            </form> */}
          </div>
        </main>
      </div>
    </PageTemplate>
  )
}

export default ContactPage
