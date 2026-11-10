import type { Metadata } from "next";
import { Container, SectionHeading, ButtonLink, Card } from "@/components/ui";
import { PageHeader, WhareScene } from "@/components/Artwork";
import { aboutParagraphs, values, highlights } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Te Whare Manaaki Marae — our history, our values and the manaakitanga at the heart of all we do.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="Ko wai mātou" title="About our Marae">
        A living taonga for our hapū and the wider community — a place of welcome,
        remembrance and celebration.
      </PageHeader>

      {/* Story */}
      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Tō mātou kōrero"
              title="Our story"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              {aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <blockquote className="mt-8 border-l-4 border-ochre pl-5">
              <p className="font-[family-name:var(--font-fraunces)] text-xl italic text-foreground">
                “Ehara taku toa i te toa takitahi, engari he toa takitini.”
              </p>
              <footer className="mt-2 text-sm text-muted">
                My strength is not that of one, but that of many. — Whakataukī
              </footer>
            </blockquote>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <WhareScene className="h-full w-full" />
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-surface-muted py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Ō mātou uara"
            title="The values that guide us"
            description="Everything we do is grounded in tikanga Māori and a deep commitment to our people."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title}>
                <h3 className="font-[family-name:var(--font-fraunces)] text-lg font-semibold text-pounamu">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {v.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.label} className="rounded-2xl border border-border bg-surface p-6 text-center">
                <p className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-ochre">
                  {h.value}
                </p>
                <p className="mt-1 text-sm text-muted">{h.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <SectionHeading
              title="Come and gather with us"
              description="Whether you are planning an event or simply wish to learn more, we would love to hear from you."
              align="center"
              className="mb-8"
            />
            <div className="flex flex-wrap justify-center gap-3">
              <ButtonLink href="/enquiry" variant="secondary">Make a booking enquiry</ButtonLink>
              <ButtonLink href="/contact" variant="ghost">Contact us</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
