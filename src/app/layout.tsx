import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Affinity Logistics | UK to Zimbabwe & SADC Shipping Specialists",
    template: "%s | Affinity Logistics",
  },
  description:
    "Affinity Logistics provides end-to-end logistics solutions from the UK to Zimbabwe and SADC. Vehicle sourcing, truck imports, shipping, customs clearance, and delivery. Delivery is our DNA.",
  keywords: [
    "UK to Zimbabwe Shipping",
    "Truck Imports Zimbabwe",
    "Vehicle Shipping Zimbabwe",
    "Walvis Bay Logistics",
    "Zimbabwe Customs Clearance",
    "UK Vehicle Sourcing",
    "SADC Logistics",
    "Engine Imports Zimbabwe",
    "Affinity Logistics",
    "Cross Border Logistics",
  ],
  authors: [{ name: "Affinity Logistics" }],
  creator: "Affinity Logistics",
  metadataBase: new URL("https://affinitylogistics.co.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "Affinity Logistics",
    title: "Affinity Logistics | UK to Zimbabwe & SADC Shipping Specialists",
    description:
      "End-to-end logistics solutions. We Source. We Ship. We Clear. We Deliver. Vehicles, Trucks, Engines, Spare Parts & Household Goods.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Affinity Logistics - UK to Zimbabwe Shipping",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affinity Logistics | UK to Zimbabwe & SADC Shipping",
    description:
      "End-to-end logistics solutions. We Source. We Ship. We Clear. We Deliver.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy-950">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
