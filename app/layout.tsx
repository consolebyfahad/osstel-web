import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteBackground } from "@/components/ui/site-background";
import "./globals.css";
import { buildRootMetadata } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = buildRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-PK"
      className={`${inter.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="relative min-h-full flex flex-col antialiased text-foreground">
        <SiteBackground />
        <JsonLd />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
