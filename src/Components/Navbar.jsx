const Navbar = () => {
  return (
    
      <ul className=" text-white flex justify-center m-auto items-center gap-5 bg-purple-950 list-none rounded overflow-hidden fixed left-2/4 -translate-x-1/2 font-bold text-2xl">
        <li className="p-4 transition-all duration-300 hover:scale-75"><a href="#home">Home</a></li>
        <li className="p-4 transition-all duration-300 hover:scale-75"><a href="#project">Project</a></li>
        <li className="p-4 transition-all duration-300 hover:scale-75"><a href="#contact">Contact</a></li>
      </ul>

  )
}

export default Navbar