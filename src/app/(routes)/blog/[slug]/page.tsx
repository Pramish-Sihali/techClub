// app/(routes)/blog/[slug]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BlogPost } from "../types"
import { CalendarDays, Share2, ThumbsUp, MessageSquare } from 'lucide-react';

const mockPost: BlogPost = {
  id: '1',
  title: 'Getting Started with React and Next.js',
  slug: 'getting-started-with-react-nextjs',
  content: 'Full content here...',
  excerpt: 'Learn the basics...',
  featuredImage: '/api/placeholder/800/400',
  author: {
    id: '1',
    name: 'John Doe',
    avatar: '/api/placeholder/32/32'
  },
  publishedAt: '2025-02-15',
  category: 'Web Development',
  tags: ['React', 'Next.js', 'Frontend'],
  status: 'published'
};

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    setPost(mockPost);
  }, [params.slug]);

  if (!post) return null;

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-kings-blue mb-4">
          {post.title}
        </h1>
        
        <div className="flex items-center justify-between border-y border-gray-200 py-4 my-4">
          <div className="flex items-center gap-4">
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
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </header>

      {post.featuredImage && (
        <div className="mb-8">
          <img 
            src={post.featuredImage}
            alt={post.title}
            className="w-full rounded-lg"
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none mb-8">
        {post.content}
      </div>

      <div className="flex gap-2 mb-8">
        <Badge variant="secondary">{post.category}</Badge>
        {post.tags.map(tag => (
          <Badge key={tag} variant="outline">{tag}</Badge>
        ))}
      </div>

      <div className="flex justify-between items-center border-t border-gray-200 pt-4">
        <div className="flex gap-4">
          <Button variant="ghost" size="sm">
            <ThumbsUp className="h-4 w-4 mr-2" />
            Like
          </Button>
          <Button variant="ghost" size="sm">
            <MessageSquare className="h-4 w-4 mr-2" />
            Comment
          </Button>
        </div>
      </div>
    </article>
  );
}