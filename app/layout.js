import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/effects/InteractiveBackground";
import { Poppins, Inter } from "next/font/google";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  title: {
    default: "Arix Innovations | Digital Agency",
    template: "%s | Arix Innovations",
  },
  description:
    "Arix Innovations is a digital agency that designs and builds practical websites and digital systems to help small and medium businesses grow.",
  metadataBase: new URL("https://arix-innovations.vercel.app"),
  openGraph: {
    title: "Arix Innovations | Digital Agency",
    description:
      "Arix Innovations is a digital agency that designs and builds practical websites and digital systems to help small and medium businesses grow.",
    url: "https://arix-innovations.vercel.app",
    siteName: "Arix Innovations",
    images: [
      {
        url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Arix Innovations workspace",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arix Innovations | Digital Agency",
    description:
      "We design and build modern websites and digital solutions that support business growth.",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="relative bg-navy text-white">
        <InteractiveBackground />
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
