// app/(routes)/contributors/types.ts
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