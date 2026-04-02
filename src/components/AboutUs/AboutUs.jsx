import React from 'react'
import about from '../../assets/aboutUs.avif'

export default function AboutUs() {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-5 gap-8 my-20'>
      <div className='md:col-span-3 flex flex-col px-4 md:px-0'>
        <h2 className='text-3xl md:text-4xl font-bold text-(--primary-color)'>About Us</h2>
        <hr className='w-40 border-2 border-(--primary-color) my-6' />
        <p className='lora text-lg'>We are a team of passionate developers and designers dedicated to creating amazing web experiences that help businesses grow online. Our goal is to deliver high-quality solutions that are fast, user-friendly, and optimized for success. We focus on building modern, responsive websites and implementing result-driven digital marketing strategies that increase visibility, attract more customers, and boost overall business performance. With a strong commitment to quality, creativity, and innovation, we ensure every project we deliver meets the highest standards and provides real value to our clients.</p>
      </div>
      <div className='md:col-span-2'>
        <img className='w-full object-cover border-4 border-(--primary-color) hover:bg-(--var-color-primary) hover:scale-105 duration-500 hover:brightness-75' src={about} alt="About Us" />
      </div>
    </div>
  )
}
