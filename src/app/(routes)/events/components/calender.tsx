import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface CalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
  className?: string;
}

const Calendar: React.FC<CalendarProps> = ({ value, onChange, className, ...props }) => {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDayClick = (day: Date) => {
    if (onChange) {
      onChange(day);
    }
  };

  return (
    <div className={`bg-white rounded-md shadow-md p-4 ${className}`} {...props}>
      <div className="flex justify-between items-center mb-4">
        <button
          className={cn(
            buttonVariants({ variant: "outline" }),
            "p-2 rounded-md hover:bg-gray-100 focus:outline-none"
          )}
          onClick={handlePrevMonth}
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div className="text-gray-800 font-medium">
          {currentMonth.toLocaleString("default", { month: "long" })} {currentMonth.getFullYear()}
        </div>
        <button
          className={cn(
            buttonVariants({ variant: "outline" }),
            "p-2 rounded-md hover:bg-gray-100 focus:outline-none"
          )}
          onClick={handleNextMonth}
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <div key={index} className="text-gray-500 font-medium text-center">
            {day}
          </div>
        ))}
        {Array.from({ length: firstDayOfMonth }, (_, i) => i).map((_, index) => (
          <div key={index} className="text-gray-300 text-center"></div>
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
          <button
            key={day}
            className={cn(
              "rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100 focus:outline-none",
              value?.getDate() === day &&
                value?.getMonth() === currentMonth.getMonth() &&
                value?.getFullYear() === currentMonth.getFullYear()
                ? "bg-primary text-primary-foreground"
                : "text-gray-800"
            )}
            onClick={() => handleDayClick(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;