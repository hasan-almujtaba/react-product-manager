import React, { createContext, PropsWithChildren, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from '~/hooks/local-storage'
import { AuthContextValue, AuthData } from './type'

type Props = PropsWithChildren

const initialValue: AuthData = {
  authenticated: false,
  email: undefined,
  password: undefined,
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useLocalStorage('rpm-auth', initialValue)
  const navigate = useNavigate()

  const login = async (data: AuthData) => {
    setUser(data)
    navigate('/dashboard', { replace: true })
  }

  const logout = () => {
    setUser(initialValue)
    navigate('/', { replace: true })
  }

  const value = {
    user,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
