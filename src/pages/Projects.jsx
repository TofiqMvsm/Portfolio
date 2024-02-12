import React, { useContext } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { ProjectContext } from "../context/ProjectContext";
import { projectData } from "../data/projectData";
const Projects = () => {
  const { dark } = useContext(ProjectContext);
  return (
    <section
      className={`${
        dark ? "bg-gray-900" : "bg-white"
      } flex justify-center items-center gap-4`}
    >
      <div className="flex flex-col w-[65%] projects gap-12 py-12">
        <h1 className="text-center capitalize text-4xl font-semibold">
          My
          <span className={`${dark ? "text-[#ffb703]" : "text-[#72b626]"}`}>
            {" "}
            Projects
          </span>
        </h1>
        <div className="flex flex-col gap-16">
          {projectData.map((e) => {
            return (
              <div key={e.id} className="flex items-center flex-wrap-reverse">
                <div className="w-1/2 flex flex-col gap-5   project-context">
                  <h3 className="text-3xl font-semibold mt-4">{e.heading}</h3>
                  <p className="font-medium">
                    <span
                      className={`${
                        dark ? "text-[#ffb703]" : "text-[#72b626]"
                      }`}
                    >
                      Tech Stack
                    </span>
                    : {e.techStack.join(", ")}
                  </p>
                  <p className="tracking-wide">{e.description}</p>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className={`${
                        dark ? "dark-live-btn" : "light-live-btn"
                      } transition-all duration-200 font-semibold live-btn py-2 gap-2 px-6 flex justify-center items-center rounded-full`}
                    >
                      Live
                      <span>
                        <FiExternalLink />
                      </span>
                    </a>
                    <a
                      href="#"
                      className={`${
                        dark ? "dark-src-btn" : "light-src-btn"
                      } transition-all duration-200 font-semibold live-btn py-2 gap-2 px-8 flex justify-center items-center rounded-full`}
                    >
                      Source
                      <span>
                        {" "}
                        <FaCode />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="w-1/2 project-img">
                  <img src={e.img} alt="laptop" className="w-full h-full object-contain" />
                </div>
              </div>
            );
          })}
          <a
          target="_blank"
            href="https://github.com/TofiqMvsm?tab=repositories"
            className={`${
              dark ? "dark-see" : "light-see"
            } text-center w-28 mx-auto py-2 rounded-full border-2 text-[17px] font-medium transition-all duration-200`}
          >
            See all
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
