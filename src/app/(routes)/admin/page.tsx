// app/admin/page.tsx
'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState, useEffect } from 'react'
import { StatsCard } from './components/stats-card'
import { NotificationsDropdown } from './components/notifications-dropdown'
import { Users, Calendar, FileText, AlertCircle } from 'lucide-react'
import { DashboardStats, AdminNotification } from './types'

export default function AdminDashboard() {
 const supabase = createClientComponentClient()
 const [stats, setStats] = useState<DashboardStats>({
   totalUsers: 0,
   totalEvents: 0,
   totalPosts: 0,
   pendingApprovals: 0
 })
 const [notifications, setNotifications] = useState<AdminNotification[]>([])

 useEffect(() => {
   const fetchStats = async () => {
     // Fetch real stats from Supabase
     const { count: userCount } = await supabase
       .from('profiles')
       .select('*', { count: 'exact' })

     setStats(prev => ({
       ...prev,
       totalUsers: userCount || 0
     }))
   }

   fetchStats()
 }, [])

 const handleMarkAsRead = async (id: string) => {
   // Update notification in Supabase
   setNotifications(prev =>
     prev.map(n => n.id === id ? { ...n, read: true } : n)
   )
 }

 return (
   <div className="space-y-8">
     <div className="flex justify-between items-center">
       <h1 className="text-3xl font-bold text-kings-blue">Dashboard</h1>
       <NotificationsDropdown 
         notifications={notifications}
         onMarkAsRead={handleMarkAsRead}
       />
     </div>

     <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
       <StatsCard
         title="Total Users"
         value={stats.totalUsers}
         icon={<Users className="h-4 w-4 text-muted-foreground" />}
       />
       <StatsCard
         title="Total Events"
         value={stats.totalEvents}
         icon={<Calendar className="h-4 w-4 text-muted-foreground" />}
       />
       <StatsCard
         title="Blog Posts"
         value={stats.totalPosts}
         icon={<FileText className="h-4 w-4 text-muted-foreground" />}
       />
       <StatsCard
         title="Pending Approvals"
         value={stats.pendingApprovals}
         icon={<AlertCircle className="h-4 w-4 text-muted-foreground" />}
         description="Items requiring review"
       />
     </div>
   </div>
 )
}