'use client';

import { useState } from 'react';
import { MemberCard } from './components/member-card';
import { MemberFiltersComponent } from './components/member-filters';
import { MemberDetailsModal } from './components/member-details-modal';
import { PositionCard } from './components/position-card';
import { ApplicationFormModal } from './components/application-form-modal';
import { Member, MemberFilters, ExecutivePosition } from './types';
import { mockMembers, availablePositions } from './mock-data';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export default function MembersPage() {
  const [filters, setFilters] = useState<MemberFilters>({
    role: 'all',
    search: ''
  });
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<ExecutivePosition | null>(null);
  const [showPositions, setShowPositions] = useState(false);

  const filteredMembers = mockMembers.filter(member => {
    const matchesRole = filters.role === 'all' || member.role === filters.role;
    const matchesSearch = !filters.search || 
      member.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      member.position.toLowerCase().includes(filters.search.toLowerCase());
    
    return matchesRole && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#0C2340]/5">
      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Members Section */}
        <section>
          <div className="text-center mb-12">
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
        </section>

        {/* Executive Positions Section */}
        <section>
          <div className="text-center mb-12">
            <Button 
              variant="ghost"
              onClick={() => setShowPositions(!showPositions)}
              className="group"
            >
              <h2 className="text-4xl font-bold text-[#0C2340] group-hover:text-[#1E88E5]">
                Available Positions
              </h2>
              <ChevronDown 
                className={`ml-2 h-6 w-6 transition-transform duration-200 ${
                  showPositions ? 'rotate-180' : ''
                }`}
              />
            </Button>
            <p className="text-lg text-[#707070] mt-4">
              Join our executive team and help shape the future of tech at King&apos; College
            </p>
          </div>

          {showPositions && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {availablePositions.map(position => (
                <PositionCard
                  key={position.id}
                  position={position}
                  onApply={setSelectedPosition}
                />
              ))}
            </div>
          )}
        </section>

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
    </div>
  );
}