import Footer from "./components/footer"
import Nav from "./components/nav"
import Me from "./components/me"
import David from "./components/david"
import Experiences from "./experiences"

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Nav />
      <div className="relative p-4 flex flex-col items-center">
        <David />

        <Me />
        <section>
          <Experiences />
        </section>

        <Footer />
      </div>
    </main>
  )
}
