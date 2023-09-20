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
import { Button } from "@/components/ui/button"

const font = Playfair_Display({ subsets: ["latin"], style: ["normal"], weight: ["700"] })

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative flex flex-col">
        <section className="bg-white/30">
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
          Meet <span className="text-accent">David</span>, your next essential developer.
        </span>
        <Button variant="secondary" size="lg" className="mt-8 rounded-full">
          Talk to David
        </Button>
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
