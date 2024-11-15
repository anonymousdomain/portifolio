"use client";
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Deliverd from "@/components/Deliverd";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const deliverdProjects = [
  {
    title: "Human Resource System",
    description:
      "Maintained and improved an existing human resource system, consistently meeting client requirements and project deadlines.",
    techStack: ["Laravel", "React", "Axios", "Tanstack-query"],
    image: "/globe.svg?height=200&width=300",
    githubLink: "https://github.com/anonymousdomain/reverse-proxy.git",
  },
  {
    title: "Greece Community School Management System",
    description:
      "Maintained and enhanced a school management system for the Greece community.",
    techStack: ["Laravel", "React"],
    image: "/next.svg?height=200&width=300",
    githubLink: "https://github.com/anonymousdomain/reverse-proxy.git",
  },
  {
    title: "Workforce Management System",
    description:
      "Developed a new workforce management system from scratch using Laravel and React. Implemented HR, finance, and reporting modules. Successfully delivered and deployed for three companies: Edomias, ABC Security, and Siltun Balemuya.",
    techStack: ["Laravel", "React", "GitLab CI"],
    image: "/window.svg?height=200&width=300",
    githubLink: "https://github.com/anonymousdomain/reverse-proxy.git",
  },
];

const projects = [
  {
    title: "Annual Leave Project",
    description:
      "Maintained and improved an existing human resource system, consistently meeting client requirements and project deadlines.",
    techStack: ["Laravel", "githubActions","PostMan"],
    image: "/globe.svg?height=200&width=300",
    // demoLink: "#",
    githubLink: "https://github.com/anonymousdomain/leave.git",
  },
  {
    title: "Digital Equb",
    description:
      "Maintained and enhanced a school management system for the Greece community.",
    techStack: ["Flutter", "Firebase"],
    image: "/next.svg?height=200&width=300",
    demoLink: "#",
    githubLink: "https://github.com/anonymousdomain/equb.git",
  },
  {
    title: "Flutter to Laravel Authentication Boiler Plate",
    description:
      "Developed a new workforce management system from scratch using Laravel and React. Implemented HR, finance, and reporting modules. Successfully delivered and deployed for three companies: Edomias, ABC Security, and Siltun Balemuya.",
    techStack: ["Flutter","Laravel"],
    image: "/window.svg?height=200&width=300",
    demoLink: "#",
    githubLink: "https://github.com/anonymousdomain/flutter-laravel-auth.git",
  },
  {
    title: "Reverse Proxy Implementation",
    description:
      "Developed a new workforce management system from scratch using Laravel and React. Implemented HR, finance, and reporting modules. Successfully delivered and deployed for three companies: Edomias, ABC Security, and Siltun Balemuya.",
    techStack: ["Terraform","Ansible","AWS","Docker","Docker-Compose"],
    image: "/window.svg?height=200&width=300",
    demoLink: "#",
    githubLink: "https://github.com/anonymousdomain/reverse-proxy.git",
  },
];

const skills = [
  {
    category: "Full Stack Development",
    items: ["Laravel", "React", "NextJs"],
  },
  {
    category: "Programming Languages",
    items: ["Python", "JavaScript", "PHP", "Go", "Bash"],
  },
  {
    category: "Cloud Services",
    items: ["AWS (EKS, EC2, IAM, VPC)", "Azure (AKS)"],
  },
  {
    category: "DevOps",
    items: [
      "Docker",
      "Kubernetes",
      "Helm",
      "Google Jib",
      "Kaniko",
      "Jenkins",
      "GitLab CI",
      "Github Actions",
      "Prometheus",
      "Grafana",
      "Terraform",
      "Ansible",
    ],
  },
  {
    category: "Database and Storage",
    items: ["MySQL", "PostgreSQL", "Redis"],
  },
];

const certifications = [
  "gebeya Inc. DevOps training certificate of completion",
  "gebeya Inc. certificate of recognition for creating one of the top 3 capstone projects",
  "Safaricom Telecommunication Ethiopia DevOps Intern completion certification",
  "DevOps Essentials (IBM)",
  "Introduction to Agile Development and Scrum (IBM)",
  "Linux Commands & Shell Scripting Essentials V2 (IBM)",
];

const education = [
  {
    institution: "Ethio Cloud(Zergaw Cloud)",
    course: "Cloud Computing Training",
    period: "Aug 2024 - Oct 2024",
  },
  {
    institution: "Gebeya Inc.",
    course: "DevOps Training",
    period: "Oct 2023 - Mar 2024",
  },
  {
    institution: "Debrebrhan University",
    course: "Bachelor of degree in Electrical and Computer Engineering",
    period: "Sep 2018 - Aug 2022",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-white">
      <Header navigation={navigation} />
      <main className="isolate">
        <Hero />
        <About />
        <Projects projects={projects} />
        <Deliverd projects={deliverdProjects} />
        <Skills skills={skills} />
        <Certifications certifications={certifications} />
        <Education education={education} />
        <Contact />
      </main>
    </div>
  );
}
