import Image from "next/image"

const PROJECTS = [
  {
    title: "iamdavidchen.com",
    subtitle: "Personal Website",
    desc: "This website is built with Next.js, Tailwind CSS, and Vercel. It is a static site that is deployed on Vercel. It is a work in progress.",
  },
  {
    title: "NewsBreak",
    subtitle: "Hyperlocal News App",
    desc: "NewsBreak is a hyperlocal news app that allows users to view news articles based on their location.",
  },
]

const DavidProjects = () => {
  return (
    <div className="px-2 py-4 max-w-6xl mx-auto flex flex-col gap-4">
      {PROJECTS.map(({ title, subtitle, desc }) => (
        <ProjectItem key={title}>
          <ProjectImage />
          <ProjectBody>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectSubtitle>{subtitle}</ProjectSubtitle>
            <ProjectDescription>{desc}</ProjectDescription>
          </ProjectBody>
        </ProjectItem>
      ))}
    </div>
  )
}

const ProjectItem = (props) => {
  const { children } = props
  return <div className="flex flex-col md:flex-row-reverse rounded-lg bg-card overflow-hidden">{props.children}</div>
}

const ProjectImage = (props) => (
  <div className="relative h-40 lg:w-72">
    <Image src="/hero-1920x1280.jpg" alt="" fill style={{ objectFit: "cover" }} />
  </div>
)
const ProjectBody = (props) => <div className="flex flex-col p-4">{props.children}</div>
const ProjectTitle = (props) => <h3 className="text-xl font-bold">{props.children}</h3>
const ProjectSubtitle = (props) => <span className="text-sm">{props.children}</span>
const ProjectDescription = (props) => <p className="text-sm">{props.children}</p>

export { DavidProjects as Projects, ProjectItem }
