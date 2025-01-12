// app/(routes)/blog/components/blog-grid.tsx
import { BlogPost } from "../types";
import { BlogCard } from "./blog-card";
import { motion } from "framer-motion";

interface BlogGridProps {
  posts: BlogPost[];
  isLoading?: boolean;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export function BlogGrid({ posts, isLoading = false }: BlogGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div 
            key={index}
            className="bg-gray-100 rounded-lg aspect-[4/5] animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="text-4xl mb-4">📝</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          No posts found
        </h3>
        <p className="text-muted-foreground">
          Try adjusting your filters or search terms
        </p>
      </div>
    );
  }

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {posts.map((post) => (
        <motion.div
          key={post.id}
          variants={item}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          <BlogCard post={post} />
        </motion.div>
      ))}
    </motion.div>
  );
}