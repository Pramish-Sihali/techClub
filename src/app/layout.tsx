// app/layout.tsx
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
 children,
}: {
 children: React.ReactNode
}) {
 return (
   <html lang="en">
     <body className={inter.className}>
       <div className="min-h-screen bg-background">
         <header className="sticky top-0 z-50 w-full border-b border-kings-blue/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
           <Navigation />
         </header>

         <main className="container mx-auto px-4 py-8">
           {children}
         </main>

         <Footer />
       </div>
     </body>
   </html>
 )
}