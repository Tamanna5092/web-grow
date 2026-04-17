import React from "react";
import { FaRegHandPointRight } from "react-icons/fa6";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";

export default function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto my-10 px-4 md:px-0">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-(--primary-color) w-fit border-b-2 border-(--primary-color) mb-10">
          Contact Us
        </h3>
        <p className="lora text-lg mb-6">
          Whether you need a website or digital marketing services, we are here
          to help. Get in touch with us and let's build something amazing
          together.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="border-2 border-(--primary-color) rounded-full hover:bg-(--primary-color) hover:text-white transition duration-300">
              {" "}
              <IoCallOutline className="w-10 h-10 p-2" />
            </span>
            <div>
              <p className="lora text-lg">+8801982845092</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="border-2 border-(--primary-color) rounded-full hover:bg-(--primary-color) hover:text-white transition duration-300">
              {" "}
              <IoMailOutline className="w-10 h-10 p-2" />
            </span>
            <div>
              <p className="lora text-lg">webgrow@company.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="border-2 border-(--primary-color) rounded-full hover:bg-(--primary-color) hover:text-white transition duration-300">
              {" "}
              <IoLocationOutline className="w-10 h-10 p-2" />
            </span>
            <div>
              <p className="lora text-lg">Kishoreganj, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center lora text-lg mt-6">
          <span>
            <FaRegHandPointRight className="text-(--primary-color)" />
          </span>
          <a
            href="https://maps.app.goo.gl/EVC4ajrYwiHWPkni9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-(--primary-color) transition"
          >
            Get Directions
          </a>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-(--primary-color) w-fit border-b-2 border-(--primary-color) my-6">
            Opening Hours
          </h3>
          <div className="max-w-sm bg-(--primary-color)/10 p-4 rounded-lg space-y-4">
            <div className="flex items-center justify-between">
              <p>Monday: Friday:</p>
              <p>9:00 AM - 6:00 PM</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Saturday:</p>
              <p>10:00 AM - 4:00 PM</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Sunday:</p>
              <p>Closed</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-(--primary-color) w-fit border-b-2 border-(--primary-color) mb-10">
          Get In Touch
        </h3>

        <div className="">
          <form>
            <div className="space-y-4">
              <div className="">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  className="w-full border border-gray-300 focus:border-none focus:outline-2 focus:outline-(--primary-color) p-2"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full border border-gray-300 focus:border-none focus:outline-2 focus:outline-(--primary-color) p-2"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="w-full border border-gray-300 focus:border-none focus:outline-2 focus:outline-(--primary-color) p-2"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full border border-gray-300 focus:border-none focus:outline-2 focus:outline-(--primary-color) p-2"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Your Message"
                  className="w-full border border-gray-300 focus:border-none focus:outline-2 focus:outline-(--primary-color) p-2"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="btn-primary-custom">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
