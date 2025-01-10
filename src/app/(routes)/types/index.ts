// app/(routes)/types/index.ts
export type Event = {
    title: string;
    date: string;
    description: string;
    icon: React.ReactNode;
    link: string;
  };
  
  export type Testimonial = {
    name: string;
    role: string;
    image: string;
    quote: string;
  };
  