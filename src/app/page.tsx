// app/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { CalendarDays, Users, Trophy, ArrowRight } from 'lucide-react'

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

const upcomingEvents = [
  {
    title: "Web Development Workshop",
    date: "March 15, 2025",
    description: "Learn modern web development techniques using React and Next.js",
    icon: <CalendarDays className="w-4 h-4" />
  },
  {
    title: "AI/ML Hackathon",
    date: "March 20, 2025",
    description: "48-hour hackathon focused on artificial intelligence and machine learning",
    icon: <Trophy className="w-4 h-4" />
  },
  {
    title: "Tech Industry Networking",
    date: "March 25, 2025",
    description: "Connect with industry professionals and learn about career opportunities",
    icon: <Users className="w-4 h-4" />
  }
];

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-kings-blue/5 to-kings-gold/5" />
        <div className="container mx-auto text-center relative">
          <h1 className="text-5xl md:text-7xl font-bold text-kings-blue mb-6 tracking-tight">
            Innovate. Create. <span className="text-kings-gold">Connect.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join King's College Tech Club and be part of a community that's shaping the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-kings-blue text-white hover:bg-kings-blue/90"
            >
              Join Tech Club
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-kings-gold text-kings-gold hover:bg-kings-gold/10"
            >
              Explore Events
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-kings-blue">About Tech Club</h2>
              <p className="text-gray-600">
                Founded in 2020, the King's College Tech Club has grown into a vibrant community of tech enthusiasts, innovators, and future industry leaders.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-tech-blue">500+</CardTitle>
                    <CardDescription>Active Members</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-tech-blue">50+</CardTitle>
                    <CardDescription>Events Per Year</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
            <div className="bg-muted aspect-square rounded-lg" />
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-kings-blue mb-12 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {event.icon}
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                  <CardTitle className="text-kings-blue">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="text-tech-blue hover:text-tech-blue/90 p-0">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
                  <CardDescription className="text-gray-600">"{testimonial.quote}"</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-kings-blue text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Tech Club?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step towards building your future in technology. Join our community of innovators, creators, and problem solvers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-kings-gold text-kings-blue hover:bg-kings-gold/90"
            >
              Become a Member
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}