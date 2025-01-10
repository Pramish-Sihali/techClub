import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Code, Laptop, Users, Timer } from "lucide-react"
import Image from "next/image"

export const AboutSection = () => {
  return (
    <section className="py-12 relative overflow-hidden bg-gradient-to-br from-[#0C2340]/5 to-[#F0AB00]/5">
      <div className="absolute inset-0">
        <Laptop className="absolute bottom-20 right-10 w-12 h-12 text-[#F0AB00]/10 -rotate-45" />
        <Timer className="absolute top-20 right-1/4 w-10 h-10 text-[#1E88E5]/10 rotate-90" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-[#0C2340] tracking-tight">About Tech Club</h2>
              <p className="text-[#707070] text-base">
                Founded in 2020, the King&apos;s College Tech Club has grown into a vibrant community of tech enthusiasts, innovators, and future industry leaders.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="relative overflow-hidden border border-[#0C2340]/5 transition-all hover:border-[#1E88E5]/20">
                <Users className="absolute -right-3 -bottom-3 w-16 h-16 text-[#0C2340]/5 rotate-12" />
                <CardHeader className="p-4">
                  <CardTitle className="text-[#1E88E5] text-2xl">500+</CardTitle>
                  <CardDescription className="text-sm">Active Members</CardDescription>
                </CardHeader>
              </Card>
              <Card className="relative overflow-hidden border border-[#0C2340]/5 transition-all hover:border-[#1E88E5]/20">
                <Timer className="absolute -right-3 -bottom-3 w-16 h-16 text-[#0C2340]/5 -rotate-12" />
                <CardHeader className="p-4">
                  <CardTitle className="text-[#1E88E5] text-2xl">50+</CardTitle>
                  <CardDescription className="text-sm">Events Per Year</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
          <div className="bg-muted rounded-lg relative overflow-hidden h-80">
            <Image 
              src="/images/club.svg"
              alt="Tech Club Illustration"
              fill
              className="object-contain p-4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}