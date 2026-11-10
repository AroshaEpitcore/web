import type { ComponentProps, ReactNode } from "react";

const control =
  "w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted/70 transition-colors focus:border-pounamu focus:outline-none focus:ring-2 focus:ring-pounamu/20";

export function Field({
  label,
  htmlFor,
  required,
  error,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-foreground"
      >
        {label}
        {required ? <span className="ml-0.5 text-ochre">*</span> : null}
      </label>
      {children}
      {error ? <p className="mt-1 text-xs text-ochre-600">{error}</p> : null}
    </div>
  );
}

export function Input(props: ComponentProps<"input">) {
  return <input {...props} className={`${control} ${props.className ?? ""}`} />;
}

export function Textarea(props: ComponentProps<"textarea">) {
  return (
    <textarea {...props} className={`${control} resize-y ${props.className ?? ""}`} />
  );
}

export function Select(props: ComponentProps<"select">) {
  return <select {...props} className={`${control} ${props.className ?? ""}`} />;
}
