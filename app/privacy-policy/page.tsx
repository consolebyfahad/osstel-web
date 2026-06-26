import type { Metadata } from "next";
import { LegalPage } from "@/components/landing/legal-page";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { PRIVACY_POLICY, toLegalPageSections } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Learn how ${SITE_NAME} collects, uses, and protects your data when you use our hostel management platform.`,
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title={PRIVACY_POLICY.title}
      description={PRIVACY_POLICY.intro}
      lastUpdated={PRIVACY_POLICY.lastUpdated}
      sections={toLegalPageSections(PRIVACY_POLICY.sections)}
    />
  );
}
