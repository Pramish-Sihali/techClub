// components/auth/LoginForm.tsx
'use client';

import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { motion } from 'framer-motion';

interface LoginFormProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  loading: boolean;
  error: string;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  buttonText: string;
}

export const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  loading,
  error,
  onSubmit,
  buttonText,
}: LoginFormProps) => (
  <>
    {error && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Alert variant="destructive" className="bg-red-50 text-red-900">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </motion.div>
    )}

    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
      <div className="rounded-md shadow-sm space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#0C2340] mb-1">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent transition-all duration-200"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-[#0C2340] mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent transition-all duration-200"
            placeholder="Enter your password"
          />
        </div>
      </div>

      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <button
          type="submit"
          disabled={loading}
          className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[#0C2340] hover:bg-[#1E88E5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E88E5] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          {loading ? 'Signing in...' : buttonText}
        </button>
      </motion.div>
    </form>
  </>
);