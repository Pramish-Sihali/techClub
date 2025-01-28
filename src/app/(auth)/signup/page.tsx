'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { motion } from 'framer-motion';
import { AuthLayout } from '@/components/auth/AuthLayout';

interface SignupFormData {
  name: string;
  email: string;
  studentId: string;
  password: string;
}

export default function SignupPage() {
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    email: '',
    studentId: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
            student_id: formData.studentId,
            role: 'USER'
          }
        }
      });

      if (signUpError) throw signUpError;

      if (authData?.user) {
        await supabase.from('profiles').upsert({
          id: authData.user.id,
          name: formData.name,
          student_id: formData.studentId,
          role: 'USER'
        });
        
        if (authData.session) {
          router.refresh();
          router.replace('/account');
        } else {
          router.push('/verify-email');
        }
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join the Tech Club community"
    >
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

      <form onSubmit={handleSignup} className="mt-8 space-y-6">
        <div className="rounded-md shadow-sm space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#0C2340] mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent transition-all duration-200"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0C2340] mb-1">
              Student ID
            </label>
            <input
              type="text"
              required
              value={formData.studentId}
              onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
              className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent transition-all duration-200"
              placeholder="Enter your student ID"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0C2340] mb-1">
              Email address
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0C2340] mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:border-transparent transition-all duration-200"
              placeholder="Create a password"
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
            {loading ? 'Creating account...' : 'Sign up'}
          </button>
        </motion.div>
      </form>
    </AuthLayout>
  );
}