// app/(routes)/account/page.tsx
'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

interface Profile {
 id: string
 username?: string
 full_name?: string
 avatar_url?: string
}

export default function AccountPage() {
 const supabase = createClientComponentClient()
 const [profile, setProfile] = useState<Profile | null>(null)
 const [loading, setLoading] = useState(true)

 useEffect(() => {
   async function loadProfile() {
     const { data: { user } } = await supabase.auth.getUser()
     
     if (user) {
       const { data } = await supabase
         .from('profiles')
         .select('*')
         .eq('id', user.id)
         .single()
         
       setProfile(data)
     }
     setLoading(false)
   }

   loadProfile()
 }, [])

 if (loading) return <div>Loading...</div>

 return (
   <div className="max-w-4xl mx-auto">
     <h1 className="text-2xl font-bold mb-8">My Account</h1>
     {profile && (
       <div className="space-y-6">
         <div className="bg-white p-6 rounded-lg shadow">
           <h2 className="text-xl font-semibold mb-4">Profile Details</h2>
           <div className="space-y-4">
             <p>Email: {profile.username}</p>
             <p>Name: {profile.full_name}</p>
           </div>
         </div>
       </div>
     )}
   </div>
 )
}