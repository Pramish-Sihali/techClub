// app/(routes)/events/components/event-details-modal.tsx
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
  import { Event } from "../types"
  
  interface EventDetailsModalProps {
    event: Event | null;
    open: boolean;
    onClose: () => void;
  }
  
  export const EventDetailsModal = ({ event, open, onClose }: EventDetailsModalProps) => {
    if (!event) return null;
  
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{event.title}</DialogTitle>
            <DialogDescription>
              {event.description}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="prose max-w-none">
              <h3>Event Details</h3>
              <ul>
                <li><strong>Date:</strong> {event.date}</li>
                <li><strong>Time:</strong> {event.time}</li>
                <li><strong>Location:</strong> {event.location}</li>
                {event.speaker && <li><strong>Speaker:</strong> {event.speaker}</li>}
              </ul>
              {event.additionalDetails && (
                <>
                  <h3>Additional Information</h3>
                  <p>{event.additionalDetails}</p>
                </>
              )}
            </div>
            {event.prerequisites && (
              <div>
                <h3 className="font-semibold mb-2">Prerequisites</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {event.prerequisites.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    )
  }