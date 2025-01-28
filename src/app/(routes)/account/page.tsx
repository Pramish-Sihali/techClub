// app/(routes)/account/page.tsx
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

export default function AccountPage() {
  const router = useRouter()
  const { user, profile, loading } = useAuth()

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
      </div>
    )
  }

  if (!profile) {
    return null
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">My Account</h1>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Profile Details</h2>
          <div className="space-y-4">
            <p>Email: {profile.username}</p>
            <p>Name: {profile.full_name}</p>
            {profile.avatar_url && (
              <div className="mt-4">
                <p className="mb-2">Profile Picture:</p>
                <img 
                  src={profile.avatar_url} 
                  alt="Profile" 
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}