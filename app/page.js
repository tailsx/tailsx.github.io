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
