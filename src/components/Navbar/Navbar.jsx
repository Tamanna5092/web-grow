import React, { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import { TiWeatherSunny } from "react-icons/ti";
import { Link, NavLink } from "react-router";

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

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navlink-active" : "navlink-inactive"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? "navlink-active" : "navlink-inactive"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="skills"
          className={({ isActive }) =>
            isActive ? "navlink-active" : "navlink-inactive"
          }
        >
          Skills
        </NavLink>
      </li>
      <li>
        <details>
          <summary className="text-(--primary-color) navlink-inactive">
            Services
          </summary>
          <ul class="p-2 bg-base-100 w-52 z-1 space-y-2">
            <li>
              <NavLink
                to={"services/web-development"}
                className={({ isActive }) =>
                  isActive ? "navlink-active" : "navlink-inactive"
                }
              >
                Web Development
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"services/digital-marketing"}
                className={({ isActive }) =>
                  isActive ? "navlink-active" : "navlink-inactive"
                }
              >
                Digital Marketing
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavLink
          to="projects"
          className={({ isActive }) =>
            isActive ? "navlink-active" : "navlink-inactive"
          }
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="career"
          className={({ isActive }) =>
            isActive ? "navlink-active" : "navlink-inactive"
          }
        >
          Career
        </NavLink>
      </li>
      <li>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? "navlink-active" : "navlink-inactive"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div class="bg-base-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-2 py-4 md:px-0">
        <div className="flex justify-between items-center">
          <div>
            <Link
              to={"/"}
              className={`text-xl font-bold text-(--primary-color)`}
            >
              WebGrow
            </Link>
          </div>
          <div className="hidden sm:flex">
            <ul className="menu menu-horizontal font-semibold px-1 gap-2">
              {navLinks}
            </ul>
          </div>
          <div>
            <div className="flex space-x-3">
              <button
                onClick={handleThemeToggle}
                className="border p-2 rounded-full text-(--primary-color) border-(--primary-color) hover:bg-(--primary-color) hover:text-white transition duration-300"
              >
                {theme === "light" ? <FaRegMoon /> : <TiWeatherSunny />}
              </button>
              <button
                onClick={handleOpenMenu}
                className="flex items-center space-x-4 sm:hidden text-(--primary-color) hover:bg-(--primary-color) hover:text-white transition duration-300"
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
          <div className="absolute w-full mx-auto bg-base-100/90 backdrop-blur-md text-base-content shadow-xl rounded-2xl z-20 mt-2 sm:hidden">
            <ul className="menu p-4 font-semibold gap-2">{navLinks}</ul>
          </div>
        )}
      </div>
    </div>
  );
}
