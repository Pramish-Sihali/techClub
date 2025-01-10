// app/(routes)/admin/types.ts
export type AdminRole = 'super_admin' | 'content_manager' | 'event_coordinator';

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: AdminRole;
  avatar?: string;
  lastLogin?: string;
}

export interface DashboardStats {
  totalUsers: number;
  totalEvents: number;
  totalPosts: number;
  pendingApprovals: number;
}

export interface AdminNotification {
  id: string;
  type: 'info' | 'warning' | 'success' | 'error';
  message: string;
  timestamp: string;
  read: boolean;
}