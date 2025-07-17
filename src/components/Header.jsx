import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
                }`}
        >
            <nav className='flex items-center justify-between w-full max-w-6xl mx-auto px-4 py-4'>

                <div className={`rounded-lg transition-colors duration-300   ${isScrolled ? 'bg-black' : ''} p-2`}>
                    <img className="h-6 md:h-10" src={Logo} alt="Logo" />
                </div>


                <div className='hidden lg:flex gap-10'>
                    {['Home', 'About', 'Packages', 'Contact'].map((item) => (
                        <span
                            key={item}
                            className={`cursor-pointer hover:text-orange-400 hover:scale-105 transition duration-300 ease-in-out ${isScrolled ? 'text-black' : 'text-white'
                                }`}
                        >
                            {item}
                        </span>
                    ))}
                </div>

                
                <button
                    onClick={() => setOpen(!open)}
                    className="text-white text-3xl focus:outline-none  lg:hidden flex"
                    aria-label="Toggle menu"     
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {open ? (
                            <motion.span
                                key="close"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <IoClose className="text-4xl text-white" />
                            </motion.span>
                        ) : (
                            <motion.span
                                key="hamburger"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <GiHamburgerMenu className="text-4xl text-white" />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </button>


                <button className="  hidden lg:flex items-center bg-orange-500 hover:bg-orange-600 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out h-14 px-8 rounded-2xl text-white md:text-[20px] font-semibold">
                    Plan Your Trip
                </button>
            </nav>
        </header>
    )
}

export default Header
