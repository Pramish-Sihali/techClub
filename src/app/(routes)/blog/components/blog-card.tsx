// app/(routes)/blog/components/blog-card.tsx

import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogPost } from "../types";

export function BlogCard({ post }: { post: BlogPost }) {
  const router = useRouter();

  return (
    <Card 
      className="hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => router.push(`/blog/${post.slug}`)}
    >
      <CardHeader>
        <div className="flex items-center gap-4 mb-4">
          <Avatar>
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{post.author.name}</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarDays className="mr-1 h-3 w-3" />
              {new Date(post.publishedAt).toLocaleDateString()}
            </div>
          </div>
        </div>
        <CardTitle className="hover:text-kings-blue transition-colors">
          {post.title}
        </CardTitle>
        <CardDescription>{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Badge variant="secondary">{post.category}</Badge>
            {post.tags.map(tag => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/blog/${post.slug}/edit`);
              }}
            >
              Edit Post
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}