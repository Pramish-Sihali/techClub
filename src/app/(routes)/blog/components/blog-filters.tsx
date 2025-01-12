// app/(routes)/blog/components/blog-filters.tsx
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, PenSquare, Layout } from "lucide-react";
import { BlogFilters } from "../types";
import Link from "next/link";

interface BlogFiltersProps {
  filters: BlogFilters;
  categories: string[];
  tags: string[];
  onFilterChange: React.Dispatch<React.SetStateAction<BlogFilters>>;
}

export function BlogFiltersComponent({
  filters,
  categories,
  tags,
  onFilterChange
}: BlogFiltersProps) {
  return (
    <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search posts..."
            value={filters.search}
            onChange={(e) => onFilterChange(prev => ({ ...prev, search: e.target.value }))}
            className="pl-10 pr-4 border-kings-blue/20 focus-visible:ring-kings-blue"
          />
        </div>

        <Select
          value={filters.category}
          onValueChange={(value) => onFilterChange(prev => ({ ...prev, category: value }))}
        >
          <SelectTrigger className="w-[180px] border-kings-blue/20">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map(category => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.tag}
          onValueChange={(value) => onFilterChange(prev => ({ ...prev, tag: value }))}
        >
          <SelectTrigger className="w-[180px] border-kings-blue/20">
            <SelectValue placeholder="Tag" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tags</SelectItem>
            {tags.map(tag => (
              <SelectItem key={tag} value={tag}>{tag}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex items-center gap-2 ml-auto">
          <Link href="/blog">
            <Button 
              variant="ghost" 
              className="gap-2 hover:text-kings-blue hover:bg-kings-blue/10"
            >
              <Layout className="h-4 w-4" />
              All Posts
            </Button>
          </Link>
          <Link href="/blog/editor">
            <Button 
              className="bg-kings-blue text-white hover:bg-kings-blue/90 gap-2"
            >
              <PenSquare className="h-4 w-4" />
              Create Post
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}