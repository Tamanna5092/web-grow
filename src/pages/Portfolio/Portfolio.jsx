import React, { useState } from "react";
import { Link } from "react-router";

const projects = [
  {
    id: 1,
    title: "Star Shelter Tourism",
    category: "Web Development",
    image: "https://i.ibb.co.com/tFFn72Q/tourisom.png",
    shortDescription:
      "Star Shelter Tourism is your trusted guide for planning your next great adventure.",
    liveLink: "https://starshelter-tourism.web.app",
  },
  {
    id: 2,
    title: "Youtube SEO Campaign",
    category: "Digital Marketing",
    image:
      "https://i.ibb.co.com/HptfDSY4/Shoriful-Islam-Siam-Digital-Marketer-Profile-jpg.jpg",
    shortDescription:
      "Successful Youtube SEO campaign boosting rankings & traffic.",
    liveLink:
      "https://drive.google.com/file/d/172vQznDpOgulDbBOsGileZhrJsbaFI7Z/view",
  },
  {
    id: 3,
    title: "Creative Design Portfolio",
    category: "Graphic Design",
    image: "https://i.ibb.co.com/Y4ct7ydv/Anik-Jaman.jpg",
    shortDescription: "Modern branding & graphic design showcase.",
    liveLink:
      "https://drive.google.com/file/d/1DRiXtZoSMu670KEzD4hmM_zwILADQrR8/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Star Land Line Resort",
    category: "Web Development",
    image: "https://i.ibb.co.com/5X2150fm/real-state1.png",
    shortDescription:
      "In this Real Estate project, users can explore detailed information about various houses available for rent and purchase.",
    liveLink: "https://real-estate-88042.web.app",
  },
  {
    id: 5,
    title: "Book Vibe",
    category: "Web Development",
    image: "https://i.ibb.co.com/JWCPt3jz/books.png",
    shortDescription:
      "Book Vibe is a simple frontend application built with React and Local Storage.",
    liveLink: "https://equal-thumb.surge.sh",
  },
  {
    id: 6,
    title: "Book Store Library",
    category: "Web Development",
    image: "https://i.ibb.co.com/YB1hSQts/library.png",
    shortDescription:
      "Comprehensive book store management library for efficient inventory & sales tracking.",
    liveLink: "https://dimple-firebase-3af84.firebaseapp.com",
  },
  {
    id: 7,
    title: "Google Ads Campaign",
    category: "Digital Marketing",
    image:
      "https://i.ibb.co.com/YFQ1Rj74/Shoriful-Islam-Siam-Digital-Marketer.jpg",
    shortDescription:
      "Successful Google Ads campaign driving conversions & sales.",
    liveLink:
      "https://drive.google.com/file/d/1c_tPnTrPNcfqPoxLxtkQf9nqXvqlnqBa/view",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-2 py-4 md:px-0">
      <p
        data-aos="zoom-in-down"
        data-aos-duration="1000"
        className="text-2xl lora text-center mt-10"
      >
        Welcome to our portfolio!
      </p>
      <h1
        data-aos="zoom-in-down"
        data-aos-duration="1000"
        className="text-4xl font-bold text-center mt-4"
      >
        Here are some of our projects
      </h1>
      {/* category button */}
      <div className="flex flex-wrap gap-3 justify-center mt-10">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-5 py-2 rounded-lg transition duration-500 border ${
            selectedCategory === "All"
              ? "bg-(--primary-color) text-white border-(--primary-color)"
              : "bg-(--primary-color)/20 border-b-4 border-(--primary-color) hover:bg-(--primary-color) hover:text-white"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory("Web Development")}
          className={`px-5 py-2 rounded-lg transition duration-500 border ${
            selectedCategory === "Web Development"
              ? "bg-(--primary-color) text-white border-(--primary-color)"
              : "bg-(--primary-color)/20 border-b-4 border-(--primary-color) hover:bg-(--primary-color) hover:text-white"
          }`}
        >
          Website
        </button>
        <button
          onClick={() => setSelectedCategory("Digital Marketing")}
          className={`px-5 py-2 rounded-lg transition duration-500 border ${
            selectedCategory === "Digital Marketing"
              ? "bg-(--primary-color) text-white border-(--primary-color)"
              : "bg-(--primary-color)/20 border-b-4 border-(--primary-color) hover:bg-(--primary-color) hover:text-white"
          }`}
        >
          Marketing
        </button>
        <button
          onClick={() => setSelectedCategory("Graphic Design")}
          className={`px-5 py-2 rounded-lg transition duration-500 border ${
            selectedCategory === "Graphic Design"
              ? "bg-(--primary-color) text-white border-(--primary-color)"
              : "bg-(--primary-color)/20 border-b-4 border-(--primary-color) hover:bg-(--primary-color) hover:text-white"
          }`}
        >
          Graphic
        </button>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {/* Add our portfolio content here */}
        {filteredProjects.map((project) => (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
            className="group p-4 shadow-[0_0_25px_rgba(0,0,0,0.25)] rounded-lg hover:-translate-y-4 transition duration-500"
          >
            <div className="">
              <img
                className="w-full h-72 object-cover rounded-lg transition duration-500"
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p className="lora text-lg mt-2 px-4">
                {project.shortDescription}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
