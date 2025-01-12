// app/(routes)/blog/data/mock.ts
import { BlogPost } from './types';

export const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React and Next.js',
    slug: 'getting-started-with-react-nextjs',
    content: `
      Next.js has revolutionized the way we build web applications. In this comprehensive guide, we'll explore the key features that make Next.js a powerful framework for modern web development.

      ## Server-Side Rendering
      One of the most powerful features of Next.js is its built-in support for server-side rendering (SSR). This approach offers several benefits:
      - Improved SEO performance
      - Faster initial page loads
      - Better user experience

      ## Key Features We'll Cover
      1. File-based routing system
      2. API routes and serverless functions
      3. Built-in image optimization
      4. Static site generation capabilities

      Let's dive into each of these features and see how they can enhance your web development workflow.
    `,
    excerpt: 'Learn the basics of React and Next.js in this comprehensive guide for building modern web applications.',
    image: 'blog1.png',
    author: {
      name: 'John Doe',
      avatar: '/avatars/default.png'
    },
    publishedAt: '2025-02-15',
    category: 'Web Development',
    tags: ['React', 'Next.js', 'Frontend'],
    status: 'published' as const
  },
  {
    id: '2',
    title: 'Advanced TypeScript Patterns',
    slug: 'advanced-typescript-patterns',
    content: `
      TypeScript has become an essential tool in modern JavaScript development. This guide will help you understand advanced TypeScript patterns and how to implement them effectively.

      ## Advanced Type System
      TypeScript's type system offers powerful features that can make your code more robust:
      - Generics
      - Utility Types
      - Conditional Types
      - Mapped Types

      ## Real-World Applications
      We'll explore practical examples of these patterns in real-world scenarios:
      - Building type-safe APIs
      - Creating flexible component libraries
      - Implementing advanced state management

      Let's explore how these patterns can improve your development workflow.
    `,
    excerpt: 'Discover advanced TypeScript patterns and techniques to write more maintainable and type-safe code.',
    image: 'blog2.jpg',
    author: {
      name: 'Jane Smith',
      avatar: '/avatars/default.png'
    },
    publishedAt: '2025-02-14',
    category: 'Web Development',
    tags: ['TypeScript', 'Frontend'],
    status: 'published' as const
  },
  {
    id: '3',
    title: 'Introduction to Machine Learning with Python',
    slug: 'introduction-to-machine-learning-python',
    content: `
      Machine Learning is transforming the way we solve complex problems. In this introductory guide, we'll explore the fundamentals of ML using Python.

      ## Getting Started
      We'll cover the essential components of machine learning:
      - Data preprocessing
      - Model selection
      - Training and validation
      - Performance evaluation

      ## Popular Libraries
      We'll be using these powerful Python libraries:
      - NumPy for numerical computations
      - Pandas for data manipulation
      - Scikit-learn for ML algorithms
      - TensorFlow for deep learning

      Join us on this exciting journey into the world of machine learning!
    `,
    excerpt: 'Start your journey into machine learning with Python and essential ML libraries.',
    image: 'blog1.png',
    author: {
      name: 'Michael Chen',
      avatar: '/avatars/default.png'
    },
    publishedAt: '2025-02-10',
    category: 'AI/ML',
    tags: ['Python', 'Machine Learning', 'AI'],
    status: 'published' as const
  },
  {
    id: '4',
    title: 'Building Mobile Apps with React Native',
    slug: 'building-mobile-apps-react-native',
    content: `
      React Native enables developers to build native mobile applications using React. Let's explore how to create cross-platform mobile apps efficiently.

      ## Cross-Platform Development
      Learn how React Native helps you:
      - Write once, run anywhere
      - Access native platform features
      - Optimize performance
      - Handle platform-specific code

      ## Essential Concepts
      We'll cover key React Native concepts:
      - Navigation
      - State management
      - Native modules
      - Platform-specific styling

      Get ready to build your first mobile app with React Native!
    `,
    excerpt: 'Learn how to build cross-platform mobile applications using React Native framework.',
    image: 'blog2.jpg',
    author: {
      name: 'Sarah Wilson',
      avatar: '/avatars/default.png'
    },
    publishedAt: '2025-02-08',
    category: 'Mobile Development',
    tags: ['React Native', 'Mobile', 'Frontend'],
    status: 'published' as const
  }
];

export const categories = [
  'Web Development',
  'AI/ML',
  'Mobile Development',
  'Cloud Computing'
];

export const tags = [
  'React',
  'Next.js',
  'TypeScript',
  'Frontend',
  'Backend',
  'AI',
  'Mobile',
  'Python',
  'Machine Learning',
  'React Native'
];