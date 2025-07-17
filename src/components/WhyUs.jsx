import React from 'react'
import img from '../assets/home-tour.jpg'
import { FaWalking } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const WhyUs = () => {

    const [refLeft, inViewLeft] = useInView({ trigger: true, threshold: 0.2 });
    const [refRight, inViewRight] = useInView({ trigger: true, threshold: 0.2 });



    return (
        <div>
            <div className="relative  mt-14">

                <div className=" w-full h-[100vh] overflow-hidden">
                    <img
                        src={img}
                        alt="background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>




                <div className=" lg:gap-14 absolute inset-0 text-center p-5 overflow-hidden  flex lg:flex-row flex-col-reverse items-center justify-center">
                    <motion.div
                        ref={refLeft}
                        initial={{ x: -10, opacity: 0 }}
                        animate={inViewLeft ? { x: 0, opacity: 1 } : ""}
                        transition= {{ duration: 0.5, ease: "easeInOut" }}
                        className="text-black shadow-2xl lg:left-50 relative   lg:w-[700px] top-[5%] lg:top-[10%] flex flex-col justify-evenly bg-white rounded-2xl p-1  lg:p-5 text-[2rem] ">
                        <div className='text-center '>
                            <IoAirplane className='text-orange-600' />
                            <div className='  flex  flex-col gap-1 lg:gap-5 text-left p-1 lg:p-5'>
                                <h2 className=' text-[17px] md:text-[1.5rem]'>Customized Packages</h2>
                                <p className='text-[13px] md:text-[1rem]'>Tailor-made itineraries to suit your preferences and interests, ensuring a unique travel experience every time.</p>
                                <div className="w-[85%] h-[1px] bg-orange-600 my-2 mx-auto" />
                            </div>
                        </div>


                        <div>
                            <FaWalking className='text-orange-600' />
                            <div className='flex flex-col  gap-1 lg:gap-5 text-left p-1 lg:p-5'>
                                <h2 className=' text-[17px] md:text-[1.5rem]'>Adventure Tours</h2>
                                <p className='text-[13px] md:text-[1rem]'>Explore thrilling destinations and activities, from mountain trekking to scuba diving, for the adrenaline seekers.</p>
                                <div className="w-[85%] h-[1px] bg-orange-600 my-2 mx-auto" />
                            </div>
                        </div>

                        <div className='flex flex-col gap-1 lg:gap-5'>
                            <FaBath className='text-orange-600' />
                            <div className='flex flex-col  gap-1 lg:gap-5 text-left  p-1 lg:p-5'>
                                <h2 className='text-[17px] md:text-[1.5rem]'>Luxury Vacations</h2>
                                <p className='text-[13px] md:text-[1rem]'>Indulge in accommodation and services of the highest quality, ensuring a luxurious and comfortable stay.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        ref={refRight}
                        initial={{ x: 100, opacity: 0 }}
                        animate={inViewRight ? { x: 0, opacity: 1 } : ""}
                        transition= {{ duration: 0.5, ease: "easeInOut" }}
                    
                    className=' w-full flex justify-center flex-col items-center overflow-hidden'>
                        <div className='bg-white/50 rounded-2xl p-2 flex flex-col justify-center '>
                            <h5 className="text-white text-2xl md:text-[2rem] font-bold">Why Choose Us</h5>
                        </div>
                        <p className="text-white  font-bold text-[1rem] md::text-[2rem]  lg:w-[45%] mt-2">Discover the difference with us</p>
                    </motion.div>

                </div>
            </div>

        </div >
    )
}

export default WhyUs