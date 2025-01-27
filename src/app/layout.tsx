// app/layout.tsx
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { BackgroundDecoration } from '@/components/layout/BackgroundDecoration'
import './globals.css'
import { Lexend_Deca } from 'next/font/google'
import { AuthProvider } from '@/contexts/AuthContext'

const lexendDeca = Lexend_Deca({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lexendDeca.className}>
        <AuthProvider>
          <div className="min-h-screen bg-background relative">
            <BackgroundDecoration />
            <Navigation />
            <main className="max-w-7xl mx-auto px-4 py-8 relative">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}