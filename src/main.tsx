import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './rootes/Root'
import ErrorPage from './rootes/ErrorPage'
import MainPage from './rootes/MainPage'
import About from './rootes/About'
import {ProjectPage } from './rootes/ProjectPage'

const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <MainPage />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/project-info/:id",
      element: <ProjectPage />
    }
  ]

}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
