import React from "react";
import { Link } from "react-router";
import image from "../../assets/6.jpg";

export default function ContactUs() {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-125 md:h-96 object-cover"
          src={image}
          alt=""
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute text-white inset-0 flex flex-col justify-center items-center gap-4">
          <div className="w-full">
            <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-0">
              <div className="w-full border-b border-(--primary-color)">
                <h3 className="text-3xl md:text-6xl font-extrabold">7+</h3>
                <p className="lora text-xl text-(--primary-color) mb-2">
                  Satisfied Clients
                </p>
              </div>
              <div className="w-full border-b border-(--primary-color)">
                <h3 className="text-3xl md:text-6xl font-extrabold">13+</h3>
                <p className="lora text-xl text-(--primary-color) mb-2">
                  Projects Complete
                </p>
              </div>
              <div className="w-full border-b border-(--primary-color)">
                <h3 className="text-3xl md:text-6xl font-extrabold">3+</h3>
                <p className="lora text-xl text-(--primary-color) mb-2">
                  Team Members
                </p>
              </div>
              <div className="w-full border-b border-(--primary-color)">
                <h3 className="text-3xl md:text-6xl font-extrabold">3+</h3>
                <p className="lora text-xl text-(--primary-color) mb-2">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-(--primary-color)/80 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-6">
            <h3 className="md:col-span-3 text-2xl font-bold text-white text-center">
              Make an inquiry and let's discuss how we can help your business
              grow.
            </h3>
            <div className="md:col-span-1 flex justify-center items-center">
              <Link
                to={"/contact"}
                className="md:col-span-1 items-center bg-white text-(--primary-color) py-2 px-6 rounded-full hover:bg-gray-200 hover:text-black hover:scale-110 hover:-translate-y-1 transition duration-500"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
