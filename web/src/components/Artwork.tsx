import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui";

/**
 * Stylised wharenui + maunga scene. A placeholder for client-supplied
 * photography, drawn as inline SVG so the demo has no external assets.
 */
export function WhareScene({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      role="img"
      aria-label="Illustration of a wharenui with maunga and rising sun"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f3ede1" />
          <stop offset="1" stopColor="#e7f1ec" />
        </linearGradient>
        <linearGradient id="maunga" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a6b4d" />
          <stop offset="1" stopColor="#12503a" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#sky)" />
      {/* sun */}
      <circle cx="310" cy="88" r="46" fill="#c99a3f" opacity="0.25" />
      <circle cx="310" cy="88" r="30" fill="#c99a3f" opacity="0.5" />
      {/* maunga */}
      <path d="M0 210 L90 120 L150 190 L240 100 L320 200 L400 150 L400 300 L0 300 Z" fill="url(#maunga)" />
      {/* grounds */}
      <rect y="210" width="400" height="90" fill="#12503a" />
      {/* wharenui */}
      <g transform="translate(118 150)">
        <polygon points="82,0 164,54 0,54" fill="#8a2f22" />
        <polygon points="82,0 164,54 150,54 82,14 14,54 0,54" fill="#b4402a" />
        <rect x="18" y="54" width="128" height="70" fill="#7a2a1e" />
        <rect x="30" y="54" width="104" height="70" fill="#8a2f22" />
        {/* door */}
        <rect x="68" y="84" width="28" height="40" fill="#2a1712" />
        {/* amo / koruru */}
        <circle cx="82" cy="18" r="6" fill="#c99a3f" />
        <rect x="79" y="54" width="6" height="70" fill="#c99a3f" opacity="0.8" />
      </g>
    </svg>
  );
}

/** Small set of culturally-themed icons for services etc. */
export function GlyphIcon({ name, className = "" }: { name: string; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };
  switch (name) {
    case "wharenui":
      return (<svg {...common}><path d="M3 10l9-6 9 6" /><path d="M5 10v9h14v-9" /><path d="M10 19v-5h4v5" /></svg>);
    case "wharekai":
      return (<svg {...common}><path d="M4 3v7a3 3 0 006 0V3" /><path d="M7 3v18" /><path d="M17 3c-1.5 1-2 3-2 5s.5 3 2 3v10" /></svg>);
    case "powhiri":
      return (<svg {...common}><circle cx="12" cy="7" r="3" /><path d="M5 21c0-4 3-7 7-7s7 3 7 7" /></svg>);
    case "wananga":
      return (<svg {...common}><path d="M3 7l9-4 9 4-9 4-9-4z" /><path d="M7 10v5c0 1 2 2 5 2s5-1 5-2v-5" /></svg>);
    case "grounds":
      return (<svg {...common}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 000 18M12 3a14 14 0 010 18" /></svg>);
    default:
      return (<svg {...common}><path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z" /></svg>);
  }
}

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-pounamu text-white">
      <div className="texture-weave absolute inset-0" aria-hidden="true" />
      <div className="pattern-band absolute inset-x-0 bottom-0 h-1.5" aria-hidden="true" />
      <Container className="relative py-14 sm:py-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            <span className="h-px w-6 bg-gold" />
            {eyebrow}
          </span>
          <h1 className="mt-4 font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-tight sm:text-5xl">
            {title}
          </h1>
          {children ? (
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
              {children}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export { Eyebrow };
