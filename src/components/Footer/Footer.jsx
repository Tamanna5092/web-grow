import React from "react";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { BsInstagram, BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-0">
        {/* Logo Section */}
        <aside className="lg:col-span-">
          <img src={logo} alt="Company Logo" className="w-32 mb-4" />
          <p className="lora text-lg leading-relaxed">
            WebGrow helps businesses grow with modern web development and
            result-driven digital marketing solutions.
          </p>
          <div className="flex space-x-4 mt-4">
            <span className="border-2 border-(--primary-color) rounded-full hover:bg-(--primary-color) hover:text-white">
              {" "}
              <FaFacebookF className="w-8 h-8 p-2" />
            </span>
            <span className="border-2 border-(--primary-color) rounded-full hover:bg-(--primary-color) hover:text-white">
              {" "}
              <FaLinkedinIn className="w-8 h-8 p-2" />
            </span>
            <span className="border-2 border-(--primary-color) rounded-full hover:bg-(--primary-color) hover:text-white">
              {" "}
              <BsInstagram className="w-8 h-8 p-2" />
            </span>
            <span className="border-2 border-(--primary-color) rounded-full hover:bg-(--primary-color) hover:text-white">
              {" "}
              <BsTwitterX className="w-8 h-8 p-2" />
            </span>
          </div>
        </aside>
        {/* Services */}
        <nav className="flex flex-col space-y-2 lora text-lg">
          <h6 className="font-bold text-xl roboto mb-2 text-(--primary-color)">
            Our Services
          </h6>
          <a className="hover:text-(--primary-color) hover:underline transition">
            Branding
          </a>
          <a className="hover:text-(--primary-color) hover:underline transition">
            Design
          </a>
          <a className="hover:text-(--primary-color) hover:underline transition">
            Marketing
          </a>
          <a className="hover:text-(--primary-color) hover:underline transition">
            Advertisement
          </a>
        </nav>
        {/* Company */}
        <nav className="flex flex-col space-y-2 lora text-lg">
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
        <nav className="flex flex-col space-y-2 lora text-lg">
          <h6 className="font-bold text-xl roboto mb-2 text-(--primary-color)">
            Contact Info
          </h6>
          <a className="hover:text-(--primary-color) transition">0123456789</a>
          <a className="hover:text-(--primary-color) transition">
            webgrow@company.com
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
