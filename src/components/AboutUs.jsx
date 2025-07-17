import React, { useEffect, useRef, useState } from 'react'
import imgAbout from '../assets/image-6.png'
import miniImg from '../assets/mini.png'
import { CiCircleCheck } from "react-icons/ci";
const AboutUs = () => {

    const [isLeftVisible, setIsLeftVisible] = useState(false);
    const [isRightVisible, setIsRightVisible] = useState(false);

    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsLeftVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (leftRef.current) observer.observe(leftRef.current);
        return () => leftRef.current && observer.unobserve(leftRef.current);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsRightVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (rightRef.current) observer.observe(rightRef.current);
        return () => rightRef.current && observer.unobserve(rightRef.current);
    }, []);




    return (
        <div className='flex bg-orange-100 pt-10 overflow-hidden'>

            <div className='flex items-center lg:flex-row flex-col justify-center gap-20'>

                <div ref={leftRef} className={`w-full flex items-center justify-center lg:justify-end  transition-all duration-500 ${isLeftVisible ? 'fade-in-left opacity-100' : 'opacity-0 translat-x-[100px]'}`}>
                    <img src={imgAbout} alt="" />
                </div>

                <div ref={rightRef} className={`flex  flex-col  text-center lg:text-left items-center lg:items-start transition-all duration-500 ${isRightVisible ? 'fade-in-right opacity-100' : 'opacity-0 translat-x-[100px]'}`}>
                    <div className=' flex flex-col  items-center lg:items-start gap-14'>
                        <h5 className='p-2 text-orange-500 text-center bg-white w-[150px]  rounded-2xl'>About Us</h5>
                        <h1 className='text-[3rem] font-bold'>Your Journey, Our Passion</h1>
                        <p className='lg:p-0 p-5 lg:w-[60%]'>We believe that travel is more than just visiting new places; it's about creating memories, experiencing diverse cultures, and discovering the wonders of the world. With years of experience in the travel industry, our dedicated team is committed to providing exceptional travel experiences tailored to your unique desires and needs.</p>
                    </div>

                    <div className='flex lg:flex-row flex-col  xl:w-[60%] mt-10 items-center xl:justify-between gap-10'>
                        <div className='mt-8'>
                            <img className=' rounded-[2rem]' src={miniImg} alt="" />
                        </div>
                        <div className=' flex  items-center flex-col gap-5'>

                            <div className='flex flex-col  gap-5'>
                                <h3 className='flex items-center gap-1.5'><span><CiCircleCheck /></span>Budget-Friendly</h3>
                                <h3 className='flex items-center gap-1.5'> <span><CiCircleCheck /></span>Luxurios GateWays</h3>
                                <h3 className='flex items-center gap-1.5 '> <span><CiCircleCheck /></span>Trusted Local Guides</h3>
                            </div>

                            <div>
                                <button className="bg-orange-500 hover:bg-orange-600 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out h-14 px-8 rounded-2xl text-white text-[20px] font-semibold">
                                    Learn More
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutUs