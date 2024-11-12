// import { ReactNode } from 'react'
import { configureAuth } from 'react-query-auth'
// import { Navigate, useLocation } from 'react-router-dom'

import { api } from '@/lib/api-client'

type User = {
  id: string
  email: string
  name: string
  image: string
}

const getUser = async () => {
  const response = await api.get<User>('/auth/me')
  console.log('getUser', response)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response)
    }, 300)
  })
}

const authConfig = {
  userFn: async () => {
    const res = await getUser()
    console.log('userFn', res)
    return res ?? null
  },
  loginFn: () => {
    console.log('loginFn')
    return getUser()
  },
  registerFn: () => {
    console.log('registerFn')
    return getUser()
  },
  logoutFn: () => {
    console.log('logoutFn')
    return getUser()
  },
}

export const { useUser, useLogin, useLogout, useRegister, AuthLoader } =
  configureAuth(authConfig)

// export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
//   // /auth/me 호출
//   const user = useUser()
//   const location = useLocation()
//
//   console.log('ProtectedRoute', user.data, location.pathname)
//
//   if (!user.data) {
//     return (
//       <Navigate
//         to={`/auth/login?redirectTo=${encodeURIComponent(location.pathname)}`}
//         replace
//       />
//     )
//   }
//
//   return children
// }
