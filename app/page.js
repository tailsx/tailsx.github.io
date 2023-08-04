import Footer from "./components/footer"
import Nav from "./components/nav"
import Me from "./components/me"
import David from "./components/david"
import Experiences from "./experiences"

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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <Nav />

      <David />

      <div>
        <Me />
        <Experiences />
      </div>

      <Footer />
    </main>
  )
}
