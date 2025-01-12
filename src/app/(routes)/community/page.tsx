// app/(routes)/community/page.tsx
'use client';

import { motion } from "framer-motion";
import { EventShowcase } from "./components/event-showcase";
import { InitiativeCard } from "./components/initiative-card";
import { communityEvents, initiatives } from "./mock-data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users2 } from "lucide-react";

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#0C2340]/5">
      <div className="container mx-auto px-4 py-12 space-y-20">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#FFD17E] px-4 py-2 rounded-full mb-6"
          >
            <Users2 className="w-5 h-5 text-[#0C2340]" />
            <span className="text-[#0C2340] font-medium">Community Events</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-[#0C2340] mb-6"
          >
            Join Our Vibrant Tech Community
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#707070]"
          >
            Be part of exciting tech events and initiatives that foster learning, 
            innovation, and community building
          </motion.p>
        </section>

        {/* Events Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0C2340] mb-4">
              Community Events
            </h2>
            <p className="text-[#707070] max-w-2xl mx-auto">
              Regular gatherings that bring our tech community together
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {communityEvents.map((event, index) => (
              <EventShowcase key={event.id} event={event} index={index} />
            ))}
          </div>
        </section>

        {/* Initiatives Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0C2340] mb-4">
              Our Impact
            </h2>
            <p className="text-[#707070] max-w-2xl mx-auto">
              Key initiatives that make our community thrive
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <InitiativeCard key={initiative.id} initiative={initiative} index={index} />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative bg-[#279ECA] rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#279ECA] to-[#10377B]" />
          
          <div className="relative px-8 py-12 sm:px-12 sm:py-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Get Involved?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join our next event and become part of our growing tech community at King&apos;s College.
            </p>
            <Button 
              size="lg"
              className="bg-white text-[#279ECA] hover:bg-white/90 group"
            >
              Join Next Event
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}