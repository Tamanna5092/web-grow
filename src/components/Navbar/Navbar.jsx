import React, { useEffect, useState } from "react";
import { FaCode, FaRegMoon } from "react-icons/fa";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import { TiWeatherSunny } from "react-icons/ti";
import { Link } from "react-router";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((open) => !open);
  };

  useEffect(() => {
    const saveTheme = localStorage.getItem("theme");
    if (saveTheme) {
      setTheme(saveTheme);
      document.documentElement.setAttribute("data-theme", saveTheme);
    }
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const navlinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "about",
    },
    {
      title: "Skills",
      path: "skills",
    },
    {
      title: "Services",
      path: "services",
    },
    {
      title: "Projects",
      path: "projects",
    },
    {
      title: "Career",
      path: "career",
    },
    {
      title: "Contact",
      path: "contact",
    },
  ];

  return (
    <div className="relative shadow-lg border border-[#fde047] py-3 px-4">
      <div className="flex justify-between">
        <div className="logo">
          <div className="flex items-center gap-1">
            <span>
              <FaCode className="w-6 h-6" />
            </span>
            <h2 className="lora text-2xl font-semibold text-[#facc15]">
              {" "}
              WebGrow
            </h2>
          </div>
        </div>
        <div className="hidden sm:flex justify-center items-center">
          <ul className="flex gap-4">
            {navlinks.map((navlink) => (
              <li
                className="hover:text-[#facc15] transition duration-300 cursor-pointer"
                key={navlink.path}
              >
                <Link
                  to={`${navlink.path}`}
                  smooth={true}
                  duration={600}
                  offset={-40}
                >
                  {navlink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <div className="flex space-x-4">
            <button
              onClick={handleThemeToggle}
              className="border p-2 rounded-full text-[#facc15] border-[#facc15] hover:bg-[#facc15] hover:text-white transition duration-300"
            >
              {theme === "light" ? <FaRegMoon /> : <TiWeatherSunny />}
            </button>
            <button
              onClick={handleOpenMenu}
              className="flex items-center space-x-4 sm:hidden"
            >
              {openMenu ? (
                <span>
                  <IoClose className="w-6 h-6" />
                </span>
              ) : (
                <span>
                  <IoMenuSharp className="w-6 h-6" />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* dropdown */}
      {openMenu && (
        <div className="absolute w-full -ml-4 mx-auto bg-base-100/80 backdrop-blur-md text-base-content shadow-xl rounded-2xl z-20 mt-4 sm:hidden">
          <ul className="flex flex-col">
            {navlinks.map((navlink) => (
              <li
                className="my-1 px-10 hover:bg-[#facc15] rounded-2xl py-1 transition duration-300 cursor-pointer"
                key={navlink.path}
              >
                <Link
                  to={`${navlink.path}`}
                  smooth={true}
                  duration={600}
                  offset={-40}
                  onClick={() => setOpenMenu(false)}
                >
                  {navlink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
