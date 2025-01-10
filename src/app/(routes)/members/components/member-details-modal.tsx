// app/(routes)/members/components/member-details-modal.tsx
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
  import { Member } from "../types"

  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

  
  interface MemberDetailsModalProps {
    member: Member | null;
    open: boolean;
    onClose: () => void;
  }
  
  export function MemberDetailsModal({ member, open, onClose }: MemberDetailsModalProps) {
    if (!member) return null;
  
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{member.name}</DialogTitle>
            <DialogDescription>{member.position}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-32 h-32">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm text-gray-600">{member.bio}</p>
                <p className="text-sm mt-2">Member since: {member.joinedDate}</p>
              </div>
            </div>
            {member.contributions && (
              <div>
                <h3 className="font-semibold mb-2">Contributions</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {member.contributions.map((contribution, index) => (
                    <li key={index} className="text-sm text-gray-600">{contribution}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    )
  }
  