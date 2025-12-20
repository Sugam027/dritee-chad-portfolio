// app/contact/page.tsx (Server Component)
import { contactInfo, socialLinks, officeHours } from '@/lib/data/contacts';
import ContactForm from '@/components/contactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Car } from 'lucide-react';
import Link from 'next/link';
import HeroSection from '@/components/herosection';


export const metadata = {
  title: 'Contact | Research Portfolio',
  description: "Get in touch for research collaboration, questions, or discussions about sustainable agriculture and forestry.",
};

export default function ContactPage() {
  return (
    <>
    <HeroSection
      title="Contact"
      background="./herobackground.png"
    />
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information & Social Links */}
            <div className="space-y-8">
                {/* Contact Information */}
                <p className="text-2xl font-serif font-bold mb-4 text-muted-dark">
                    Contact Information
                </p>
                <p className='text-secondary-foreground mb-8'>
                  Whether you're interested in collaboration, have questions about my research, or just want to discuss forestry and environmental science, I'd love to hear from you. Feel free to reach out through any of the following methods:
                </p>
                <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="h-9 w-9 rounded-lg bg-background/10 flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-secondary-foreground mt-0.5" />
                      </div>
                        <div>
                        <p className="font-medium text-sm text-muted-dark">{info.label}</p>
                        {info.href ? (
                            <Link
                            href={info.href}
                            className="text-sm text-secondary-foreground hover:text-muted-dark transition-colors"
                            >
                            {info.value}
                            </Link>
                        ) : (
                            <p className="text-sm text-secondary-foreground">{info.value}</p>
                        )}
                        </div>
                    </div>
                    ))}
                </div>
                

                {/* Academic & Social Links */}
                {/* <Card className="academic-card">
                <CardHeader>
                    <CardTitle className="text-lg font-serif academic-heading">
                    Academic & Social Profiles
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                        <link.icon className="h-5 w-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                        <p className="font-medium text-sm group-hover:text-primary transition-colors">
                            {link.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                            {link.description}
                        </p>
                        </div>
                    </a>
                    ))}
                </CardContent>
                </Card> */}

                <div>
                <p className="text-2xl font-serif font-bold mb-4 text-muted-dark">
                  Academic & Professional Profiles
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-4 rounded-lg border border-secondary-foreground hover:border-primary/50 hover:bg-primary/5 transition-all group"
                    >
                      <link.icon className="h-5 w-5 text-secondary-foreground group-hover:text-primary transition-colors" />
                      <div>
                        <p className="font-medium text-muted-dark text-sm">{link.name}</p>
                        <p className="text-xs text-secondary-foreground">{link.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
            {/* Contact Form */}
            <ContactForm />
        </div>
      </div>
    </div>
    </>
  );
}