import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const CTASection = () => {
  return (
    <section className="relative bg-[#279ECA] rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#279ECA] to-[#10377B]" />
          
          <div className="relative px-8 py-12 sm:px-12 sm:py-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Get Involved?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join our next event and become part of our growing tech community at King's College.
            </p>
            <Button 
              size="lg"
              className="bg-white text-[#279ECA] hover:bg-white/90 group"
            >
              Join Next Event
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
          )
}