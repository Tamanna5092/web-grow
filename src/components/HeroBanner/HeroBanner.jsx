import React from "react";
import Banner from "../../assets/banner.jpg";

export default function HeroBanner() {
  return (
    <div className="relative w-full h-150 md:h-175 px-2 md:px-0">
      <img className="w-full h-full object-cover" src={Banner} alt="Banner" />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full px-6">
        <h1 className="text-5xl font-bold text-center">Welcome to WebGrow</h1>
        <p className="text-center lora mt-4 text-lg">
          Your one-stop solution for all your web development and digital
          marketing needs.
        </p>
        <div className="flex justify-center mt-6">
          <button className="btn-primary-custom">Get Started</button>
          <button className="btn-secondary-custom">Learn More</button>
        </div>
      </div>
    </div>
  );
}
