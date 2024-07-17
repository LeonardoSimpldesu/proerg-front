import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/sonner'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'PROERG - ERM',
  description: 'PROERG budget system',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        {children}
        <Toaster richColors />
      </body>
    </html>
  )
}
