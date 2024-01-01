
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from "./components/navigation";
import { Roboto_Slab } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto_Slab({subsets: ['latin'], weight: ['300']})

export const metadata: Metadata = {
  title: 'My website',
  description: 'Olga Pilawka personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navigation  />
        {children}
        
        </body>
    </html>
  )
}
