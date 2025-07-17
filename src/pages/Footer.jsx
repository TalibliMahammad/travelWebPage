import React from 'react'
import logo from '../assets/logo.svg'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMailOpenSharp } from "react-icons/io5";
const Footer = () => {
    return (
        <footer className='bg-gray-800'>

            <div className=' text-white py-10 flex  lg:justify-evenly items-center lg:items-start gap-10 lg:flex-row flex-col px-10'>

                <div className='flex  flex-col  items-center lg:items-start  lg:flex-row gap-10  justify-between'>

                    <div className='flex gap-4 flex-col lg:items-start items-center text-center lg:text-left'>
                        <span>
                            <img src={logo} alt="" />
                        </span>
                        <p className='w-[70%]'>Your trusted partner for extraordinary travel experiences since 2015</p>
                    </div>

                    <div className='flex gap-4 flex-col lg:text-left text-center'>
                        <h2 className='text-[25px] font-bold'>Quick Link</h2>
                        <h3>Home</h3>
                        <h3>About</h3>
                        <h3>Packages</h3>
                        <h3>Contact</h3>
                    </div>
                </div>


                <div className='flex  flex-col  lg:flex-row  text-center lg:text-left gap-10 lg:gap-44 justify-between'>

                    <div className='flex gap-7 flex-col  items-center lg:items-start'>
                        <h2 className='text-[25px] font-bold'>Contact Us</h2>
                        <p className='flex  gap-[1px] md:gap-2 items-center '><IoLocationSharp /> 123 Travel Lane, Wanderlust City, World</p>
                        <p className='flex gap-2 items-center ' ><FaPhone /> +99455-925-35-40</p>
                        <p className='flex gap-2 items-center' ><IoMailOpenSharp />MahammadTalibli@outlook.com</p>
                    </div>

                    <div className='flex gap-4 flex-col'>
                        <h2 className='text-[25px] font-bold'>Follow Us</h2>
                        <div>Instagram</div>
                        <div>Facebook</div>
                        <div>Linkedin</div>
                        <div>Twitter</div>
                    </div>
                </div>
            </div>
            <div className='text-white flex justify-center flex-col p-5 font-bold text-center'>Copyright &copy;2025 By Mahammad Talibli
            </div>

        </footer>
    )
}

export default Footer