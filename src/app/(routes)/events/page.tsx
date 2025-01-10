'use client';

import { useState } from 'react';
import { EventCard } from './components/event-card';
import { EventFiltersComponent } from './components/event-filters';
import { EventDetailsModal } from './components/event-details-modal';
import { Event, EventFilters } from './types';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const ITEMS_PER_PAGE = 9;

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Web Development Workshop',
    description: 'Learn modern web development with React and Next.js',
    type: 'workshop',
    date: 'March 15, 2025',
    time: '2:00 PM',
    location: 'Tech Lab 101',
    status: 'Open',
    speaker: 'John Doe',
    prerequisites: ['Basic HTML/CSS', 'JavaScript fundamentals'],
    additionalDetails: 'Bring your laptop with Node.js installed'
  },
  // Add more mock events as needed
];

export default function EventsPage() {
  const [filters, setFilters] = useState<EventFilters>({
    type: 'all',
    status: 'all',
    search: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filteredEvents = mockEvents.filter(event => {
    const matchesType = filters.type === 'all' || event.type === filters.type;
    const matchesStatus = filters.status === 'all' || event.status === filters.status;
    const matchesSearch = !filters.search || 
      event.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      event.description.toLowerCase().includes(filters.search.toLowerCase());
    
    return matchesType && matchesStatus && matchesSearch;
  });

  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleRegister = async (eventId: string) => {
    console.log('Registering for event:', eventId);
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-4xl font-bold text-kings-blue mb-8">Events</h1>
      
      <EventFiltersComponent 
        filters={filters}
        onFilterChange={setFilters}
        onSearch={(query) => setFilters(prev => ({ ...prev, search: query }))}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedEvents.map(event => (
          <EventCard
            key={event.id}
            event={event}
            onRegister={handleRegister}
            onViewDetails={setSelectedEvent}
          />
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No events found matching your criteria.
        </div>
      )}

      {totalPages > 1 && (
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
      )}

      <EventDetailsModal
        event={selectedEvent}
        open={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}