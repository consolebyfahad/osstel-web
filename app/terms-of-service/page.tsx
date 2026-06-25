import type { Metadata } from "next";
import { LegalPage } from "@/components/landing/legal-page";
import { BRAND } from "@/lib/brand";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Read the terms and conditions for using ${SITE_NAME}, the hostel and hotel management system for property owners in ${BRAND.country}.`,
  alternates: {
    canonical: `${SITE_URL}/terms-of-service`,
  },
};

const lastUpdated = "June 25, 2026";

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      description={`These Terms of Service ("Terms") govern your access to and use of the ${BRAND.name} website, mobile application, and related services. By using Osstel, you agree to these Terms.`}
      lastUpdated={lastUpdated}
      sections={[
        {
          title: "1. Acceptance of Terms",
          paragraphs: [
            `By creating an account, downloading our app, or using our website at osstel.site, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, please do not use our services.`,
          ],
        },
        {
          title: "2. Description of Service",
          paragraphs: [
            `${BRAND.name} provides a digital platform for hostel and hotel owners to manage properties, tenants, rooms, rent collection, payment verification, complaints, and related operations. Features may vary by subscription plan and are subject to change as we improve the product.`,
          ],
        },
        {
          title: "3. Eligibility",
          paragraphs: [
            "You must be at least 18 years old and legally able to enter into a binding agreement to use Osstel as a property owner or manager. By adding tenant information, you confirm that you have the legal authority and consent required to collect and manage that data.",
          ],
        },
        {
          title: "4. Account Responsibilities",
          list: [
            "You are responsible for maintaining the confidentiality of your login credentials.",
            "You must provide accurate and up-to-date account and property information.",
            "You are responsible for all activity that occurs under your account.",
            "You must notify us immediately of any unauthorized access or security breach.",
          ],
        },
        {
          title: "5. Acceptable Use",
          paragraphs: ["You agree not to:"],
          list: [
            "Use Osstel for any unlawful, fraudulent, or abusive purpose.",
            "Upload false payment records, misleading tenant data, or harmful content.",
            "Attempt to reverse engineer, disrupt, or gain unauthorized access to our systems.",
            "Use the platform to harass tenants, owners, or other users.",
            "Resell or sublicense the service without our written permission.",
          ],
        },
        {
          title: "6. Subscription & Payments",
          paragraphs: [
            "Some Osstel features may require a paid subscription. Pricing, billing cycles, and plan limits are displayed on our website or within the app. Fees are non-refundable except where required by law or explicitly stated otherwise.",
            "We may change pricing or plan features with reasonable notice. Continued use after a pricing change constitutes acceptance of the new terms.",
          ],
        },
        {
          title: "7. Tenant & Property Data",
          paragraphs: [
            "As a property owner or manager, you are responsible for the accuracy of tenant and property data you enter into Osstel. You must comply with applicable privacy and data protection laws when collecting and storing tenant information.",
            "Osstel acts as a platform provider and is not a party to rental agreements between owners and tenants.",
          ],
        },
        {
          title: "8. Intellectual Property",
          paragraphs: [
            `All content, software, branding, logos, and materials provided by ${BRAND.name} are owned by us or our licensors. You may not copy, modify, distribute, or create derivative works without our prior written consent.`,
          ],
        },
        {
          title: "9. Disclaimer of Warranties",
          paragraphs: [
            'Osstel is provided on an "as is" and "as available" basis. We do not guarantee uninterrupted or error-free service. We disclaim all warranties to the fullest extent permitted by law, including implied warranties of merchantability and fitness for a particular purpose.',
          ],
        },
        {
          title: "10. Limitation of Liability",
          paragraphs: [
            "To the maximum extent permitted by law, Osstel and its team shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, lost rent, or data loss, arising from your use of the service.",
            "Our total liability for any claim related to the service shall not exceed the amount you paid us in the twelve (12) months preceding the claim, or zero if you use a free plan.",
          ],
        },
        {
          title: "11. Termination",
          paragraphs: [
            "We may suspend or terminate your account if you violate these Terms or misuse the platform. You may stop using Osstel at any time. Upon termination, your right to access the service will end, though certain provisions of these Terms will survive.",
          ],
        },
        {
          title: "12. Governing Law",
          paragraphs: [
            `These Terms are governed by the laws of ${BRAND.country}. Any disputes shall be subject to the exclusive jurisdiction of the courts in ${BRAND.country}, unless otherwise required by applicable law.`,
          ],
        },
        {
          title: "13. Changes to Terms",
          paragraphs: [
            "We may update these Terms from time to time. Material changes will be posted on this page with an updated date. Your continued use of Osstel after changes take effect constitutes acceptance of the revised Terms.",
          ],
        },
        {
          title: "14. Contact",
          paragraphs: [
            `For questions about these Terms, contact ${BRAND.name} at ${BRAND.email} or ${BRAND.phoneDisplay}.`,
          ],
        },
      ]}
    />
  );
}
