// app/(routes)/admin/components/notifications-dropdown.tsx
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Button } from "@/components/ui/button"
  import { AdminNotification } from "../types"
import { Bell } from "lucide-react";
import { cn } from "@/lib/utils";
  
  interface NotificationsDropdownProps {
    notifications: AdminNotification[];
    onMarkAsRead: (id: string) => void;
  }
  
  export function NotificationsDropdown({ 
    notifications,
    onMarkAsRead
  }: NotificationsDropdownProps) {
    const unreadCount = notifications.filter(n => !n.read).length;
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative">
            <Bell className="h-4 w-4" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80">
          <DropdownMenuLabel>Notifications</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {notifications.length === 0 ? (
            <DropdownMenuItem>No notifications</DropdownMenuItem>
          ) : (
            notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className={cn(
                  "flex flex-col items-start",
                  !notification.read && "bg-muted/50"
                )}
                onClick={() => onMarkAsRead(notification.id)}
              >
                <span className="font-medium">{notification.message}</span>
                <span className="text-xs text-muted-foreground">
                  {new Date(notification.timestamp).toLocaleString()}
                </span>
              </DropdownMenuItem>
            ))
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }