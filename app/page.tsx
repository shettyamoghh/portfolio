import Clients from "@/components/Clients"
import Experience from "@/components/Experience"
import Footer from "@/components/Footer"
import Grid from "@/components/Grid"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import { FloatingNav } from "@/components/ui/FloatingNav"
import { navItems } from "@/data"

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <Projects />
        {/* <Clients /> */}
        <Experience />
        <Footer />
      </div>
    </main>
  )
}