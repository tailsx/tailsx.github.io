import Experience from "./components/experience"

const EXPERIENCES = [
  {
    id: "newsbreak",
    title: "Senior Software Engineer",
    location: "Mountain View, CA",
    description:
      "I work on the web team at NewsBreak, a hyperlocal news app with over 12 million monthly active users. I work on the web team, which is responsible for the web app, the CMS, and the web version of the AMP pages.",
    url: "https://www.newsbreak.com/about",
    company: "NewsBreak",
    img: "/nbLogo.svg",
    date: "Mar 2020 - Jul 2023"
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
    <div id="experiences">
      {EXPERIENCES.map((experience) => (
        <Experience key={experience.id} {...experience} />
      ))}
    </div>
  )
}
