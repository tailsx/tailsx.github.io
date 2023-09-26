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
import Hero from "@/app/components/hero"

const font = Playfair_Display({ subsets: ["latin"], style: ["normal"], weight: ["700"] })

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col">
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
    </main>
  )
}
