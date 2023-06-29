import { ReactNode } from 'react'

import { api } from '@/lib/api'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'

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
    <div className="grid h-screen grid-cols-1 bg-skin-fill-base text-gray-800">
      <div className="flex w-full flex-col">
        <Header />
        <div className="mt-[4.0625rem] flex flex-1">
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  )
}
