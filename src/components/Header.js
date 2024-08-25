import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {

    const [toggleMenu, setToggleMenu] = useState(false);

    return <header className="flex justify-between px-5 py-2  posi">
        <a className="font-bold text-white" href="#about  "  >Vinoth Kumar</a>
        <nav className="hidden md:block">
            <ul className="flex text-white header-font">
                <li><a href="/" className=' hover:text-black '>Home</a></li>
                <li><a href="#about" className=' hover:text-black'>About</a></li>
                <li><a href="#skills" className=' hover:text-black'>Skills</a></li>
                <li><a href="#project" className=' hover:text-black'>Project</a></li>
                <li><a href="#resume" className=' hover:text-black'>Resume</a></li>
                <li><a href="#contact" className=' hover:text-black'>Contact</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden ">
            <ul onClick={()=>setToggleMenu(!toggleMenu)} className="bg-secondary flex flex-col text-white mobile-nav font-bold" >
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>}

        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5' /></button>

    </header>
}