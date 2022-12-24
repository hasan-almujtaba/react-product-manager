import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth'
import { AuthLayout, DashboardLayout } from './layouts'
import {
  DashboardCreate,
  DashboardEdit,
  DashboardHome,
  ErrorPage,
  LoginPage,
} from './pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthProvider>
        <AuthLayout />
      </AuthProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <LoginPage />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <AuthProvider>
        <DashboardLayout />
      </AuthProvider>
    ),
    children: [
      {
        path: '/dashboard',
        element: <DashboardHome />,
      },
      {
        path: '/dashboard/create',
        element: <DashboardCreate />,
      },
      {
        path: '/dashboard/edit/:id',
        element: <DashboardEdit />,
      },
    ],
  },
])
