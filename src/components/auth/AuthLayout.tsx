// components/auth/AuthLayout.tsx
'use client';

import React from 'react';
import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => (
  <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex">
    <div className="hidden lg:flex lg:w-1/2 bg-[#0C2340] items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0C2340] opacity-90" />
      <div className="relative z-10 p-12 text-white max-w-lg">
        <Image
          src="/images/club.svg"
          alt="Tech Club Logo"
          width={120}
          height={120}
          className="mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">Tech Club Portal</h1>
        <p className="text-lg opacity-90">Join our community of tech enthusiasts and innovators.</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0C2340] to-transparent" />
    </div>
    
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0C2340]">{title}</h2>
          <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  </div>
);