import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { skillData } from "../data/skillCard";

const About = () => {
  const { dark } = useContext(ProjectContext);
  return (
    <section
      className={`${dark ? "bg-gray-900" : "bg-white"
        } flex justify-center items-center`}
    >
      <div className="flex flex-col w-[55%] gap-12 py-12 about-div">
        <div className="flex flex-col gap-y-5  tracking-wide">
          <span
            className={`${dark ? "text-[#ffb703]" : "text-[#72b626]"
              } text-lg font-semibold text-center`}
          >
            About me
          </span>
          <h1 className="text-center text-4xl font-semibold">
            Here's My Story
          </h1>
          <p>
            Hi, I'm Tofig Movsumov, a first-year Computer Science student at University of Tartu.I started my journey in tech with frontend development,
            which sparked my curiosity to understand the entire stack of web
            development. That curiosity led me to explore backend technologies
            like Node.js through self-paced learning, including Udemy courses.
          </p>
          <p>
            More recently, I’ve become deeply interested in DevOps and have been
            self-studying tools and practices to better understand
            infrastructure, automation, and CI/CD processes.
          </p>
          <p>
            For me, technology is a way to creatively solve real-world
            problems—not just through code, but by improving how systems run,
            scale, and integrate. I enjoy learning how things work under the
            hood and how to make processes more efficient and reliable.
          </p>
          <p>
            In my free time, I explore new tools, build small projects, and stay
            inspired by the work of others in the tech community.
          </p>
          <p>
            Feel free to reach out and say hello at:{" "}
            <a
              href="mailto:tofiqmvsm2003@gmail.com"
              className={`cursor-pointer ${dark ? "text-[#ffb703]" : "text-[#72b626]"
                } underline`}
            >
              tofiqmvsm2003@gmail.com
            </a>
          </p>
        </div>
        <hr className={`${dark ? "hr-dark" : "hr-light"}`} />
        <div className="text-center ">
          <h1 className="text-3xl font-semibold">
            SKILLS{" "}
            <span className={`${dark ? "text-[#ffb703]" : "text-[#72b626]"}`}>
              & TOOLS
            </span>
          </h1>
          <div className="flex justify-center items-center flex-wrap gap-8">
            {skillData.map((e) => {
              return (
                <div key={e.image}>
                  <img src={e.image} alt={e.caption} />
                  <p className={`${dark ? "text-white" : "text-[#374151]"}`}>
                    {e.caption}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
