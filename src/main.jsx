import React from 'react'
import ReactDOM from 'react-dom/client'
import "../index.css"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import Layout from './pages/Layout'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectContextProvider from './context/ProjectContext'
const router = createBrowserRouter([
  {
    path : '/',
    element : <ProjectContextProvider><Layout/></ProjectContextProvider>,
    errorElement : <ErrorPage/>,
    children : [
      {
        path : 'about',
        element : <About/>
      },
      {
        path : '/',
        element : <Home/>
      },
      {
        path : 'projects',
        element : <Projects/>
      }
    ]
  },
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
