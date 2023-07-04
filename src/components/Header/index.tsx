'use client'

import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

import logo from '@/assets/logo.svg'
import Link from 'next/link'
import { Bell } from 'lucide-react'
import { DotPulse } from '../ui/layout/DotPulse'

export function Header() {
  return (
    <header
      className="fixed flex w-full border-b border-b-gray-100/50 bg-skin-fill-base px-8
      py-3 text-gray-800 backdrop-blur"
    >
      <div className="flex w-full items-center justify-between">
        <Link href="/">
          <Image
            src={logo}
            className="h-[40px] w-[40px]"
            alt="Logotipo da Ecovolts"
          />
        </Link>
        <div className="flex w-max items-center justify-between gap-6 px-2">
          <div className="flex">
            <Bell className="h-5 w-5 text-zinc-800" />
            <DotPulse />
          </div>
          <UserButton
            afterSignOutUrl="/"
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
