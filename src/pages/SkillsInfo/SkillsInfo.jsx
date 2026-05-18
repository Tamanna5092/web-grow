import React from "react";
import { Link, useParams } from "react-router";
import skillsInfo from "../../utilities/skillsInfo";

export default function SkillsInfo() {
  const { slug } = useParams();

  const skill = skillsInfo.find((item) => item.slug === slug);

  if (!skill) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Skill Not Found
      </div>
    );
  }

  const Icon = skill.icon;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 py-16">
      <div
        className="bg-linear-to-r from-(--primary-color)/20 to-transparent 
        border border-(--primary-color)/30 rounded-3xl p-8 md:p-14"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div
            className="w-28 h-28 rounded-3xl bg-(--primary-color)
            flex items-center justify-center shadow-xl"
          >
            <Icon className="w-14 h-14 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold">
              {skill.title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-(--text-color) lora max-w-3xl">
              {skill.description}
            </p>
          </div>
        </div>
      </div>
      {/* About Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
        <div
          className="p-8 rounded-2xl border border-(--primary-color)/30
          box-shadow-custom"
        >
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <p className="text-lg leading-8 text-(--text-color) lora">
            {skill.howItWorks}
          </p>
        </div>
        <div
          className="p-8 rounded-2xl border border-(--primary-color)/30
          box-shadow-custom"
        >
          <h2 className="text-3xl font-bold mb-6">Benefits</h2>
          <div className="space-y-4">
            {skill.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-(--primary-color)"></div>
                <p className="text-lg text-(--text-color)">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tools Section */}
      <div className="mt-16 p-8 rounded-2xl border border-(--primary-color)/30 box-shadow-custom">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Tools & Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          {skill.tools.map((tool, index) => (
            <span
              key={index}
              className=" px-6 py-3 rounded-full bg-(--primary-color)/10  border border-(--primary-color)/30 text-lg font-semibold hover:bg-(--primary-color) hover:text-white transition duration-500"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-16 rounded-3xl bg-(--primary-color) text-white text-center p-10 md:p-16">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Need This Service?
        </h2>
        <p className="mt-5 text-lg md:text-xl max-w-3xl mx-auto">
          We are ready to help you grow your business with professional
          solutions and creative strategies.
        </p>
        <Link
          to="/contact"
          className="inline-block mt-8 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition duration-500"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
