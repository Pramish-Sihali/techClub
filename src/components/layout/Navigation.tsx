'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";
import { Menu, X, User as UserIcon } from 'lucide-react';
import { createClientComponentClient, type User } from '@supabase/auth-helpers-nextjs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavItem {
  href: string;
  label: string;
}

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single();
        setIsAdmin(profile?.role === 'admin');
      }
    };
    checkUser();
  }, [supabase.auth]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setIsAdmin(false);
  };

  const navItems: NavItem[] = [
    { href: '/events', label: 'Events' },
    { href: '/members', label: 'Members' },
    { href: '/contributors', label: 'Contributors' },
    { href: '/blog', label: 'Blog' },
    { href: '/partners', label: 'Partners' },
    ...(isAdmin ? [{ href: '/(routes)/admin', label: 'Admin' }] : [])
  ];

  const AuthButton = () => {
    if (user) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.user_metadata?.avatar_url as string} />
                <AvatarFallback>
                  <UserIcon className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => window.location.href = isAdmin ? '/(routes)/admin' : '/(routes)/account'}>
              Dashboard
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleSignOut}>
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <div className="flex items-center gap-4">
        <Button variant="ghost" asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild>
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    );
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
            {navItems.map((item) => (
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
            <AuthButton />
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

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-kings-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.span
                      layoutId="underline-mobile"
                      className="absolute left-0 w-1 h-full bg-kings-blue"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
              <div className="px-3 py-2">
                <AuthButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;