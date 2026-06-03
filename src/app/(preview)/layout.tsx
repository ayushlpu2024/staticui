import React from 'react'
import { Inter } from 'next/font/google'
import '../(frontend)/styles.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen bg-transparent font-sans antialiased text-foreground">
        {children}
      </body>
    </html>
  )
}
