import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const SEO_KEYWORDS = [
  "OSSTEL",
  "osstel",
  "hostel management system",
  "hostel management software",
  "hotel management system",
  "hotel management software",
  "hostel management system Pakistan",
  "hotel management system Pakistan",
  "hostel software",
  "hotel software",
  "property management system",
  "rent collection software",
  "tenant management system",
  "hostel owner app",
  "hostel rent tracking",
  "room management system",
  "hostel billing software",
  "JazzCash rent collection",
  "Easypaisa rent collection",
  BRAND.name,
  BRAND.country,
] as const;

export const SEO_TITLE =
  "OSSTEL | Hostel & Hotel Management System — Rent Made Simple";

export const SEO_DESCRIPTION =
  "OSSTEL is the all-in-one hostel and hotel management system for Pakistan. Manage tenants, rooms, rent collection, payments, and complaints in one platform. Download the OSSTEL app or request a demo.";

export const SEO_OG_DESCRIPTION =
  "OSSTEL — hostel and hotel management software for owners in Pakistan. Digital tenant management, rent tracking, payment verification, and complaint handling in one app.";

export function buildRootMetadata(): Metadata {
  const ogImage = {
    url: `${SITE_URL}${BRAND.logo}`,
    width: 512,
    height: 512,
    alt: `${SITE_NAME} — Hostel & Hotel Management System`,
  };

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: SEO_TITLE,
      template: `%s | ${SITE_NAME}`,
    },
    description: SEO_DESCRIPTION,
    keywords: [...SEO_KEYWORDS],
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "Business Software",
    alternates: {
      canonical: "/",
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: BRAND.logo, type: "image/png", sizes: "512x512" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
      shortcut: "/favicon.ico",
    },
    openGraph: {
      type: "website",
      locale: "en_PK",
      url: SITE_URL,
      siteName: SITE_NAME,
      title: SEO_TITLE,
      description: SEO_OG_DESCRIPTION,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: SEO_TITLE,
      description: SEO_OG_DESCRIPTION,
      images: [ogImage.url],
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
    verification: {
      // Add tokens when available, e.g. google: "your-google-verification-code",
    },
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: ["OSSTEL App", "Osstel Hostel Management"],
    url: SITE_URL,
    logo: `${SITE_URL}${BRAND.logo}`,
    description: SEO_DESCRIPTION,
    email: BRAND.email,
    telephone: BRAND.phoneDisplay,
    areaServed: {
      "@type": "Country",
      name: BRAND.country,
    },
    sameAs: [BRAND.whatsappUrl],
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: "OSSTEL Hostel & Hotel Management System",
    url: SITE_URL,
    description: SEO_DESCRIPTION,
    inLanguage: "en-PK",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: `${SITE_URL}${BRAND.logo}`,
    },
  };
}

export function buildSoftwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    alternateName: [
      "OSSTEL Hostel Management System",
      "OSSTEL Hotel Management System",
    ],
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Property Management Software",
    operatingSystem: "Android, iOS, Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PKR",
      description: "Free plan available for hostel owners",
    },
    description: SEO_DESCRIPTION,
    url: SITE_URL,
    image: `${SITE_URL}${BRAND.logo}`,
    featureList: [
      "Hostel management system",
      "Hotel management system",
      "Tenant management",
      "Room and bed tracking",
      "Rent collection and billing",
      "Payment screenshot verification",
      "Complaint management",
      "Automated rent reminders",
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Hostel owners, hotel managers, property managers",
    },
    areaServed: BRAND.country,
  };
}

export function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is OSSTEL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "OSSTEL is a hostel and hotel management system that helps property owners in Pakistan manage tenants, rooms, rent collection, payments, and complaints from one digital platform.",
        },
      },
      {
        "@type": "Question",
        name: "Is OSSTEL a hostel management system or hotel management system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "OSSTEL works for both hostels and small hotels. It includes tenant management, room tracking, rent billing, payment verification, and complaint handling — everything needed to run a property.",
        },
      },
      {
        "@type": "Question",
        name: "Who is OSSTEL for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "OSSTEL is built for hostel owners, hotel managers, and property managers in Pakistan who want to replace spreadsheets and WhatsApp with a modern management system.",
        },
      },
    ],
  };
}

export const JSON_LD_SCHEMAS = [
  buildOrganizationJsonLd(),
  buildWebSiteJsonLd(),
  buildSoftwareApplicationJsonLd(),
  buildFaqJsonLd(),
];
