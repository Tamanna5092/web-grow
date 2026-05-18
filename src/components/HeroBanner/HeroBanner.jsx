import React from "react";
import Banner from "../../assets/banner.jpg";

export default function HeroBanner() {
  return (
    <div className="relative w-full h-150 md:h-175 px-2 md:px-0">
      <img className="w-full h-full object-cover" src={Banner} alt="Banner" />
      <div className="absolute inset-0 bg-black/50"></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full px-6"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1 className="text-4xl md:text-7xl font-extrabold text-center">
          Welcome to WebGrow
        </h1>
        <p className="text-center lora mt-4 text-2xl md:text-4xl">
          Your one-stop solution for all your web development, digital
          marketing  and graphic design needs.
        </p>
      </div>
    </div>
  );
}
