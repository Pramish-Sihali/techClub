import { Card, CardHeader, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Computer Science, Year 3",
    image: "/api/placeholder/32/32",
    quote: "Tech Club has been instrumental in my growth as a developer. The workshops and networking opportunities are invaluable."
  },
  {
    name: "Sarah Chen",
    role: "Data Science, Year 2",
    image: "/api/placeholder/32/32",
    quote: "I've learned more practical skills through Tech Club events than I ever imagined. The community is incredibly supportive."
  },
  {
    name: "Michael Patel",
    role: "Software Engineering, Year 4",
    image: "/api/placeholder/32/32",
    quote: "Being part of Tech Club opened doors to internships and helped me build a strong professional network."
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-3xl font-bold text-[#0C2340] tracking-tight">What Our Members Say</h2>
          <p className="text-[#707070] max-w-2xl mx-auto">Hear from our community members about their experiences with Tech Club.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group relative hover:shadow-lg transition-all duration-300 border border-[#0C2340]/5 hover:border-[#1E88E5]/20"
            >
              <Quote className="absolute top-4 right-4 w-6 h-6 text-[#1E88E5]/20 group-hover:text-[#1E88E5]/30 transition-colors" />
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="ring-2 ring-[#F0AB00] ring-offset-2">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-[#1E88E5] text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-[#0C2340]">{testimonial.name}</h4>
                    <p className="text-sm text-[#707070]">{testimonial.role}</p>
                  </div>
                </div>
                <CardDescription className="text-[#707070] text-base">
                  "{testimonial.quote}"
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}