// components/contributor-details-modal.tsx
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
  import { Badge } from "@/components/ui/badge";
  import { Button } from "@/components/ui/button";
  import { CalendarDays, Github, Linkedin, Globe, Clock } from 'lucide-react';
  import { Contributor } from "../types";
  
  interface ContributorDetailsModalProps {
    contributor: Contributor | null;
    open: boolean;
    onClose: () => void;
  }
  
  export function ContributorDetailsModal({ contributor, open, onClose }: ContributorDetailsModalProps) {
    if (!contributor) return null;
  
    const getContributionTypeColor = (type: string) => {
      switch (type) {
        case 'website': return 'bg-[#0C2340] text-white';
        case 'projects': return 'bg-[#F0AB00] text-white';
        case 'events': return 'bg-[#1E88E5] text-white';
        default: return 'bg-[#707070] text-white';
      }
    };
  
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="max-w-3xl bg-white">
          <DialogHeader className="border-b border-[#0C2340]/10 pb-6">
            <div className="flex items-start gap-6">
              <Avatar className="h-24 w-24 ring-4 ring-[#F0AB00]/20">
                <AvatarImage src={contributor.avatar} alt={contributor.name} />
                <AvatarFallback className="bg-[#0C2340] text-white text-2xl">
                  {contributor.name[0]}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-3">
                <DialogTitle className="text-2xl font-bold text-[#0C2340]">
                  {contributor.name}
                </DialogTitle>
                <p className="text-[#707070] text-lg">{contributor.role}</p>
                <div className="flex gap-3">
                  {contributor.githubUrl && (
                    <Button variant="ghost" size="icon" className="hover:text-[#1E88E5]" asChild>
                      <a href={contributor.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                  {contributor.linkedinUrl && (
                    <Button variant="ghost" size="icon" className="hover:text-[#1E88E5]" asChild>
                      <a href={contributor.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                  {contributor.websiteUrl && (
                    <Button variant="ghost" size="icon" className="hover:text-[#1E88E5]" asChild>
                      <a href={contributor.websiteUrl} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </DialogHeader>
  
          <div className="grid md:grid-cols-2 gap-8 pt-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#0C2340] mb-3">About</h3>
                <p className="text-[#707070]">{contributor.bio}</p>
              </div>
  
              <div className="bg-[#0C2340]/5 p-4 rounded-lg space-y-3">
                <div className="flex items-center gap-2 text-[#0C2340]">
                  <Clock className="h-4 w-4 text-[#1E88E5]" />
                  <span className="text-sm">
                    Joined: {new Date(contributor.joinedDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long' 
                    })}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {contributor.contributions.map((contribution, index) => (
                    <Badge 
                      key={index}
                      className={getContributionTypeColor(contribution.type)}
                    >
                      {contribution.type.charAt(0).toUpperCase() + contribution.type.slice(1)}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold text-[#0C2340] mb-4">Contributions</h3>
              <div className="space-y-4">
                {contributor.contributions.map((contribution, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-4 rounded-lg border border-[#0C2340]/10 hover:border-[#1E88E5]/30 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <CalendarDays className="h-5 w-5 mt-1 text-[#1E88E5]" />
                      <div className="space-y-2 flex-1">
                        <p className="font-medium text-[#0C2340]">{contribution.description}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-[#707070]">
                            {new Date(contribution.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long' 
                            })}
                          </p>
                          {contribution.url && (
                            <a 
                              href={contribution.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-[#1E88E5] hover:underline"
                            >
                              View contribution
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }