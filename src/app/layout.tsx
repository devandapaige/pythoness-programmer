import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  title: {
    default: "Pythoness Programmer | Tech That Works, for People Like Us",
    template: "%s | Pythoness Programmer",
  },
  description: "Reflection sessions, not rescue. I sit with neurodivergent creatives and small business owners in the aftermath of tech hurdles and ask: What is this struggle trying to teach you? Tarot-guided insight, pattern recognition, and brain-friendly clarity—so you don't make it a third time.",
  keywords: [
    "Tech Coaching",
    "Software Psychic",
    "Reflection Sessions",
    "Neurodivergent-friendly",
    "Digital Confidence",
    "Pattern Recognition",
    "Tarot-guided Tech",
    "Brain-friendly Workflows",
    "Decolonizing Tech",
    "Tech That Works for People Like Us",
    "LGBTQIA+ Affirming",
    "Judgment-free tech coaching",
    "Reflection sessions",
    "Digital Fluency",
    "Amanda Nelson",
    "Pythoness Programmer",
    "late-identified neurodivergent",
    "tech clarity"
  ],
  authors: [{ name: "Amanda Nelson" }],
  creator: "Pythoness Programmer",
  openGraph: {
    title: "Pythoness Programmer | Tech That Works, for People Like Us",
    description: "Reflection sessions, not rescue. Tarot-guided reflection and pattern recognition for neurodivergent creatives and small business owners—so you don't make it a third time.",
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
      <head>
        <style>{`
          .addeventstc {
            background-color:#32d24d!important;
            color:#ffffff!important;
          }
          .addeventstc:hover {
            background-color:#32d24d!important;
            filter:brightness(105%);
          }
          .addeventstc:active {
            background-color:#32d24d!important;
            filter:brightness(110%);
          }
          .addeventstc .addeventstc_icon {
            background:url(https://cdn.addevent.com/libs/imgs/icon-calendar-fff-t1.svg) no-repeat!important;
            width: 16px;
            height: 16px;
            display: inline-block;
            vertical-align: middle;
          }
        `}</style>
      </head>
      <body className={`${openSans.variable} ${norwester.variable} font-sans bg-brand-cream text-brand-green-dark antialiased [&_h1]:font-display [&_h2]:font-display [&_h3]:font-display [&_h4]:font-display [&_h5]:font-display [&_h6]:font-display`}>
        <SpeedInsights />
        <Hotjar />
        <CookieYes />
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}
