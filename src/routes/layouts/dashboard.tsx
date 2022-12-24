import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import DashboardNavbar from '~/components/DashboardNavbar'
import { useAuth } from '../auth'

const DashboardLayout = () => {
  const auth = useAuth()

  if (!auth?.user.authenticated) {
    return <Navigate to="/"></Navigate>
  }

  console.log(auth)

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardNavbar />
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout
