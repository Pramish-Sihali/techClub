// app/(routes)/account/layout.tsx
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function AccountLayout({
 children,
}: {
 children: React.ReactNode
}) {
 const supabase = createServerComponentClient({ cookies })
 const { data: { session } } = await supabase.auth.getSession()
 
 if (!session) {
   redirect('/auth/login')
 }

 return (
   <div className="flex min-h-screen">
     <main className="flex-1 p-8">{children}</main>
   </div>
 )
}