// page.tsx
'use client';

import { PartnerCard } from './components/partner-card';
import { ValueCard } from './components/value-card';
import { PartnershipCTA } from './components/partnership-cta';
import { mockPartners, ourValues } from './mock-data';
import { motion } from 'framer-motion';

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#0C2340]/5">
      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#0C2340] mb-4">Our Partners</h1>
          <p className="text-lg text-[#707070] max-w-2xl mx-auto">
            Collaborating with industry leaders to drive innovation and create opportunities for our community
          </p>
        </div>

        {/* Partners Grid */}
        <section>
          <h2 className="text-3xl font-bold text-[#0C2340] mb-8">Trusted Partners</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockPartners.map(partner => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        </section>

        {/* Values Section */}
        
<section className="py-16">
  <div className="text-center mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl font-bold text-[#0C2340] mb-4"
    >
      Core Values
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-lg text-[#707070] max-w-2xl mx-auto"
    >
      That Make Us Who We Are
    </motion.p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {ourValues.map((value, index) => (
      <ValueCard key={value.id} value={value} index={index} />
    ))}
  </div>
</section>

        {/* Call to Action */}
        <section className="py-8">
          <PartnershipCTA />
        </section>
      </div>
    </div>
  );
}