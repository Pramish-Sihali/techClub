// app/(routes)/members/components/member-card.tsx
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Globe } from "lucide-react"
import { Member } from "../types"

interface MemberCardProps {
  member: Member;
  onViewDetails: (member: Member) => void;
}

export function MemberCard({ member, onViewDetails }: MemberCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="text-center">
        <Avatar className="w-24 h-24 mx-auto mb-4">
          <AvatarImage src={member.avatar} alt={member.name} />
          <AvatarFallback>{member.name[0]}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h3 className="font-semibold text-lg">{member.name}</h3>
          <CardDescription>{member.position}</CardDescription>
        </div>
        <Badge 
          variant={
            member.role === 'core' ? 'default' : 
            member.role === 'active' ? 'secondary' : 
            'outline'
          }
          className="mt-2"
        >
          {member.role.charAt(0).toUpperCase() + member.role.slice(1)}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{member.bio}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {member.socialLinks.github && (
              <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon"><Github className="h-4 w-4" /></Button>
              </a>
            )}
            {member.socialLinks.linkedin && (
              <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon"><Linkedin className="h-4 w-4" /></Button>
              </a>
            )}
            {member.socialLinks.twitter && (
              <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon"><Twitter className="h-4 w-4" /></Button>
              </a>
            )}
            {member.socialLinks.website && (
              <a href={member.socialLinks.website} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon"><Globe className="h-4 w-4" /></Button>
              </a>
            )}
          </div>
          <Button 
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(member)}
          >
            View Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
