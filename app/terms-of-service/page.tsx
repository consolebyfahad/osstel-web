import type { Metadata } from "next";
import { LegalPage } from "@/components/landing/legal-page";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { TERMS_OF_SERVICE, toLegalPageSections } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Read the terms and conditions for using ${SITE_NAME}, the hostel management system for property owners.`,
  alternates: {
    canonical: `${SITE_URL}/terms-of-service`,
  },
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title={TERMS_OF_SERVICE.title}
      description={TERMS_OF_SERVICE.intro}
      lastUpdated={TERMS_OF_SERVICE.lastUpdated}
      sections={toLegalPageSections(TERMS_OF_SERVICE.sections)}
    />
  );
}
