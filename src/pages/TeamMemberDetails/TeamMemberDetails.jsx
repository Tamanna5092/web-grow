import React from "react";
import {
  FaCheckCircle,
  FaInstagram,
  FaLinkedinIn,
  FaTools,
  FaTwitter,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useParams } from "react-router";
import teamMembers from "../../utilities/teamMembers";
import { VscTools } from "react-icons/vsc";

export default function TeamMemberDetails() {
  const { slug } = useParams();
  console.log("slug:", slug);

  const member = teamMembers.find((item) => item.slug === slug);
  if (!member) {
    return <h2>Team member not found</h2>;
  }

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="grid grid-cols-1 gap-6  px-4 md:px-0  md:grid-cols-3">
        <div className="col-span-2 md:order-1">
          <h1 className="font-lato text-3xl text-(--primary-color) font-extrabold md:text-5xl">
            {member.name}
          </h1>
          <p className="text-lg text-(--text-color) font-semibold mt-2">
            {member.role}
          </p>
          <p className="text-xl font-medium mt-4">Work Experience:</p>
          <ul className="text-(--text-color) mt-2 md:mr-4">
            <li>
              <strong>Started:</strong> {member.startWork}
            </li>
            <li>
              <strong>Years Active:</strong> {member.experience}
            </li>
            <li>
              <strong>skills:</strong> {member.skills.join(", ")}
            </li>
          </ul>
          <p className=" text-xl font-medium mt-6">About Me:</p>
          <p className="text-(--text-color) mt-2 md:mr-4">{member.about}</p>
          <p className=" text-xl font-medium mt-6">Specialization:</p>
          <ul className="mt-4 space-y-2">
            {member.specialization?.map((spec, index) => (
              <li
                key={index}
                className="flex items-center text-(--text-color) gap-2"
              >
                <VscTools className="w-4 h-4 text-(--primary-color)" />
                {spec}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 md:order-2">
          <img
            className="md:h-100 w-full object-cover bg-(--primary-color)/80 p-4 hover:bg-(--secondary-color) hover:scale-105 duration-500 hover:brightness-75 animate__animated animate__fadeInRight"
            src={member.image}
            alt={member.name}
          />
          <div className="flex justify-center pt-4 space-x-4 align-center">
            {member.socialLinks?.map((link) => (
              <a
                key={link.name}
                rel="noopener noreferrer"
                href={link.url}
                aria-label={link.name}
                className="p-2 rounded-md bg-(--primary-color) hover:bg-(--primary-color)/80 transition duration-300"
              >
                <link.icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-4 md:mx-0">
        <p className="text-(--text-color) mt-10">
          <strong>About My Work and Skills:</strong> {member.description}
        </p>
      </div>
    </div>
  );
}
