import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { MdOpenInNew } from "react-icons/md"

const PROJECTS = [
  /* {
    title: "iamdavidchen.com",
    subtitle: "Personal Website",
    desc: "This website is built with Next.js, Tailwind CSS, and Vercel. It is a static site that is deployed on Vercel. It is a work in progress.",
  }, */
  {
    title: "NewsBreak",
    subtitle: "Hyperlocal News App",
    desc: "NewsBreak is a hyperlocal news app that allows users to view news articles based on their location.",
    link: "https://www.newsbreak.com",
  },
  {
    title: "Project Showcase",
    subtitle: "Web app to practice",
    desc: "Web app to practice Next.js, Tailwind CSS, and Vercel. It is a static site that is deployed on Vercel.",
    link: "https://project-showcase-sigma.vercel.app/",
  },
]

const DavidProjects = () => {
  return (
    <div className="px-2 pt-8 pb-12 max-w-6xl mx-auto flex flex-col items-center gap-2">
      <h2 className="text-primary text-2xl md:text-4xl font-bold">Projects</h2>
      <p className="text-foreground text-base md:text-2xl mb-4 leading-tight">{`Check out some projects I've had my hand in`}</p>
      <div className="flex flex-col gap-6">
        {PROJECTS.map(({ title, subtitle, desc, link }, index) => (
          <ProjectItem key={title} direction={index % 2 === 0 ? "ltr" : "rtl"}>
            <ProjectHeader>
              <ProjectImage />
            </ProjectHeader>
            <ProjectBody>
              <ProjectTitle>{title}</ProjectTitle>
              <ProjectSubtitle>{subtitle}</ProjectSubtitle>
              <ProjectDescription>{desc}</ProjectDescription>
              <ProjectActions>
                <a href={link} target="_blank">
                  <ProjectButton className="text-white flex items-center">
                    <span className="mr-2">View</span>
                    <MdOpenInNew size={20} />
                  </ProjectButton>
                </a>
              </ProjectActions>
            </ProjectBody>
          </ProjectItem>
        ))}
      </div>
    </div>
  )
}

const ProjectItem = (props) => {
  const { children, direction = "ltr" } = props
  return (
    <div
      className={cn(
        `flex flex-col rounded-lg bg-card overflow-hidden lg:flex-row text-foreground`,
        direction === "rtl" && "lg:flex-row-reverse"
      )}
    >
      {props.children}
    </div>
  )
}
const ProjectImage = (props) => (
  <div className="relative h-40 w-full lg:h-48 lg:w-72">
    <Image src="/hero-1920x1280.jpg" alt="" fill style={{ objectFit: "cover" }} />
  </div>
)
const ProjectHeader = (props) => <div className={`flex justify-center items-center`}>{props.children}</div>
const ProjectBody = (props) => <div className={`flex flex-col p-4 flex-grow lg:p-6`}>{props.children}</div>
const ProjectTitle = (props) => <h3 className="text-xl text-primary font-bold">{props.children}</h3>
const ProjectSubtitle = (props) => <span className="text-sm">{props.children}</span>
const ProjectDescription = (props) => <p className="text-sm mt-2 mb-4">{props.children}</p>
const ProjectActions = (props) => <div className="flex mt-auto">{props.children}</div>
const ProjectButton = Button

export { DavidProjects as Projects, ProjectItem }
