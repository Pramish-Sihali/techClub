// app/(routes)/admin/page.tsx
'use client';

import { useState } from 'react';
import { StatsCard } from './components/stats-card';
import { NotificationsDropdown } from './components/notifications-dropdown';
import { Users, Calendar, FileText, AlertCircle } from 'lucide-react';
import { DashboardStats, AdminNotification } from './types';

const mockStats: DashboardStats = {
  totalUsers: 150,
  totalEvents: 25,
  totalPosts: 45,
  pendingApprovals: 8
};

const mockNotifications: AdminNotification[] = [
  {
    id: '1',
    type: 'info',
    message: 'New user registration: John Doe',
    timestamp: new Date().toISOString(),
    read: false
  },
  {
    id: '2',
    type: 'warning',
    message: 'Blog post pending approval',
    timestamp: new Date().toISOString(),
    read: false
  }
];

export default function AdminDashboard() {
  const [notifications, setNotifications] = useState(mockNotifications);

  const handleMarkAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

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
          value={mockStats.totalUsers}
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Total Events"
          value={mockStats.totalEvents}
          icon={<Calendar className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Blog Posts"
          value={mockStats.totalPosts}
          icon={<FileText className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Pending Approvals"
          value={mockStats.pendingApprovals}
          icon={<AlertCircle className="h-4 w-4 text-muted-foreground" />}
          description="Items requiring review"
        />
      </div>

      {/* Add more dashboard sections as needed */}
    </div>
  )
}