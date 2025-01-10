// components/contributor-card.tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Globe } from 'lucide-react';
import { Contributor } from "../types";

interface ContributorCardProps {
  contributor: Contributor;
  onSelect: (contributor: Contributor) => void;
}

export function ContributorCard({ contributor, onSelect }: ContributorCardProps) {
  return (
    <Card 
      className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#0C2340] group cursor-pointer bg-white"
      onClick={() => onSelect(contributor)}
    >
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16 ring-2 ring-[#F0AB00]/20">
          <AvatarImage src={contributor.avatar} alt={contributor.name} />
          <AvatarFallback className="bg-[#0C2340] text-white text-xl">
            {contributor.name[0]}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-lg text-[#0C2340] group-hover:text-[#1E88E5] transition-colors">
            {contributor.name}
          </h3>
          <p className="text-sm text-[#707070]">{contributor.role}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-[#707070] line-clamp-2 min-h-[2.5rem]">
          {contributor.bio}
        </p>
        <div className="flex flex-wrap gap-2">
          {contributor.contributions.map((contribution, index) => (
            <Badge 
              key={index} 
              variant="secondary"
              className={
                contribution.type === 'website' ? 'bg-[#0C2340] text-white' :
                contribution.type === 'projects' ? 'bg-[#F0AB00] text-white' :
                contribution.type === 'events' ? 'bg-[#1E88E5] text-white' :
                'bg-[#707070] text-white'
              }
            >
              {contribution.type.charAt(0).toUpperCase() + contribution.type.slice(1)}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2 pt-2 border-t border-[#0C2340]/10">
          {contributor.githubUrl && (
            <Button variant="ghost" size="icon" className="hover:text-[#1E88E5]" asChild>
              <a href={contributor.githubUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {contributor.linkedinUrl && (
            <Button variant="ghost" size="icon" className="hover:text-[#1E88E5]" asChild>
              <a href={contributor.linkedinUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          )}
          {contributor.websiteUrl && (
            <Button variant="ghost" size="icon" className="hover:text-[#1E88E5]" asChild>
              <a href={contributor.websiteUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                <Globe className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}