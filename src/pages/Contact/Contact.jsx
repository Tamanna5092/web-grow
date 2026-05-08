import React, { useRef, useState } from "react";
import { FaRegHandPointRight } from "react-icons/fa6";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { IoIosSend } from "react-icons/io";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_89awm2h", "template_lg6qzkp", form.current, {
        publicKey: "C1LB4sf41D8cJFjTP",
      })
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          toast.error("FAILED...", error.text);
          setLoading(false);
        },
      );
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto my-10 px-4 md:px-0">
      <div data-aos="fade-right" data-aos-duration="1000">
        <h3 className="text-2xl md:text-3xl font-bold text-(--primary-color) w-fit border-b-2 border-(--primary-color) mb-10">
          Contact Us
        </h3>
        <p className="lora text-xl text-(--text-color) mb-6">
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
              <p className="lora text-xl text-(--text-color)">
                +8801794607164, +8801982845092
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="border-2 border-(--primary-color) rounded-full hover:bg-(--primary-color) hover:text-white transition duration-300">
              {" "}
              <IoMailOutline className="w-10 h-10 p-2" />
            </span>
            <div>
              <p className="lora text-xl text-(--text-color)">
                sharifulislamsiam06@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="border-2 border-(--primary-color) rounded-full hover:bg-(--primary-color) hover:text-white transition duration-300">
              {" "}
              <IoLocationOutline className="w-10 h-10 p-2" />
            </span>
            <div>
              <p className="lora text-xl text-(--text-color)">
                Kishoreganj, Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center lora text-xl mt-6">
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
              <p>Sunday - Saturday:</p>
              <p>24/7 Hours</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Friday: 12:00 PM - 3:00 PM</p>
              <p>Closed</p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000">
        <h3 className="text-2xl md:text-3xl font-bold text-(--primary-color) w-fit border-b-2 border-(--primary-color) mb-10">
          Get In Touch
        </h3>

        <div className="">
          <form ref={form} onSubmit={sendEmail}>
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
                <button
                  disabled={loading}
                  type="submit"
                  className="flex justify-center items-center gap-2 btn-primary-custom"
                >
                  {loading ? (
                    <>
                      {" "}
                      <span>
                        <TbFidgetSpinner className="animate-spin" />
                      </span>{" "}
                      Loading...
                    </>
                  ) : (
                    <>
                      <span>
                        <IoIosSend />
                      </span>
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
