

// app/(routes)/blog/components/blog-filters.tsx
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { BlogFilters } from "../types"

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
    <div className="space-y-4">
      <Input
        placeholder="Search posts..."
        value={filters.search}
        onChange={(e) => onFilterChange(prev => ({ ...prev, search: e.target.value }))}
        className="max-w-sm"
      />
      <div className="flex gap-4 flex-wrap">
        <Select
          value={filters.category}
          onValueChange={(value) => onFilterChange(prev => ({ ...prev, category: value }))}
        >
          <SelectTrigger className="w-[180px]">
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
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Tag" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tags</SelectItem>
            {tags.map(tag => (
              <SelectItem key={tag} value={tag}>{tag}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}