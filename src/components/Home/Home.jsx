import React from 'react'
import Banner from '../HeroBanner/HeroBanner'
import AboutUs from '../AboutUs/AboutUs'
import OurService from '../OurService/OurService'

export default function Home() {
  return (
    <div>
      <Banner></Banner>
       <div className='max-w-7xl mx-auto'>
        <AboutUs></AboutUs>
        <OurService></OurService>
    </div>
    </div>
  )
}
