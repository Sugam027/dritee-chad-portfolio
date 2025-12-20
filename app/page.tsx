import Experience from "@/components/experience";
import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { publications } from "@/lib/data/publications";
import PublicationCard from "@/components/publicationCard";

export default function Home() {
  const latest = publications.sort((a, b) => b.year - a.year)[0];
  return (
    <>
    <Hero />
    <Experience />
    {/* latest publication */}
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4 text-foreground">
          Latest Publication
        </h2>
      </div>
      <div className="rounded-xl bg-secondary-background" >
      <PublicationCard publication={latest} />
      </div>
      <div className="text-center mt-8">
        <Button size="lg" variant={"outline"}>
          <Link href="/publications">View All Publications</Link>
        </Button>
        
      </div>
    </section>

    {/* Call to Action Section */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-background">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Interested in Collaboration?
            </h2>
            <p className="text-lg text-secondary-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing research opportunities, academic collaborations,
              and sharing insights about forestry and environmental conservation.
            </p>
            <Button className="hover:border-none hover:bg-primary-background/10 group" size="lg" asChild>
              <Link href="/contact">
                Connect With Me
                <ArrowRight className="ml-2 h-4 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
    </section>
    
    </>
  );
}
