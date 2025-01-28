// components/auth/AdminLogin.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { AuthLayout } from './AuthLayout';
import { LoginForm } from './LoginForm';

const AdminLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;

      const userRole = data.user?.user_metadata?.role;
      if (userRole !== 'ADMIN') {
        throw new Error('Invalid admin credentials');
      }

      router.push('/(routes)/admin');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Admin Portal"
      subtitle="Access the admin dashboard"
    >
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loading={loading}
        error={error}
        onSubmit={handleLogin}
        buttonText="Sign in as Admin"
      />
    </AuthLayout>
  );
};

export default AdminLogin;