// components/partnership-cta.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function PartnershipCTA() {
  return (
    <div className="relative bg-[#0C2340] rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C2340] to-[#1E88E5]/30" />
      
      <div className="relative px-8 py-12 sm:px-12 sm:py-16 md:py-20 lg:px-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Partner with Us
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join us in shaping the future of technology education. Together, we can create 
            meaningful opportunities for students and contribute to the tech community.
          </p>
          <Button 
            size="lg"
            className="bg-[#F0AB00] text-white hover:bg-[#F0AB00]/90 group"
          >
            Become a Partner
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}