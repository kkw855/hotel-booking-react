// import { /*QueryClient,*/ useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { AppRoot } from './routes/app/root'

const createAppRouter = (/*queryClient: QueryClient*/) =>
  createBrowserRouter([
    {
      path: '/auth/login',
      // 애플리케이션 번들을 작게 유지하고 경로의 코드 분할을 지원하기 위해
      lazy: async () => {
        const { LoginRoute } = await import('./routes/auth/login')
        return { Component: LoginRoute }
      },
    },
    {
      path: '/app',
      element: (
        <AppRoot />
        // <ProtectedRoute>
        //   <AppRoot />
        // </ProtectedRoute>
      ),
      children: [
        {
          path: 'hotel/add',
          lazy: async () => {
            const { CreateHotelRoute } = await import(
              './routes/app/hotel/create'
            )
            return { Component: CreateHotelRoute }
          },
        },
      ],
    },
    {
      // Global 404 - Not Found 페이지
      path: '*',
      lazy: async () => {
        const { NotFoundRoute } = await import('./routes/not-found')
        return { Component: NotFoundRoute }
      },
    },
  ])

export const AppRouter = () => {
  // const queryClient = useQueryClient()

  const router = useMemo(
    () => createAppRouter(/*queryClient*/),
    [
      /*queryClient*/
    ],
  )

  return <RouterProvider router={router} />
}
