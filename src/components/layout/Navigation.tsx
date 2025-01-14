'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";
import { UserMenu } from './user-menu';
import { publicNavItems } from '@/config/navigation';

// Temporary mock user - replace with your auth logic
const mockUser = {
  name: 'John Doe',
  email: 'john@example.com',
  role: 'admin' as const
  // role: 'user' as const // uncomment to test user view
  // or set to null to test logged out state
};

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-xl border-b border-kings-blue/10 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex h-20 items-center px-4">
          <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <Image
              src="/images/club.svg"
              alt="Tech Club Logo"
              width={64}
              height={64}
              className="h-14 w-auto bg-transparent"
            />
            <div className="h-12 w-px bg-gray-200" />
            <Image
              src="/images/college.svg"
              alt="College Logo"
              width={120}
              height={120}
              className="h-36 w-auto object-fit translate-y-2"
            />
          </Link>
          
          <div className="ml-auto flex items-center gap-8">
            {publicNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative py-2 text-base font-medium text-gray-600 hover:text-kings-blue transition-colors"
              >
                {item.label}
                {pathname === item.href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-kings-blue"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-gray-200">
              <UserMenu user={mockUser} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}