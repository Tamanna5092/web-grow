import React from "react";
import {
  BsFacebook,
  BsGoogle,
  BsInstagram,
  BsLayoutTextWindowReverse,
  BsLinkedin,
  BsPalette,
} from "react-icons/bs";
import { FaChartLine, FaCode } from "react-icons/fa6";
import {
  MdOutlineCampaign,
  MdOutlineDesignServices,
  MdOutlineWeb,
} from "react-icons/md";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";

export default function Skills() {
  const ourSkills = [
    { title: "Digital Marketing", icon: MdOutlineCampaign },
    { title: "Social Media Management", icon: TfiLayoutMediaCenterAlt },
    { title: "SEO Optimization", icon: FaChartLine },
    { title: "Graphic Design", icon: MdOutlineDesignServices },
    { title: "Web Development", icon: FaCode },
    { title: "Web Design", icon: BsLayoutTextWindowReverse },
    { title: "Facebook Ads", icon: BsFacebook },
    { title: "Instagram Marketing", icon: BsInstagram },
    { title: "LinkedIn Marketing", icon: BsLinkedin },
    { title: "Google Ads", icon: BsGoogle },
    { title: "Logo Design", icon: BsPalette },
    { title: "Banner Design", icon: MdOutlineWeb },
  ];
  return (
    <div>
      <div className="max-w-7xl mx-auto my-10 md:px-0 px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center">
          Our Skills
        </h2>
        <p className="md:max-w-3xl mx-auto text-center lora text-lg text-(--primary-color) mt-2">
          Explore our wide range of skills and expertise in digital marketing
          and web development. We are passionate about delivering exceptional
          results for our clients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
          {ourSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="flex flex-col group hover:bg-(--primary-color)/10 transition duration-300 p-6 border-2 border-(--primary-color)/50 shadow-lg rounded-lg box-shadow-custom"
              >
                <Icon className="w-12 h-12 p-3 text-white bg-(--primary-color) rounded-2xl group-hover:scale-105 transition" />
                <h3 className="text-lg font-bold mt-6">{skill.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
