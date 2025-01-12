// components/past-events.tsx
'use client';

import { useState } from 'react';

import { EventCard } from '../components/event-card';
import { EventFiltersComponent } from '../components/event-filters';
import { EventDetailsModal } from '../components/event-details-modal';
import { Event, EventFilters } from '../types';
import { mockEvents } from '../mock-events';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const ITEMS_PER_PAGE = 9;

export function PastEvents() {
  const [filters, setFilters] = useState<EventFilters>({
    type: 'all',
    status: 'all',
    search: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Filter past events and sort by date (most recent first)
  const pastEvents = mockEvents
    .filter(event => {
      const eventDate = new Date(event.date);
      return eventDate < new Date();
    })
    .map(event => ({
      ...event,
      status: 'Closed' as const
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const filteredEvents = pastEvents.filter(event => {
    const matchesType = filters.type === 'all' || event.type === filters.type;
    const matchesSearch = !filters.search || 
      event.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      event.description.toLowerCase().includes(filters.search.toLowerCase());
    
    return matchesType && matchesSearch;
  });

  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="space-y-8">
      <EventFiltersComponent 
        filters={filters}
        onFilterChange={setFilters}
        onSearch={(query) => setFilters(prev => ({ ...prev, search: query }))}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onViewDetails={setSelectedEvent}
          />
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-16 bg-white rounded-lg shadow-sm">
          <p className="text-[#707070] text-lg">No past events found matching your criteria.</p>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center pt-8">
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

      <EventDetailsModal
        event={selectedEvent}
        open={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}