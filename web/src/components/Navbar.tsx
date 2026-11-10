"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/data/site";
import { Logo } from "@/components/Logo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Te Whare Manaaki Marae — home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-pounamu-050 text-pounamu"
                  : "text-foreground/80 hover:text-pounamu"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/enquiry"
            className="ml-2 inline-flex items-center rounded-full bg-ochre px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-ochre-600"
          >
            Booking Enquiry
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <div className="space-y-1 px-5 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-lg px-3 py-2.5 text-base font-medium ${
                  isActive(item.href)
                    ? "bg-pounamu-050 text-pounamu"
                    : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/enquiry"
              className="mt-2 block rounded-lg bg-ochre px-3 py-3 text-center text-base font-semibold text-white"
            >
              Booking Enquiry
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
