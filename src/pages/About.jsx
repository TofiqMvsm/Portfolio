import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { skillData } from "../data/skillCard";

const About = () => {
  const { dark } = useContext(ProjectContext);
  return (
    <section
      className={`${
        dark ? "bg-gray-900" : "bg-white"
      } flex justify-center items-center`}
    >
      <div className="flex flex-col w-[55%] gap-12 py-12 about-div">
      
        <div className="flex flex-col gap-y-5  tracking-wide">
          <span className={`${dark ? "text-[#ffb703]" : "text-[#72b626]"} text-lg font-semibold text-center`}>
            About me
          </span>
          <h1 className='text-center text-4xl font-semibold'>
            Here's My Story
          </h1>
          <p>Hi, I'm Tofiq Movsumov, a third-year IT student at Baku Engineering University. While studying frontend development, I've developed a passion for understanding the full stack of web development. This drive has led me to explore backend technologies, starting with Node.js through an Udemy course.</p>
        <p>Programming to me isn't just about solving problems; it's a creative outlet where I can express myself while addressing real-world challenges. Whether it's designing intuitive user interfaces or optimizing server-side operations, each project fuels my excitement for the endless possibilities of programming.</p>
          <p>
            In my free time, I get inspiration from other people's work and try
            out new technologies to build side projects.
          </p>
          <p>
            Feel free to reach out and say hello at: <a href='mailto:tofiqmvsm2003@gmail.com' className={`cursor-pointer ${dark ? "text-[#ffb703]" : "text-[#72b626]"} underline`}>tofiqmvsm2003@gmail.com</a>
          </p>
        </div>
        <hr className={`${dark ? 'hr-dark' : 'hr-light' }`} />
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
