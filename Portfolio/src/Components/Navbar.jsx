import React from 'react'

const Navbar = () => {
  return (
    <header className="font-Roboto ">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        <a 
          href="#home" 
          className="text-2xl font-bold tracking-wide hover:text-blue-400 duration-300"
        >
          #KALPANA VOBINABOINA
        </a>

        <nav className="flex gap-6 text-black-800">
          <a href="#home" className="font-semibold hover:text-blue-400">Home</a>
          <a href="#about" className="font-semibold hover:text-blue-400">About</a>
          <a href="#projects" className="font-semibold hover:text-blue-400">Projects</a>
          <a href="#contact" className="font-semibold hover:text-blue-400">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
