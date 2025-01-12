'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Globe } from "lucide-react";
import { Member } from "../types";
import Image from "next/image";

interface MemberCardProps {
  member: Member;
  onViewDetails: (member: Member) => void;
}

export function MemberCard({ member, onViewDetails }: MemberCardProps) {
  const getRoleColor = (role: string) => {
    switch (role) {
      case 'core':
        return 'bg-[#0C2340]';
      case 'active':
        return 'bg-[#F0AB00]';
      default:
        return 'bg-[#707070]';
    }
  };

  return (
    <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-t-[#EE7F40]">
      <div className={`p-6 ${getRoleColor(member.role)} text-white`}>
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16 ring-2 ring-white/20">
            {member.avatar && (
              <Image
                src={member.avatar}
                alt={member.name}
                width={64}
                height={64}
                className="object-cover"
              />
            )}
            <AvatarFallback className="bg-white/10 text-white text-xl">
              {member.name[0]}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg">
              {member.name}
            </h3>
            <p className="text-white/80">
              {member.position}
            </p>
          </div>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        <div className="flex justify-between items-start gap-4">
          <p className="text-sm text-[#707070] line-clamp-3">
            {member.bio}
          </p>
          <Badge 
            variant="secondary"
            className={`${getRoleColor(member.role)} text-white shrink-0`}
          >
            {member.role.charAt(0).toUpperCase() + member.role.slice(1)}
          </Badge>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-[#0C2340]/10">
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
            variant="default"
            size="sm"
            onClick={() => onViewDetails(member)}
            className={`${getRoleColor(member.role)} text-white`}
          >
            View Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}