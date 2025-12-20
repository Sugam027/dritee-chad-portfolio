'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import PublicationsCard from "./publicationCard";
import { Search } from "lucide-react";

interface Publication {
  id: number;
  title: string;
  authors: string[];
  journal?: string;
  conference?: string;
  book?: string;
  year: number;
  volume?: string;
  issue?: string;
  pages?: string;
  type: string;
  status: string;
  doi?: string;
  isbn?: string;
  abstract: string;
  keywords: string[];
  citations?: number;
  downloadUrl?: string;
}

interface Stats {
  published: number;
  totalCitations: number;
  journalArticles: number;
  activeYears: number;
}

interface PublicationsClientProps {
  publications: Publication[];
  stats: Stats;
  publicationTypes: string[];
  years: string[];
}

export default function PublicationsContent({ 
  publications, 
  stats, 
  publicationTypes, 
  years 
}: PublicationsClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterYear, setFilterYear] = useState("all");

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         pub.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = filterType === "all" || pub.type === filterType;
    const matchesYear = filterYear === "all" || pub.year.toString() === filterYear;
    
    return matchesSearch && matchesType && matchesYear;
  });

  return (
    <>
      {/* Stats */}
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="academic-card text-center bg-background/10 backdrop-blur-md border border-background/20 shadow-lg bg-linear-to-br from-white/10 to-transparent pointer-events-none">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-primary mb-1">
              {stats.published}
            </div>
            <div className="text-sm text-muted-foreground">Published Papers</div>
          </CardContent>
        </Card>
        <Card className="academic-card text-center bg-background/10 backdrop-blur-md border border-background/20 shadow-lg bg-linear-to-br from-white/10 to-transparent pointer-events-none">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-research mb-1">
              {stats.totalCitations}
            </div>
            <div className="text-sm text-muted-foreground">Total Citations</div>
          </CardContent>
        </Card>
        <Card className="academic-card text-center bg-background/10 backdrop-blur-md border border-background/20 shadow-lg bg-linear-to-br from-white/10 to-transparent pointer-events-none">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-publication mb-1">
              {stats.journalArticles}
            </div>
            <div className="text-sm text-muted-foreground">Journal Articles</div>
          </CardContent>
        </Card>
        <Card className="academic-card text-center bg-background/10 backdrop-blur-md border border-background/20 shadow-lg bg-linear-to-br from-white/10 to-transparent pointer-events-none">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-accent mb-1">
              {stats.activeYears}
            </div>
            <div className="text-sm text-muted-foreground">Active Years</div>
          </CardContent>
        </Card>
      </div> */}

      {/* Filters */}
      <Card className="academic-card mb-8 bg-background/10 backdrop-blur-md border border-background/20 shadow-lg bg-linear-to-br from-white/10 to-transparent">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary-foreground" />
              <Input
                placeholder="Search publications, authors, keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Publication Type" />
              </SelectTrigger>
              <SelectContent>
                {publicationTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type === "all" ? "All Types" : type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterYear} onValueChange={setFilterYear}>
              <SelectTrigger className="w-full sm:w-32">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year === "all" ? "All Years" : year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Publications List */}
      <div className="space-y-8">
        {filteredPublications.map((publication) => (
          <PublicationsCard key={publication.id} publication={publication} />
        ))}
      </div>

      {filteredPublications.length === 0 && (
        <Card className="academic-card text-center">
          <CardContent className="p-8">
            <p className="text-secondary-foreground">No publications found matching your criteria.</p>
          </CardContent>
        </Card>
      )}
    </>
  );
}