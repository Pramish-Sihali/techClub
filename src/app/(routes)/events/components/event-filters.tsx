// EventFiltersComponent.tsx
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EventFilters } from "../types";
import { useState } from "react";
import { SuggestEventModal } from "./suggest-event-modal";

interface EventFiltersProps {
  filters: EventFilters;
  onFilterChange: React.Dispatch<React.SetStateAction<EventFilters>>;
  onSearch: (query: string) => void;
}

export const EventFiltersComponent = ({ filters, onFilterChange, onSearch }: EventFiltersProps) => {
  const [showSuggestModal, setShowSuggestModal] = useState(false);

  const handleFilterChange = (type: keyof EventFilters, value: string) => {
    onFilterChange(prev => ({ ...prev, [type]: value }));
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-[#0C2340]/10">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex flex-1 gap-4 min-w-[240px]">
          <Input
            placeholder="Search events..."
            onChange={(e) => onSearch(e.target.value)}
            className="border-[#707070]/30 focus:ring-[#1E88E5] focus:border-[#1E88E5]"
          />
          <Select
            value={filters.type}
            onValueChange={(value) => handleFilterChange('type', value)}
          >
            <SelectTrigger className="w-[180px] border-[#707070]/30 text-[#0C2340]">
              <SelectValue placeholder="Event Type" />
            </SelectTrigger>
            <SelectContent className="bg-white">
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
            <SelectTrigger className="w-[180px] border-[#707070]/30 text-[#0C2340]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Open">Open</SelectItem>
              <SelectItem value="Closed">Closed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          onClick={() => setShowSuggestModal(true)}
          className="bg-[#0C2340] hover:bg-[#0C2340]/90"
        >
          <PlusCircle className="w-4 h-4 mr-2" />
          Suggest Event
        </Button>
      </div>

      <SuggestEventModal 
        open={showSuggestModal} 
        onClose={() => setShowSuggestModal(false)} 
      />
    </div>
  );
};