import React from 'react'

interface EducationItem {
  institution: string
  course: string
  period: string
}

interface EducationProps {
  education: EducationItem[]
}

export default function Education({ education = [] }: EducationProps) {
  return (
    <div id="education" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Education</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            My academic background and professional training.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {education.map((edu, index) => (
            <article key={index} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={edu.period} className="text-gray-500">
                  {edu.period}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  {edu.course}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{edu.institution}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}