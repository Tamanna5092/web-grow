import React from "react";
import { Link } from "react-router";

export default function ContactUs() {
  return (
    <div className="bg-(--primary-color)/80 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          <h3 className="md:col-span-3 lora text-3xl font-bold text-white text-center">
            Make an inquiry and let's discuss how we can help your business
            grow.
          </h3>
          <Link
            to={"/contact"}
            className="md:col-span-1 bg-white text-(--primary-color) py-2 px-6 rounded-full hover:bg-gray-200 hover:text-black hover:scale-110 hover:-translate-y-1 transition duration-500 mt-6 block mx-auto"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
