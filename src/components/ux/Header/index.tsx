'use client'

import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

import logo from '@/assets/logo.svg'
import Link from 'next/link'
import { Bell } from 'lucide-react'
import { DotPulse } from '@/components/ui/layout/DotPulse'

export function Header() {
  return (
    <header
      className="mx-auto grid w-full grid-cols-[15rem_1fr] justify-between rounded-t-xl border-b
      border-zinc-300 bg-white px-4 py-3 text-gray-800 backdrop-blur md:grid-cols-[5rem_1fr]
      lg:grid-cols-[5rem_1fr] 2xl:grid-cols-[16rem_1fr] laptop-sm:grid-cols-[16rem_1fr]
      laptop-md:grid-cols-[16rem_1fr]"
    >
      <nav className="flex items-center justify-start gap-2">
        <button className="h-3 w-3 rounded-full bg-red-200 hover:bg-red-400" />
        <button className="h-3 w-3 rounded-full bg-yellow-200 hover:bg-yellow-400" />
        <button className="h-3 w-3 rounded-full bg-green-200 hover:bg-green-400" />
      </nav>
      <div className="flex w-full items-center justify-between pl-3">
        <Link href="/">
          <Image
            src={logo}
            className="h-[2.5rem] w-[2.5rem]"
            alt="Logotipo da Ecovolts"
          />
        </Link>
        <div className="flex w-max items-center justify-between gap-6 px-2">
          <div className="flex">
            <Bell className="h-5 w-5 text-zinc-800" />
            <DotPulse />
          </div>
          <UserButton
            afterSignOutUrl="/sign-in"
            showName
            appearance={{
              variables: {
                colorPrimary: 'gray',
                colorText: 'gray',
                colorTextSecondary: 'black',
              },
            }}
          />
        </div>
      </div>
    </header>
  )
}
