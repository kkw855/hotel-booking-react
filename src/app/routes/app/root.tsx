import { Outlet } from 'react-router-dom'

import { RootLayout } from '@/components/layouts'

export const AppRoot = () => {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  )
}
