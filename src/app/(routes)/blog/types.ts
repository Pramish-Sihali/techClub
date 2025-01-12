// app/(routes)/blog/types.ts
export interface Author {
  name: string;
  avatar: string;
}

export type PostStatus = 'draft' | 'published';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  author: Author;
  publishedAt: string;
  category: string;
  tags: string[];
  status: PostStatus;
  likes?: number;
  comments?: number;
}

export interface BlogFilters {
  search: string;
  category: string;
  tag: string;
}

export interface BlogCardProps {
  post: BlogPost;
}

export interface BlogGridProps {
  posts: BlogPost[];
  isLoading?: boolean;
}

export interface BlogFiltersProps {
  filters: BlogFilters;
  categories: string[];
  tags: string[];
  onFilterChange: React.Dispatch<React.SetStateAction<BlogFilters>>;
}

export interface BlogPostHeaderProps {
  post: BlogPost;
  onBack: () => void;
}

export interface BlogPostMetaProps {
  post: BlogPost;
}

export interface BlogPostContentProps {
  post: BlogPost;
}

export interface BlogPostActionsProps {
  post: BlogPost;
}