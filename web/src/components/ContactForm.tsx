"use client";

import { useState, type FormEvent } from "react";
import { Field, Input, Textarea } from "@/components/form-fields";
import { Button } from "@/components/ui";

type Errors = Partial<Record<string, string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};
    if (!String(data.get("name") ?? "").trim()) next.name = "Please enter your name.";
    const email = String(data.get("email") ?? "").trim();
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (!String(data.get("message") ?? "").trim()) next.message = "Please enter a message.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // Demo only: in production this emails the configured marae address.
      setSubmitted(true);
      e.currentTarget.reset();
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-pounamu/20 bg-pounamu-050 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-pounamu text-white">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
        </div>
        <h3 className="mt-4 font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-foreground">
          Ngā mihi — message sent
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted">
          Thank you for getting in touch. Your message has been sent to our team
          and we will reply as soon as we can. (Demo — no email is sent.)
        </p>
        <Button className="mt-6" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" required error={errors.name}>
          <Input id="name" name="name" placeholder="Your name" />
        </Field>
        <Field label="Email" htmlFor="email" required error={errors.email}>
          <Input id="email" name="email" type="email" placeholder="you@example.com" />
        </Field>
      </div>
      <Field label="Subject" htmlFor="subject">
        <Input id="subject" name="subject" placeholder="What is your enquiry about?" />
      </Field>
      <Field label="Message" htmlFor="message" required error={errors.message}>
        <Textarea id="message" name="message" rows={5} placeholder="How can we help?" />
      </Field>
      <div className="flex justify-end">
        <Button type="submit">Send message</Button>
      </div>
    </form>
  );
}
