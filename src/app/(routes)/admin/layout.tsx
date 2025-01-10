// app/(routes)/admin/layout.tsx
import { AdminSidebar } from './components/admin-sidebar'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar className="w-64 border-r" />
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
