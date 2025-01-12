// app/(routes)/home/components/values-section.tsx
'use client';

import { motion } from "framer-motion";
import { ValueCard } from "../../partners/components/value-card";
import { ourValues } from "../../partners/mock-data";


export function ValuesSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-[#0C2340] mb-4"
        >
          Our Core Values
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-[#707070] max-w-2xl mx-auto"
        >
          The principles that guide us in everything we do
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ourValues.map((value, index) => (
          <ValueCard key={value.id} value={value} index={index} />
        ))}
      </div>
    </section>
  );
}