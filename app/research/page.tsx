import { ExternalLink, Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { research } from "@/lib/data/research";
import HeroSection from "@/components/herosection";


export default function ResearchSection() {

  const handleViewProject = (projectId: number) => {
    console.log(`View project ${projectId} clicked`);
    // TODO: Remove mock functionality - implement project details view
  };

  return (
    <>
    <HeroSection
      title="Research"
      subtitle="Exploring innovative approaches to forest science and sustainable management 
            through interdisciplinary research and field studies."
      background="./herobackground.png"
    />
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Current Projects */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4 text-foreground">
              Current & Recent Projects
            </h2>
          </div>
          <div className="space-y-8">
            {research.map((project) => (
              <Card key={project.id} className="hover-elevate transition-all duration-300 bg-background/10 backdrop-blur-md border border-background/20 shadow-lg bg-linear-to-br from-white/10 to-transparent">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-3">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <CardTitle className="text-xl font-serif">{project.title}</CardTitle>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{project.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{project.location}</span>
                            </div>
                          </div>
                        </div>
                        <Badge 
                          variant={project.status === "Ongoing" ? "default" : 
                                  project.status === "Completed" ? "secondary" : "outline"}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Collaborators:</span>
                          <span>{project.collaborators.join(", ")}</span>
                        </div>
                      </div>

                      <Button 
                        variant="ghost" 
                        data-testid={`button-view-project-${project.id}`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>

  );
}