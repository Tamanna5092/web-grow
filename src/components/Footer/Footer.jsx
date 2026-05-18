import React from "react";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { PiIntersectThin } from "react-icons/pi";
import { FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-0">
        {/* Logo Section */}
        <aside
          className=""
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1000"
        >
          <img src={logo} alt="Company Logo" className="w-32 mb-4" />
          <p className="lora text-lg leading-relaxed">
            WebGrow helps businesses grow with modern web development and
            result-driven digital marketing solutions.
          </p>
          <div className="flex space-x-4 mt-4">
            <span className="border-2 border-(--primary-color) rounded-full hover:bg-(--primary-color) hover:text-white">
              <a
                href="https://www.facebook.com/shariful.islam.siam.2024"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="w-8 h-8 p-2" />
              </a>
            </span>
            <span className="border-2 border-(--primary-color) rounded-full hover:bg-(--primary-color) hover:text-white">
              <a
                href="https://www.instagram.com/sharifulislamsiam003"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram className="w-8 h-8 p-2" />
              </a>
            </span>
            <span className="border-2 border-(--primary-color) rounded-full hover:bg-(--primary-color) hover:text-white">
              <a
                href="https://www.linkedin.com/in/tamanna51"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="w-8 h-8 p-2" />
              </a>
            </span>
            <span className="border-2 border-(--primary-color) rounded-full hover:bg-(--primary-color) hover:text-white">
              <a
                href="https://www.pinterest.com/sharifulislamsiam006"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterest className="w-8 h-8 p-2" />
              </a>
            </span>
            <span className="border-2 border-(--primary-color) rounded-full hover:bg-(--primary-color) hover:text-white">
              <a
                href="https://x.com/tamanna_51?s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitterX className="w-8 h-8 p-2" />
              </a>
            </span>
          </div>
        </aside>
        {/* Services */}
        <nav
          className="flex flex-col space-y-2 lora text-lg"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <h6 className="font-bold text-xl roboto mb-2 text-(--primary-color)">
            Our Services
          </h6>
          <a className="hover:text-(--primary-color) hover:underline transition">
            Digital Marketing
          </a>
          <a className="hover:text-(--primary-color) hover:underline transition">
            Web Development
          </a>
          <a className="hover:text-(--primary-color) hover:underline transition">
            Graphic
          </a>
          <a className="hover:text-(--primary-color) hover:underline transition">
            Advertisement
          </a>
        </nav>
        {/* Company */}
        <nav
          className="flex flex-col space-y-2 lora text-lg"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h6 className="font-bold text-xl roboto mb-2 text-(--primary-color)">
            Company
          </h6>
          <a className="hover:text-(--primary-color) hover:underline transition">
            About us
          </a>
          <a className="hover:text-(--primary-color) hover:underline transition">
            Contact
          </a>
          <a className="hover:text-(--primary-color) hover:underline transition">
            Jobs
          </a>
          <a className="hover:text-(--primary-color) hover:underline transition">
            Press kit
          </a>
        </nav>
        {/* Contact */}
        <nav
          className="flex flex-col space-y-2 lora text-lg"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <h6 className="font-bold text-xl roboto mb-2 text-(--primary-color)">
            Contact Info
          </h6>
          <a className="hover:text-(--primary-color) transition">
            +8801794607164
          </a>
          <a className="hover:text-(--primary-color) transition cursor-pointer">
            sharifulislamsiam06@gmail.com
          </a>
          <a className="hover:text-(--primary-color) transition">
            Kishoreganj, Dhaka, Bangladesh
          </a>
        </nav>
      </div>
      <hr className="border border-(--primary-color) my-10" />
      <div className="text-center lora">
        © {new Date().getFullYear()} WebGrow. All rights reserved.
      </div>
    </footer>
  );
}
