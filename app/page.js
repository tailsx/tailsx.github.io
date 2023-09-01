import Footer from "./components/footer"
import Nav from "./components/nav"
import Me from "./components/me"
import David from "./components/david"
import Experiences from "./experiences"
import DavidSubscription from "./components/davidSubscription"
import Headshot from "./components/headshot"
import Image from "next/image"
import DavidCards from "./components/davidCards"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <div className="relative flex flex-col">
        <section className="bg-white/30">
          <Hero />
        </section>
        <section className="bg-primary px-2 py-4">
          <div className="flex flex-col md:flex-row justify-between items-centers max-w-2xl mx-auto">
            <Headshot />
            <div className="text-secondary flex flex-col md:flex-row">
              <span>Features</span>
              <div className="flex gap-2">
                <span>3+ years professional of ...</span>
                <div>
                  <span>React</span>
                  <span>Next.js</span>
                  <span>Tailwind</span>
                </div>
              </div>
              <div>
                <span>Independent experience in </span>
                <div>Discord bots, AWS, Electron, Jenkins, Figma</div>
                <span>try some now</span>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-primary theme-inverse">
          <DavidCards />
        </section>

        {/*       <Me /> */}
        {/*        <section>
          <Experiences />
        </section> */}
        <section className="bg-primary">
          <DavidSubscription />
        </section>

        <Footer />
      </div>
    </main>
  )
}

function Hero() {
  return (
    <div className="flex flex-col md:flex-row gap-2 justify-center items-center relative overflow-hidden">
      <div className="flex flex-col text-center justify-center z-10 min-h-[80vh]">
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary">David Chen</h1>
        <span className="text-xl md:text-2xl text-secondary">Generic Name. Unique Individual.</span>
        <span></span>
        <div className="mt-12">
          <button>learn more</button>
        </div>
      </div>
      <Image
        style={{ objectFit: "cover", opacity: "60%" }}
        src="/hero-1920x1280.jpg"
        alt="React Background"
        priority
        fill="relative"
      />
    </div>
  )
}
