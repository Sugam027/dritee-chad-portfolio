import { Card, CardContent } from "@/components/ui/card";

export default function Experience(){
    return(
        <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Working with leading conservation organizations on wildlife monitoring and spatial analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">Project Officer</h3>
                    <p className="text-sm text-muted-foreground">SchEMS Consultancy</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-3">
                  Wildlife & GIS specialist working on Environmental Impact Assessments including the Siddhartha Highway Improvement Project.
                </p>
                <span className="text-xs text-primary font-medium">July 2025 - Present</span>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">Data Analyst</h3>
                    <p className="text-sm text-muted-foreground">WWF Nepal</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-3">
                  Snow Leopard monitoring, Tiger surveys, and spatial analysis for Terai Arc Landscape conservation programs.
                </p>
                <span className="text-xs text-primary font-medium">2023 - 2025</span>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">Research Assistant</h3>
                    <p className="text-sm text-muted-foreground">Greenhood Nepal</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-3">
                  Himalayan medicinal plant conservation and bear poaching research with community engagement.
                </p>
                <span className="text-xs text-primary font-medium">2024 - 2025</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}