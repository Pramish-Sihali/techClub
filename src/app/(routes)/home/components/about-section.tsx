// app/(routes)/home/components/about-section.tsx
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-kings-blue">About Tech Club</h2>
            <p className="text-gray-600">
              Founded in 2020, the King&apos;s College Tech Club has grown into a vibrant community of tech enthusiasts, innovators, and future industry leaders.
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
  )
}