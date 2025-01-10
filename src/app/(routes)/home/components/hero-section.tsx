// app/(routes)/home/components/hero-section.tsx
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-kings-blue/5 to-kings-gold/5" />
      <div className="container mx-auto text-center relative">
        <h1 className="text-5xl md:text-7xl font-bold text-kings-blue mb-6 tracking-tight">
          Innovate. Create. <span className="text-kings-gold">Connect.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Join King&apos;s College Tech Club and be part of a community that&apos;s shaping the future of technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/join">
            <Button 
              size="lg" 
              className="bg-kings-blue text-white hover:bg-kings-blue/90"
            >
              Join Tech Club
            </Button>
          </Link>
          <Link href="/events">
            <Button 
              size="lg" 
              variant="outline"
              className="border-kings-gold text-kings-gold hover:bg-kings-gold/10"
            >
              Explore Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}