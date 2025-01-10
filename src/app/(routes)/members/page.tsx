// app/(routes)/members/page.tsx
'use client';

import { useState } from 'react';
import { MemberCard } from './components/member-card';
import { MemberFiltersComponent } from './components/member-filters';
import { MemberDetailsModal } from './components/member-details-modal';
import { Member, MemberFilters } from './types';

const mockMembers: Member[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'core',
    position: 'Tech Lead',
    avatar: '/api/placeholder/32/32',
    bio: 'Passionate about web development and teaching others.',
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
    contributions: [
      'Led the development of the club website',
      'Organized 5+ web development workshops',
    ],
    joinedDate: '2023-01-15',
  },
  // Add more mock members...
];

export default function MembersPage() {
  const [filters, setFilters] = useState<MemberFilters>({
    role: 'all',
    search: ''
  });
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const filteredMembers = mockMembers.filter(member => {
    const matchesRole = filters.role === 'all' || member.role === filters.role;
    const matchesSearch = !filters.search || 
      member.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      member.position.toLowerCase().includes(filters.search.toLowerCase());
    
    return matchesRole && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-kings-blue mb-4">Our Members</h1>
        <p className="text-lg text-gray-600">
          Meet the amazing individuals who make our Tech Club thrive
        </p>
      </div>

      <MemberFiltersComponent 
        filters={filters}
        onFilterChange={(newFilters) => setFilters(prev => ({ ...prev, ...newFilters }))}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map(member => (
          <MemberCard
            key={member.id}
            member={member}
            onViewDetails={setSelectedMember}
          />
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No members found matching your criteria.
        </div>
      )}

      <MemberDetailsModal
        member={selectedMember}
        open={!!selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
}