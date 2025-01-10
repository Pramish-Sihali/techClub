// app/(routes)/events/components/event-card.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, User } from "lucide-react"
import { Event } from "../types"

interface EventCardProps {
  event: Event;
  onRegister: (eventId: string) => void;
  onViewDetails: (event: Event) => void;
}

export const EventCard = ({ event, onRegister, onViewDetails }: EventCardProps) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader>
      <div className="flex justify-between items-start">
        <Badge variant="secondary" className="bg-kings-gold/10 text-kings-gold">
          {event.type}
        </Badge>
        <Badge variant={event.status === 'Open' ? 'default' : 'destructive'}>
          {event.status}
        </Badge>
      </div>
      <CardTitle className="text-kings-blue">{event.title}</CardTitle>
      <CardDescription>{event.description}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center text-sm">
          <CalendarDays className="w-4 h-4 mr-2" />
          {event.date} at {event.time}
        </div>
        <div className="flex items-center text-sm">
          <MapPin className="w-4 h-4 mr-2" />
          {event.location}
        </div>
        {event.speaker && (
          <div className="flex items-center text-sm">
            <User className="w-4 h-4 mr-2" />
            {event.speaker}
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <Button
          variant="default"
          className="bg-kings-blue text-white hover:bg-kings-blue/90"
          onClick={() => onViewDetails(event)}
        >
          View Details
        </Button>
        {event.status === 'Open' && (
          <Button
            variant="outline"
            className="border-kings-gold text-kings-gold hover:bg-kings-gold/10"
            onClick={() => onRegister(event.id)}
          >
            Register
          </Button>
        )}
      </div>
    </CardContent>
  </Card>
)