import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/lib/brand";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRAND.name} — ${BRAND.tagline} | Hostel Management Platform`,
  description:
    "A complete digital platform for hostel owners in Pakistan to manage tenants, rooms, payments, and complaints in one place. Manage hostels. Collect rent. Effortlessly.",
  keywords: [
    "hostel management",
    "rent collection",
    "tenant management",
    "hostel software Pakistan",
    "rent tracking",
    BRAND.name,
    "JazzCash",
    "Easypaisa",
  ],
  openGraph: {
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description:
      "Manage hostels, collect rent, and handle complaints digitally. The modern platform for hostel owners in Pakistan.",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description:
      "A complete digital platform for hostel owners in Pakistan to manage tenants, rooms, payments, and complaints.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
