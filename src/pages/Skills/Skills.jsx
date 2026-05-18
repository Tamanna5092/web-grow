import React from "react";
import ourSkills  from "../../utilities/skillsInfo";
import { Link } from "react-router";

export default function Skills() {
  return (
    <div>
      <div className="max-w-7xl mx-auto my-10 md:px-0 px-4">
        <h2
          className="text-3xl md:text-5xl font-extrabold text-center"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          Our Skills
        </h2>
        <p
          className="md:max-w-4xl mx-auto text-center lora text-2xl text-(--primary-color) mt-2"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          Explore our wide range of skills and expertise in digital marketing
          and web development. We are passionate about delivering exceptional
          results for our clients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
          {ourSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Link to={`/skills/${skill.slug}`}
                key={index}
                className="flex flex-col group hover:bg-(--primary-color)/10 transition duration-300 p-6 border-2 border-(--primary-color)/50 shadow-lg rounded-lg box-shadow-custom"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={index * 100}
              >
                <Icon className="w-12 h-12 p-3 text-white bg-(--primary-color) rounded-2xl group-hover:scale-105 transition" />
                <h3 className="text-lg font-bold mt-6">{skill.title}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
