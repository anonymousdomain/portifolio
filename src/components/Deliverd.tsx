import React from 'react'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  techStack: string[]
  image: string
  demoLink: string
  githubLink: string
}

interface ProjectsProps {
  projects: Project[]
}

export default function Deliverd({ projects = [] }: ProjectsProps) {
  return (
    <div id="projects" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Deliverd Projects</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            A showcase Projects I worked in.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="flex max-w-xl flex-col items-start justify-between">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={project.demoLink}>
                    <span className="absolute inset-0" />
                    {project.title}
                </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{project.description}</p>
              </div>
              <div className="mt-8 flex items-center gap-x-4">
                {/* <a
                  href={project.demoLink}
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Demo
                </a> */}
                <a
                  href={project.githubLink}
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}