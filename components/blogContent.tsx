"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  category: string;
  featured?: boolean;
}

export default function BlogContent({ posts }: { posts: BlogPost[] }) {
  const [search, setSearch] = useState("");

  // Show all posts initially. Filter only when search has value.
  const filteredPosts = useMemo(() => {
    if (!search.trim()) return posts;

    return posts.filter((post) =>
      [post.title, post.excerpt, ...post.tags]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search, posts]);

  return (
    <div>
      {/* Search Bar */}
      <Card className="mb-8 bg-background/10 backdrop-blur-md border border-background/20 shadow-lg bg-linear-to-br from-white/10 to-transparent">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search blog posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Posts */}
      <div>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
                <div key={index}>
                  <Card className="flex flex-col h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge variant="default">{post.category}</Badge>
                      </div>
                      <CardTitle className="text-lg mb-3 font-serif">{post.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3 text-xs text-secondary-foreground">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3" />
                            {post.publishDate}
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-3 w-3" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                      <Button variant="ghost" size="sm" className="w-full group">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
          </div>
        </section>
      </div>

       {filteredPosts.length === 0 && (
        <Card className="academic-card text-center">
          <CardContent className="p-8">
            <p className="text-secondary-foreground">No blogs found matching your criteria.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
