'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { User } from '@supabase/auth-helpers-nextjs';

import { NavigationItems } from './NavigationItems';
import { AuthButton } from './AuthButton';
import { MobileMenu } from './MobileMenu';

const navItems = [
  { href: '/events', label: 'Events' },
  { href: '/members', label: 'Members' },
  { href: '/contributors', label: 'Contributors' },
  { href: '/blog', label: 'Blog' },
  { href: '/partners', label: 'Partners' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .single();
        setIsAdmin(profile?.role === 'admin');
      }
    };
    
    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        checkUser();
      } else {
        setUser(null);
        setIsAdmin(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setIsAdmin(false);
  };

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
            <div className="h-12 w-px bg-gray-200 hidden md:block" />
            <Image
              src="/images/college.svg"
              alt="College Logo"
              width={120}
              height={120}
              className="h-36 w-auto object-fit translate-y-2 hidden md:block"
            />
          </Link>

          <div className="ml-auto hidden md:flex items-center gap-8">
            <NavigationItems items={navItems} />
            <AuthButton 
              user={user} 
              isAdmin={isAdmin} 
              onSignOut={handleSignOut}
            />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-auto md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        <MobileMenu 
          isOpen={isOpen}
          navItems={navItems}
          user={user}
          isAdmin={isAdmin}
          onSignOut={handleSignOut}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </nav>
  );
}

export default Navigation;