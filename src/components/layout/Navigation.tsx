'use client';

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"

const navItems = [
  { href: '/events', label: 'Events' },
  { href: '/members', label: 'Members' },
  { href: '/contributors', label: 'Contributors' },
  { href: '/blog', label: 'Blog' },
  { href: '/partners', label: 'Partners' },
  { href: '/admin', label: 'Admin' }
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex h-20 items-center justify-between px-8">
          <Link href="/" className="flex items-center gap-6 hover:opacity-80 transition-opacity">
            <Image src="/images/club.svg" alt="Tech Club Logo" width={64} height={64} className="h-16 w-auto" />
            <div className="h-12 w-px bg-gray-200" />
            <Image src="/images/college.svg" alt="College Logo" width={64} height={64} className="h-16 w-auto" />
          </Link>
          
          <div className="flex items-center gap-12">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-2 text-lg font-medium transition-colors hover:text-kings-blue",
                  pathname === item.href 
                    ? "text-kings-blue after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-kings-blue" 
                    : "text-gray-600"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}