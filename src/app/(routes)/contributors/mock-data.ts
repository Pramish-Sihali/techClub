// mock-data.ts
import { Contributor } from "./types";

export const mockContributors: Contributor[] = [
  {
    id: '1',
    name: 'John Doe',
    avatar: '/api/placeholder/64/64',
    role: 'Lead Developer',
    bio: 'Full-stack developer passionate about creating meaningful web applications and mentoring new developers.',
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
  },
  {
    id: '2',
    name: 'Jane Smith',
    avatar: '/api/placeholder/64/64',
    role: 'UI/UX Designer',
    bio: 'Designer with a passion for creating intuitive and accessible user interfaces.',
    contributions: [
      {
        type: 'website',
        description: 'Designed and implemented the new UI system',
        date: '2024-02'
      },
      {
        type: 'content',
        description: 'Created design guidelines documentation',
        date: '2024-03'
      }
    ],
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com',
    joinedDate: '2023-10'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    avatar: '/api/placeholder/64/64',
    role: 'Technical Writer',
    bio: 'Technical writer focused on creating clear and comprehensive documentation for developers.',
    contributions: [
      {
        type: 'content',
        description: 'Created technical documentation for the API',
        date: '2024-01'
      },
      {
        type: 'events',
        description: 'Organized documentation workshop',
        date: '2024-02'
      }
    ],
    linkedinUrl: 'https://linkedin.com',
    websiteUrl: 'https://example.com',
    joinedDate: '2023-11'
  }
];