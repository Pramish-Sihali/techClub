// app/(routes)/home/components/events-section.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CalendarDays, Users, Trophy, ArrowRight } from 'lucide-react'
import Link from "next/link"

const upcomingEvents = [
  {
    title: "Web Development Workshop",
    date: "March 15, 2025",
    description: "Learn modern web development techniques using React and Next.js",
    icon: <CalendarDays className="w-4 h-4" />,
    link: "/events/web-dev-workshop"
  },
  {
    title: "AI/ML Hackathon",
    date: "March 20, 2025",
    description: "48-hour hackathon focused on artificial intelligence and machine learning",
    icon: <Trophy className="w-4 h-4" />,
    link: "/events/ai-ml-hackathon"
  },
  {
    title: "Tech Industry Networking",
    date: "March 25, 2025",
    description: "Connect with industry professionals and learn about career opportunities",
    icon: <Users className="w-4 h-4" />,
    link: "/events/networking"
  }
];

export const EventsSection = () => {
  return (
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
                <Link href={event.link}>
                  <Button variant="link" className="text-tech-blue hover:text-tech-blue/90 p-0">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
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