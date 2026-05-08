import React from "react";
import about from "../../assets/aboutUs.avif";
import { Link } from "react-router";

export default function AboutUs() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-5 gap-8 my-20">
      <div className="md:col-span-3 flex flex-col px-4 md:px-0" data-aos="fade-right" data-aos-duration="2000">
        <h2 className="text-3xl md:text-4xl font-bold text-(--primary-color)">
          About Us
        </h2>
        <hr className="w-40 border-2 border-(--primary-color) my-6" />
        <p className="lora text-xl text-(--text-color)">
          We are a modern digital solutions team dedicated to helping businesses
          and personal brands succeed online. Through Digital Marketing, Web
          Development, and Graphic Design, we transform your ideas into
          professional and impactful digital experiences. Our goal is to provide
          creative and strategic solutions by combining innovation, technology,
          and smart planning to make your brand stronger and more attractive. We
          believe every business has its own unique identity, and our mission is
          to present that identity beautifully in the digital world.{" "}
          <Link to="/about" className="text-(--primary-color) hover:underline">
            More
          </Link>
        </p>
      </div>
      <div className="md:col-span-2" data-aos="fade-left" data-aos-duration="2000">
        <img
          className="w-full object-cover border-4 border-(--primary-color) hover:bg-(--var-color-primary) hover:scale-105 duration-500 hover:brightness-75"
          src={about}
          alt="About Us"
        />
      </div>
    </div>
  );
}
