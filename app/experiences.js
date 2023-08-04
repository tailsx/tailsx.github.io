import Experience from "./components/experience"

const EXPERIENCES = [
  {
    id: "newsbreak",
    title: "Senior Software Engineer",
    location: "Mountain View, CA",
    url: "https://www.newsbreak.com/about",
    company: "NewsBreak",
    img: "/nbLogo.svg",
  },
  {
    id: "mmkkyweb",
    title: "Full Stack Developer",
    location: "Toronto, ON",
    url: "https://www.mmkkyweb.com",
    company: "MMKKY",
    img: "/nbLogo.svg",
  },
]

export default function Experiences() {
  return (
    <section id="experiences">
      {EXPERIENCES.map((experience) => (
        <Experience key={experience.id} {...experience} />
      ))}
    </section>
  )
}
