import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../auth'

const AuthLayout = () => {
  const auth = useAuth()

  if (auth?.user.authenticated) {
    return <Navigate to="/dashboard"></Navigate>
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <Outlet />
    </div>
  )
}

export default AuthLayout
