import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MemberFilters } from "../types";
import { Search, Users } from "lucide-react";

interface MemberFiltersProps {
  filters: MemberFilters;
  onFilterChange: (filters: Partial<MemberFilters>) => void;
}

export function MemberFiltersComponent({ filters, onFilterChange }: MemberFiltersProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-[#0C2340]/10">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#707070] h-4 w-4" />
          <Input
            placeholder="Search members..."
            value={filters.search}
            onChange={(e) => onFilterChange({ search: e.target.value })}
            className="pl-10 border-[#707070]/30 focus:ring-[#1E88E5] focus:border-[#1E88E5]"
          />
        </div>
        
        <Select
          value={filters.role}
          onValueChange={(value) => onFilterChange({ role: value })}
        >
          <SelectTrigger className="w-[180px] border-[#707070]/30 text-[#0C2340]">
            <Users className="w-4 h-4 mr-2 text-[#707070]" />
            <SelectValue placeholder="Member Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="core">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C2340]"></span>
                Core Team
              </div>
            </SelectItem>
            <SelectItem value="active">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F0AB00]"></span>
                Active Members
              </div>
            </SelectItem>
            <SelectItem value="contributor">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#707070]"></span>
                Contributors
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}