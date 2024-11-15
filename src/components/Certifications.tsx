import React from 'react'

interface CertificationsProps {
  certifications: string[]
}

export default function Certifications({ certifications = [] }: CertificationsProps) {
  return (
    <div id="certifications" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Certifications</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Professional certifications and recognitions I&apos;ve earned.
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <li key={index} className="flex items-center">
              <svg className="mr-2 h-4 w-4 flex-none text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}