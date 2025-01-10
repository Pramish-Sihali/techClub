// app/(routes)/blog/editor/page.tsx
'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { BlogPost } from "../types"

const categories = ['Web Development', 'AI/ML', 'Mobile Development', 'Cloud Computing'];
const tags = ['React', 'Next.js', 'Frontend', 'Backend', 'AI', 'Mobile'];

export default function BlogEditorPage() {
  const [post, setPost] = useState<Partial<BlogPost>>({
    title: '',
    content: '',
    excerpt: '',
    category: '',
    tags: [],
    status: 'draft'
  });

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSubmit = async (status: 'draft' | 'published') => {
    const updatedPost = {
      ...post,
      status,
      tags: selectedTags
    };
    
    // This would be replaced with actual API call
    console.log('Saving post:', updatedPost);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-kings-blue mb-8">
        Create New Blog Post
      </h1>

      <div className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <Input
            value={post.title}
            onChange={(e) => setPost(prev => ({ ...prev, title: e.target.value }))}
            placeholder="Enter your blog post title"
          />
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-sm font-medium mb-2">Excerpt</label>
          <Textarea
            value={post.excerpt}
            onChange={(e) => setPost(prev => ({ ...prev, excerpt: e.target.value }))}
            placeholder="Write a brief excerpt"
            rows={3}
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium mb-2">Content</label>
          <Textarea
            value={post.content}
            onChange={(e) => setPost(prev => ({ ...prev, content: e.target.value }))}
            placeholder="Write your blog post content"
            rows={12}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <Select
            value={post.category}
            onValueChange={(value) => setPost(prev => ({ ...prev, category: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium mb-2">Tags</label>
          <div className="flex flex-wrap gap-2">
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
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Image */}
        <div>
          <label className="block text-sm font-medium mb-2">Featured Image</label>
          <Input type="file" accept="image/*" />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4 pt-4">
          <Button
            variant="outline"
            onClick={() => handleSubmit('draft')}
          >
            Save as Draft
          </Button>
          <Button
            onClick={() => handleSubmit('published')}
            className="bg-kings-blue text-white hover:bg-kings-blue/90"
          >
            Publish
          </Button>
        </div>
      </div>
    </div>
  );
}