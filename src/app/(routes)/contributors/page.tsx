// app/(routes)/contributors/page.tsx
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Github, Linkedin, Globe, CalendarDays } from 'lucide-react';
import { Contributor, ContributorFilters, ContributionType } from './types';

const mockContributors: Contributor[] = [
  {
    id: '1',
    name: 'John Doe',
    avatar: '/api/placeholder/64/64',
    role: 'Lead Developer',
    bio: 'Full-stack developer passionate about creating meaningful web applications.',
    contributions: [
      {
        type: 'website',
        description: 'Developed the core website architecture',
        date: '2024-01',
        url: 'https://github.com/tech-club/website'
      },
      {
        type: 'projects',
        description: 'Created the event management system',
        date: '2024-02'
      }
    ],
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com',
    websiteUrl: 'https://example.com',
    joinedDate: '2023-09'
  }
];

const contributionTypes: { value: ContributionType | 'all', label: string }[] = [
  { value: 'all', label: 'All Contributions' },
  { value: 'website', label: 'Website Development' },
  { value: 'projects', label: 'Projects' },
  { value: 'events', label: 'Events' },
  { value: 'content', label: 'Content Creation' }
];

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
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-kings-blue mb-4">Our Contributors</h1>
        <p className="text-lg text-gray-600">
          Meet the amazing individuals who have contributed to our success
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Input
          placeholder="Search contributors..."
          value={filters.search}
          onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
          className="max-w-sm"
        />
        <Select
          value={filters.type}
          onValueChange={(value: ContributionType | 'all') => 
            setFilters(prev => ({ ...prev, type: value }))
          }
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Contribution Type" />
          </SelectTrigger>
          <SelectContent>
            {contributionTypes.map(type => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContributors.map(contributor => (
          <Card 
            key={contributor.id}
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedContributor(contributor)}
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={contributor.avatar} alt={contributor.name} />
                <AvatarFallback>{contributor.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{contributor.name}</h3>
                <p className="text-sm text-muted-foreground">{contributor.role}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{contributor.bio}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {contributor.contributions.map((contribution, index) => (
                  <Badge key={index} variant="secondary">
                    {contribution.type}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                {contributor.githubUrl && (
                  <Button variant="ghost" size="icon" asChild>
                    <a href={contributor.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {contributor.linkedinUrl && (
                  <Button variant="ghost" size="icon" asChild>
                    <a href={contributor.linkedinUrl} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {contributor.websiteUrl && (
                  <Button variant="ghost" size="icon" asChild>
                    <a href={contributor.websiteUrl} target="_blank" rel="noopener noreferrer">
                      <Globe className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedContributor} onOpenChange={() => setSelectedContributor(null)}>
        <DialogContent className="max-w-2xl">
          {selectedContributor && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={selectedContributor.avatar} alt={selectedContributor.name} />
                    <AvatarFallback>{selectedContributor.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold">{selectedContributor.name}</h2>
                    <p className="text-muted-foreground">{selectedContributor.role}</p>
                  </div>
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">About</h3>
                  <p className="text-gray-600">{selectedContributor.bio}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Contributions</h3>
                  <div className="space-y-4">
                    {selectedContributor.contributions.map((contribution, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CalendarDays className="h-4 w-4 mt-1" />
                        <div>
                          <p className="font-medium">{contribution.description}</p>
                          <p className="text-sm text-muted-foreground">{contribution.date}</p>
                          {contribution.url && (
                            <a 
                              href={contribution.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-accent-foreground hover:underline"
                            >
                              View contribution
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}