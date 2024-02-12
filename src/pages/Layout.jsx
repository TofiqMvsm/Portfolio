import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { ProjectContext } from '../context/ProjectContext'

const Layout = () => {
  const {dark} = useContext(ProjectContext)
  const {showMenu,setShowMenu} = useContext(ProjectContext)
  const handleClick = ()=>{
    setShowMenu(false)
  }
  return (
    <section className={`${dark ? 'dark' : 'light'}`}>
        <Header/>
        
        <Outlet/>
        <div onClick={handleClick} className={`${showMenu ? 'overlay' : ''}`}></div>
        <Footer/>
    </section>
  )
}

export default Layout
