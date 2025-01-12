'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Value {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

interface ValueCardProps {
  value: Value;
  index: number;
}

export function ValueCard({ value, index }: ValueCardProps) {
  const getBgColor = () => {
    switch (value.title.toLowerCase()) {
      case 'accountability':
        return 'bg-[#FFD17E]';
      case 'collaboration':
        return 'bg-[#FBB03B]';
      case 'empowerment':
        return 'bg-[#F47B20]';
      case 'funnovation':
        return 'bg-[#8CDCF9]';
      case 'humility':
        return 'bg-[#279ECA]';
      case 'integrity':
        return 'bg-[#10377B]';
      default:
        return 'bg-[#0C2340]';
    }
  };

  const getTextColor = () => {
    return ['empowerment', 'humility', 'integrity'].includes(value.title.toLowerCase()) 
      ? 'text-white' 
      : 'text-[#0C2340]';
  };

  const IconComponent = value.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className={`hover:shadow-xl transition-all duration-300 overflow-hidden group ${getBgColor()}`}>
        <div className="p-6 text-center space-y-4">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="relative w-16 h-16 mx-auto flex items-center justify-center"
          >
            <IconComponent 
              className={`w-10 h-10 ${getTextColor()}`} 
              strokeWidth={1.5}
            />
          </motion.div>
          
          <h3 className={`text-xl font-bold ${getTextColor()} group-hover:scale-105 transition-transform`}>
            {value.title}
          </h3>
          
          <p className={`${getTextColor()} opacity-90 text-sm`}>
            {value.description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}