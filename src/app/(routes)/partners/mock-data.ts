// mock-data.ts
import { Partner, Value } from "./types";

export const mockPartners: Partner[] = [
  {
    id: '1',
    name: 'TechCorp Solutions',
    logo: '/api/placeholder/160/80',
    description: 'Leading provider of cloud solutions and development tools.',
    type: 'technology',
    website: 'https://example.com',
    partnerSince: '2023-01',
    projects: ['Cloud Workshop Series', 'Developer Tools Integration']
  },
  {
    id: '2',
    name: 'EduTech Academy',
    logo: '/api/placeholder/160/80',
    description: 'Online learning platform specializing in technology education.',
    type: 'education',
    website: 'https://example.com',
    partnerSince: '2023-03',
    projects: ['Student Mentorship Program', 'Technical Course Development']
  },
  {
    id: '3',
    name: 'Innovation Labs',
    logo: '/api/placeholder/160/80',
    description: 'Research and development firm focused on emerging technologies.',
    type: 'industry',
    website: 'https://example.com',
    partnerSince: '2023-06',
    projects: ['AI Research Project', 'Industry Innovation Workshop']
  }
];

// mock-data.ts
import { ClipboardList, Users, Power, Lightbulb, Smile, UserCheck } from 'lucide-react';

export const ourValues = [
  {
    id: '1',
    title: 'Accountability',
    description: 'Taking ownership of our actions and commitments to deliver excellence.',
    icon: ClipboardList,
    color: '#FFD17E'
  },
  {
    id: '2',
    title: 'Collaboration',
    description: 'Working together to achieve shared goals and foster innovation.',
    icon: Users,
    color: '#FBB03B'
  },
  {
    id: '3',
    title: 'Empowerment',
    description: 'Enabling individuals to reach their full potential and make meaningful contributions.',
    icon: Power,
    color: '#F47B20'
  },
  {
    id: '4',
    title: 'Funnovation',
    description: 'Combining fun with innovation to create engaging learning experiences.',
    icon: Lightbulb,
    color: '#8CDCF9'
  },
  {
    id: '5',
    title: 'Humility',
    description: 'Maintaining a modest and respectful approach while pursuing excellence.',
    icon: Smile,
    color: '#279ECA'
  },
  {
    id: '6',
    title: 'Integrity',
    description: 'Upholding strong moral principles and professional ethics in all our actions.',
    icon: UserCheck,
    color: '#10377B'
  }
];