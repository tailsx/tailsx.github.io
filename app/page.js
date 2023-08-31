import Footer from "./components/footer"
import Nav from "./components/nav"
import Me from "./components/me"
import David from "./components/david"
import Experiences from "./experiences"
import DavidSubscription from "./components/davidSubscription"
import Headshot from "./components/headshot"

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Nav />
      <div className="relative flex flex-col">
        <section className="bg-red-400">
          <Hero />
        </section>
        <section className="bg-green-400 px-2 py-4 flex flex-col items-center">
          <Headshot />
          <div>
            <span>tech skills here</span>
          </div>
        </section>
        <section>
          <span>personality/soft skills here`</span>
          <span>React enjoyer</span>
          <span>Versitile</span>
          <span>Competitive</span>
          <span>Open Minded</span>
          <span>Confident</span>
        </section>
        <section>
          <span>landing page expert</span>
        </section>

        <Me />
        <section>
          <Experiences />
        </section>
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
    <div className="flex flex-col md:flex-row gap-2 min-h-[400px] justify-center items-center">
      <div className="flex flex-col text-center">
        <h1 className="text-4xl font-extrabold">David Chen</h1>
        <span>Generic Name. Unique Personality.</span>
        <span></span>
        <div className="mt-20">
          <button>learn more</button>
        </div>
      </div>
    </div>
  )
}
