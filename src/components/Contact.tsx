import React from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  return (
    <div id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in touch</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Email</h3>
            <dl className="mt-2 space-y-1 border-l border-gray-200 pl-6 pt-2">
              <div>
                <dt className="sr-only">Email address</dt>
                <dd>
                  <a className="hover:text-indigo-600" href="mailto:your.email@example.com">
                    <EnvelopeIcon className="h-5 w-5 inline-block mr-2" aria-hidden="true" />
                    mekonnendawit15@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Phone</h3>
            <dl className="mt-2 space-y-1 border-l border-gray-200 pl-6 pt-2">
              <div>
                <dt className="sr-only">Phone number</dt>
                <dd>
                  <a className="hover:text-indigo-600" href="tel:+1234567890">
                    <PhoneIcon className="h-5 w-5 inline-block mr-2" aria-hidden="true" />
                    +251967080847
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">LinkedIn</h3>
            <dl className="mt-2 space-y-1 border-l border-gray-200 pl-6 pt-2">
              <div>
                <dt className="sr-only">LinkedIn profile</dt>
                <dd>
                  <a className="hover:text-indigo-600" href="https://github.com/anonymousdomain" target="_blank" rel="noopener noreferrer">
                    <svg className="h-5 w-5 inline-block mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                    LinkedIn Profile
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">GitHub</h3>
            <dl className="mt-2 space-y-1 border-l border-gray-200 pl-6 pt-2">
              <div>
                <dt className="sr-only">GitHub profile</dt>
                <dd>
                  <a className="hover:text-indigo-600" href="https://github.com/anonymousdomain" target="_blank" rel="noopener noreferrer">
                    <svg className="h-5 w-5 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub Profile
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}