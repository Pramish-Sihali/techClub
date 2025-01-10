// app/(routes)/blog/layout.tsx
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
 title: 'Tech Club Blog',
 description: 'Read the latest posts from our tech community'
}

export default function BlogLayout({
 children,
}: {
 children: React.ReactNode
}) {
 return (
   <div className="min-h-screen">
     <div className="border-b bg-white">
       <div className="container mx-auto px-4">
         <div className="flex h-16 items-center justify-between">
           <Link href="/blog" className="text-xl font-bold text-kings-blue hover:text-kings-blue/90">
             Tech Club Blog
           </Link>
           <div className="flex items-center gap-4">
             <Link href="/blog">
               <Button variant="ghost">All Posts</Button>
             </Link>
             <Link href="/blog/editor">
               <Button className="bg-kings-blue text-white hover:bg-kings-blue/90">
                 Create Post
               </Button>
             </Link>
           </div>
         </div>
       </div>
     </div>
     <main>{children}</main>
   </div>
 )
}