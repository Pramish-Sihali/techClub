// components/partner-card.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Partner } from "../types";

interface PartnerCardProps {
  partner: Partner;
}

export function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
      <CardContent className="p-6 space-y-4">
        <div className="relative h-32 w-full bg-[#0C2340]/5 rounded-lg flex items-center justify-center p-4">
          <Image
            src={partner.logo}
            alt={partner.name}
            width={160}
            height={80}
            className="object-contain filter transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C2340]/0 to-[#0C2340]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-lg text-[#0C2340] group-hover:text-[#1E88E5] transition-colors">
              {partner.name}
            </h3>
            <Badge 
              variant="secondary"
              className={
                partner.type === 'technology' ? 'bg-[#0C2340] text-white' :
                partner.type === 'education' ? 'bg-[#F0AB00] text-white' :
                'bg-[#1E88E5] text-white'
              }
            >
              {partner.type}
            </Badge>
          </div>
          <p className="text-sm text-[#707070] mb-4">{partner.description}</p>
          <div className="flex justify-between items-center pt-4 border-t border-[#0C2340]/10">
            <span className="text-sm text-[#707070]">
              Partner since {new Date(partner.partnerSince).getFullYear()}
            </span>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-[#1E88E5] hover:text-[#1E88E5]/80"
              asChild
            >
              <a href={partner.website} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" />
                Visit Website
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}