import React from "react";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineCampaign, MdOutlineDesignServices } from "react-icons/md";
import { Link } from "react-router";

export default function OurService() {
  return (
    <div className="my-20">
      <div data-aos="zoom-in-down" data-aos-duration="1000">
        <p className="text-center lora text-lg text-(--primary-color)">
          What we do
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold text-center">
          Our Services
        </h1>
        <p className="md:max-w-3xl text-center mx-auto mt-4 lora text-2xl px-4 md:px-0">
          We offer a wide range of web development and digital marketing
          services to help your business grow online. Our services include:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10 px-4 md:px-0">
        <div
          className="flex flex-col justify-center items-center group hover:bg-(--primary-color) hover:text-white transition duration-300 p-10 border-2 border-(--primary-color) rounded-lg box-shadow-custom"
          data-aos="zoom-in"
        >
          <span>
            <MdOutlineCampaign className="w-16 h-16" />
          </span>
          <h2 className="text-2xl font-bold mt-6">Digital Marketing</h2>
          <p className="text-center mt-4 lora text-lg text-(--text-color) group-hover:text-white">
            We help your business grow online with SEO, social media marketing, and smart digital strategies.
          </p>
          <Link to="services/digital-marketing" className="mt-6">
            <FaArrowRightLong className="w-6 h-6" />
          </Link>
        </div>
        <div
          className="flex flex-col justify-center items-center group hover:bg-(--primary-color) hover:text-white transition duration-300 p-10 border-2 border-(--primary-color) rounded-lg box-shadow-custom"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <span>
            <BsLayoutTextWindowReverse className="w-16 h-16" />
          </span>
          <h2 className="text-2xl font-bold mt-6">Web Development</h2>
          <p className="text-center mt-4 lora text-lg text-(--text-color) group-hover:text-white">
            We build modern, responsive, and user-friendly websites that look great on every device.
          </p>
          <Link to="services/web-development" className="mt-6">
            <FaArrowRightLong className="w-6 h-6" />
          </Link>
        </div>
        <div
          className="flex flex-col justify-center items-center group hover:bg-(--primary-color) hover:text-white transition duration-300 p-10 border-2 border-(--primary-color) rounded-lg box-shadow-custom"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <span>
            <MdOutlineDesignServices className="w-16 h-16" />
          </span>
          <h2 className="text-2xl font-bold mt-6">Graphic Design</h2>
          <p className="text-center mt-4 lora text-lg text-(--text-color) group-hover:text-white">
            We create creative designs, logos, and branding materials that make your business stand out.
          </p>
          <Link to="services/graphic-design" className="mt-6">
            <FaArrowRightLong className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
