import CanvasHero from "./Components/CanvasHero"
import Navbar from "./Components/Navbar"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Project from "./pages/Project"


function App() {

  return (
    <>
      <Navbar/>
      <section className="w-screen h-screen snap-y snap-mandatory overflow-x-hidden text-white scroll-smooth bg-purple-950">
      <Home/>
      <Project/>
      <Contact/>
      </section>
    </>
  )
}

export default App
