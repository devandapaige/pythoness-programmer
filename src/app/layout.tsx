import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const norwester = localFont({
  src: '../../public/fonts/norwester.otf',
  variable: "--font-norwester",
});

export const metadata: Metadata = {
  title: "Pythoness Programmer | Where Code Meets Calm",
  description: "Senior Software Engineer offering full-stack development services, tech execution coaching, and digital craft services. Specializing in React, Next.js, and TypeScript with a focus on neurodivergent-friendly solutions.",
  keywords: ["Software Engineer", "Full-Stack Development", "Tech Coaching", "React", "Next.js", "TypeScript", "Neurodivergent-friendly"],
  authors: [{ name: "Amanda Paige" }],
  creator: "Amanda Paige",
  openGraph: {
    title: "Pythoness Programmer | Where Code Meets Calm",
    description: "Senior Software Engineer offering full-stack development services and tech execution coaching with a focus on neurodivergent-friendly solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${norwester.variable} font-sans bg-brand-cream text-brand-green-dark antialiased`}>
        {children}
      </body>
    </html>
  );
}
