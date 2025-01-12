// components/events-tabs.tsx
'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { UpcomingEvents } from "./upcoming-events";
import { PastEvents } from "./past-events";
import { CalendarDays, History } from "lucide-react";

export function EventsTabs() {
  return (
    <Tabs defaultValue="upcoming" className="w-full">
      <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto mb-8">
        <TabsTrigger 
          value="upcoming"
          className="data-[state=active]:bg-[#0C2340] data-[state=active]:text-white"
        >
          <CalendarDays className="w-4 h-4 mr-2" />
          Upcoming Events
        </TabsTrigger>
        <TabsTrigger 
          value="past"
          className="data-[state=active]:bg-[#F0AB00] data-[state=active]:text-white"
        >
          <History className="w-4 h-4 mr-2" />
          Past Events
        </TabsTrigger>
      </TabsList>

      <TabsContent value="upcoming">
        <UpcomingEvents />
      </TabsContent>

      <TabsContent value="past">
        <PastEvents />
      </TabsContent>
    </Tabs>
  );
}