import { blogPosts } from "@/lib/data/blogs";
import BlogContent from "@/components/blogContent";
import HeroSection from "@/components/herosection";

export default function BlogPage() {
  return (
    <>
    <HeroSection
      title="Blogs"
      subtitle="Research contributions advancing knowledge in sustainable agriculture and forestry sciences"
      background="./herobackground.png"
    />
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogContent posts={blogPosts} />
      </div>
    </div>
    </>

  );
}
