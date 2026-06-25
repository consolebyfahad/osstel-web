"use client";

import { motion } from "framer-motion";
import { AlertCircle, MessageCircle, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";
import {
  ContactApiError,
  submitContactInquiry,
} from "@/lib/api/contact";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await submitContactInquiry({
        name: String(formData.get("name") ?? "").trim(),
        phone: String(formData.get("phone") ?? "").trim(),
        email: String(formData.get("email") ?? "").trim(),
        message: String(formData.get("message") ?? "").trim(),
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      if (err instanceof ContactApiError) {
        setError(err.errors?.[0] ?? err.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <AnimatedSection>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-start">
              Contact
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s Talk About Your Hostel
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/60">
              Have questions? Want a personalized demo? Reach out and our team
              will get back to you within 24 hours.
            </p>

            <div className="mt-8 space-y-4">
              <div className="glass rounded-2xl p-5">
                <p className="text-sm font-semibold text-foreground">Email</p>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="mt-1 text-sm text-primary-start hover:underline"
                >
                  {BRAND.email}
                </a>
              </div>
              <div className="glass rounded-2xl p-5">
                <p className="text-sm font-semibold text-foreground">
                  Phone / WhatsApp
                </p>
                <a
                  href={`tel:+${BRAND.phone}`}
                  className="mt-1 text-sm text-primary-start hover:underline"
                >
                  {BRAND.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="mt-8">
              <Button
                variant="whatsapp"
                href={BRAND.whatsappUrl}
                className="w-full sm:w-auto"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <motion.form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-6 sm:p-8 glow-primary"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl chip-accent">
                    <Send size={28} className="text-accent-foreground dark:text-accent" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-foreground">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-sm text-foreground/60">
                    We&apos;ll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-lg font-semibold text-foreground">
                    Send us a message
                  </h3>
                  <div className="mt-6 space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-foreground/70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        disabled={isSubmitting}
                        placeholder="Your full name"
                        className="input-field w-full rounded-xl px-4 py-3 text-sm disabled:opacity-60"
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-1.5 block text-sm font-medium text-foreground/70"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          disabled={isSubmitting}
                          placeholder="+92 319 1828420"
                          className="input-field w-full rounded-xl px-4 py-3 text-sm disabled:opacity-60"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1.5 block text-sm font-medium text-foreground/70"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          disabled={isSubmitting}
                          placeholder="you@example.com"
                          className="input-field w-full rounded-xl px-4 py-3 text-sm disabled:opacity-60"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-medium text-foreground/70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        disabled={isSubmitting}
                        placeholder="Tell us about your hostel..."
                        className="input-field w-full resize-none rounded-xl px-4 py-3 text-sm disabled:opacity-60"
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="mt-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      <AlertCircle size={16} className="mt-0.5 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="mt-6">
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      <Send size={18} />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </>
              )}
            </motion.form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
