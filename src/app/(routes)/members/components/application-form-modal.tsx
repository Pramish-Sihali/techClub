
// application-form-modal.tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ExecutivePosition, ApplicationForm } from "../types";
import { useState } from "react";

interface ApplicationFormModalProps {
  position: ExecutivePosition | null;
  open: boolean;
  onClose: () => void;
}

export function ApplicationFormModal({ position, open, onClose }: ApplicationFormModalProps) {
  const [formData, setFormData] = useState<ApplicationForm>({
    name: '',
    studentId: '',
    email: '',
    phone: '',
    position: position?.title || '',
    experience: '',
    motivation: '',
    availability: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    onClose();
  };

  if (!position) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#0C2340]">
            Apply for {position.title}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
              <Label>Student ID</Label>
              <Input
                required
                value={formData.studentId}
                onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                placeholder="Enter your student ID"
              />
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <Label>Phone Number</Label>
              <Input
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Relevant Experience</Label>
            <Textarea
              required
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              placeholder="Describe your relevant experience and skills"
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Motivation</Label>
            <Textarea
              required
              value={formData.motivation}
              onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
              placeholder="Why are you interested in this position?"
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Availability</Label>
            <Textarea
              required
              value={formData.availability}
              onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
              placeholder="What is your availability for this position?"
            />
          </div>

          <div className="space-y-2">
            <Label>References (Optional)</Label>
            <Textarea
              value={formData.references}
              onChange={(e) => setFormData({ ...formData, references: e.target.value })}
              placeholder="List any references you'd like to provide"
            />
          </div>

          <div className="flex gap-3 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-[#707070] text-[#707070] hover:bg-[#707070]/10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#0C2340] text-white hover:bg-[#0C2340]/90"
            >
              Submit Application
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}