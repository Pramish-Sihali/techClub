// app/(routes)/blog/components/blog-card.tsx
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";
import { BlogPost } from "../types";

export function BlogCard({ post }: { post: BlogPost }) {
  const router = useRouter();
  
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <Card 
      onClick={() => router.push(`/blog/${post.slug}`)}
      className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group border-0 bg-white h-full flex flex-col"
    >
      <div className="relative w-full pt-[56.25%]">
        <Image
          src={`/images/blogs/${post.image}`}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-kings-blue transition-colors">
          {post.title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {post.excerpt}
        </p>

        <div className="flex gap-2 flex-wrap mb-6">
          <Badge 
            variant="secondary"
            className="bg-kings-blue/10 text-kings-blue hover:bg-kings-blue/20"
          >
            {post.category}
          </Badge>
          {post.tags.slice(0, 2).map(tag => (
            <Badge 
              key={tag} 
              variant="outline"
              className="border-kings-blue/20 text-kings-blue/80"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="pt-4 border-t mt-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback className="bg-kings-blue text-white">
                {post.author.name[0]}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{post.author.name}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarDays className="mr-2 h-4 w-4" />
            {formattedDate}
          </div>
        </div>
      </div>
    </Card>
  );
}