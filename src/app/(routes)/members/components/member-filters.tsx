// app/(routes)/members/components/member-filters.tsx
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MemberFilters } from "../types"

interface MemberFiltersProps {
  filters: MemberFilters;
  onFilterChange: (filters: Partial<MemberFilters>) => void;
}

export function MemberFiltersComponent({ filters, onFilterChange }: MemberFiltersProps) {
  return (
    <div className="space-y-4">
      <Input
        placeholder="Search members..."
        value={filters.search}
        onChange={(e) => onFilterChange({ search: e.target.value })}
        className="max-w-sm"
      />
      <Select
        value={filters.role}
        onValueChange={(value) => onFilterChange({ role: value })}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Member Role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Roles</SelectItem>
          <SelectItem value="core">Core Team</SelectItem>
          <SelectItem value="active">Active Members</SelectItem>
          <SelectItem value="contributor">Contributors</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

