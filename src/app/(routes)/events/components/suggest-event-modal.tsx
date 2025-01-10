// SuggestEventModal.tsx
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface SuggestEventModalProps {
  open: boolean;
  onClose: () => void;
}

interface SuggestEventForm {
  title: string;
  type: string;
  description: string;
  expectedOutcome: string;
  targetAudience: string;
}

export const SuggestEventModal = ({ open, onClose }: SuggestEventModalProps) => {
  const [formData, setFormData] = useState<SuggestEventForm>({
    title: '',
    type: '',
    description: '',
    expectedOutcome: '',
    targetAudience: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Submitted suggestion:', formData);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#0C2340]">
            Suggest an Event
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-[#0C2340]">Event Title</label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter event title"
                className="mt-1"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#0C2340]">Event Type</label>
              <Select
                value={formData.type}
                onValueChange={(value) => setFormData({ ...formData, type: value })}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="workshop">Workshop</SelectItem>
                  <SelectItem value="hackathon">Hackathon</SelectItem>
                  <SelectItem value="networking">Networking Event</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-[#0C2340]">Description</label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe the event"
                className="mt-1"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#0C2340]">Expected Outcome</label>
              <Textarea
                value={formData.expectedOutcome}
                onChange={(e) => setFormData({ ...formData, expectedOutcome: e.target.value })}
                placeholder="What will participants learn or achieve?"
                className="mt-1"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#0C2340]">Target Audience</label>
              <Input
                value={formData.targetAudience}
                onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                placeholder="Who should attend this event?"
                className="mt-1"
                required
              />
            </div>
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
              Submit Suggestion
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};