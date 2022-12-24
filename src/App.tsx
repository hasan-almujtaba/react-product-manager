import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './styles/global.css'

const App = () => {
  return (
    <>
      <ToastContainer autoClose={2000} />
      <RouterProvider router={router} />
    </>
  )
}

export default App
