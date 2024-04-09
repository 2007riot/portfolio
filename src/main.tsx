import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './rootes/Root'
import ErrorPage from './rootes/ErrorPage'
import MainPage from './rootes/MainPage'
import About from './rootes/About'

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
    }
  ]

}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
