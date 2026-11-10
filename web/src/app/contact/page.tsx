import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHeader } from "@/components/Artwork";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Te Whare Manaaki Marae. Send us a general enquiry or find our contact details.",
};

function ContactRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pounamu-050 text-pounamu">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</p>
        <div className="mt-0.5 text-sm font-medium text-foreground">{children}</div>
      </div>
    </div>
  );
}

const iconCls = "h-5 w-5";
const iconProps = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24", className: iconCls };

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Whakapā mai" title="Contact Us">
        Have a question? Send us a message and our team will get back to you. For
        booking requests, please use the booking enquiry form.
      </PageHeader>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          <aside className="space-y-8">
            <div className="space-y-6">
              <ContactRow icon={<svg {...iconProps}><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>} label="Visit us">
                {site.address}
              </ContactRow>
              <ContactRow icon={<svg {...iconProps}><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.2a2 2 0 012.1-.5c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z" /></svg>} label="Call">
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-pounamu">{site.phone}</a>
              </ContactRow>
              <ContactRow icon={<svg {...iconProps}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>} label="Email">
                <a href={`mailto:${site.email}`} className="hover:text-pounamu">{site.email}</a>
              </ContactRow>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <div className="flex h-44 items-center justify-center bg-pounamu-050 text-sm text-pounamu">
                <span className="inline-flex items-center gap-2">
                  <svg {...iconProps}><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  Map available on request
                </span>
              </div>
            </div>
          </aside>

          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-foreground">
              Send us a message
            </h2>
            <p className="mt-1 text-sm text-muted">
              General enquiries are sent to our marae office.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
