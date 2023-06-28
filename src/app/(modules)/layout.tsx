import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { ReactNode } from 'react'

interface LoginLayoutProps {
  children: ReactNode
}

export default function ModulesLayout({ children }: LoginLayoutProps) {
  return (
    <div className="grid h-screen grid-cols-1 bg-gray-50 text-gray-800">
      <div className="flex w-full flex-col">
        <Header />
        <div className="mt-[65px] flex flex-1">
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  )
}
