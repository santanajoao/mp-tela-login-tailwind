import { ReactNode } from 'react'
import './globals.css'
import { DM_Sans as DMSans } from 'next/font/google'

const dmSans = DMSans({ subsets: ['latin'], weight: ['700', '400'] })

export const metadata = {
  title: 'Most Beautyful Login',
  description: 'Uma tela de login incrivelmente bonita e responsiva usando o framework Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
