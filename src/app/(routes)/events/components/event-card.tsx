import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, User } from "lucide-react";
import { Event } from "../types";
import { RegisterEventModal } from "./register-event-modal";

interface EventCardProps {
  event: Event;
  onViewDetails: (event: Event) => void;
}

export const EventCard = ({ event, onViewDetails }: EventCardProps) => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <>
      <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#F0AB00]">
        <CardHeader className="space-y-4">
          <div className="flex justify-between items-start">
            <Badge variant="secondary" className="bg-[#F0AB00] text-white font-medium">
              {event.type}
            </Badge>
            <Badge variant={event.status === 'Open' ? 'default' : 'destructive'} 
              className={event.status === 'Open' ? 'bg-[#1E88E5] text-white' : ''}>
              {event.status}
            </Badge>
          </div>
          <CardTitle className="text-[#0C2340] text-xl font-bold">{event.title}</CardTitle>
          <CardDescription className="text-[#707070] text-base">{event.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3 bg-[#0C2340]/5 p-4 rounded-lg">
            <div className="flex items-center text-sm text-[#0C2340]">
              <CalendarDays className="w-5 h-5 mr-3 text-[#1E88E5]" />
              {event.date} at {event.time}
            </div>
            <div className="flex items-center text-sm text-[#0C2340]">
              <MapPin className="w-5 h-5 mr-3 text-[#1E88E5]" />
              {event.location}
            </div>
            {event.speaker && (
              <div className="flex items-center text-sm text-[#0C2340]">
                <User className="w-5 h-5 mr-3 text-[#1E88E5]" />
                {event.speaker}
              </div>
            )}
          </div>
          <div className="flex gap-3">
            <Button
              variant="default"
              className="bg-[#0C2340] text-white hover:bg-[#0C2340]/90 flex-1"
              onClick={() => onViewDetails(event)}
            >
              View Details
            </Button>
            {event.status === 'Open' && (
              <Button
                variant="outline"
                className="border-[#F0AB00] text-[#F0AB00] hover:bg-[#F0AB00]/10 flex-1"
                onClick={() => setShowRegisterModal(true)}
              >
                Register
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <RegisterEventModal
        event={event}
        open={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
      />
    </>
  );
};