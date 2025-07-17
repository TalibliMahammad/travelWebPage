import React, { useEffect, useRef, useState } from 'react'
import img1 from '../assets/packages-01.jpg'
import img2 from '../assets/packages-02.jpg'
import img3 from '../assets/packages-03.jpg'

import { IoStar } from 'react-icons/io5';

const MainPackages = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const ref = React.useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.01,
            }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);



    return (
        <div className='flex  flex-col  '>
            <div ref={ref} className={`flex justify-center items-center flex-col mt-20 transition-all duration-500 ${isVisible ? 'fade-in-up opacity-100' : 'opacity-0 translate-y-10'
                } `}>

                <h5 className='p-5 text-white text-center bg-orange-500 w-[200px] rounded-2xl'>Popular Destinations</h5>
                <h2 className='  text-center text-[3rem] font-bold mt-10'>Handpicked Packages</h2>
            </div>

            <div ref={ref} className={` flex justify-center   flex-wrap mt-15 gap-10 p-5 xl:h-[80vh] transition-all duration-500 ${isVisible ? 'fade-in-up opacity-100' : 'opacity-0 translate-y-10'
                }  `}>
                <div className='  flex  relative   flex-col items-center '>
                    <div className=''>
                        <img className='  w-full rounded-[5rem] ' src={img1} alt="" />
                    </div>

                    <div className='bg-white absolute shadow-2xl bottom-0 xl:bottom-1 lg:p-0 p-5  xl:h-[40%] xl:w-[60%]  w-full flex flex-col justify-center gap-5 items-center  rounded-bl-[80px] rounded-br-[80px]  xl:rounded-[140px]'>
                        <span className='flex   gap-2 text-yellow-400 text-2xl'>  <IoStar />
                            <IoStar />
                            <IoStar />
                        </span>

                        <span className='font-semibold  text-3xl'>Europa</span>
                        <span className=' font-semibold text-2xl'>Spain</span>
                        <span className='font-semibold text-l'>From $2,500</span>
                    </div>
                </div>


                <div className='flex  relative   flex-col items-center'>
                    <div className=''>
                        <img className='rounded-[5rem] ' src={img2} alt="" />
                    </div>

                    <div className='bg-white absolute shadow-2xl lg:p-0 p-5  bottom-0 xl:bottom-1  w-full xl:h-[40%] xl:w-[60%]  flex flex-col justify-center gap-5 items-center   rounded-bl-[80px] rounded-br-[80px] xl:rounded-[140px]'>
                        <span className='flex gap-2 text-yellow-400 text-2xl'>  <IoStar />
                            <IoStar />
                            <IoStar />
                        </span>

                        <span className='font-semibold  text-3xl'>Europa</span>
                        <span className=' font-semibold text-2xl'>Australia</span>
                        <span className='font-semibold text-l'>From $2,500</span>
                    </div>
                </div>

                <div className='flex  relative   flex-col items-center'>
                    <div className=''>
                        <img className='rounded-[5rem] ' src={img3} alt="" />
                    </div>

                    <div className='bg-white absolute shadow-2xl lg:p-0 p-5 bottom-0 xl:bottom-1 xl:h-[40%] xl:w-[60%] w-full  flex flex-col justify-center gap-5 items-center   rounded-bl-[80px] rounded-br-[80px] xl:rounded-[140px]'>
                        <span className='flex gap-2 text-yellow-400 text-2xl'>  <IoStar />
                            <IoStar />
                            <IoStar />
                        </span>

                        <span className='font-semibold  text-3xl'>Europa</span>
                        <span className=' font-semibold text-2xl'>Egypt</span>
                        <span className='font-semibold text-l'>From $2,500</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainPackages