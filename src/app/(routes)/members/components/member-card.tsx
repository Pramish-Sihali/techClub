import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Globe } from "lucide-react";
import { Member } from "../types";

interface MemberCardProps {
  member: Member;
  onViewDetails: (member: Member) => void;
}

export function MemberCard({ member, onViewDetails }: MemberCardProps) {
  const getRoleStyles = (role: string) => {
    switch (role) {
      case 'core':
        return 'bg-[#0C2340] text-white hover:bg-[#0C2340]/90';
      case 'active':
        return 'bg-[#F0AB00] text-white hover:bg-[#F0AB00]/90';
      default:
        return 'bg-[#707070] text-white hover:bg-[#707070]/90';
    }
  };

  return (
    <Card className="hover:shadow-xl transition-all duration-300 group">
      <CardHeader className="text-center relative pb-6">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0C2340]/5 to-transparent -z-10" />
        <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-white shadow-lg">
          <AvatarImage src={member.avatar} alt={member.name} />
          <AvatarFallback className="bg-[#0C2340] text-white text-xl">
            {member.name[0]}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-[#0C2340] group-hover:text-[#1E88E5] transition-colors">
            {member.name}
          </h3>
          <CardDescription className="text-[#707070] font-medium">
            {member.position}
          </CardDescription>
        </div>
        <Badge 
          variant="default"
          className={`mt-3 ${getRoleStyles(member.role)}`}
        >
          {member.role.charAt(0).toUpperCase() + member.role.slice(1)}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-[#707070] line-clamp-3 min-h-[4.5rem]">
          {member.bio}
        </p>
        <div className="flex justify-between items-center pt-2 border-t border-[#0C2340]/10">
          <div className="flex gap-1">
            {member.socialLinks.github && (
              <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-[#1E88E5]">
                  <Github className="h-4 w-4" />
                </Button>
              </a>
            )}
            {member.socialLinks.linkedin && (
              <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-[#1E88E5]">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
            )}
            {member.socialLinks.twitter && (
              <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-[#1E88E5]">
                  <Twitter className="h-4 w-4" />
                </Button>
              </a>
            )}
            {member.socialLinks.website && (
              <a href={member.socialLinks.website} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-[#1E88E5]">
                  <Globe className="h-4 w-4" />
                </Button>
              </a>
            )}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(member)}
            className="border-[#0C2340] text-[#0C2340] hover:bg-[#0C2340] hover:text-white transition-colors"
          >
            View Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}