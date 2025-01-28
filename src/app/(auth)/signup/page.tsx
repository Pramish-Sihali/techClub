// app/auth/signup/page.tsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function SignupPage() {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [error, setError] = useState('')
 const router = useRouter()

 const handleSignup = async (e: React.FormEvent) => {
   e.preventDefault()
   const { error } = await supabase.auth.signUp({
     email,
     password,
     options: {
       emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`
     }
   })
   
   if (error) {
     setError(error.message)
     return
   }
   
   router.push('/auth/verify-email')
 }

 return (
   <div className="min-h-screen flex items-center justify-center">
     <form onSubmit={handleSignup} className="space-y-4 w-full max-w-md">
       {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
       
       <input
         type="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         placeholder="Email"
         className="w-full p-2 border rounded"
       />
       
       <input
         type="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         placeholder="Password"
         className="w-full p-2 border rounded"
       />
       
       <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
         Sign Up
       </button>
     </form>
   </div>
 )
}