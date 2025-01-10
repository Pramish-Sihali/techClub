// app/(routes)/home/components/testimonials-section.tsx
import { Card, CardHeader, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-kings-blue mb-12 text-center">What Our Members Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-kings-blue">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <CardDescription className="text-gray-600">&quot;{testimonial.quote}&quot;</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

