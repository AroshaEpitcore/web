import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHeader } from "@/components/Artwork";
import { maraebizEnquiryUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Booking Enquiry",
  description:
    "Submit a booking enquiry for Te Whare Manaaki Marae via the MaraeBiz booking enquiry form.",
};

const steps = [
  { title: "Complete the form", text: "Share your preferred date, event type and group size." },
  { title: "We check availability", text: "Our bookings team reviews your request against the calendar." },
  { title: "We confirm with you", text: "You'll receive a response to confirm details and next steps." },
];

export default function EnquiryPage() {
  return (
    <>
      <PageHeader eyebrow="Rahui kaupapa" title="Booking Enquiry">
        Tell us about your event and we&apos;ll help you find the right space and
        time. Your enquiry goes straight into our MaraeBiz Bookings workflow.
      </PageHeader>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
          <aside>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-foreground">
              How it works
            </h2>
            <ol className="mt-6 space-y-6">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pounamu text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{s.title}</p>
                    <p className="mt-0.5 text-sm text-muted">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-2xl border border-border bg-surface-muted/60 p-5 text-sm text-muted">
              Prefer to talk? Visit our{" "}
              <a href="/contact" className="font-semibold text-pounamu underline underline-offset-2">
                contact page
              </a>{" "}
              or call our office — we&apos;re happy to help.
            </div>
          </aside>

          {/* Live MaraeBiz booking enquiry form, embedded */}
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-surface-muted/60 px-5 py-3">
              <p className="text-sm font-semibold text-foreground">
                MaraeBiz Booking Enquiry Form
              </p>
              <a
                href={maraebizEnquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-pounamu hover:text-pounamu-600"
              >
                Open in new tab
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 5h5v5M19 5l-8 8M19 13v6H5V5h6" />
                </svg>
              </a>
            </div>
            <iframe
              src={maraebizEnquiryUrl}
              title="MaraeBiz Booking Enquiry Form"
              className="h-[72vh] min-h-[560px] w-full border-0 bg-white"
              loading="lazy"
            />
            <div className="border-t border-border px-5 py-3 text-xs text-muted">
              If the form doesn&apos;t load above, please use the{" "}
              <a
                href={maraebizEnquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-pounamu underline underline-offset-2"
              >
                open in new tab
              </a>{" "}
              link.
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
