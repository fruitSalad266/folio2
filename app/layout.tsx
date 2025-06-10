import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'MNGUYEN',
  description: 'Matthew Portfolio'
}

const dm = DM_Sans({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={dm.className}>
      <body>{children}</body>
    </html>
  )
}