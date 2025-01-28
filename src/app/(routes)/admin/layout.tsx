// app/(routes)/admin/layout.tsx
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { AdminSidebar } from './components/admin-sidebar'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient({ cookies })
  
  const { data: { session } } = await supabase.auth.getSession()
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', session?.user?.id)
    .single()

  if (!session || profile?.role !== 'admin') {
    redirect('/auth/login')
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar className="w-64 border-r" />
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}