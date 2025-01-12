// types.ts
export interface CommunityEvent {
    id: string;
    title: string;
    type: 'tech-guff' | 'tech-chautari' | 'workshop';
    description: string;
    frequency: string;
    image: string;
    highlights: string[];
    colorScheme: {
      bg: string;
      text: string;
    };
  }
  
  export interface Initiative {
    id: string;
    title: string;
    description: string;
    icon: string;
    impact: string;
    colorScheme: {
      bg: string;
      text: string;
    };
  }