// position-card.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";
import { ExecutivePosition } from "../types";

interface PositionCardProps {
  position: ExecutivePosition;
  onApply: (position: ExecutivePosition) => void;
}

export function PositionCard({ position, onApply }: PositionCardProps) {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#F0AB00]">
      <CardHeader>
        <div className="flex justify-between items-start">
          <Badge variant="secondary" className={position.type === 'executive' ? 'bg-[#0C2340] text-white' : 'bg-[#F0AB00] text-white'}>
            {position.type.charAt(0).toUpperCase() + position.type.slice(1)}
          </Badge>
          <Badge variant={position.status === 'open' ? 'default' : 'destructive'} 
            className={position.status === 'open' ? 'bg-[#1E88E5] text-white' : ''}>
            {position.status.toUpperCase()}
          </Badge>
        </div>
        <CardTitle className="text-[#0C2340] text-xl font-bold mt-2">{position.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-[#707070]">{position.description}</p>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-[#707070]">
            <Clock className="w-4 h-4 text-[#1E88E5]" />
            Commitment: {position.commitment}
          </div>
          <div className="flex items-center gap-2 text-sm text-[#707070]">
            <Users className="w-4 h-4 text-[#1E88E5]" />
            Requirements:
          </div>
          <ul className="list-disc pl-5 space-y-1 text-sm text-[#707070]">
            {position.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <Button
          onClick={() => onApply(position)}
          className="w-full bg-[#0C2340] text-white hover:bg-[#0C2340]/90"
          disabled={position.status !== 'open'}
        >
          Apply Now
        </Button>
      </CardContent>
    </Card>
  );
}
