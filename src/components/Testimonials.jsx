import React from 'react'
import imgReview from '../assets/home-review.png'
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Testimonials = () => {


const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });



return (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 100 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 1, ease: 'easeOut' }}
    className='pt-[15vh] flex flex-col items-center justify-center'
  >
    <div className='flex flex-col items-center justify-around gap-10'>
      <motion.h5
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className='bg-orange-400 text-orange-100 p-2 w-[200px] rounded-xl text-center font-serif'
      >
        Testimonials
      </motion.h5>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
        className='text-[3rem] font-bold'
      >
        Top Reviews
      </motion.h1>

      <motion.div
        initial={{ rotate: -90, opacity: 0 }}
        animate={inView ? { rotate: 0, opacity: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.6, ease: 'backOut' }}
      >
        <FaQuoteLeft className='text-[5rem] text-orange-500' />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className='text-center md:text-[1.5rem] w-[50%]'
      >
        “An absolutely incredible experience! The attention to detail and personalized service made our Maldives trip unforgettable. Highly recommend!”
      </motion.p>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
        className='flex flex-col items-center gap-10'
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src={imgReview} alt="reviewer" />
        </motion.div>

        <motion.h5
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          className='text-[1.5rem] font-bold'
        >
          Mahammad Talıblı
        </motion.h5>
      </motion.div>
    </div>
  </motion.div>
);

}

export default Testimonials