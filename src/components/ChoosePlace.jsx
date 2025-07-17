import React, { useEffect, useRef } from 'react'
import { MdArrowRightAlt } from "react-icons/md";
import img1 from '../assets/home-destination1.jpg'
import img2 from '../assets/home-destination2-1.jpg'
import img3 from '../assets/home-destination3.jpg'
import img4 from '../assets/home-destination4.jpg'
import img5 from '../assets/home-destination5-1.jpg'

const ChoosePlace = () => {

    const [isVisible, setIsVisible] = React.useState(false);
    const ref = React.useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0,
            }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);




    return (

        <div ref={ref}
            className={` flex flex-col gap-5 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } `}>

            <div className='flex  lg:flex-row flex-col  items-center lg:items-start justify-center  mt-10 text-black  gap-7 '>

                <div className='flex flex-col  text-center lg:text-left  w-[100%]  lg:w-[386px]  gap-5 '>
                    <div className='flex justify-center lg:justify-start'>
                        <h5 className='bg-orange-400 itmes-center  text-orange-100 p-2  w-[200px]  rounded-xl text-center font-serif'>Choose Your Place</h5>
                    </div>

                    <h1 className='text-[3rem]  font-bold mt-10'>
                        Popular Destinations
                    </h1>

                    <p className=' p-2  rounded-xl  font-serif text-[15px] lg:text-[1rem]'>Curated journeys to the world's most extraordinary destinations. Let us transform your travel dreams into unforgettable memories</p>
                    <div className='flex  justify-center   lg:justify-start  '>
                        <button className="  w-[220px] flex gap-2 items-center bg-orange-500 hover:bg-orange-600 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out h-14 px-8 rounded-2xl text-white md:text-[20px] font-semibold">Find Packages <MdArrowRightAlt /> </button>
                    </div>
                </div>


                <div className={`relative  p-5 md:p-0 `}>
                    <img className='object-cover rounded-[100px] ' src={img1} alt="" />
                </div>

                <div className='relative p-5 md:p-0 text-center'>
                    <img className='object-cover rounded-[100px]' src={img2} alt="" />

                </div>

            </div>


            <div className='flex  lg:flex-row flex-col    items-center justify-center lg:items-end gap-7 '>
                <div className='relative p-5 md:p-0'>
                    <img className='object-cover rounded-[100px] h-[] ' src={img3} alt="" />

                </div>

                <div className='relative p-5 md:p-0 '>
                    <img className='object-cover rounded-[100px]' src={img4} alt="" />

                </div>
                <div className='relative p-5 md:p-0 '>
                    <img className='object-cover rounded-[100px]' src={img5} alt="" />
                </div>

            </div>
        </div>
    )
}

export default ChoosePlace