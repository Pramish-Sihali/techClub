// mock-events.ts
import { Event } from './types';

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Web Development Workshop',
    description: 'Learn modern web development with React and Next.js. Build real-world applications with industry best practices.',
    type: 'workshop',
    date: 'March 15, 2025',
    time: '2:00 PM',
    location: 'Tech Lab 101',
    status: 'Open',
    speaker: 'John Doe',
    prerequisites: ['Basic HTML/CSS', 'JavaScript fundamentals', 'Laptop with Node.js installed'],
    additionalDetails: 'This workshop will cover latest features in React 18 and Next.js 14',
    image: '/images/about.svg'
  },
  {
    id: '2',
    title: 'AI & Machine Learning Hackathon',
    description: 'Join us for a 24-hour hackathon focused on AI and ML innovations. Create solutions that matter.',
    type: 'hackathon',
    date: 'April 5, 2025',
    time: '9:00 AM',
    location: 'Innovation Hub',
    status: 'Open',
    prerequisites: ['Python basics', 'Understanding of ML concepts'],
    additionalDetails: 'Prizes worth $5000 to be won!',
    image: '/images/about.svg'
  },
  {
    id: '3',
    title: 'Tech Industry Networking Night',
    description: 'Connect with industry professionals and explore career opportunities in tech.',
    type: 'networking',
    date: 'March 20, 2025',
    time: '6:00 PM',
    location: 'Grand Hall',
    status: 'Open',
    speaker: 'Various Industry Leaders',
    additionalDetails: 'Refreshments will be provided',
    image: '/images/about.svg'
  },
  {
    id: '4',
    title: 'Cybersecurity Workshop',
    description: 'Learn about ethical hacking and cybersecurity best practices.',
    type: 'workshop',
    date: 'March 25, 2025',
    time: '3:00 PM',
    location: 'Security Lab',
    status: 'Closed',
    speaker: 'Jane Smith',
    prerequisites: ['Basic networking knowledge', 'Linux fundamentals'],
    additionalDetails: 'Hands-on practice with security tools',
    image: '/images/about.svg'
  },
  {
    id: '5',
    title: 'Mobile App Development Workshop',
    description: 'Create cross-platform mobile applications using React Native.',
    type: 'workshop',
    date: 'April 10, 2025',
    time: '1:00 PM',
    location: 'Mobile Lab',
    status: 'Open',
    speaker: 'Mike Johnson',
    prerequisites: ['React knowledge', 'JavaScript/TypeScript'],
    additionalDetails: 'Build and deploy your first mobile app',
    image: '/images/about.svg'
  }
];