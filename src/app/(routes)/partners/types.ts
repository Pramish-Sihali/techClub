// types.ts
export interface Partner {
    id: string;
    name: string;
    logo: string;
    description: string;
    type: 'technology' | 'education' | 'industry';
    website: string;
    partnerSince: string;
    projects: string[];
  }
  
  export interface Value {
    id: string;
    title: string;
    description: string;
    icon: string;
  }