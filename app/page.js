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
        <section className="bg-white/30">
          <Hero />
        </section>
        <section className="bg-primary px-2 py-4">
          <DavidFeatures />
        </section>
        <section className="bg-primary theme-inverse">
          <DavidCards />
        </section>

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
      <div className="flex flex-col justify-center z-10 min-h-[80vh]">
        <span className="text-base md:text-lg lg:text-2xl text-neutral">Generic Name.</span>
        <span
          className={`${font.className} text-5xl md:text-6xl lg:text-[72px] uppercase font-bold bg-clip-text text-transparent animate-uniqueTitle`}
        >
          Unique
        </span>
        <span className="px-1 text-3xl md:text-4xl lg:text-5xl text-primary tracking-[6px] md:tracking-[8px] lg:tracking-[8px]">
          Individual
        </span>
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
