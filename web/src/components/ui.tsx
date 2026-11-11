import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ochre-600">
      <span className="h-px w-6 bg-ochre-600" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-4 font-[family-name:var(--font-fraunces)] text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost";

const buttonStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-pounamu text-white hover:bg-pounamu-600 shadow-sm shadow-pounamu/20",
  secondary:
    "bg-ochre text-white hover:bg-ochre-600 shadow-sm shadow-ochre/20",
  ghost:
    "bg-transparent text-pounamu ring-1 ring-inset ring-pounamu/30 hover:bg-pounamu-050",
};

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none";

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant }) {
  return (
    <Link
      {...props}
      className={`${buttonBase} ${buttonStyles[variant]} ${className}`}
    />
  );
}

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"button"> & { variant?: ButtonVariant }) {
  return (
    <button
      {...props}
      className={`${buttonBase} ${buttonStyles[variant]} ${className}`}
    />
  );
}

/** Button that links to an external URL (opens in a new tab by default). */
export function ButtonExternalLink({
  variant = "primary",
  className = "",
  target = "_blank",
  rel = "noopener noreferrer",
  ...props
}: ComponentProps<"a"> & { variant?: ButtonVariant }) {
  return (
    <a
      target={target}
      rel={rel}
      {...props}
      className={`${buttonBase} ${buttonStyles[variant]} ${className}`}
    />
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_0_rgba(0,0,0,0.03)] ${className}`}
    >
      {children}
    </div>
  );
}
