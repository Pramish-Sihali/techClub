import { Code, Shapes, Users, Terminal, Database } from "lucide-react"

export const BackgroundDecoration = () => (
  <div className="absolute inset-0 w-full h-full -z-10">
    <Shapes className="absolute top-20 left-40 w-24 h-24 text-[#707070]/10 rotate-12" />
    <Code className="absolute top-96 right-20 w-32 h-32 text-[#707070]/10 -rotate-45" />
    <Terminal className="absolute bottom-40 left-1/4 w-28 h-28 text-[#707070]/10 rotate-90" />
    <Users className="absolute top-1/3 right-1/3 w-20 h-20 text-[#707070]/10 -rotate-12" />
    <Database className="absolute bottom-80 right-1/4 w-24 h-24 text-[#707070]/10 rotate-45" />
    
    <Code className="absolute top-1/4 left-1/3 w-36 h-36 text-[#707070]/10 rotate-180" />
    <Shapes className="absolute bottom-1/3 right-1/4 w-28 h-28 text-[#707070]/10 -rotate-90" />
    <Terminal className="absolute top-2/3 left-20 w-32 h-32 text-[#707070]/10 rotate-30" />
  </div>
);