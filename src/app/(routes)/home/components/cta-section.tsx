// app/(routes)/home/components/cta-section.tsx
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const CTASection = () => {
  return (
    <section className="py-16 bg-kings-blue text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Join Tech Club?</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Take the first step towards building your future in technology. Join our community of innovators, creators, and problem solvers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/join">
            <Button 
              size="lg" 
              className="bg-kings-gold text-kings-blue hover:bg-kings-gold/90"
            >
              Become a Member
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              size="lg" 
            //   variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}