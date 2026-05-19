import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })

export const metadata: Metadata = {
  title: 'Groundwork — Free Education for Everyone',
  description: 'Learn anything. Earn a verified certificate. Completely free. No asterisks.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full bg-zinc-50 text-zinc-900">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
