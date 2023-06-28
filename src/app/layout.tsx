import { ReactNode } from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'
import { Inter, Roboto_Flex as Roboto, Montserrat } from 'next/font/google'

import ReactQueryProvider from '@/lib/reactQuery/reactQuery-provider'

import './styles/globals.scss'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'Ecovolts',
  description:
    'O maior portal de monitoramento e integração de usinas fotovoltaicas',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider
      localization={ptBR}
      appearance={{
        elements: {
          formButtonPrimary:
            'bg-green-500 hover:bg-green-600 text-sm normal-case transition-colors duration-150 ease-linear focus:border-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          card: 'shadow-2xl bg-white rounded-md',
          formFieldInput:
            'rounded-md border border-gray-100 hover:border-brand-secondary transition-colors duration-150 ease-linear focus:border-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        },
        layout: {
          helpPageUrl: 'https://clerk.dev/support',
          // logoImageUrl: "https://clerk.dev/logo.png",
          logoPlacement: 'none',
          // privacyPageUrl: "https://clerk.dev/privacy",
          showOptionalFields: true,
          socialButtonsPlacement: 'top',
          socialButtonsVariant: 'auto',
          // termsPageUrl: "https://clerk.dev/terms",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.variable} ${roboto.variable} ${montserrat.variable} bg-skin-fill-base
            font-sans text-skin-inverted selection:bg-skin-fill`}
        >
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
