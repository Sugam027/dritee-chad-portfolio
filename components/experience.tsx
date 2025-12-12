import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function Experience(){

  const experiences = [
    {
      title: "Project Officer",
      organization: "SchEMS Consultancy",
      description: "Wildlife & GIS specialist working on Environmental Impact Assessments including the Siddhartha Highway Improvement Project.",
      date: "July 2025 - Present",},
    {
      title: "Data Analyst",
      organization: "WWF Nepal",
      description: "Snow Leopard monitoring, Tiger surveys, and spatial analysis for Terai Arc Landscape conservation programs.",
      date: "2023 - 2025",},
    {
      title: "Research Assistant",
      organization: "Greenhood Nepal",
      description: "Himalayan medicinal plant conservation and bear poaching research with community engagement.",
      date: "2024 - 2025",},
  ];       
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
            {experiences.map((exp, index) => (
              
            <Card key={index} className="flex flex-col h-full">
              <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground">{exp.organization}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {exp.description}
                  </p>
              </CardContent>
              <CardFooter className="mt-auto">
                <span className="text-xs text-muted font-medium">{exp.date}</span>
              </CardFooter>
            </Card>
            ))}
            
            
          </div>
        </div>
      </section>
    )
}