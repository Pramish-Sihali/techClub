// components/contributor-filters.tsx
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { ContributorFilters, contributionTypes } from "../types";

interface ContributorFiltersProps {
  filters: ContributorFilters;
  onFilterChange: (filters: Partial<ContributorFilters>) => void;
}

export function ContributorFiltersComponent({ filters, onFilterChange }: ContributorFiltersProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-[#0C2340]/10">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#707070] h-4 w-4" />
          <Input
            placeholder="Search contributors..."
            value={filters.search}
            onChange={(e) => onFilterChange({ search: e.target.value })}
            className="pl-10 border-[#707070]/30 focus:ring-[#1E88E5] focus:border-[#1E88E5]"
          />
        </div>
        
        <Select
          value={filters.type}
          onValueChange={(value: ContributorFilters['type']) => 
            onFilterChange({ type: value })
          }
        >
          <SelectTrigger className="w-[200px] border-[#707070]/30 text-[#0C2340]">
            <Filter className="w-4 h-4 mr-2 text-[#707070]" />
            <SelectValue placeholder="Contribution Type" />
          </SelectTrigger>
          <SelectContent>
            {contributionTypes.map(type => (
              <SelectItem 
                key={type.value} 
                value={type.value}
                className="focus:bg-[#0C2340]/5"
              >
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    type.value === 'website' ? 'bg-[#0C2340]' :
                    type.value === 'projects' ? 'bg-[#F0AB00]' :
                    type.value === 'events' ? 'bg-[#1E88E5]' :
                    type.value === 'content' ? 'bg-[#707070]' :
                    'bg-transparent'
                  }`}></span>
                  {type.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}