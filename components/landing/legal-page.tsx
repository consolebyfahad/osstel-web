import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { BRAND } from "@/lib/brand";

interface LegalSection {
  title: string;
  paragraphs?: string[];
  list?: string[];
}

interface LegalPageProps {
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export function LegalPage({
  title,
  description,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-foreground/60 transition-colors hover:text-primary-start"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <div className="rounded-3xl border border-border surface p-6 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-start">
              Legal
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-foreground/65">
              {description}
            </p>
            <p className="mt-3 text-sm text-foreground/45">
              Last updated: {lastUpdated}
            </p>

            <div className="mt-10 space-y-10">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-lg font-semibold text-foreground">
                    {section.title}
                  </h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="mt-3 text-sm leading-relaxed text-foreground/70"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/70">
                      {section.list.map((item) => (
                        <li key={item.slice(0, 40)}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-surface-muted/60 p-5">
              <p className="text-sm font-semibold text-foreground">
                Questions about this policy?
              </p>
              <p className="mt-2 text-sm text-foreground/65">
                Contact us at{" "}
                <a
                  href={`mailto:${BRAND.email}`}
                  className="font-medium text-primary-start hover:underline"
                >
                  {BRAND.email}
                </a>{" "}
                or call{" "}
                <a
                  href={`tel:+${BRAND.phone}`}
                  className="font-medium text-primary-start hover:underline"
                >
                  {BRAND.phoneDisplay}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
