export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        aria-hidden="true"
        className="h-9 w-9 shrink-0"
        fill="none"
      >
        <circle cx="20" cy="20" r="19" className="fill-pounamu" />
        {/* stylised koru */}
        <path
          d="M28 13c-7-2-15 2-15 10 0 5 4 8 8 8 3.3 0 6-2.5 6-5.6 0-2.6-2-4.4-4.3-4.4-1.9 0-3.3 1.3-3.3 3 0 1.3 1 2.3 2.2 2.3"
          stroke="#f3ede1"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-[family-name:var(--font-fraunces)] text-[15px] font-semibold tracking-tight text-foreground">
          Demo
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ochre-600">
          Marae
        </span>
      </span>
    </span>
  );
}
