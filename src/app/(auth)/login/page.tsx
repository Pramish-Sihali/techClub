// app/(auth)/login/page.tsx
'use client';

import { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const UserLogin = dynamic(() => import('@/components/auth/UserLogin'), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});

const AdminLogin = dynamic(() => import('@/components/auth/AdminLogin'), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
  </div>
);

const LoginToggle = ({ isAdmin, setIsAdmin }: { isAdmin: boolean; setIsAdmin: (value: boolean) => void }) => (
  <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-lg">
    <div className="flex items-center">
      <button
        onClick={() => setIsAdmin(false)}
        className={`px-4 py-2 rounded-full transition-colors ${!isAdmin ? 'bg-[#0C2340] text-white' : 'text-gray-600'}`}
      >
        User
      </button>
      <button
        onClick={() => setIsAdmin(true)}
        className={`px-4 py-2 rounded-full transition-colors ${isAdmin ? 'bg-[#0C2340] text-white' : 'text-gray-600'}`}
      >
        Admin
      </button>
    </div>
  </div>
);

export default function LoginPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="relative">
        <LoginToggle isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        <AnimatePresence mode="wait">
          <motion.div
            key={isAdmin ? 'admin' : 'user'}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {isAdmin ? <AdminLogin /> : <UserLogin />}
          </motion.div>
        </AnimatePresence>
      </div>
    </Suspense>
  );
}