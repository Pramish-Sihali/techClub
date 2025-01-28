'use client';

import { User } from '@supabase/auth-helpers-nextjs';
import { NavigationItems } from './NavigationItems';
import { AuthButton } from './AuthButton';

interface MobileMenuProps {
  isOpen: boolean;
  navItems: Array<{ href: string; label: string; }>;
  user: User | null;
  isAdmin: boolean;
  onSignOut: () => Promise<void>;
  onClose: () => void;
}

export function MobileMenu({ 
  isOpen, 
  navItems, 
  user, 
  isAdmin, 
  onSignOut,
  onClose 
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <NavigationItems 
          items={navItems} 
          isMobile={true}
          onItemClick={onClose}
        />
        <div className="px-3 py-2">
          <AuthButton 
            user={user} 
            isAdmin={isAdmin} 
            onSignOut={onSignOut}
          />
        </div>
      </div>
    </div>
  );
}