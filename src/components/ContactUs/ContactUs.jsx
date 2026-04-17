import React from "react";
import { Link } from "react-router";

export default function ContactUs() {
  return (
    <div className="bg-(--primary-color)/70 py-20">
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
  );
}
