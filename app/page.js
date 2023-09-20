import Footer from "./components/footer"
import Nav from "./components/nav"
import Me from "./components/me"
import David from "./components/david"
import Experiences from "./experiences"
import DavidSubscription from "./components/davidSubscription"
import Headshot from "./components/headshot"
import Image from "next/image"
import DavidCards from "./components/davidCards"
import DavidFeatures from "./components/davidFeatures"
import { Playfair_Display } from "next/font/google"

const font = Playfair_Display({ subsets: ["latin"], style: ["normal"], weight: ["700"] })

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative flex flex-col">
        <section>
          <Hero />
        </section>
        <section className="bg-secondary px-2 py-4">
          <DavidFeatures />
        </section>
        <section className="bg-primary">
          <DavidCards />
        </section>

        <section className="bg-secondary">
          <DavidSubscription />
        </section>

        <Footer />
      </div>
    </main>
  )
}
function Hero() {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center relative min-h-screen bg-gradient-to-r from-primary to-secondary">
      <div className="flex flex-col justify-center items-center z-10 min-h-[50vh] text-center md:text-left p-4 md:p-8 lg:p-12">
        <span className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold mt-4 mb-2">
          Ordinary Name. Extraordinary Value.
        </span>
        <span className="text-base md:text-lg lg:text-2xl text-white font-semibold mt-2">
          Meet <span className="text-secondary">David</span>, your next High-Impact Developer.
        </span>
        <a
          href="mailto:chendavid383@gmail.com"
          className="inline-flex items-center justify-center px-6 py-3 mt-8 text-lg text-white bg-secondary rounded-full hover:bg-accent transition duration-300 ease-in-out lg:h-14 lg:px-14 lg:text-lg"
        >
          Connect Now!
        </a>
      </div>
      <Image
        src="/hero-1920x1280.jpg"
        alt="React Background"
        priority
        layout="fill"
        objectFit="cover"
        className="opacity-60"
      />
    </div>
  )
}
