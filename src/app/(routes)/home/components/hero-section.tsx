import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code, Shapes, Users } from "lucide-react"

export const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Darker gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0C2340]/20 to-[#F0AB00]/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-[#1E88E5]/20">
        <Shapes size={48} />
      </div>
      <div className="absolute bottom-20 right-10 text-[#F0AB00]/20">
        <Code size={48} />
      </div>
      <div className="absolute top-1/2 right-20 text-[#707070]/20">
        <Users size={48} />
      </div>

      <div className="container mx-auto text-center relative">
        <h1 className="text-5xl md:text-7xl font-bold text-[#0C2340] mb-6 tracking-tight">
          Innovate. Create. <span className="text-[#F0AB00]">Connect.</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#707070] mb-8 max-w-3xl mx-auto">
          Join King&apos;s College Tech Club and be part of a community that&apos;s shaping the future of technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/join">
            <Button 
              size="lg" 
              className="bg-[#0C2340] text-white hover:bg-[#0C2340]/90"
            >
              Join Tech Club
            </Button>
          </Link>
          <Link href="/events">
            <Button 
              size="lg" 
              variant="outline"
              className="border-[#F0AB00] text-[#F0AB00] hover:bg-[#F0AB00]/10"
            >
              Explore Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}