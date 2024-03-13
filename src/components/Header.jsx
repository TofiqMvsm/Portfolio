import React, { useContext, useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";
import HamburgerMenu from "./HamburgerMenu";
import resume from '/resume.pdf'
const Header = () => {
  const [showBurger, setShowBurger] = useState(window.innerWidth > 768 ? false : true);

  const { dark, setChangeDark } = useContext(ProjectContext);
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      setShowBurger(window.innerWidth > 768 ? false : true);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-10 border-b-4  flex w-[100%] justify-around items-center h-[70px] ${
        dark ? "  bg-gray-900 border-[#0c111c]" : "bg-white"
      }`}
    >
       <div className="logo">
        <p
          onClick={() => navigate("/")}
          className={`duration-300 text-4xl ${
            dark
              ? "text-[#ffb703] hover:text-[#fff]"
              : "text-[#72b626] hover:text-[#374151]"
          }  cursor-pointer`}
        >
          Tofiq
        </p>
      </div>
      {showBurger ? <HamburgerMenu/> :   <nav className="nav-list">
        <ul className="flex items-center gap-x-7">
          <Link
            to="/"
            className={`${
              dark ? "nav-link-dark" : "nav-link-light"
            } text-xl cursor-pointer  border-transparent border-4  duration-300`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${
              dark ? "nav-link-dark" : "nav-link-light"
            } text-xl cursor-pointer  border-transparent border-4  duration-300`}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`${
              dark ? "nav-link-dark" : "nav-link-light"
            } text-xl cursor-pointer  border-transparent border-4  duration-300`}
          >
            Projects
          </Link>
          <a
          href={resume}
          target="_blank"
            className={`${
              dark ? "nav-link-dark" : "nav-link-light"
            } text-xl cursor-pointer  border-transparent border-4  duration-300`}
          >
            Resume
          </a>
          <li
            className={`text-2xl  w-[40px] h-[40px] transition-all duration-200 rounded-full ${
              dark ? "bg-[#4b5563] text-white" : "bg-[#f3f4f6] text-black"
            }  hover:border-4 border-gray-400 flex justify-center items-center`}
            onClick={(e) => setChangeDark(!dark)}
          >
            {dark ? <MdLightMode /> : <MdDarkMode />}
          </li>
        </ul>
      </nav>}

    
    </header>
  );
};

export default Header;
