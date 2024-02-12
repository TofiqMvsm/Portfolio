import React, { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { ProjectContext } from "../context/ProjectContext";
const Footer = () => {
  const { dark } = useContext(ProjectContext);
  return (
    <footer
      className={`w-[100%] h-1/5 mx-auto items-center flex flex-col gap-10 py-8 ${
        dark ? "bg-[#1f2937]" : "bg-[#f5f5f5]"
      }`}
    >
      <div>
        <ul className="flex gap-5">
          <li
            className={`w-[40px] h-[40px] rounded-full ${
              dark ? "social-link-dark" : "social-link-light"
            }  flex justify-center items-center text-2xl social-link transition-all duration-200`}
          >
            <a href="https://github.com/TofiqMvsm">
              {" "}
              <FaGithub className="social" />
            </a>
          </li>
          <li
            className={`w-[40px] h-[40px] rounded-full ${
              dark ? "social-link-dark" : "social-link-light"
            }  flex justify-center items-center text-2xl social-link transition-all duration-200`}
          >
            <a href="#" className="transition-all duration-200">
              <FiMessageCircle className="social" />
            </a>
          </li>
          <li
            className={`w-[40px] h-[40px] rounded-full ${
              dark ? "social-link-dark" : "social-link-light"
            }  flex justify-center items-center text-2xl social-link transition-all duration-200`}
          >
            <a href="https://www.linkedin.com/in/tofiq-movsumov-b41671252/">
              <FaLinkedinIn className="social transition-all duration-200" />
            </a>
          </li>
        </ul>
      </div>
      <p className="text-[#9296a0] ">Coded by Tofiq Movsumov - 2024</p>
    </footer>
  );
};

export default Footer;
