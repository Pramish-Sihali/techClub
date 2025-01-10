// app/(routes)/home/page.tsx
import { HeroSection } from "./components/hero-section"
import { AboutSection } from "./components/about-section"
import { EventsSection } from "./components/events-section"
import { TestimonialsSection } from "./components/testimonials-section"
import { CTASection } from "./components/cta-section"

export const metadata = {
  title: 'Tech Club - Kings College',
  description: 'Join the Kings College Tech Club and be part of a community shaping the future of technology.',
}

export default function HomePage() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}