import CanvasHero from "../Components/CanvasHero"

const Home = () => {
  return (
    <div id="home" className="w-secreen h-screen snap-center pt-16">
      <div className="flex justify-center items-center m-auto border h-screen" id="container">
      <div className="flex-4 p-16" id="left">
      <h1 className="text-6xl">Hello world</h1>
      <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel molestie mi. Maecenas feugiat lectus sapien, vel porttitor lacus tincidunt vitae. Duis at placerat nulla. Vivamus felis nisi, scelerisque a lacus in, viverra accumsan dui.</p>
      </div>
      <div className="flex-8 text-center" id="right">
        {/* <img src="./imgs/hero.png" className="w-[50%] h-[100%] object-contain" alt="Hero Image"/> */}
        <CanvasHero/>
      </div>
      </div>
    </div>
  )
}

export default Home