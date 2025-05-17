import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import RootLayoutClient from "../components/RootLayoutClient";
import Hotjar from "../components/Hotjar";
import CookieYes from "../components/CookieYes";
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
  metadataBase: new URL('https://pythonessprogrammer.com'),
  title: "Pythoness Programmer | Tech Clarified, Empowering Digital Confidence",
  description: "Tech Clarified | Empowering Digital Confidence. Providing empathetic tech coaching and full-stack development services for neurodivergent professionals. Specializing in website solutions, marketing funnels, and system integrations with a judgment-free, accessible approach.",
  keywords: [
    "Tech Coaching",
    "Tech Clarified",
    "Digital Confidence",
    "Neurodivergent-friendly Development",
    "Website Solutions",
    "Marketing Funnel Setup",
    "System Integration",
    "Full-Stack Development",
    "React Development",
    "Next.js",
    "TypeScript",
    "LGBTQIA+ Affirming",
    "Accessible Tech Solutions",
    "Tech Consultation",
    "Website Planning",
    "Digital Craft Services",
    "Central Virginia Tech Services"
  ],
  authors: [{ name: "Amanda Nelson" }],
  creator: "Pythoness Programmer",
  openGraph: {
    title: "Pythoness Programmer | Tech Clarified, Empowering Digital Confidence",
    description: "Tech Clarified | Empowering Digital Confidence. Providing empathetic tech coaching and development services focused on neurodivergent success. Clear solutions, judgment-free support, and accessible technology for all.",
    type: "website",
    url: '/',
    siteName: 'Pythoness Programmer',
  },
  /* do not add twitter metadata, fuck Elon Musk */
  robots: {
    index: true,
    follow: true,
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
        <Hotjar />
        <CookieYes />
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}
