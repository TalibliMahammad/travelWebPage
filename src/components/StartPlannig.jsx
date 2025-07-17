import React from 'react';
import { motion } from 'framer-motion';
import imgAirPlane from '../assets/AirPlane.png';
import { useInView } from 'react-intersection-observer';
import Travelgirl from '../assets/Travelgirl.png';

const StartPlannig = () => {

    const [refLeft, inViewLeft] = useInView({ trigger: true, threshold: 0.2 });
    const [refRight, inViewRight] = useInView({ trigger: true, threshold: 0.2 });


    return (
        <div className='pt-[15vh]'>
            <div className='flex items-center gap-10 flex-col pt-15 lg:flex-row bg-orange-600 justify-center'>
                <motion.div
                    ref={refLeft}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                    className='lg:w-[40%] p-5 gap-10 text-center lg:text-left items-center lg:items-start flex flex-col'
                >
                    <h1 className='text-[1.5rem] lg:text-[3rem] text-white font-bold'>
                        Ready to Start Your Adventure?
                    </h1>
                    <p className='text-[1rem] text-center lg:text-left text-white'>
                        Experience the world's most extraordinary destinations with us. Let us transform your travel dreams into unforgettable memories
                    </p>
                    <button className='w-[200px] bg-white hover:bg-orange-400 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out h-14 px-8 rounded-2xl text-black text-[20px] font-semibold'>
                        Start Planning
                    </button>
                </motion.div>


                <motion.div
                    className='hidden lg:flex w-[20vh] lg:w-[30vh] relative'
                    initial={{ y: -20 }}
                    animate={{ y: [-20, 20, -20] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <motion.img src={imgAirPlane} alt="airplane" className='w-full h-auto' />
                </motion.div>

<div   className='overflow-hidden'>
                <motion.div

                    initial={{ opacity: 0, x: 100 }} // sağdan gəlsin deyə x: 100 verdik
                    whileInView={{ opacity: 1, x: 0 }} // görünəndə yerinə otursun
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <img src={Travelgirl} alt="travel girl" className='w-full h-auto' />
                </motion.div>

</div>

            </div>
        </div>
    );
};

export default StartPlannig;
