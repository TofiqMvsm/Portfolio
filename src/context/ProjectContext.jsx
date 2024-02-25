import { createContext, useState, useEffect } from "react";

export const ProjectContext = createContext();

const ProjectContextProvider = ({ children }) => {
  const [dark, setChangeDark] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && showMenu) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [showMenu]); 

  return (
    <ProjectContext.Provider value={{ dark, setChangeDark, showMenu, setShowMenu }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
