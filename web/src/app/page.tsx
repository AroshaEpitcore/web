import Link from "next/link";
import { Container, SectionHeading, ButtonLink, Card } from "@/components/ui";
import { WhareScene, GlyphIcon } from "@/components/Artwork";
import { services, highlights, values } from "@/data/content";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-pounamu text-white">
        <div className="texture-weave absolute inset-0" aria-hidden="true" />
        <Container className="relative grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <span className="h-px w-6 bg-gold" />
              Nau mai, haere mai
            </span>
            <h1 className="mt-5 font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              A place of gathering, manaakitanga &amp; connection
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/85">
              {site.tagline}. Welcome to {site.name} — the heart of our community,
              where whānau come together to celebrate, learn and remember.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/bookings" variant="secondary">
                View Bookings Calendar
              </ButtonLink>
              <ButtonLink
                href="/enquiry"
                variant="ghost"
                className="!text-white !ring-white/40 hover:!bg-white/10"
              >
                Make an Enquiry
              </ButtonLink>
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-black/30">
              <WhareScene className="h-full w-full" />
            </div>
          </div>
        </Container>
        <div className="pattern-band h-1.5 w-full" aria-hidden="true" />
      </section>

      {/* Highlights */}
      <section className="border-b border-border bg-surface">
        <Container className="grid grid-cols-2 gap-6 py-10 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="text-center">
              <p className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-pounamu sm:text-4xl">
                {h.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-muted sm:text-sm">
                {h.label}
              </p>
            </div>
          ))}
        </Container>
      </section>

      {/* Welcome / intro */}
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
            <div className="space-y-4">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-pounamu-050">
                <WhareScene className="h-full w-full object-cover" />
              </div>
              <div className="rounded-2xl bg-ochre p-5 text-white">
                <p className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold">Aroha</p>
                <p className="mt-1 text-sm text-white/85">Offered to all who enter</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl bg-pounamu p-5 text-white">
                <p className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold">Manaaki</p>
                <p className="mt-1 text-sm text-white/85">Hospitality is our tikanga</p>
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-surface-muted">
                <WhareScene className="h-full w-full" />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Ko wai mātou — who we are"
              title="A living taonga for our hapū and community"
              description="For over a century our marae has stood as a place of welcome and remembrance. Our carved wharenui and the warmth of our wharekai hold the stories of our tūpuna and the manaakitanga we extend to every manuhiri."
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-ochre" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{v.title}</p>
                    <p className="text-sm text-muted">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <ButtonLink href="/about" variant="ghost" className="mt-8">
              Read our story
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Services preview */}
      <section className="bg-surface-muted py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="He aha ā mātou mahi"
            title="How we can support your kaupapa"
            description="From intimate hui to significant celebrations, our facilities and people are here to help."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <Card key={s.title} className="transition-shadow hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pounamu-050 text-pounamu">
                  <GlyphIcon name={s.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-fraunces)] text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/services">Explore all services</ButtonLink>
          </div>
        </Container>
      </section>

      {/* Calendar CTA */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-pounamu px-6 py-14 text-center text-white sm:px-12">
            <div className="texture-weave absolute inset-0" aria-hidden="true" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold sm:text-4xl">
                See when the marae is booked
              </h2>
              <p className="mt-4 text-white/85">
                Our public calendar shows confirmed bookings in real time,
                integrated with MaraeBiz Bookings. Check availability, then send
                us your enquiry.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ButtonLink href="/bookings" variant="secondary">
                  Open the calendar
                </ButtonLink>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/40 transition-colors hover:bg-white/10"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
