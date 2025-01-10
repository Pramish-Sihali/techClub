import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Calendar from "./calender";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Event } from "../types";

interface RegisterEventModalProps {
  event: Event;
  open: boolean;
  onClose: () => void;
}

interface RegistrationForm {
  name: string;
  studentId: string;
  email: string;
  phone: string;
  missingClass: "yes" | "no";
  courseName?: string;
  courseDate?: Date;
  dietaryRestrictions?: string;
  specialRequirements?: string;
}

export const RegisterEventModal: React.FC<RegisterEventModalProps> = ({
  event,
  open,
  onClose,
}) => {
  const [formData, setFormData] = useState<RegistrationForm>({
    name: "",
    studentId: "",
    email: "",
    phone: "",
    missingClass: "no",
  });

  const formatDate = (date: Date | undefined) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#0C2340]">
            Register for {event.title}
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

          <div className="space-y-3">
            <Label>Will you be missing any classes?</Label>
            <RadioGroup
              value={formData.missingClass}
              onValueChange={(value: "yes" | "no") => 
                setFormData({ ...formData, missingClass: value })}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">No</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.missingClass === "yes" && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Course Name</Label>
                <Input
                  value={formData.courseName}
                  onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
                  placeholder="Enter course name"
                />
              </div>

              <div className="space-y-2">
                <Label>Course Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.courseDate ? (
                        formatDate(formData.courseDate)
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      value={formData.courseDate}
                      onChange={(date) => setFormData({ ...formData, courseDate: date })}
                      className="w-full max-w-md"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label>Dietary Restrictions</Label>
            <Input
              value={formData.dietaryRestrictions}
              onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
              placeholder="Enter any dietary restrictions"
            />
          </div>

          <div className="space-y-2">
            <Label>Special Requirements or Accommodations</Label>
            <Textarea
              value={formData.specialRequirements}
              onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
              placeholder="Enter any special requirements or accommodations needed"
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
              Register Now
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};