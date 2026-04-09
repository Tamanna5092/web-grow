import React from "react";
import about from "../../assets/aboutUs.avif";
import { SlEnergy } from "react-icons/sl";
import {
  FaChartLine,
  FaCode,
  FaDollarSign,
  FaRegFaceSmile,
} from "react-icons/fa6";
import {
  MdOutlineCampaign,
  MdOutlineDesignServices,
  MdSupportAgent,
} from "react-icons/md";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";

export default function About() {
  return (
    <div>
      <div className="relative w-full h-150 md:h-175 px-2 md:px-0">
        <img className="w-full h-full object-cover" src={about} alt="Banner" />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full px-6">
          <h1 className="text-5xl font-extrabold text-center">
            Welcome to WebGrow
          </h1>
          <p className="text-center lora mt-4 text-lg">
            Your one-stop solution for all your web development and digital
            marketing needs.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto my-10 md:px-0 px-4">
        <div className="my-10">
          <h2 className="text-3xl font-bold text-center mt-10 mb-6">
            Our Story
          </h2>
          <p className="lora text-lg text-center">
            At WebGrow, we are passionate about helping businesses thrive in the
            digital landscape. Our journey began with a simple mission: to
            provide high-quality web development and digital marketing services
            that empower businesses to grow and succeed online. With a team of
            experienced professionals, we have successfully delivered numerous
            projects across various industries, earning the trust and
            satisfaction of our clients.
          </p>
        </div>
        <p className="text-center lora text-lg text-(--primary-color)">
          Our Services
        </p>
        <h2 className="text-3xl font-bold text-center">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
          <div className="flex flex-col group hover:bg-(--primary-color)/10 transition duration-300 p-6 border-2 border-(--primary-color)/50 shadow-lg rounded-lg box-shadow-custom">
            <span className="">
              <MdOutlineCampaign className="w-16 h-16 p-4 text-white bg-(--primary-color) rounded-2xl group-hover:scale-105 transition" />
            </span>
            <h2 className="text-2xl font-bold mt-6">Digital Marketing</h2>
            <p className="mt-3 lora text-lg">
              Boost your brand with smart digital marketing solutions.
            </p>
          </div>
          <div className="flex flex-col group hover:bg-(--primary-color)/10 transition duration-300 p-6 border-2 border-(--primary-color)/50 shadow-lg rounded-lg box-shadow-custom">
            <span className="">
              <TfiLayoutMediaCenterAlt className="w-16 h-16 p-4 text-white bg-(--primary-color) rounded-2xl group-hover:scale-105 transition" />
            </span>
            <h2 className="text-2xl font-bold mt-6">Social Media Management</h2>
            <p className="mt-3 lora text-lg">
              Manage your social media presence and engage with your audience
              effectively.
            </p>
          </div>
          <div className="flex flex-col group hover:bg-(--primary-color)/10 transition duration-300 p-6 border-2 border-(--primary-color)/50 shadow-lg rounded-lg box-shadow-custom">
            <span className="">
              <FaChartLine className="w-16 h-16 p-4 text-white bg-(--primary-color) rounded-2xl group-hover:scale-105 transition" />
            </span>
            <h2 className="text-2xl font-bold mt-6">SEO Optimization</h2>
            <p className="mt-3 lora text-lg">
              Improve your search engine rankings and drive organic traffic to
              your website.
            </p>
          </div>
          <div className="flex flex-col group hover:bg-(--primary-color)/10 transition duration-300 p-6 border-2 border-(--primary-color)/50 shadow-lg rounded-lg box-shadow-custom">
            <span className="">
              <MdOutlineDesignServices className="w-16 h-16 p-4 text-white bg-(--primary-color) rounded-2xl group-hover:scale-105 transition" />
            </span>
            <h2 className="text-2xl font-bold mt-6">Graphic Design</h2>
            <p className="mt-3 lora text-lg">
              Create stunning visuals that captivate your audience.
            </p>
          </div>
          <div className="flex flex-col group hover:bg-(--primary-color)/10 transition duration-300 p-6 border-2 border-(--primary-color)/50 shadow-lg rounded-lg box-shadow-custom">
            <span className="">
              <FaCode className="w-16 h-16 p-4 text-white bg-(--primary-color) rounded-2xl group-hover:scale-105 transition" />
            </span>
            <h2 className="text-2xl font-bold mt-6">Web Development</h2>
            <p className="mt-3 lora text-lg">
              Create modern, responsive websites tailored to your business
              needs.
            </p>
          </div>
          <div className="flex flex-col group hover:bg-(--primary-color)/10 transition duration-300 p-6 border-2 border-(--primary-color)/50 shadow-lg rounded-lg box-shadow-custom">
            <span className="">
              <BsLayoutTextWindowReverse className="w-16 h-16 p-4 text-white bg-(--primary-color) rounded-2xl group-hover:scale-105 transition" />
            </span>
            <h2 className="text-2xl font-bold mt-6">Web Design</h2>
            <p className="mt-3 lora text-lg">
              Create stunning, user-friendly websites that leave a lasting
              impression.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
