// app/(routes)/members/types.ts
export type MemberRole = 'core' | 'active' | 'contributor';

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

export interface Member {
  id: string;
  name: string;
  role: MemberRole;
  position: string;
  avatar: string;
  bio: string;
  socialLinks: SocialLinks;
  contributions?: string[];
  joinedDate: string;
}

export interface MemberFilters {
  role: string;
  search: string;
}