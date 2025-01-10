import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const CTASection = () => {
  return (
    <section className="py-16">
      <Card className="max-w-7xl mx-auto px-8 py-12 bg-[#0C2340]/5 border-none">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-[#0C2340] tracking-tight">
            Ready to Join Tech Club?
          </h2>
          <p className="text-lg text-[#707070] max-w-2xl mx-auto">
            Take the first step towards building your future in technology. Join our community of innovators, creators, and problem solvers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/join">
              <Button 
                size="lg"
                className="bg-[#1E88E5] text-white hover:bg-[#0C2340] transition-colors group font-medium"
              >
                Become a Member
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-[#1E88E5] text-[#1E88E5] hover:bg-[#1E88E5] hover:text-white transition-colors"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </section>
  )
}