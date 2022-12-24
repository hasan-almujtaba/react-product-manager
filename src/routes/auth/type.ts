export type AuthData = {
  authenticated: boolean
  email?: string
  password?: string
}

export type AuthContextValue = {
  user: AuthData
  login: (data: AuthData) => void
  logout: () => void
}
