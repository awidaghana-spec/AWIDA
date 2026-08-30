import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const lato = Lato({ 
  subsets: ['latin'], 
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato' 
})

export const metadata: Metadata = {
  title: 'AWIDA - African West Indies Diaspora Alliance',
  description: 'Advancing Public Understanding of Fiscal and Monetary Policy in Ghana',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${lato.variable} font-sans antialiased text-gray-800 flex flex-col min-h-screen bg-white selection:bg-awida-green selection:text-white`}>
        <Header />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
