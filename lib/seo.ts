import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const SEO_KEYWORDS = [
  "Osstel",
  "osstel",
  "Osstel app",
  "Osstel hostel management",
  "Osstel Pakistan",
  "osstel.site",
  "hostel management system",
  "hostel management software",
  "hostel management system Pakistan",
  "hostel software",
  "hostel management app",
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
  "Osstel | Hostel Management System — Rent Made Simple";

export const SEO_DESCRIPTION =
  "Osstel is the all-in-one hostel management system for Pakistan. Manage tenants, rooms, rent collection, payments, and complaints in one platform. Download the Osstel app or request a demo at osstel.site.";

export const SEO_OG_DESCRIPTION =
  "Osstel — hostel management software for owners in Pakistan. Digital tenant management, rent tracking, payment verification, and complaint handling in one app.";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const SOFTWARE_ID = `${SITE_URL}/#software`;

export function buildRootMetadata(): Metadata {
  const ogImage = {
    url: `${SITE_URL}${BRAND.logo}`,
    width: 512,
    height: 512,
    alt: `${SITE_NAME} — Hostel Management System`,
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
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    legalName: SITE_NAME,
    alternateName: [
      "Osstel App",
      "Osstel Hostel Management System",
      "osstel.site",
    ],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}${BRAND.logo}`,
      width: 512,
      height: 512,
    },
    slogan: BRAND.tagline,
    description: SEO_DESCRIPTION,
    email: BRAND.email,
    telephone: BRAND.phoneDisplay,
    knowsAbout: [
      "Hostel management system",
      "Rent collection",
      "Tenant management",
      "Property management software",
    ],
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
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    alternateName: "Osstel Hostel Management System",
    url: SITE_URL,
    description: SEO_DESCRIPTION,
    inLanguage: "en-PK",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function buildSoftwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": SOFTWARE_ID,
    name: SITE_NAME,
    alternateName: ["Osstel Hostel Management System", "Osstel App"],
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Hostel Management Software",
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
    provider: { "@id": ORGANIZATION_ID },
    featureList: [
      "Hostel management system",
      "Tenant management",
      "Room and bed tracking",
      "Rent collection and billing",
      "Payment screenshot verification",
      "Complaint management",
      "Automated rent reminders",
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Hostel owners and property managers",
    },
    areaServed: BRAND.country,
  };
}

export function buildWebPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    name: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: SITE_URL,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}${BRAND.logo}`,
    },
    inLanguage: "en-PK",
  };
}

export function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Osstel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Osstel is a hostel management system that helps property owners in Pakistan manage tenants, rooms, rent collection, payments, and complaints from one digital platform. Visit osstel.site to download the Osstel app or request a demo.",
        },
      },
      {
        "@type": "Question",
        name: "Is Osstel the same as Osstell?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Osstel (osstel.site) is a dedicated hostel management system built for hostel owners in Pakistan. It is a separate product and is not affiliated with any other similarly named website.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Osstel app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Osstel app is a mobile and web application for hostel owners to manage tenants, track rooms and beds, collect rent, verify payment screenshots, and handle complaints — all from one dashboard.",
        },
      },
      {
        "@type": "Question",
        name: "Who is Osstel for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Osstel is built for hostel owners and property managers in Pakistan who want to replace spreadsheets and WhatsApp with a modern hostel management system.",
        },
      },
      {
        "@type": "Question",
        name: "How do I download Osstel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Visit osstel.site and use the Download App or Request Demo buttons on the homepage. The Osstel team will help you get started with the hostel management platform.",
        },
      },
    ],
  };
}

export const JSON_LD_SCHEMAS = [
  buildOrganizationJsonLd(),
  buildWebSiteJsonLd(),
  buildSoftwareApplicationJsonLd(),
  buildWebPageJsonLd(),
  buildFaqJsonLd(),
];
