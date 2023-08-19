const Navbar = () => {
  return (
    
      <ul className="flex w-[70%] justify-center m-auto items-center gap-5 bg-teal-950 list-none rounded overflow-hidden fixed">
        <li className="p-4 transition-all duration-300 hover:scale-75"><a href="#home">Home</a></li>
        <li className="p-4 transition-all duration-300 hover:scale-75"><a href="#project">Project</a></li>
        <li className="p-4 transition-all duration-300 hover:scale-75"><a href="#contact">Contact</a></li>
      </ul>

  )
}

export default Navbar