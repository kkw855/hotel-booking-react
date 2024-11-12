import { AppProvider } from '@/app/provider.tsx'
import { AppRouter } from '@/app/router.tsx'

export const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}
