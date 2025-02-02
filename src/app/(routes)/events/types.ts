// types.ts
export interface Event {
  id: string;
  title: string;
  description: string;
  type: string;
  date: string;
  time: string;
  location: string;
  status: 'Open' | 'Closed';
  speaker?: string;
  additionalDetails?: string;
  prerequisites?: string[];
  image: string;
}

export interface EventFilters {
  type: string;
  status: string;
  search: string;
}