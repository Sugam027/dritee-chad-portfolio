import { BookOpen, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Research", href: "/research" },
        { name: "Publications", href: "/publications" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
        { name: "CV Download", href: "#", external: true },
        { name: "Research Gate", href: "#", external: true }
      ]
    }
  ];

  return (
    <footer className="bg-background text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" data-testid="link-footer-home">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-semibold text-xl">Academic Portfolio</span>
              </div>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Advancing forest science through research, education, and sustainable management practices. 
              Contributing to the conservation of our natural ecosystems for future generations.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>student@forestry.edu</span>
            </div>
          </div>

          {/* Navigation Links */}
          {footerLinks.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              <h3 className="font-semibold text-muted">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.external ? (
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-muted transition-colors flex items-center space-x-1 hover-elevate"
                        data-testid={`link-footer-${link.name.toLowerCase().replace(' ', '-')}`}
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    ) : (
                      <Link href={link.href}>
                        <div className="text-muted-foreground hover:text-muted transition-colors hover-elevate">
                          {link.name}
                        </div>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-muted-foreground my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Academic Portfolio. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span className="transition-colors" data-testid="link-privacy-policy">
              Privacy Policy
            </span>
            <span 
              className="transition-colors"
              data-testid="button-terms-of-use"
            >
              Terms of Use
            </span>
            <span>|</span>
            <span>Made for academic excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
