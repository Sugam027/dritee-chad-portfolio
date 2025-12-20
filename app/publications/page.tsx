// app/publications/page.tsx (Server Component)
import { publications } from '@/lib/data/publications';
import PublicationsContent from '@/components/publicationsContent';
import HeroSection from '@/components/herosection';

export const metadata = {
  title: 'Publications | Research Portfolio',
  description: 'Research contributions advancing knowledge in sustainable agriculture and forestry sciences',
};

export default function PublicationsPage() {
  // Calculate stats on the server
  const stats = {
    published: publications.filter(p => p.status === "Published").length,
    totalCitations: publications.reduce((sum, p) => sum + (p.citations || 0), 0),
    journalArticles: publications.filter(p => p.type === "Journal Article").length,
    activeYears: new Set(publications.map(p => p.year)).size,
  };

  // Extract unique values for filters
  const publicationTypes = ["all", ...new Set(publications.map(p => p.type))];
  const years = ["all", ...new Set(publications.map(pub => pub.year.toString()))].sort().reverse();

  return (
    <>
      <HeroSection
        title="Publications"
        subtitle="Research contributions advancing knowledge in sustainable agriculture and forestry sciences"
        background="./herobackground.png"
      />
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PublicationsContent 
          publications={publications}
          stats={stats}
          publicationTypes={publicationTypes}
          years={years}
        />
      </div>
    </div>
    </>
  );
}