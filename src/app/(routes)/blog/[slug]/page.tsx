// app/(routes)/blog/[slug]/page.tsx
'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { BlogPost } from "../types";
import { CalendarDays, Share2, ThumbsUp, MessageSquare, ChevronLeft } from 'lucide-react';
import { mockPosts } from '../mock';

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      const foundPost = mockPosts.find(p => p.slug === params.slug);
      setPost(foundPost || null);
      setIsLoading(false);
    };
    fetchPost();
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg p-6 mb-8">
            <Skeleton className="h-6 w-24 mb-4" />
            <Skeleton className="h-10 w-3/4 mb-6" />
            <div className="flex gap-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
          </div>
          <Skeleton className="w-full aspect-[16/9] rounded-lg mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="bg-white rounded-lg p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Blog Post Not Found
            </h2>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Button
              onClick={() => router.back()}
              className="bg-kings-blue text-white hover:bg-kings-blue/90"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Posts
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <article className="container mx-auto px-4 max-w-4xl">
        <Button
          variant="ghost"
          className="mb-6 text-muted-foreground hover:text-kings-blue"
          onClick={() => router.back()}
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Posts
        </Button>

        {/* Header */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge 
              variant="secondary"
              className="bg-kings-blue/10 text-kings-blue hover:bg-kings-blue/20"
            >
              {post.category}
            </Badge>
            {post.tags.map(tag => (
              <Badge 
                key={tag} 
                variant="outline"
                className="border-kings-blue/20 text-kings-blue/80"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-kings-blue mb-6">
            {post.title}
          </h1>

          <div className="flex items-center justify-between py-4 border-t">
            <div className="flex items-center gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback className="bg-kings-blue text-white">
                  {post.author.name[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{post.author.name}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarDays className="mr-2 h-3 w-3" />
                  {formattedDate}
                </div>
              </div>
            </div>

            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="bg-white rounded-lg overflow-hidden mb-8">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src={`/images/blogs/${post.image}`}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-4">{post.excerpt}</p>
            <div className="mt-6">{post.content}</div>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="gap-2">
                <ThumbsUp className="h-4 w-4" />
                Like
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <MessageSquare className="h-4 w-4" />
                Comment
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Share this article</span>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}