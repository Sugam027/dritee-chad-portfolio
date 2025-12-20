"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  background?: string;  
  children?: ReactNode; // For optional buttons or extra content
}

export default function HeroSection({
  title,
  highlight,
  subtitle,
  background,
  children
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
        <Image
          src={background as string}
          
          width={100}
          height={100}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-background/80 via-background/70 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-muted mb-4">
          {title}
          {highlight && (
            <span className="block text-foreground">{highlight}</span>
          )}
        </h1>

        {subtitle && (
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            {subtitle}
          </p>
        )}

        {/* Optional children (buttons, stats, etc.) */}
        {children}
      </div>
    </section>
  );
}
