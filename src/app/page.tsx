"use client"
import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import Education from '@/components/Education'
import Contact from '@/components/Contact'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

const projects = [
  {
    title: 'Human Resource System',
    description: 'Maintained and improved an existing human resource system, consistently meeting client requirements and project deadlines.',
    techStack: ['Laravel', 'React'],
    image: '/globe.svg?height=200&width=300',
    demoLink: '#',
    githubLink: 'https://github.com/anonymousdomain',
    date: '2023-01-15', // Add a static date for each project
  },
  {
    title: 'Greece Community School Management System',
    description: 'Maintained and enhanced a school management system for the Greece community.',
    techStack: ['Laravel', 'React'],
    image: '/next.svg?height=200&width=300',
    demoLink: '#',
    githubLink: 'https://github.com/anonymousdomain',
    date: '2023-05-20', // Add a static date for each project
  },
  {
    title: 'Workforce Management System',
    description: 'Developed a new workforce management system from scratch using Laravel and React. Implemented HR, finance, and reporting modules. Successfully delivered and deployed for three companies: Edomias, ABC Security, and Siltun Balemuya.',
    techStack: ['Laravel', 'React', 'GitLab CI'],
    image: '/window.svg?height=200&width=300',
    demoLink: '#',
    githubLink: 'https://github.com/anonymousdomain',
    date: '2023-09-10', // Add a static date for each project
  },
]


const skills = [
  {
    category: 'Full Stack Development',
    items: ['Laravel', 'React', 'NextJs'],
  },
  {
    category: 'Programming Languages',
    items: ['Python', 'JavaScript', 'PHP', 'Bash'],
  },
  {
    category: 'Cloud Services',
    items: ['AWS (EKS, EC2, IAM, VPC)', 'Azure (AKS)'],
  },
  {
    category: 'DevOps',
    items: ['Docker', 'Kubernetes', 'Helm', 'Google Jib', 'Kaniko', 'Jenkins', 'GitLab CI', 'Github Actions', 'Prometheus', 'Grafana'],
  },
  {
    category: 'Database and Storage',
    items: ['MySQL', 'PostgreSQL', 'Redis'],
  },
]

const certifications = [
  "gebeya Inc. DevOps training certificate of completion",
  "gebeya Inc. certificate of recognition for creating one of the top 3 capstone projects",
  "Safaricom Telecommunication Ethiopia DevOps Intern completion certification",
  "DevOps Essentials (IBM)",
  "Introduction to Agile Development and Scrum (IBM)",
  "Linux Commands & Shell Scripting Essentials V2 (IBM)"
]

const education = [
  {
    institution: "Ethio Cloud(Zergaw Cloud)",
    course: "Cloud Computing Training",
    period: "Aug 2024 - Oct 2024"
  },
  {
    institution: "Gebeya Inc.",
    course: "DevOps Training",
    period: "Oct 2023 - Mar 2024"
  },
  {
    institution: "Debrebrhan University",
    course: "Bachelor of degree in Electrical and Computer Engineering",
    period: "Sep 2018 - Aug 2022"
  }
]

export default function Portfolio() {
  return (
    <div className="bg-white">
      <Header navigation={navigation} />
      <main className="isolate">
        <Hero />
        <About />
        <Projects projects={projects}  />
        <Skills skills={skills} />
        <Certifications certifications={certifications} />
        <Education education={education} />
        <Contact />
      </main>
    </div>
  )
}