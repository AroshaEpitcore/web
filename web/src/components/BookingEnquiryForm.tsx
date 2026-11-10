"use client";

import { useState, type FormEvent } from "react";
import { Field, Input, Textarea, Select } from "@/components/form-fields";
import { Button } from "@/components/ui";

type Errors = Partial<Record<string, string>>;

const eventTypes = [
  "Hui / Meeting",
  "Tangihanga",
  "Wānanga / Education",
  "Mārena / Wedding",
  "Community Event",
  "Kapa Haka",
  "Other",
];

export function BookingEnquiryForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(form: HTMLFormElement): Errors {
    const data = new FormData(form);
    const next: Errors = {};
    if (!String(data.get("name") ?? "").trim()) next.name = "Please enter your name.";
    const email = String(data.get("email") ?? "").trim();
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (!String(data.get("phone") ?? "").trim()) next.phone = "Please enter a contact number.";
    if (!String(data.get("eventType") ?? "")) next.eventType = "Select an event type.";
    if (!String(data.get("date") ?? "")) next.date = "Choose a preferred date.";
    return next;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate(e.currentTarget);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // Demo only: no backend. In production this is posted into the
      // MaraeBiz Booking Enquiry workflow.
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
          Tēnā koe — enquiry received
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted">
          Your booking enquiry has been submitted to our bookings team. We will
          be in touch shortly to confirm availability. (Demo — no data is sent.)
        </p>
        <Button className="mt-6" onClick={() => setSubmitted(false)}>
          Submit another enquiry
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
        <Field label="Organisation / Whānau" htmlFor="org">
          <Input id="org" name="org" placeholder="Optional" />
        </Field>
        <Field label="Email" htmlFor="email" required error={errors.email}>
          <Input id="email" name="email" type="email" placeholder="you@example.com" />
        </Field>
        <Field label="Phone" htmlFor="phone" required error={errors.phone}>
          <Input id="phone" name="phone" type="tel" placeholder="021 234 5678" />
        </Field>
        <Field label="Event type" htmlFor="eventType" required error={errors.eventType}>
          <Select id="eventType" name="eventType" defaultValue="">
            <option value="" disabled>Select…</option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </Select>
        </Field>
        <Field label="Preferred date" htmlFor="date" required error={errors.date}>
          <Input id="date" name="date" type="date" />
        </Field>
        <Field label="Expected number of manuhiri" htmlFor="guests">
          <Input id="guests" name="guests" type="number" min={1} placeholder="e.g. 60" />
        </Field>
        <Field label="Venue preference" htmlFor="venue">
          <Select id="venue" name="venue" defaultValue="">
            <option value="">No preference</option>
            <option>Wharenui</option>
            <option>Wharekai</option>
            <option>Grounds</option>
          </Select>
        </Field>
      </div>

      <Field label="Tell us about your kaupapa" htmlFor="message">
        <Textarea id="message" name="message" rows={4} placeholder="Share any details that will help us support your booking…" />
      </Field>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          Fields marked <span className="text-ochre">*</span> are required.
        </p>
        <Button type="submit" variant="secondary">
          Submit booking enquiry
        </Button>
      </div>
    </form>
  );
}
