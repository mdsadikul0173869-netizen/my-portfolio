// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Professional SEO Expert & Web Developer Portfolio",
  description: "Showcasing specialized projects in SEO, Web Development, and AI-driven applications by a Google Ads certified expert.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="antialiased">
        <Navbar /> 
        <div className="pt-16"> 
          {children}
        </div>
      </body>
    </html>
  );
}