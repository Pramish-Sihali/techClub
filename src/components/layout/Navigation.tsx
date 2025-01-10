// app/components/layout/Navigation.tsx
import Image from 'next/image'
import Link from 'next/link'
import {
 NavigationMenu,
 NavigationMenuContent,
 NavigationMenuItem,
 NavigationMenuLink,
 NavigationMenuList,
 NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const navigationItems = [
 { 
   label: 'Events',
   href: '/events',
   items: [
     { title: 'Upcoming Events', href: '/events' },
     { title: 'Past Events', href: '/events/past' }
   ]
 },
 {
   label: 'Community',
   href: '/community',
   items: [
     { title: 'Members', href: '/members' },
     { title: 'Contributors', href: '/contributors' },
     { title: 'Blog', href: '/blog' }
   ]
 },
 {
   label: 'Partners',
   href: '/partners',
   items: [
     { title: 'Sponsors', href: '/partners/sponsors' },
     { title: 'Collaborators', href: '/partners/collaborators' }
   ]
 },
 {
   label: 'Admin',
   href: '/admin',
   items: [
     { title: 'Dashboard', href: '/admin' },
     { title: 'Manage Events', href: '/admin/events' },
     { title: 'Manage Posts', href: '/admin/posts' },
     { title: 'Manage Users', href: '/admin/users' }
   ]
 }
] as const;

export function Navigation() {
 return (
   <div className="flex items-center gap-8">
     <div className="flex items-center gap-4">
       <Image 
         src="/images/club.svg" 
         alt="Tech Club Logo" 
         width={40} 
         height={40}
       />
       <Image 
         src="/images/college.svg" 
         alt="College Logo" 
         width={40} 
         height={40}
       />
     </div>

     <NavigationMenu>
       <NavigationMenuList>
         {navigationItems.map((item) => (
           <NavigationMenuItem key={item.label}>
             <Link href={item.href}>
               <NavigationMenuTrigger 
                 className="cursor-pointer hover:text-kings-blue"
               >
                 {item.label}
               </NavigationMenuTrigger>
             </Link>
             <NavigationMenuContent>
               <ul className="grid w-48 gap-3 p-4">
                 {item.items.map((subItem) => (
                   <li key={subItem.title}>
                     <Link href={subItem.href}>
                       <NavigationMenuLink className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                         {subItem.title}
                       </NavigationMenuLink>
                     </Link>
                   </li>
                 ))}
               </ul>
             </NavigationMenuContent>
           </NavigationMenuItem>
         ))}
       </NavigationMenuList>
     </NavigationMenu>
   </div>
 )
}