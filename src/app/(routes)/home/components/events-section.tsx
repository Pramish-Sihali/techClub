import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CalendarDays, Users, Trophy, ArrowRight } from 'lucide-react'
import Link from "next/link"

const upcomingEvents = [
  {
    title: "Web Development Workshop",
    date: "March 15, 2025",
    description: "Learn modern web development techniques using React and Next.js",
    icon: <CalendarDays className="w-5 h-5" />,
    link: "/events"
  },
  {
    title: "AI/ML Hackathon",
    date: "March 20, 2025",
    description: "48-hour hackathon focused on artificial intelligence and machine learning",
    icon: <Trophy className="w-5 h-5" />,
    link: "/events"
  },
  {
    title: "Tech Industry Networking",
    date: "March 25, 2025",
    description: "Connect with industry professionals and learn about career opportunities",
    icon: <Users className="w-5 h-5" />,
    link: "/events"
  }
];

export const EventsSection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-[#0C2340]/5 to-[#F0AB00]/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-3xl font-bold text-[#0C2340] tracking-tight">Upcoming Events</h2>
          <p className="text-[#707070] max-w-2xl mx-auto">Join us for exciting tech events and opportunities to learn, connect, and grow.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-[#0C2340]/5 hover:border-[#1E88E5]/20">
              <CardHeader className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="text-[#F0AB00] group-hover:text-[#1E88E5] transition-colors">
                    {event.icon}
                  </div>
                  <p className="text-sm text-[#707070]">{event.date}</p>
                </div>
                <CardTitle className="text-[#0C2340] text-xl">{event.title}</CardTitle>
                <CardDescription className="text-[#707070]">{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={event.link} className="inline-block">
                  <Button 
                    variant="link" 
                    className="text-[#1E88E5] hover:text-[#0C2340] transition-colors p-0 gap-2"
                  >
                    Learn More 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}