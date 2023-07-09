import { ReactNode } from 'react'

import { api } from '@/lib/api'
import { Header } from '@/components/ux/Header'
import { Sidebar } from '@/components/ux/Sidebar'

async function getSession(): Promise<void> {
  await api.get('/users/auth')
}

export default async function ModulesLayout({
  children,
}: {
  children: ReactNode
}) {
  await getSession()

  return (
    <div
      className="mx-auto min-h-screen justify-center bg-gradient-to-r from-teal-200
      to-lime-200 px-6 py-8 text-gray-800"
    >
      <div className="mx-auto flex max-h-[1080px] max-w-10xl flex-col">
        <Header />
        <div
          className="mx-auto grid min-h-[85vh] w-full overflow-y-hidden rounded-b-xl
          bg-white shadow-lg backdrop-blur lg:grid-cols-[5rem_1fr] 2xl:grid-cols-[15rem_1fr]
          laptop-sm:min-h-[80vh] laptop-sm:grid-cols-[15rem_1fr] laptop-md:min-h-[80vh]
          laptop-md:grid-cols-[15rem_1fr] desktop:min-h-[85vh]"
        >
          <Sidebar />
          <main className="flex">{children}</main>
        </div>
      </div>
    </div>
  )
}
