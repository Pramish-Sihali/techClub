// app/(routes)/blog/page.tsx
'use client';

import { useState, useEffect } from 'react';
// import { BlogCard } from './components/blog-card';
import { BlogFiltersComponent } from './components/blog-filters';
import { BlogGrid } from './components/blog-grid';
import { BlogFilters } from './types';
import { mockPosts, categories, tags } from './mock';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { LibraryBig } from "lucide-react";

const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const [filters, setFilters] = useState<BlogFilters>({
    category: 'all',
    tag: 'all',
    search: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
    setCurrentPage(1);
  }, [filters]);

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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 text-kings-blue mb-6">
          <LibraryBig className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Tech Club Blog</h1>
        </div>

        <BlogFiltersComponent
          filters={filters}
          categories={categories}
          tags={tags}
          onFilterChange={setFilters}
        />

        <BlogGrid posts={paginatedPosts} isLoading={isLoading} />

        {!isLoading && totalPages > 1 && (
          <div className="flex justify-center mt-12">
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
                      className={currentPage === i + 1 ? 'bg-kings-blue text-white' : ''}
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
          </div>
        )}
      </div>
    </div>
  );
}