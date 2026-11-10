import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHeader } from "@/components/Artwork";
import { BookingEnquiryForm } from "@/components/BookingEnquiryForm";

export const metadata: Metadata = {
  title: "Booking Enquiry",
  description:
    "Submit a booking enquiry for Te Whare Manaaki Marae. Tell us about your kaupapa and we'll be in touch.",
};

const steps = [
  { title: "Submit your enquiry", text: "Share your preferred date, event type and group size." },
  { title: "We check availability", text: "Our bookings team reviews your request against the calendar." },
  { title: "We confirm with you", text: "You'll receive a response to confirm details and next steps." },
];

export default function EnquiryPage() {
  return (
    <>
      <PageHeader eyebrow="Rahui kaupapa" title="Booking Enquiry">
        Tell us about your event and we&apos;ll help you find the right space and
        time. Enquiries are passed into our MaraeBiz Booking workflow.
      </PageHeader>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
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

          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
            <BookingEnquiryForm />
          </div>
        </Container>
      </section>
    </>
  );
}
