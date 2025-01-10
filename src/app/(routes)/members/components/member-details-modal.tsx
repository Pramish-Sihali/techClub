import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Member } from "../types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Globe } from "lucide-react";

interface MemberDetailsModalProps {
  member: Member | null;
  open: boolean;
  onClose: () => void;
}

export function MemberDetailsModal({ member, open, onClose }: MemberDetailsModalProps) {
  if (!member) return null;

  const getRoleStyles = (role: string) => {
    switch (role) {
      case 'core':
        return 'bg-[#0C2340] text-white';
      case 'active':
        return 'bg-[#F0AB00] text-white';
      default:
        return 'bg-[#707070] text-white';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader className="border-b border-[#0C2340]/10 pb-4">
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20 ring-4 ring-white shadow-lg">
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback className="bg-[#0C2340] text-white text-xl">
                {member.name[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <DialogTitle className="text-2xl text-[#0C2340] font-bold">
                {member.name}
              </DialogTitle>
              <DialogDescription className="text-[#707070] font-medium mt-1">
                {member.position}
              </DialogDescription>
              <Badge 
                variant="default"
                className={`mt-2 ${getRoleStyles(member.role)}`}
              >
                {member.role.charAt(0).toUpperCase() + member.role.slice(1)}
              </Badge>
            </div>
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 pt-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#0C2340] mb-2">About</h3>
              <p className="text-[#707070]">{member.bio}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#0C2340] mb-2">Member Info</h3>
              <div className="bg-[#0C2340]/5 p-4 rounded-lg space-y-2">
                <p className="text-sm text-[#707070]">
                  <span className="font-medium text-[#0C2340]">Member since:</span> {member.joinedDate}
                </p>
                <div className="flex gap-2">
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
              </div>
            </div>
          </div>

          {member.contributions && (
            <div>
              <h3 className="text-lg font-semibold text-[#0C2340] mb-4">Contributions</h3>
              <div className="bg-gradient-to-b from-[#0C2340]/5 to-transparent p-6 rounded-lg">
                <ul className="space-y-3">
                  {member.contributions.map((contribution, index) => (
                    <li 
                      key={index} 
                      className="text-[#707070] pl-4 border-l-2 border-[#F0AB00]"
                    >
                      {contribution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}