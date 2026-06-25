import { Globe, Mail, MessageCircle, Share2 } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { BRAND } from "@/lib/brand";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  company: [
    { label: "Contact", href: "#contact" },
    { label: "Request Demo", href: "#contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

const socials = [
  { icon: Share2, href: "#", label: "Social" },
  { icon: Globe, href: "#", label: "Website" },
  { icon: MessageCircle, href: "#", label: "Chat" },
  { icon: Mail, href: `mailto:${BRAND.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/40 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo size="md" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/60">
              {BRAND.name} is a hostel and hotel management system for{" "}
              {BRAND.country}. {BRAND.tagline} — manage tenants, rooms, rent,
              and payments in one app.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl glass text-foreground/60 transition-colors hover:text-primary-start"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Product</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/60 transition-colors hover:text-primary-start"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/60 transition-colors hover:text-primary-start"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-sm text-foreground/60 transition-colors hover:text-primary-start"
                >
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${BRAND.phone}`}
                  className="text-sm text-foreground/60 transition-colors hover:text-primary-start"
                >
                  {BRAND.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-foreground/5 pt-8 sm:flex-row">
          <p className="text-sm text-foreground/50">
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-sm text-foreground/40">
            Built for hostel owners across {BRAND.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
