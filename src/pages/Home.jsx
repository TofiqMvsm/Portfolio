import React,{useContext, useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { ProjectContext } from '../context/ProjectContext';
import { useClickAway } from "react-use";
import profile from '../../src/assets/images/profile.jpeg'
const Home = () => {
  const ref = useRef(null);
  const {setShowMenu} = useContext(ProjectContext)
  useClickAway(ref, () => setShowMenu(false));
  const navigate = useNavigate()
  const {dark} = useContext(ProjectContext);
  return (
    <section
      className={`${
        dark ? "dark:bg-gray-900" : "bg-white"
      } text-center relative h-screen flex flex-col justify-center items-center gap-5 px-5`}
    >
      <div
        className={`profile-home w-[200px] h-[200px] border-[5px] rounded-full ${
          dark ? "border-[#9296a0]" : "border[#e5e7eb]"
        }`}
      >
        <img
          src={profile}
          className="rounded-full w-full h-full object-cover"
          alt=""
        />
      </div>
      <span
        className={`${
          dark ? "text-[#ffb703]" : "text-[#72b626]"
        } font-semibold text-[22px]`}
      >
        Hey, I'm
      </span>
      <h1 className="font-semibold text-7xl capitalize heading">
        Tofig Movsumov
      </h1>
      <p className="w-[50%] text-[17px]">
        A passionate future DevOps engineer with a background in web
        development, self-motivated and eager to learn new technologies
      </p>
      <button
        onClick={() => navigate("/about")}
        className={`${
          dark ? "dark-btn" : "light-btn"
        } transition-all duration-200 font-semibold home-btn`}
      >
        More About Me
      </button>
    </section>
  );
}

export default Home