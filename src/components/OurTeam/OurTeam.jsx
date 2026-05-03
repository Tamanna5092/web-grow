import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";
import teamMembers from "../../utilities/teamMembers";

export default function OurTeam() {
  return (
    <div>
      <div>
        <p className="text-center lora text-lg text-(--primary-color)">
          Creative Staff
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold text-center">
          Meet Our Team
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-20 mt-10 mb-32">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="relative group rounded-xl px-4 md:px-0"
          >
            <img
              className="w-full h-96 object-cover grayscale group-hover:grayscale-0 transition duration-500"
              src={member.image}
              alt={member.name}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition duration-500"></div>
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-[85%] p-4 md:p-6 rounded-xl flex justify-between items-center transition duration-500 bg-black/80 text-white group-hover:bg-(--primary-color)">
              <div>
                <h2 className="text-lg md:text-2xl font-bold">{member.name}</h2>
                <p>{member.role}</p>
              </div>
              <Link
                to={`/team-member/${member.slug}`}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition duration-300"
              >
                <FaArrowRightLong />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
