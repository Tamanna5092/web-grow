import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

export default function OurTeam() {
  return (
    <div>
      <div>
        <p className="text-center lora text-lg text-(--primary-color)">
          Creative Staff
        </p>
        <h1 className="text-5xl font-extrabold text-center">Meet Our Team</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-20 mt-10 mb-32">
        <div className="relative group rounded-xl px-4 md:px-0">
          <img
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
            src="https://i.ibb.co.com/kQbYGM9/handsome-bearded-guy-posing-against-white-wall-273609-20597.jpg"
            alt="Enrico Brown"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition duration-500"></div>
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-[85%] p-6 rounded-xl flex justify-between items-center transition duration-500 bg-black/80 text-white group-hover:bg-(--primary-color)">
            <div>
              <h2 className="text-2xl font-bold">Shariful Islam Siam</h2>
              <p>Digital Marketer & SEO Expert</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition duration-300">
              <FaArrowRightLong />
            </div>
          </div>
        </div>
        <div className="relative group rounded-xl px-4 md:px-0">
          <img
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
            src="https://i.ibb.co.com/jZZyQ87/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manage.jpg"
            alt="Enrico Brown"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition duration-500"></div>
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-[85%] p-6 rounded-xl flex justify-between items-center transition duration-500 bg-black/80 text-white group-hover:bg-(--primary-color)">
            <div>
              <h2 className="text-2xl font-bold">Tamanna Akter Moni</h2>
              <p>Web Developer</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition duration-300">
              <FaArrowRightLong />
            </div>
          </div>
        </div>
        <div className="relative group rounded-xl px-4 md:px-0">
          <img
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
            src="https://i.ibb.co.com/2NkZmNh/istockphoto-1364917563-612x612.jpg"
            alt="Enrico Brown"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition duration-500"></div>
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-[85%] p-6 rounded-xl flex justify-between items-center transition duration-500 bg-black/80 text-white group-hover:bg-(--primary-color)">
            <div>
              <h2 className="text-2xl font-bold">Shariful Islam Siam</h2>
              <p>UI/UX Designer</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition duration-300">
              <FaArrowRightLong />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
