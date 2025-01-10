// app/(routes)/events/components/event-filters.tsx
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { EventFilters } from "../types"

interface EventFiltersProps {
  filters: EventFilters;
  onFilterChange: React.Dispatch<React.SetStateAction<EventFilters>>;
  onSearch: (query: string) => void;
}

export const EventFiltersComponent = ({ filters, onFilterChange, onSearch }: EventFiltersProps) => {
  const handleFilterChange = (type: keyof EventFilters, value: string) => {
    onFilterChange(prev => ({ ...prev, [type]: value }));
  };

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search events..."
        onChange={(e) => onSearch(e.target.value)}
        className="max-w-sm"
      />
      <div className="flex gap-4 flex-wrap">
        <Select
          value={filters.type}
          onValueChange={(value) => handleFilterChange('type', value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Event Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="workshop">Workshops</SelectItem>
            <SelectItem value="hackathon">Hackathons</SelectItem>
            <SelectItem value="networking">Networking</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.status}
          onValueChange={(value) => handleFilterChange('status', value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Open">Open</SelectItem>
            <SelectItem value="Closed">Closed</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};