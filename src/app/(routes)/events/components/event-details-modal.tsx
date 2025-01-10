import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CalendarDays, MapPin, User } from "lucide-react";
import { Event } from "../types";
import Image from "next/image";

interface EventDetailsModalProps {
  event: Event | null;
  open: boolean;
  onClose: () => void;
}

export const EventDetailsModal = ({ event, open, onClose }: EventDetailsModalProps) => {
  if (!event) return null;
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-white">
        <DialogHeader className="border-b border-[#0C2340]/10 pb-4">
          <DialogTitle className="text-[#0C2340] text-2xl font-bold">{event.title}</DialogTitle>
          <DialogDescription className="text-[#707070] text-base">
            {event.description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-6 pt-4">
          <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <div className="space-y-6">
            <div className="bg-[#0C2340]/5 p-6 rounded-lg space-y-4">
              <h3 className="text-lg font-semibold text-[#0C2340]">Event Details</h3>
              <ul className="space-y-3 text-[#0C2340]">
                <li className="flex items-center">
                  <CalendarDays className="w-5 h-5 mr-3 text-[#1E88E5]" />
                  <span><strong>Date:</strong> {event.date} at {event.time}</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-[#1E88E5]" />
                  <span><strong>Location:</strong> {event.location}</span>
                </li>
                {event.speaker && (
                  <li className="flex items-center">
                    <User className="w-5 h-5 mr-3 text-[#1E88E5]" />
                    <span><strong>Speaker:</strong> {event.speaker}</span>
                  </li>
                )}
              </ul>
            </div>
            
            {event.prerequisites && (
              <div className="border-t border-[#0C2340]/10 pt-4">
                <h3 className="text-lg font-semibold text-[#0C2340] mb-4">Prerequisites</h3>
                <ul className="list-disc pl-5 space-y-2 text-[#707070]">
                  {event.prerequisites.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};