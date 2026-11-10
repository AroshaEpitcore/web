import type { Metadata } from "next";
import { Container, SectionHeading, ButtonLink } from "@/components/ui";
import { PageHeader, GlyphIcon } from "@/components/Artwork";
import { services } from "@/data/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Discover the services offered by Te Whare Manaaki Marae — wharenui hire, catering, pōwhiri, wānanga and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Ā mātou ratonga" title="Our Services">
        From gatherings to celebrations, our facilities and people are here to
        support your kaupapa with manaakitanga.
      </PageHeader>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="group flex gap-5 rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-md sm:p-8"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-pounamu text-white">
                  <GlyphIcon name={s.icon} className="h-7 w-7" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-ochre-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-[family-name:var(--font-fraunces)] text-xl font-semibold text-foreground">
                      {s.title}
                    </h2>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA band */}
      <section className="pb-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-ochre px-6 py-14 text-center text-white sm:px-12">
            <div className="texture-weave absolute inset-0" aria-hidden="true" />
            <div className="relative mx-auto max-w-xl">
              <SectionHeading
                title={<span className="text-white">Ready to book a space?</span>}
                description={
                  <span className="text-white/85">
                    Check the calendar for availability, then send us an enquiry.
                    We&apos;ll help you plan a memorable occasion.
                  </span>
                }
                align="center"
              />
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ButtonLink
                  href="/bookings"
                  variant="ghost"
                  className="!text-white !ring-white/50 hover:!bg-white/10"
                >
                  View calendar
                </ButtonLink>
                <ButtonLink href="/enquiry" className="!bg-white !text-ochre hover:!bg-white/90">
                  Booking enquiry
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
