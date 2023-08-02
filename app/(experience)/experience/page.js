import Exp from "./exp"

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

export default function Experience() {
  return (
    <main className="max-w-6xl mx-auto">
      <h1 className="text-4xl">Experience</h1>
      <div className="">
        {EXPERIENCES.map(({ id, ...rest }) => {
          return (
            <div key={id} className="border-b border-white">
              <Exp {...rest}>
                <p>Some description</p>
              </Exp>
            </div>
          )
        })}
      </div>
    </main>
  )
}
