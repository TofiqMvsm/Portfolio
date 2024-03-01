import { RxHamburgerMenu } from "react-icons/rx";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useContext, useState } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { Link } from "react-router-dom";

export default function HamburgerMenu() {
  const { showMenu, setShowMenu, dark, setChangeDark } =
    useContext(ProjectContext);
  const handleShow = () => {
    setShowMenu(!showMenu);
  };
  const handleChangeTheme = () => {
    setShowMenu(!showMenu);
    setChangeDark(!dark);
  };
  return (
    <>
      {showMenu ? (
        <div
          className={`hamburger-div ${
            dark
              ? "bg-gray-700"
              : "bg-white text-[#374151] border-[#9296a0] border-2 border-solid"
          } absolute top-1 right-6 w-[45%] py-6 px-6 rounded-lg  flex flex-col gap-4`}
        >
          <IoMdClose onClick={handleShow} className="absolute right-5" />
          <ul className="flex flex-col gap-4">
            <li onClick={() => setShowMenu(false)} className="font-medium ">
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setShowMenu(false)} className="font-medium ">
              {" "}
              <Link to="/about">About</Link>
            </li>
            <li onClick={() => setShowMenu(false)} className="font-medium ">
              <Link to="/projects">Projects</Link>
            </li>

            <li onClick={() => setShowMenu(false)} className="font-medium ">
              <a href="../../public/resume.pdf" target="_blank">
                Resume
              </a>
            </li>
          </ul>
          <hr />
          <button
            onClick={handleChangeTheme}
            className={` ${
              dark ? "bg-gray-500" : "bg-white"
            } border-solid  border-[#374151] border-2 flex justify-center gap-2 items-center rounded-full p-4 `}
          >
            {" "}
            {dark ? <MdLightMode /> : <MdDarkMode />} Change to{" "}
            {dark ? "light" : "dark"} theme
          </button>
        </div>
      ) : (
        <div
          className={`${
            dark ? "bg-[#374151]" : "bg-[#f3f4f6]"
          } text-center p-2 text-white rounded-full icon`}
        >
          {" "}
          <RxHamburgerMenu
            className={`${!dark && "text-black"} font-semibold text-xl`}
            onClick={handleShow}
          />
        </div>
      )}
    </>
  );
}
