import Footer from "./components/footer"
import Nav from "./components/nav"
import Me from "./components/me"
import David from "./components/david"
import Experiences from "./experiences"
import DavidSubscription from "./components/davidSubscription"
import Headshot from "./components/headshot"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Nav />
      <div className="relative flex flex-col">
        <section className="bg-white/30">
          <Hero />
        </section>
        <section className="bg-green-400 px-2 py-4 flex flex-col items-center">
          <Headshot />
          <div className="flex flex-col md:flex-row">
            <span>Toolkit</span>
            <div className="flex gap-2">
              <span>React</span>
              <span>Next.js</span>
              <span>Tailwind</span>
            </div>
            <span>tech skills here</span>
          </div>
        </section>
        <section>
          <span>personality/soft skills here`</span>
          <span>React enjoyer</span>
          <div>
            <span>Versitile</span>
            <p>Recently doing frontend but can do full stack development as well</p>
          </div>
          <div>
            <span>Competitive</span>
            <p>{`Don't like losing and want to be the best. Be it for a team or individually. Love to competite and try and achieve the best`}</p>
          </div>
          <div>
            <span>Number Guy</span>
            <p>Performance metrics, rankings. Love to make sense of them and find meaning </p>
          </div>
          <span>Confident</span>
        </section>
        <section>
          <span>landing page expert</span>
        </section>

        <Me />
        {/*        <section>
          <Experiences />
        </section> */}
        <section>
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
