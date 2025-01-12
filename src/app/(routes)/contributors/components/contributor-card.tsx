'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Globe } from 'lucide-react';
import { Contributor } from "../types";
import Image from "next/image";

interface ContributorCardProps {
  contributor: Contributor;
  onSelect: (contributor: Contributor) => void;
}

export function ContributorCard({ contributor, onSelect }: ContributorCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'website':
        return 'bg-[#0C2340]';
      case 'projects':
        return 'bg-[#F0AB00]';
      case 'events':
        return 'bg-[#1E88E5]';
      default:
        return 'bg-[#707070]';
    }
  };

  // Get the primary contribution type for the header color
  const primaryType = contributor.contributions[0]?.type || 'website';

  return (
    <Card 
      className="hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-t-[#F0AB00] cursor-pointer"
      onClick={() => onSelect(contributor)}
    >
      <div className={`p-6 ${getTypeColor(primaryType)} text-white`}>
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16 ring-2 ring-white/20">
            {contributor.avatar && (
              <Image
                src={contributor.avatar}
                alt={contributor.name}
                width={64}
                height={64}
                className="object-cover"
              />
            )}
            <AvatarFallback className="bg-white/10 text-white text-xl">
              {contributor.name[0]}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg">
              {contributor.name}
            </h3>
            <p className="text-white/80">
              {contributor.role}
            </p>
          </div>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        <div className="space-y-4">
          <p className="text-sm text-[#707070] line-clamp-2">
            {contributor.bio}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {contributor.contributions.map((contribution, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className={`${getTypeColor(contribution.type)} text-white`}
              >
                {contribution.type.charAt(0).toUpperCase() + contribution.type.slice(1)}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-[#FFFFFF]/10">
          <div className="flex gap-1">
            {contributor.githubUrl && (
              <a 
                href={contributor.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={e => e.stopPropagation()}
              >
                <Button variant="ghost" size="icon" className="hover:text-[#FFFFFF]">
                  <Github className="h-4 w-4" />
                </Button>
              </a>
            )}
            {contributor.linkedinUrl && (
              <a 
                href={contributor.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={e => e.stopPropagation()}
              >
                <Button variant="ghost" size="icon" className="hover:text-[#FFFFFF]">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
            )}
            {contributor.websiteUrl && (
              <a 
                href={contributor.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={e => e.stopPropagation()}
              >
                <Button variant="ghost" size="icon" className="hover:text-[#1E88E5]">
                  <Globe className="h-4 w-4" />
                </Button>
              </a>
            )}
          </div>
          <Button
            variant="default"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(contributor);
            }}
            className={`${getTypeColor(primaryType)} text-white`}
          >
            View Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}