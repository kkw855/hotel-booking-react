import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactNode, Suspense, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { FadeLoader } from 'react-spinners'

import { ThemeProvider } from '@/components/theme/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { AuthLoader } from '@/lib/auth'
import { queryConfig } from '@/lib/react-query'

export const AppProvider = ({ children }: { children: ReactNode }) => {
  // 최초 렌더링 할 때 한 번만 호출
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  )

  return (
    <Suspense>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <QueryClientProvider client={queryClient}>
          {import.meta.env.DEV && <ReactQueryDevtools />}
          <ThemeProvider>
            <AuthLoader
              renderLoading={() => (
                <div className="flex h-screen w-screen items-center justify-center bg-primary-foreground text-foreground">
                  <FadeLoader />
                </div>
              )}
            >
              {children}
            </AuthLoader>
            <Toaster />
          </ThemeProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  )
}
