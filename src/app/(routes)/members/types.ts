// types.ts
export interface Member {
  id: string;
  name: string;
  role: 'core' | 'active' | 'contributor';
  position: string;
  avatar: string;
  bio: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  contributions?: string[];
  joinedDate: string;
}

export interface MemberFilters {
  role: string;
  search: string;
}

export interface ExecutivePosition {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  status: 'open' | 'closed';
  type: 'executive' | 'core';
  commitment: string;
}

export interface ApplicationForm {
  name: string;
  studentId: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  motivation: string;
  availability: string;
  references?: string;
}