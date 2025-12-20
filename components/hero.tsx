"use client";

import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
// import heroImage from "herobackground.png";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";

export function Hero() {
  const handleDownloadCV = () => {
    console.log("Download CV clicked");
    // TODO: Remove mock functionality - implement actual CV download
  };

  return (
    <section className="relative py-4 min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
        <Image
          src="./herobackground.png"
          width={100} height={100}
          alt="Forest research background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-br from-background/80 via-background/70 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-muted">
              Research in
              <span className="block text-foreground">Forestry & Agriculture</span>
            </h1>
            <p className="text-xl md:text-xl text-muted-foreground max-w-7xl mx-auto leading-relaxed">
              An aspiring wildlife ecologist specializing in GIS, remote sensing, and spatial analysis for conservation. My work combines field-based monitoring using camera traps, sign surveys, and ecological assessments with geospatial tools to study wildlife distribution, habitat use, and landscape connectivity. 
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <Button
              variant="ghost"
              size="lg"
              onClick={handleDownloadCV}
              className="w-full sm:w-auto bg-background/10 backdrop-blur-s text-muted"
              data-testid="button-download-cv"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button> */}
            <Link href="/research">
              <Button size="lg" className="w-full sm:w-auto group" data-testid="button-view-research">
                <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                View Research
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto bg-background/10 backdrop-blur-sm text-muted"
                data-testid="button-contact"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <Card className="text-center p-8">
              <div className="text-3xl font-bold text-muted">5+</div>
              <div className="text-muted-foreground">Research Projects</div>
            </Card>
            <Card className="text-center p-8">
              <div className="text-3xl font-bold text-muted">12</div>
              <div className="text-muted-foreground">Publications</div>
            </Card>
            <Card className="text-center p-8">
              <div className="text-3xl font-bold text-muted">3</div>
              <div className="text-muted-foreground">Awards</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}