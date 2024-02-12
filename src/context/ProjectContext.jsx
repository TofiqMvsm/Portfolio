import { createContext, useState } from "react";


export const ProjectContext = createContext()

const ProjectContextProvider = ({children})=>{
    const [dark,setChangeDark] = useState(true)
    const [showMenu,setShowMenu] = useState(false)


    return <ProjectContext.Provider value={{dark,setChangeDark,showMenu,setShowMenu}}> {children} </ProjectContext.Provider>    
}


export default ProjectContextProvider