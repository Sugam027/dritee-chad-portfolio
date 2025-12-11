import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "john.smith@university.edu",
    href: "mailto:john.smith@university.edu"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  }
];

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/johnsmith",
    description: "Professional network and career updates"
  },
  {
    name: "ResearchGate",
    icon: ExternalLink,
    url: "https://researchgate.net/profile/John_Smith",
    description: "Research publications and academic network"
  }
];

export const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" }
];