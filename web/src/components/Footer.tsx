import Link from "next/link";
import { Logo } from "@/components/Logo";
import { nav, site, maraebizEnquiryUrl } from "@/data/site";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface-muted">
      <div className="pattern-band h-1.5 w-full" aria-hidden="true" />
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {site.tagline}. Nau mai, haere mai — welcome to our marae.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Explore
            </h3>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-pounamu"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={maraebizEnquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-pounamu"
                >
                  Booking Enquiry
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>{site.address}</li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-pounamu">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-pounamu">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <p>© {YEAR} {site.name}. All rights reserved.</p>
          <p>Demo website · Booking data integrates with MaraeBiz Bookings.</p>
        </div>
      </div>
    </footer>
  );
}
