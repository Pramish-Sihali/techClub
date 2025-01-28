import { Code, Database, Shapes, Terminal, Users } from "lucide-react";

export const BackgroundDecoration = () => (
  <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
    {/* Top Quadrant */}
    <Shapes className="absolute top-[10%] left-[5%] w-16 h-16 text-[#707070]/10 rotate-12 md:w-24 md:h-24 md:left-[15%]" />
    <Code className="absolute top-[5%] right-[5%] w-20 h-20 text-[#707070]/10 -rotate-45 md:w-32 md:h-32" />
    
    {/* Right Quadrant */}
    <Terminal className="absolute top-1/3 right-[2%] w-14 h-14 text-[#707070]/10 rotate-90 md:w-28 md:h-28" />
    <Users className="hidden md:block absolute top-[45%] right-[12%] w-24 h-24 text-[#707070]/10 -rotate-12" />
    
    {/* Bottom Quadrant */}
    <Database className="absolute bottom-[10%] left-[8%] w-18 h-18 text-[#707070]/10 rotate-45 md:w-24 md:h-24" />
    <Code className="absolute bottom-[5%] right-[5%] w-20 h-20 text-[#707070]/10 rotate-180 md:w-36 md:h-36" />
    
    {/* Left Quadrant */}
    <Shapes className="absolute top-[25%] left-[2%] w-28 h-28 text-[#707070]/10 -rotate-90 md:top-[35%]" />
    <Terminal className="absolute bottom-[15%] left-[20%] w-16 h-16 text-[#707070]/10 rotate-30 md:w-32 md:h-32" />
    
    {/* Center Area */}
    <Users className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 text-[#707070]/05 -rotate-12" />
    <Database className="hidden md:block absolute top-1/3 left-1/3 w-28 h-28 text-[#707070]/10 rotate-45" />
  </div>
)