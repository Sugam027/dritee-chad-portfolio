'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Calendar, BookOpen, Search } from "lucide-react";

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

interface PublicationsCardProps {
  publication: Publication;
}

export default function PublicationsCard({ 
  publication
}: PublicationsCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published": return "bg-primary text-primary-foreground";
      case "Accepted": return "bg-secondary text-research-foreground";
      case "Under Review": return "bg-accent text-muted-foreground";
      case "Rejected": return "bg-destructive text-muted-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <>

    <Card key={publication.id}>
    <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <CardTitle className="text-lg font-serif publication-heading leading-tight">
            {publication.title}
        </CardTitle>
        <div className="flex gap-2">
            <Badge className={getStatusColor(publication.status)}>
            {publication.status}
            </Badge>
            <Badge variant="outline">{publication.type}</Badge>
        </div>
        </div>
    </CardHeader>
    <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
            {/* Authors */}
            <div>
            <p className="text-sm font-medium text-muted-foreground">Authors:</p>
            <p className="text-sm">{publication.authors.join(", ")}</p>
            </div>

            {/* Publication Details */}
            <div>
            <p className="text-sm font-medium text-muted-foreground">Published in:</p>
            <p className="text-sm">
                {publication.journal && (
                <>
                    <span className="font-medium">{publication.journal}</span>
                    {publication.volume && `, Vol. ${publication.volume}`}
                    {publication.issue && `, Issue ${publication.issue}`}
                    {publication.pages && `, pp. ${publication.pages}`}
                </>
                )}
                {publication.conference && (
                <>
                    <span className="font-medium">{publication.conference}</span>
                    {publication.pages && `, pp. ${publication.pages}`}
                </>
                )}
                {publication.book && (
                <>
                    <span className="font-medium">{publication.book}</span>
                    {publication.pages && `, ${publication.pages}`}
                </>
                )}
            </p>
            </div>

            {/* Abstract */}
            <div>
            <p className="text-sm font-medium text-muted-foreground">Abstract:</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
                {publication.abstract}
            </p>
            </div>

            {/* Keywords */}
            <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Keywords:</p>
            <div className="flex flex-wrap gap-1">
                {publication.keywords.map((keyword) => (
                <Badge key={keyword} variant="outline" className="text-xs">
                    {keyword}
                </Badge>
                ))}
            </div>
            </div>
        </div>

        <div className="space-y-4">
            {/* Publication Info */}
            <div className="bg-background/90 p-4 rounded-lg space-y-3">
            <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-2 text-primary" />
                <span className="font-medium">{publication.year}</span>
            </div>
            
            {publication.citations !== undefined && (
                <div className="flex items-center text-sm">
                <BookOpen className="h-4 w-4 mr-2 text-primary" />
                <span>{publication.citations} citations</span>
                </div>
            )}

            {publication.doi && (
                <div className="text-xs text-muted-foreground">
                <span className="font-medium">DOI:</span> {publication.doi}
                </div>
            )}

            {publication.isbn && (
                <div className="text-xs text-muted-foreground">
                <span className="font-medium">ISBN:</span> {publication.isbn}
                </div>
            )}
            </div>

            {/* Actions */}
            {publication.status === "Published" && (
            <div className="space-y-2">
                <Button size="sm" className="w-full" variant="ghost">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Online
                </Button>
                {publication.downloadUrl && (
                <Button size="sm" className="w-full" variant="ghost">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                </Button>
                )}
            </div>
            )}
        </div>
        </div>
    </CardContent>
    </Card>
    </>
  );
}