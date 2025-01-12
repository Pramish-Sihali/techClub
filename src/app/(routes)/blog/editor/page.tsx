'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { BlogPost } from "../types"
import { categories, tags } from '../mock';
import { ImagePlus, Loader2 } from "lucide-react"
import Image from 'next/image';

export default function BlogEditorPage() {
  const [post, setPost] = useState<Partial<BlogPost>>({
    title: '',
    content: '',
    excerpt: '',
    category: '',
    tags: [],
    status: 'draft',
    image: 'blog1.png'
  });

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleSubmit = async (status: 'draft' | 'published') => {
    setIsSubmitting(true);
    const updatedPost = {
      ...post,
      status,
      tags: selectedTags,
      publishedAt: new Date().toISOString(),
      author: {
        name: 'John Doe',
        avatar: '/avatars/default.png'
      }
    };
    
    console.log('Saving post:', updatedPost);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-kings-blue mb-8">Create New Blog Post</h1>

      <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={post.title}
            onChange={(e) => setPost(prev => ({ ...prev, title: e.target.value }))}
            placeholder="Enter your blog post title"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea
            id="excerpt"
            value={post.excerpt}
            onChange={(e) => setPost(prev => ({ ...prev, excerpt: e.target.value }))}
            placeholder="Write a brief excerpt"
            rows={3}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            value={post.content}
            onChange={(e) => setPost(prev => ({ ...prev, content: e.target.value }))}
            placeholder="Write your blog post content"
            rows={12}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="category">Category</Label>
          <Select
            value={post.category}
            onValueChange={(value) => setPost(prev => ({ ...prev, category: value }))}
          >
            <SelectTrigger id="category" className="mt-1">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Tags</Label>
          <div className="flex flex-wrap gap-2 mt-1">
            {tags.map(tag => (
              <Button
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedTags(prev =>
                    prev.includes(tag)
                      ? prev.filter(t => t !== tag)
                      : [...prev, tag]
                  );
                }}
                className={selectedTags.includes(tag) ? "bg-kings-blue text-white hover:bg-kings-blue/90" : ""}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <Label>Featured Image</Label>
          <div className="mt-1 space-y-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => setPost(prev => ({ ...prev, image: prev.image === 'blog1.png' ? 'blog2.jpg' : 'blog1.png' }))}
              >
                <ImagePlus className="h-4 w-4" />
                Toggle Image
              </Button>
              {post.image && (
                <p className="text-sm text-muted-foreground">
                  Selected: {post.image}
                </p>
              )}
            </div>
            {post.image && (
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={`/images/blogs/${post.image}`}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <Button
            variant="outline"
            onClick={() => handleSubmit('draft')}
            disabled={isSubmitting}
          >
            {isSubmitting ? 
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...</> : 
              'Save as Draft'
            }
          </Button>
          <Button
            onClick={() => handleSubmit('published')}
            className="bg-kings-blue text-white hover:bg-kings-blue/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? 
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Publishing...</> : 
              'Publish'
            }
          </Button>
        </div>
      </div>
    </div>
  );
}