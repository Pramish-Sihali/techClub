'use client';

import { User } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { User as UserIcon } from 'lucide-react';
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

interface AuthButtonProps {
  user: User | null;
  isAdmin: boolean;
  onSignOut: () => Promise<void>;
}

export function AuthButton({ user, isAdmin, onSignOut }: AuthButtonProps) {
  const router = useRouter();
  
  const handleNavigation = async (path: string) => {
    // Navigate first
    router.push(path);
    
    // Small delay to ensure navigation starts before any state changes
    await new Promise(resolve => setTimeout(resolve, 100));
  };

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.user_metadata?.avatar_url} />
              <AvatarFallback>
                <UserIcon className="h-6 w-6" />
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem 
            onSelect={(e) => {
              e.preventDefault();
              handleNavigation(isAdmin ? '/admin' : '/account');
            }}
          >
            Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(e) => {
  e.preventDefault();
  onSignOut();
}}>
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Button 
        variant="ghost" 
        onClick={() => handleNavigation('/login')}
      >
        Login
      </Button>
      <Button 
        onClick={() => handleNavigation('/signup')}
      >
        Sign Up
      </Button>
    </div>
  );
}