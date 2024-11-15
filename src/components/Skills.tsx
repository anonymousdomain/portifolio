import React from 'react'

interface Skill {
  category: string
  items: string[]
}

interface SkillsProps {
  skills: Skill[]
}

export default function Skills({ skills = [] }: SkillsProps) {
  return (
    <div id="skills" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Skills & Expertise</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            A comprehensive overview of my technical skills and areas of expertise.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill.category}>
              <dt className="font-semibold text-gray-900">{skill.category}</dt>
              <dd className="mt-1 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}