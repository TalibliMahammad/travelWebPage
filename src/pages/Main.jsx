import React from 'react'
import MainPackages from '../components/MainPackages'
import AboutUs from '../components/AboutUs'
import ChoosePlace from '../components/ChoosePlace'
import WhyUs from '../components/WhyUs'
import Testimonials from '../components/Testimonials'
import StartPlannig from '../components/StartPlannig'

const Main = () => {
    return (
        <div>
            <MainPackages />
            <AboutUs/>
            <ChoosePlace/>
            <WhyUs/>
            <Testimonials/>
            <StartPlannig />
        </div>
    )
}

export default Main