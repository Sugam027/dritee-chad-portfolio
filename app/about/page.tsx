import { GraduationCap, Award, MapPin, Calendar, Mail, Phone, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import profileImage from "@assets/generated_images/Academic_portrait_photo_70fc33a0.png";
import Image from "next/image";

export default function AboutSection() {
  // TODO: Remove mock functionality - replace with actual data
  const skills = [
    "GIS & Remote Sensing",
    "Data Analysis",
    "Field Data Collection",
    "Geospatial Database Management"
  ];

  const education = [
    {
      degree: "Bachelor of Science in Forestry",
      institution: "Institute of Forestry, Tribhuvan University, Kathmandu Nepal",
      year: "2019-2023",
      status: "Completed"
    }
  ];

    const volunteerExperience = [
    {
      role: "Project Officer (Wildlife & GIS) ",
      organization: "SchEMS Consultancy Services ",
      period: "July 2025 - Present",
      description: "Assisted in wildlife monitoring and community engagement programs"
    },
    {
      role: "Data Analyst",
      organization: "WWF Nepal",
      period: "May 2025 - June 2025",
      description: "Supported bird census and habitat assessment activities"
    },
    {
      role: "Research Assistant",
      organization: "Greenhood Nepal",
      period: "Aug 2024 – Mar 2025",
      description: "Conducted awareness programs on forest conservation"
    }
  ];

  const about = [
    "I am a wildlife ecologist with a strong background in GIS and Remote Sensing applications for conservation science. My research focuses on understanding how carnivores and their prey interact with dynamic landscapes, using advanced tools such as camera trap data analysis, occupancy modeling, and spatial habitat assessments.",
    "Over the past several years, I have worked across Nepal’s diverse ecosystems from the grasslands and wetlands of the Terai Arc Landscape to the high altitude habitats of the Himalayas. My projects have covered a wide range of themes, including tiger occupancy studies, snow leopard prey dynamics, wetland monitoring, forest fire risk mapping, and medicinal plant conservation.",
    "Beyond technical research, I am passionate about community based conservation, recognizing that local stewardship is vital for long term ecological sustainability. I aim to bridge rigorous science with actionable conservation strategies that benefit both wildlife and people.",
    "Currently, my work integrates carnivore ecology, geospatial analysis, and conservation planning with an emphasis on using spatial data to guide policy and management decisions.",
    "When I’m not in the field or immersed in spatial data, I enjoy hiking, trekking, and collecting wildlife photographs. I also find joy in writing, mentoring students, and contributing to collaborative conservation initiatives across Nepal and beyond.",
    "Through my work, I aim to combine quantitative ecology, field research, and geospatial technologies to support evidence based wildlife conservation in human dominated landscapes."
  ];


  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Photo and Bio */}
          <div className="space-y-8">
            <div className="flex flex-col items-center lg:items-start space-y-6">
                <Card className="academic-card bg-background/10 backdrop-blur-md border border-background/20 shadow-lg bg-linear-to-br from-white/10 to-transparent pointer-events-none">
                    <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row gap-8">
                        {/* Profile Image Placeholder */}
                        {/* <div className="w-48 h-48 mx-auto md:mx-0 bg-linear-to-br from-primary to-accent rounded-full flex items-center justify-center">
                            <span className="text-6xl font-serif font-bold text-white">JS</span>
                        </div> */}
                        <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
                            <Image
                            src={"/herobackground.png"}
                            width={100} height={100}
                            alt="portrait"
                            className="w-full h-full object-cover"
                            />
                        </div>
                        
                        <div className="flex-1">
                            <h2 className="text-2xl font-serif font-bold mb-4 academic-heading">
                            Dristee Chad
                            </h2>
                            <p className="text-muted-foreground mb-4 flex items-center">
                            <GraduationCap className="h-4 w-4 mr-2" />
                            B.Sc. Forestry
                            </p>
                            <p className="text-muted-foreground mb-6 flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            Tribhuvan University (2023)
                            </p>
                            
                            <div className="space-y-4">
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <Mail className="h-4 w-4" />
                                <span>dristeechad@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <Phone className="h-4 w-4" />
                                <span>+977 9868918090</span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-serif">
                  <span>Experience</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {volunteerExperience.map((exp, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-muted">
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                      <h4 className="font-medium">{exp.role}</h4>
                      <p className="text-sm text-muted-foreground">{exp.organization}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            
          </div>

          

          {/* Right Column - Education and Skills */}
          <div className="space-y-8">
            <Card className="bg-background/10 backdrop-blur-md border border-background/20 shadow-lg bg-linear-to-br from-white/10 to-transparent pointer-events-none">
                <div className="prose prose-lg max-w-none">
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2 font-serif">
                        <span>About Me</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {about.map((para, i) => (
                        <p key={i} className="text-muted-foreground leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </CardContent>
                </div>
            </Card>
                        {/* Skills */}
            <Card className="bg-background/10 backdrop-blur-md border border-background/20 shadow-lg bg-linear-to-br from-white/10 to-transparent pointer-events-none">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-serif">
                  <span>Skills & Expertise</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Education */}
            <Card className="bg-background/10 backdrop-blur-md border border-background/20 shadow-lg bg-linear-to-br from-white/10 to-transparent pointer-events-none">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-serif">
                  <span>Education</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-muted">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                          <Calendar className="h-3 w-3" />
                          {edu.year}
                        </p>
                       
                      </div>
                      <Badge variant={edu.status === "Completed" ? "default" : "secondary"}>
                        {edu.status}
                      </Badge>
                    </div>
                    {index < education.length - 1 && <hr className="border-muted-foreground" />}
                  </div>
                ))}
              </CardContent>
            </Card>



            {/* Quick Stats */}
            {/* <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">4.2</div>
                    <div className="text-sm text-muted-foreground">GPA</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">8</div>
                    <div className="text-sm text-muted-foreground">Conferences</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">15</div>
                    <div className="text-sm text-muted-foreground">Field Studies</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">6</div>
                    <div className="text-sm text-muted-foreground">Collaborations</div>
                  </div>
                </div>
              </CardContent>
            </Card> */}

          </div>
        </div>
      </div>
    </section>
  );
}