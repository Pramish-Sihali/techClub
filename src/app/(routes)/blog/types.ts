// app/(routes)/blog/types.ts
export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    featuredImage?: string;
    author: {
      id: string;
      name: string;
      avatar: string;
    };
    publishedAt: string;
    category: string;
    tags: string[];
    status: 'draft' | 'published' | 'pending';
  }
  
  export interface BlogFilters {
    category: string;
    tag: string;
    search: string;
  }