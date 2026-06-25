import type { Metadata } from "next";
import { LegalPage } from "@/components/landing/legal-page";
import { BRAND } from "@/lib/brand";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Learn how ${SITE_NAME} collects, uses, and protects your data when you use our hostel and hotel management platform in ${BRAND.country}.`,
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
};

const lastUpdated = "June 25, 2026";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description={`This Privacy Policy explains how ${BRAND.name} ("we", "us", or "our") collects, uses, stores, and protects personal information when you visit our website, use our mobile application, or interact with our hostel and hotel management services.`}
      lastUpdated={lastUpdated}
      sections={[
        {
          title: "1. Information We Collect",
          paragraphs: [
            "We collect information that you provide directly and information generated when you use our platform.",
          ],
          list: [
            "Account details such as name, phone number, email address, and login credentials for hostel owners and managers.",
            "Property information including hostel or hotel name, address, city, room details, and contact phone numbers.",
            "Tenant and resident data such as names, phone numbers, CNIC or ID details, room assignments, check-in dates, and emergency contacts.",
            "Payment-related information including rent amounts, due dates, payment status, and payment proof screenshots uploaded for verification.",
            "Support and contact form submissions, including your name, email, phone, and message content.",
            "Technical data such as device type, app version, IP address, and usage logs to improve security and performance.",
          ],
        },
        {
          title: "2. How We Use Your Information",
          list: [
            "To provide and operate the Osstel hostel and hotel management system.",
            "To manage tenants, rooms, rent collection, complaints, and notifications.",
            "To verify payments and generate reports for property owners.",
            "To respond to support requests, demo inquiries, and account-related questions.",
            "To improve our services, fix bugs, and enhance user experience.",
            "To comply with applicable laws and protect against fraud or misuse.",
          ],
        },
        {
          title: "3. Payment Information",
          paragraphs: [
            "Osstel helps track rent and payment verification. We do not process card payments directly on behalf of tenants. Payment screenshots and transaction references you upload are stored securely for verification by property owners.",
            "If you use third-party payment services such as JazzCash or Easypaisa, those services are governed by their own privacy policies.",
          ],
        },
        {
          title: "4. Data Sharing",
          paragraphs: [
            "We do not sell your personal information. We may share data only in the following circumstances:",
          ],
          list: [
            "With service providers who help us host, secure, or operate our platform, under strict confidentiality obligations.",
            "When required by law, regulation, court order, or government request.",
            "To protect the rights, safety, and security of Osstel, our users, or others.",
            "With your consent or at your direction.",
          ],
        },
        {
          title: "5. Data Retention",
          paragraphs: [
            "We retain personal information for as long as your account is active or as needed to provide our services. You may request deletion of your account data by contacting us, subject to legal or legitimate business retention requirements.",
          ],
        },
        {
          title: "6. Data Security",
          paragraphs: [
            "We implement reasonable technical and organizational measures to protect your information, including encrypted connections, access controls, and secure cloud infrastructure. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
          ],
        },
        {
          title: "7. Your Rights",
          paragraphs: [
            "Depending on applicable law, you may have the right to access, correct, update, or delete your personal information, or to object to certain processing. To exercise these rights, contact us at the email address below.",
          ],
        },
        {
          title: "8. Children's Privacy",
          paragraphs: [
            "Osstel is intended for use by hostel and hotel owners, managers, and adult tenants. We do not knowingly collect personal information from children under 13 without appropriate consent.",
          ],
        },
        {
          title: "9. Changes to This Policy",
          paragraphs: [
            "We may update this Privacy Policy from time to time. When we do, we will revise the \"Last updated\" date at the top of this page. Continued use of our services after changes become effective constitutes acceptance of the updated policy.",
          ],
        },
        {
          title: "10. Contact Us",
          paragraphs: [
            `If you have questions about this Privacy Policy or how we handle your data, please contact ${BRAND.name} at ${BRAND.email} or ${BRAND.phoneDisplay}.`,
          ],
        },
      ]}
    />
  );
}
