'use client';

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CommunityEvent } from "../types";
import { Calendar, Check } from "lucide-react";

interface EventShowcaseProps {
  event: CommunityEvent;
  index: number;
}

export function EventShowcase({ event, index }: EventShowcaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
        <div 
          className="p-6" 
          style={{ backgroundColor: event.colorScheme.bg }}
        >
          <div className="space-y-2">
            <h3 
              className="text-2xl font-bold" 
              style={{ color: event.colorScheme.text }}
            >
              {event.title}
            </h3>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" style={{ color: event.colorScheme.text }} />
              <span 
                className="text-sm font-medium"
                style={{ color: event.colorScheme.text }}
              >
                {event.frequency}
              </span>
            </div>
          </div>
        </div>
        
        <CardContent className="p-6 space-y-4">
          <p className="text-[#707070]">{event.description}</p>
          <div className="space-y-3">
            <h4 className="font-semibold text-[#0C2340]">Event Highlights</h4>
            <ul className="space-y-2">
              {event.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[#707070]">
                  <Check 
                    className="w-5 h-5 shrink-0 mt-0.5" 
                    style={{ color: event.colorScheme.bg }}
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}