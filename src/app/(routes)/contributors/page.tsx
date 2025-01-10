'use client';

import { useState } from 'react';
import { ContributorCard } from './components/contributor-card';
import { ContributorFiltersComponent } from './components/contributor-filters';
import { ContributorDetailsModal } from './components/contributor-details-modal';
import { Contributor, ContributorFilters } from './types';
import { mockContributors } from './mock-data';

export default function ContributorsPage() {
  const [filters, setFilters] = useState<ContributorFilters>({
    type: 'all',
    search: ''
  });
  const [selectedContributor, setSelectedContributor] = useState<Contributor | null>(null);

  const filteredContributors = mockContributors.filter(contributor => {
    const matchesType = filters.type === 'all' || 
      contributor.contributions.some(c => c.type === filters.type);
    const matchesSearch = !filters.search || 
      contributor.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      contributor.bio.toLowerCase().includes(filters.search.toLowerCase());
    
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#0C2340]/5">
      <div className="container mx-auto px-4 py-12 space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#0C2340] mb-4">Our Contributors</h1>
          <p className="text-lg text-[#707070] max-w-2xl mx-auto">
            Meet the amazing individuals who have contributed to our success
          </p>
        </div>

        <ContributorFiltersComponent 
          filters={filters}
          onFilterChange={(newFilters) => setFilters(prev => ({ ...prev, ...newFilters }))}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContributors.map(contributor => (
            <ContributorCard
              key={contributor.id}
              contributor={contributor}
              onSelect={setSelectedContributor}
            />
          ))}
        </div>

        {filteredContributors.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <p className="text-[#707070] text-lg">No contributors found matching your criteria.</p>
          </div>
        )}

        <ContributorDetailsModal
          contributor={selectedContributor}
          open={!!selectedContributor}
          onClose={() => setSelectedContributor(null)}
        />
      </div>
    </div>
  );
}