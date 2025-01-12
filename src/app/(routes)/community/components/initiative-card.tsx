'use client';

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Initiative } from "../types";
import { Trophy } from "lucide-react";

interface InitiativeCardProps {
  initiative: Initiative;
  index: number;
}

export function InitiativeCard({ initiative, index }: InitiativeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card 
        className="hover:shadow-xl transition-all duration-300 group overflow-hidden h-full"
        style={{ backgroundColor: initiative.colorScheme.bg }}
      >
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-4">
            <div 
              className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center"
            >
              <Trophy className="w-6 h-6" style={{ color: initiative.colorScheme.text }} />
            </div>
            <div>
              <h3 
                className="text-lg font-semibold mb-1" 
                style={{ color: initiative.colorScheme.text }}
              >
                {initiative.title}
              </h3>
              <span 
                className="text-sm font-medium bg-white/20 px-2 py-1 rounded-full"
                style={{ color: initiative.colorScheme.text }}
              >
                {initiative.impact}
              </span>
            </div>
          </div>
          <p style={{ color: initiative.colorScheme.text + 'CC' }}>
            {initiative.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}