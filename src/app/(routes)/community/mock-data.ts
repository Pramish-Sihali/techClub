// mock-data.ts
import { CommunityEvent, Initiative } from "./types";

export const communityEvents: CommunityEvent[] = [
  {
    id: '1',
    title: 'Tech Guff Gaff',
    type: 'tech-guff',
    description: 'Casual meetups where students share tech experiences and discuss trends in a relaxed environment.',
    frequency: 'Monthly',
    image: '/api/placeholder/600/400',
    highlights: [
      'Open discussions on tech trends',
      'Student experience sharing',
      'Networking sessions',
      'Knowledge exchange'
    ],
    colorScheme: {
      bg: '#FBB03B', // Collaboration color
      text: '#0C2340'
    }
  },
  {
    id: '2',
    title: 'Tech Chautari',
    type: 'tech-chautari',
    description: 'A vibrant gathering where tech enthusiasts come together to share insights and explore innovative ideas.',
    frequency: 'Quarterly',
    image: '/api/placeholder/600/400',
    highlights: [
      'Tech talks and presentations',
      'Project showcases',
      'Interactive discussions',
      'Community building'
    ],
    colorScheme: {
      bg: '#8CDCF9', // Funnovation color
      text: '#0C2340'
    }
  },
];

export const initiatives: Initiative[] = [
  {
    id: '1',
    title: 'Knowledge Exchange Program',
    description: 'A platform where students share their tech knowledge and learn from peers.',
    icon: '/api/placeholder/64/64',
    impact: '500+ students participated',
    colorScheme: {
      bg: '#F47B20', // Empowerment color
      text: 'white'
    }
  },
  {
    id: '2',
    title: 'Collaborative Learning',
    description: 'Group learning sessions focusing on practical tech skills and problem-solving.',
    icon: '/api/placeholder/64/64',
    impact: '20+ workshops conducted',
    colorScheme: {
      bg: '#279ECA', // Humility color
      text: 'white'
    }
  },
  {
    id: '3',
    title: 'Tech Mentorship',
    description: 'Connecting experienced students with newcomers for guidance and support.',
    icon: '/api/placeholder/64/64',
    impact: '100+ mentorship pairs',
    colorScheme: {
      bg: '#10377B', // Integrity color
      text: 'white'
    }
  }
];