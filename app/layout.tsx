
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from "./components/navigation";
import Footer from './components/footer'
import { Roboto_Slab } from 'next/font/google';


const roboto = Roboto_Slab({subsets: ['latin'], weight: ['300', '400', '600', '800']})



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
        <Footer />
        </body>
    </html>
  )
}
