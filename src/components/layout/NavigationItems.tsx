'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";

interface NavItem {
  href: string;
  label: string;
}

interface NavigationItemsProps {
  items: NavItem[];
  isMobile?: boolean;
  onItemClick?: () => void;
}

export function NavigationItems({ items, isMobile = false, onItemClick }: NavigationItemsProps) {
  const pathname = usePathname();

  if (isMobile) {
    return (
      <>
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-kings-blue transition-colors"
            onClick={onItemClick}
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
      </>
    );
  }

  return (
    <>
      {items.map((item) => (
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
    </>
  );
}
