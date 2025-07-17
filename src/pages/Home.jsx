import React from 'react'
import homeImage from '../assets/hero.jpg'
import Header from '../components/header'
import { CiPlay1 } from "react-icons/ci";

const Home = () => {

    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${homeImage})` }}>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-50">
                <Header />
            </div>

            <div className='flex items-center justify-center  h-full text-center lg:text-left'>

                <div className="  fade-in-up relative z-10 lg:mt-0  mt-15 text-white flex  flex-col gap-15   lg:gap-5 items-center lg:items-start p-5 lg:p-0  justify-center  lg:w-[59%]  ">
                    <span className='bg-white/50 rounded-2xl p-2 w-[200px] flex justify-center' >Experience luxury travel</span>
                    <p className='xl:w-[60%] font-bold text-[1.5rem] md:text-[3rem]  xl:text-[4rem]'>
                        Explore the World Like Never Before</p>
                    <h6 className='xl:w-[50%] text-[15px] lg:text-2xl '>Curated journeys to the world's most extraordinary destinations. Let us transform your travel dreams into unforgettable memories</h6>


                    <div className="flex gap-5 md:mt-5 mb-10 flex-wrap justify-center">

                        <button className="bg-orange-500 hover:bg-orange-600 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out h-14 px-8 rounded-2xl text-white text-[20px] font-semibold">
                            Start Planning
                        </button>


                        <button className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out h-14 px-6 rounded-2xl text-white text-[20px] font-semibold group">

                            <CiPlay1 className="text-2xl group-hover:translate-x-1 transition-transform duration-300" />
                            Watch Video
                        </button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Home