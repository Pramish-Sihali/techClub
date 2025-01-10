// app/(routes)/blog/page.tsx
'use client';

import { useState } from 'react';
import { BlogCard } from './components/blog-card';
import { BlogFiltersComponent } from './components/blog-filters';
import { BlogPost, BlogFilters } from './types';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const POSTS_PER_PAGE = 9;

const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React and Next.js',
    slug: 'getting-started-with-react-nextjs',
    content: '...',
    excerpt: 'Learn the basics of React and Next.js in this comprehensive guide...',
    featuredImage: '/api/placeholder/400/300',
    author: {
      id: '1',
      name: 'John Doe',
      avatar: '/api/placeholder/32/32'
    },
    publishedAt: '2025-02-15',
    category: 'Web Development',
    tags: ['React', 'Next.js', 'Frontend'],
    status: 'published'
  },
  // Add more mock posts...
];

const categories = ['Web Development', 'AI/ML', 'Mobile Development', 'Cloud Computing'];
const tags = ['React', 'Next.js', 'Frontend', 'Backend', 'AI', 'Mobile'];

export default function BlogPage() {
  const [filters, setFilters] = useState<BlogFilters>({
    category: 'all',
    tag: 'all',
    search: ''
  });
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = mockPosts.filter(post => {
    const matchesCategory = filters.category === 'all' || post.category === filters.category;
    const matchesTag = filters.tag === 'all' || post.tags.includes(filters.tag);
    const matchesSearch = !filters.search || 
      post.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(filters.search.toLowerCase());
    
    return matchesCategory && matchesTag && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-kings-blue mb-4">Tech Blog</h1>
        <p className="text-lg text-gray-600">
          Discover insights and experiences from our tech community
        </p>
      </div>

      <BlogFiltersComponent 
        filters={filters}
        categories={categories}
        tags={tags}
        onFilterChange={setFilters}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No blog posts found matching your criteria.
        </div>
      )}

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i + 1}>
                <PaginationLink
                  onClick={() => setCurrentPage(i + 1)}
                  isActive={currentPage === i + 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext 
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}