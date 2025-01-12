// app/(routes)/blog/layout.tsx
export const metadata = {
  title: 'Tech Club Blog',
  description: 'Read the latest posts from our tech community'
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>{children}</main>

      <footer className="bg-white border-t py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Tech Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}