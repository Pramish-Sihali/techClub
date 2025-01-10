// mock-data.ts
import { Member, ExecutivePosition } from "./types";

export const mockMembers: Member[] = [
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
  {
    id: '2',
    name: 'Jane Smith',
    role: 'active',
    position: 'Event Coordinator',
    avatar: '/api/placeholder/32/32',
    bio: 'Experienced in organizing tech events and managing community.',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    contributions: [
      'Coordinated 10+ successful tech events',
      'Grew the club membership by 50%',
    ],
    joinedDate: '2023-03-20',
  }
];

export const availablePositions: ExecutivePosition[] = [
  {
    id: '1',
    title: 'Technology Director',
    description: 'Lead technical initiatives and oversee development projects',
    requirements: [
      'Strong programming skills',
      'Experience with web development',
      'Leadership abilities'
    ],
    status: 'open',
    type: 'executive',
    commitment: '10 hours/week'
  },
  {
    id: '2',
    title: 'Events Manager',
    description: 'Plan and execute tech events and workshops',
    requirements: [
      'Event planning experience',
      'Strong communication skills',
      'Time management'
    ],
    status: 'open',
    type: 'core',
    commitment: '8 hours/week'
  },
  {
    id: '3',
    title: 'Content Creator',
    description: 'Create and manage social media and blog content',
    requirements: [
      'Content creation skills',
      'Social media management',
      'Creative writing'
    ],
    status: 'open',
    type: 'core',
    commitment: '6 hours/week'
  }
];