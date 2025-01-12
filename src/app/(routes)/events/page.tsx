// page.tsx
'use client';

import { EventsTabs } from './tabs/events-tabs';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#0C2340]/5">
      <div className="container mx-auto px-4 py-12 space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#0C2340] mb-4">Tech Club Events</h1>
          <p className="text-lg text-[#707070] max-w-2xl mx-auto">
            Discover and join our exciting tech events, workshops, and networking opportunities
          </p>
        </div>

        <EventsTabs />
      </div>
    </div>
  );
}