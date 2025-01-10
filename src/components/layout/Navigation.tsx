
// app/components/layout/Navigation.tsx
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
      { title: 'Upcoming Events', href: '/events/upcoming' },
      { title: 'Past Events', href: '/events/past' }
    ]
  },
  {
    label: 'Community',
    href: '/community',
    items: [
      { title: 'Members', href: '/community/members' },
      { title: 'Contributors', href: '/community/contributors' },
      { title: 'Vlogs', href: '/community/vlogs' }
    ]
  },
  {
    label: 'Partners',
    href: '/partners',
    items: [
      { title: 'Sponsors', href: '/partners/sponsors' },
      { title: 'Collaborators', href: '/partners/collaborators' }
    ]
  }
] as const;

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationItems.map((item) => (
          <NavigationMenuItem key={item.label}>
            <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-48 gap-3 p-4">
                {item.items.map((subItem) => (
                  <li key={subItem.title}>
                    <Link href={subItem.href} legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
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
  )
}