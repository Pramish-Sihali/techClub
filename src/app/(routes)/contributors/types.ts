// types.ts
export type ContributionType = 'website' | 'projects' | 'events' | 'content';

export interface Contribution {
  type: ContributionType;
  description: string;
  date: string;
  url?: string;
}

export interface Contributor {
  id: string;
  name: string;
  avatar: string;
  role: string;
  bio: string;
  contributions: Contribution[];
  githubUrl?: string;
  linkedinUrl?: string;
  websiteUrl?: string;
  joinedDate: string;
}

export interface ContributorFilters {
  type: ContributionType | 'all';
  search: string;
}

export const contributionTypes = [
  { value: 'all', label: 'All Contributions' },
  { value: 'website', label: 'Website Development' },
  { value: 'projects', label: 'Projects' },
  { value: 'events', label: 'Events' },
  { value: 'content', label: 'Content Creation' }
] as const;