import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Serif_Text, Noto_Serif } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const dmSerif = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const notoSerif = Noto_Serif({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  title: "Dristee Chad",
  description: "A professional portfolio showcasing the work and achievements of Dristee Chad in sustainable agriculture and forestry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSerif.variable} ${notoSerif.variable} antialiased`}
      >
        <div className="min-h-screen bg-secondary-background text-secondary-foreground flex flex-col">
          <Navigation />
          {children}
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
