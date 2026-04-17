import React from "react";
import about from "../../assets/aboutUs.avif";
import { SlEnergy } from "react-icons/sl";
import group from "../../assets/group-members.jpg";
import {
  FaChartLine,
  FaCode,
  FaDollarSign,
  FaRegFaceSmile,
  FaRegStar,
  FaStar,
} from "react-icons/fa6";
import {
  MdOutlineCampaign,
  MdOutlineDesignServices,
  MdSupportAgent,
} from "react-icons/md";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GoGoal } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";

export default function About() {
  return (
    <div>
      <div className="relative w-full h-150 md:h-175 px-2 md:px-0">
        <img className="w-full h-full object-cover" src={about} alt="Banner" />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full px-6">
          <h1 className="text-5xl font-extrabold text-center">About WebGrow</h1>
          <p className="text-center lora mt-4 text-lg">
            We build modern websites and deliver result-driven digital marketing
            solutions to help your business grow faster online.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto my-10 md:px-0 px-4">
        <div className="my-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mt-10 mb-6">
            Our Story
          </h2>
          <p className="lora text-lg text-(--text-color) text-center max-w-4xl mx-auto">
            At WebGrow, we are passionate about helping businesses thrive in the
            digital landscape. Our journey began with a simple mission: to
            provide high-quality web development and digital marketing services
            that empower businesses to grow and succeed online. With a team of
            experienced professionals, we have successfully delivered numerous
            projects across various industries, earning the trust and
            satisfaction of our clients.
          </p>
          <div className="mt-6">
            <img className="w-full brightness-75" src={group} alt="" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col bg-(--primary-color)/10 p-6 rounded-b-2xl hover:shadow-xl transition duration-300">
              <p className="flex items-center gap-2 lora bg-(--primary-color) text-white py-2 px-4 rounded-full w-fit">
                <span>
                  <GoGoal />{" "}
                </span>
                Our Mission
              </p>
              <h4 className="text-2xl font-bold mt-6">
                Helping businesses grow online world wide
              </h4>
              <p className="mt-3 lora text-lg text-(--text-color)">
                Our mission is to help businesses grow by delivering modern,
                high-quality websites and result-driven digital marketing
                solutions that create real impact.
              </p>
            </div>
            <div className="flex flex-col bg-(--primary-color)/10 p-6 rounded-b-2xl hover:shadow-xl transition duration-300">
              <p className="flex items-center gap-2 lora bg-(--primary-color) text-white py-2 px-4 rounded-full w-fit">
                <span>
                  <FaRegEye />{" "}
                </span>
                Our Vision
              </p>
              <h4 className="text-2xl font-bold mt-6">
                We aim to become a trusted digital partner
              </h4>
              <p className="mt-3 lora text-lg text-(--text-color)">
                Our vision is to become a trusted digital partner, empowering
                businesses worldwide with innovative solutions and long-term
                success.
              </p>
            </div>
          </div>
        </div>
        <p className="text-center lora text-lg text-(--primary-color) mb-2">
          Our Services
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
          <div className="flex flex-col group hover:bg-(--primary-color)/10 transition duration-300 p-6 border-2 border-(--primary-color)/50 shadow-lg rounded-lg box-shadow-custom">
            <span className="">
              <MdOutlineCampaign className="w-16 h-16 p-4 text-white bg-(--primary-color) rounded-2xl group-hover:scale-105 transition" />
            </span>
            <h2 className="text-2xl font-bold mt-6">Digital Marketing</h2>
            <p className="mt-3 lora text-lg text-(--text-color)">
              Boost your brand with smart digital marketing solutions.
            </p>
          </div>
          <div className="flex flex-col group hover:bg-(--primary-color)/10 transition duration-300 p-6 border-2 border-(--primary-color)/50 shadow-lg rounded-lg box-shadow-custom">
            <span className="">
              <TfiLayoutMediaCenterAlt className="w-16 h-16 p-4 text-white bg-(--primary-color) rounded-2xl group-hover:scale-105 transition" />
            </span>
            <h2 className="text-2xl font-bold mt-6">Social Media Management</h2>
            <p className="mt-3 lora text-lg text-(--text-color)">
              Manage your social media presence and engage with your audience
              effectively.
            </p>
          </div>
          <div className="flex flex-col group hover:bg-(--primary-color)/10 transition duration-300 p-6 border-2 border-(--primary-color)/50 shadow-lg rounded-lg box-shadow-custom">
            <span className="">
              <FaChartLine className="w-16 h-16 p-4 text-white bg-(--primary-color) rounded-2xl group-hover:scale-105 transition" />
            </span>
            <h2 className="text-2xl font-bold mt-6">SEO Optimization</h2>
            <p className="mt-3 lora text-lg text-(--text-color)">
              Improve your search engine rankings and drive organic traffic to
              your website.
            </p>
          </div>
          <div className="flex flex-col group hover:bg-(--primary-color)/10 transition duration-300 p-6 border-2 border-(--primary-color)/50 shadow-lg rounded-lg box-shadow-custom">
            <span className="">
              <MdOutlineDesignServices className="w-16 h-16 p-4 text-white bg-(--primary-color) rounded-2xl group-hover:scale-105 transition" />
            </span>
            <h2 className="text-2xl font-bold mt-6">Graphic Design</h2>
            <p className="mt-3 lora text-lg text-(--text-color)">
              Create stunning visuals that captivate your audience.
            </p>
          </div>
          <div className="flex flex-col group hover:bg-(--primary-color)/10 transition duration-300 p-6 border-2 border-(--primary-color)/50 shadow-lg rounded-lg box-shadow-custom">
            <span className="">
              <FaCode className="w-16 h-16 p-4 text-white bg-(--primary-color) rounded-2xl group-hover:scale-105 transition" />
            </span>
            <h2 className="text-2xl font-bold mt-6">Web Development</h2>
            <p className="mt-3 lora text-lg text-(--text-color)">
              Create modern, responsive websites tailored to your business
              needs.
            </p>
          </div>
          <div className="flex flex-col group hover:bg-(--primary-color)/10 transition duration-300 p-6 border-2 border-(--primary-color)/50 shadow-lg rounded-lg box-shadow-custom">
            <span className="">
              <BsLayoutTextWindowReverse className="w-16 h-16 p-4 text-white bg-(--primary-color) rounded-2xl group-hover:scale-105 transition" />
            </span>
            <h2 className="text-2xl font-bold mt-6">Web Design</h2>
            <p className="mt-3 lora text-lg text-(--text-color)">
              Create stunning, user-friendly websites that leave a lasting
              impression.
            </p>
          </div>
        </div>
        <div className="my-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mt-10 mb-6">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="group flex flex-col md:flex-row gap-4 bg-(--primary-color)/10 p-6 rounded-lg shadow-md border-2 border-(--primary-color)/10 hover:border-(--primary-color) transition duration-300">
              <div className="">
                <span className="">
                  <SlEnergy className="w-16 h-16 p-4 text-white bg-(--primary-color) rounded-2xl group-hover:rotate-12 transition" />
                </span>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Fast & Reliable Service
                </h4>
                <p className="lora text-lg text-(--text-color)">
                  We understand the importance of timely delivery and
                  reliability in the digital world. Our team is dedicated to
                  providing fast and efficient services without compromising on
                  quality.
                </p>
              </div>
            </div>
            <div className="group flex flex-col md:flex-row gap-4 bg-(--primary-color)/10 p-6 rounded-lg shadow-md border-2 border-(--primary-color)/10 hover:border-(--primary-color) transition duration-300">
              <div className="">
                <span className="">
                  <FaRegFaceSmile className="w-16 h-16 p-4 text-white bg-(--primary-color) rounded-2xl group-hover:rotate-12 transition" />
                </span>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Client Satisfaction
                </h4>
                <p className="lora text-lg text-(--text-color)">
                  Our priority is to ensure our clients are completely satisfied
                  with the final product. We maintain open communication
                  throughout the development process to guarantee that your
                  vision is brought to life exactly as you imagined.
                </p>
              </div>
            </div>
            <div className="group flex flex-col md:flex-row gap-4 bg-(--primary-color)/10 p-6 rounded-lg shadow-md border-2 border-(--primary-color)/10 hover:border-(--primary-color) transition duration-300">
              <div className="">
                <span className="">
                  <FaDollarSign className="w-16 h-16 p-4 text-white bg-(--primary-color) rounded-2xl group-hover:rotate-12 transition" />
                </span>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Affordable Pricing
                </h4>
                <p className="lora text-lg text-(--text-color)">
                  We believe that quality web development should be accessible
                  to businesses of all sizes. That's why we offer competitive
                  pricing without compromising on the quality of our work.
                </p>
              </div>
            </div>
            <div className="group flex flex-col md:flex-row gap-4 bg-(--primary-color)/10 p-6 rounded-lg shadow-md border-2 border-(--primary-color)/10 hover:border-(--primary-color) transition duration-300">
              <div className="">
                <span className="">
                  <MdSupportAgent className="w-16 h-16 p-4 text-white bg-(--primary-color) rounded-2xl group-hover:rotate-12 transition" />
                </span>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Dedication Support
                </h4>
                <p className="lora text-lg text-(--text-color)">
                  Our commitment to our clients extends beyond project
                  completion. We offer ongoing support and maintenance to ensure
                  your website continues to perform optimally and remains
                  up-to-date with the latest technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mt-10 mb-6">
            Client Testimonials
          </h2>
          <p className="text-center lora text-lg text-(--primary-color) mb-2">
            Hear from our satisfied clients about their experience working with
            us.
          </p>
        </div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mt-10"
          >
            <SwiperSlide>
              <div className="flex flex-col justify-center text-center items-center p-6 rounded-lg shadow-md border-2 border-(--primary-color)/10 cursor-grab">
                <div>
                  <img
                    src="https://i.ibb.co.com/rKydv0Xh/successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in.jpg"
                    className="w-20 h-20 border-2 border-(--primary-color) rounded-full object-cover"
                    alt=""
                  />
                </div>
                <div className="mt-4">
                  <p className="lora text-lg text-(--text-color)">
                    "WebGrow's expertise in web development and digital
                    marketing has been instrumental in our business growth.
                    Their team is responsive, creative, and dedicated to
                    delivering results."
                  </p>
                  <p className="flex text-orange-400 gap-1 justify-center my-4">
                    <FaStar className="w-5 h-5"></FaStar>
                    <FaStar className="w-5 h-5"></FaStar>
                    <FaStar className="w-5 h-5"></FaStar>
                    <FaStar className="w-5 h-5"></FaStar>
                    <FaRegStar className="w-5 h-5"></FaRegStar>
                  </p>
                  <h4 className="text-xl font-semibold mt-4">Emily Johnson</h4>
                  <p className="text-sm text-(--text-color)">
                    Founder, Startup XYZ
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center text-center items-center p-6 rounded-lg shadow-md border-2 border-(--primary-color)/10 cursor-grab">
                <div>
                  <img
                    src="https://i.ibb.co.com/kQbYGM9/handsome-bearded-guy-posing-against-white-wall-273609-20597.jpg"
                    className="w-20 h-20 border-2 border-(--primary-color) rounded-full object-cover"
                    alt=""
                  />
                </div>
                <div className="mt-4">
                  <p className="lora text-lg text-(--text-color)">
                    "WebGrow transformed our online presence with a stunning
                    digital marketing strategies. Our traffic and sales have
                    significantly increased since working with them."
                  </p>
                  <p className="flex text-orange-400 gap-1 justify-center my-4">
                    <FaStar className="w-5 h-5"></FaStar>
                    <FaStar className="w-5 h-5"></FaStar>
                    <FaStar className="w-5 h-5"></FaStar>
                    <FaStar className="w-5 h-5"></FaStar>
                    <FaStar className="w-5 h-5"></FaStar>
                  </p>
                  <h4 className="text-xl font-semibold mt-4">Michael Brown</h4>
                  <p className="text-sm text-(--text-color)">
                    CTO, Tech Solutions
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center text-center items-center p-6 rounded-lg shadow-md border-2 border-(--primary-color)/10 cursor-grab">
                <div>
                  <img
                    src="https://i.ibb.co.com/bL4bRr6/pexels-olly-787942.jpg"
                    className="w-20 h-20 border-2 border-(--primary-color) rounded-full object-cover"
                    alt=""
                  />
                </div>
                <div className="mt-4">
                  <p className="lora text-lg text-(--text-color)">
                    "WebGrow's expertise in web development and digital
                    marketing has been instrumental in our business growth.
                    Their team is responsive, creative, and dedicated to
                    delivering results."
                  </p>
                  <p className="flex text-orange-400 gap-1 justify-center my-4">
                    <FaStar className="w-5 h-5"></FaStar>
                    <FaStar className="w-5 h-5"></FaStar>
                    <FaStar className="w-5 h-5"></FaStar>
                    <FaStar className="w-5 h-5"></FaStar>
                    <FaRegStar className="w-5 h-5"></FaRegStar>
                  </p>
                  <h4 className="text-xl font-semibold mt-4">Sarah Lee</h4>
                  <p className="text-sm text-(--text-color)">
                    Marketing Director, Creative Agency
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center text-center items-center p-6 rounded-lg shadow-md border-2 border-(--primary-color)/10 cursor-grab">
                <div>
                  <img
                    src="https://i.ibb.co.com/2NkZmNh/istockphoto-1364917563-612x612.jpg"
                    className="w-20 h-20 border-2 border-(--primary-color) rounded-full object-cover"
                    alt=""
                  />
                </div>
                <div className="mt-4">
                  <p className="lora text-lg text-(--text-color)">
                    "WebGrow's expertise in web development and digital
                    marketing has been instrumental in our business growth.
                    Their team is responsive, creative, and dedicated to
                    delivering results."
                  </p>
                  <p className="flex text-orange-400 gap-1 justify-center my-4">
                    <FaStar className="w-5 h-5"></FaStar>
                    <FaStar className="w-5 h-5"></FaStar>
                    <FaStar className="w-5 h-5"></FaStar>
                    <FaStar className="w-5 h-5"></FaStar>
                    <FaRegStar className="w-5 h-5"></FaRegStar>
                  </p>
                  <h4 className="text-xl font-semibold mt-4">David Kim</h4>
                  <p className="text-sm text-(--text-color)">
                    CEO, Startup Inc.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
