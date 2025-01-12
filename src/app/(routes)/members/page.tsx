'use client';

import { useState } from 'react';
import { MemberCard } from './components/member-card';
import { MemberFiltersComponent } from './components/member-filters';
import { MemberDetailsModal } from './components/member-details-modal';
import { PositionCard } from './components/position-card';
import { ApplicationFormModal } from './components/application-form-modal';
import { Member, MemberFilters, ExecutivePosition } from './types';
import { mockMembers, availablePositions } from './mock-data';
import { Users } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function MembersPage() {
  const [filters, setFilters] = useState<MemberFilters>({
    role: 'all',
    search: ''
  });
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<ExecutivePosition | null>(null);

  const filteredMembers = mockMembers.filter(member => {
    const matchesRole = filters.role === 'all' || member.role === filters.role;
    const matchesSearch = !filters.search || 
      member.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      member.position.toLowerCase().includes(filters.search.toLowerCase());
    
    return matchesRole && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Members Section */}
      <div className="bg-gradient-to-b from-white to-[#0C2340]/5 py-20">
        <div className="container mx-auto px-4 space-y-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#FFD17E] px-4 py-2 rounded-full mb-6">
              <Users className="w-5 h-5 text-[#0C2340]" />
              <span className="text-[#0C2340] font-medium">Our Team</span>
            </div>
            <h1 className="text-5xl font-bold text-[#0C2340] mb-4">Our Members</h1>
            <p className="text-lg text-[#707070] max-w-2xl mx-auto">
              Meet the amazing individuals who make our Tech Club thrive
            </p>
          </div>

          <MemberFiltersComponent 
            filters={filters}
            onFilterChange={(newFilters) => setFilters(prev => ({ ...prev, ...newFilters }))}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredMembers.map(member => (
              <MemberCard
                key={member.id}
                member={member}
                onViewDetails={setSelectedMember}
              />
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm">
              <p className="text-[#707070] text-lg">No members found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      
      {/* Executive Positions Section */}
<Separator/>
      <div className="bg-gradient-to-b from-[#0C2340]/20 to-[#94D4F2]/30 py-20">
        <div className="container mx-auto px-4 space-y-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#F0AB00] px-4 py-2 rounded-full mb-6">
              <Users className="w-5 h-5 text-[#0C2340]" />
              <span className="text-[#0C2340] font-medium">Join Us</span>
            </div>
            <h2 className="text-4xl font-bold text-[#0C2340] mb-4">
              Available Positions
            </h2>
            <p className="text-lg text-[#707070] max-w-2xl mx-auto">
              Join our executive team and help shape the future of tech at King&apos;s College
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availablePositions.map(position => (
              <PositionCard
                key={position.id}
                position={position}
                onApply={setSelectedPosition}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      <MemberDetailsModal
        member={selectedMember}
        open={!!selectedMember}
        onClose={() => setSelectedMember(null)}
      />

      <ApplicationFormModal
        position={selectedPosition}
        open={!!selectedPosition}
        onClose={() => setSelectedPosition(null)}
      />
    </div>
  );
}