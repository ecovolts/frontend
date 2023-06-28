'use client'

import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

import logo from '@/assets/logo.svg'
import Link from 'next/link'

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
    </header>
  )
}
