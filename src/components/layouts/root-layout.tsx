import { ReactNode } from 'react'

import { Navbar } from '@/components/navbar/navbar'

export const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <section className="flex-grow">
        <div className="max-w-screen-2xl p-4 xl:px-20">{children}</div>
      </section>
    </main>
  )
}
