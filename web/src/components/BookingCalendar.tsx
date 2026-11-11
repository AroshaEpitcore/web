"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getBookings,
  formatTimeRange,
  type Booking,
} from "@/data/bookings";
import { maraebizEnquiryUrl } from "@/data/site";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const venueColor: Record<Booking["venue"], string> = {
  "Full Complex": "bg-pounamu",
  "Conference Centre - Room 2": "bg-[#2f6f8f]",
  Wharekai: "bg-ochre",
  Wharenui: "bg-gold",
};

function toKey(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

export function BookingCalendar() {
  // Defer "today" to the client so the current date is read per-visit
  // (Next.js Cache Components disallows new Date() during prerender).
  const [today, setToday] = useState<Date | null>(null);
  const [view, setView] = useState<{ year: number; month: number } | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date();
    setToday(now);
    setView({ year: now.getFullYear(), month: now.getMonth() });
    setSelected(toKey(now.getFullYear(), now.getMonth(), now.getDate()));
  }, []);

  const allBookings = useMemo(
    () => (today ? getBookings(today) : []),
    [today],
  );

  const byDate = useMemo(() => {
    const map = new Map<string, Booking[]>();
    for (const b of allBookings) {
      const arr = map.get(b.date) ?? [];
      arr.push(b);
      map.set(b.date, arr);
    }
    return map;
  }, [allBookings]);

  // Loading skeleton until the client has read the current date.
  if (!today || !view) {
    return (
      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="h-[420px] animate-pulse rounded-2xl border border-border bg-surface-muted/60" />
        <div className="h-[420px] animate-pulse rounded-2xl border border-border bg-surface-muted/60" />
      </div>
    );
  }

  // Build the calendar grid (Monday-first).
  const firstOfMonth = new Date(view.year, view.month, 1);
  const startOffset = (firstOfMonth.getDay() + 6) % 7; // Mon = 0
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array(startOffset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const todayKey = toKey(today.getFullYear(), today.getMonth(), today.getDate());
  const selectedBookings = selected ? (byDate.get(selected) ?? []) : [];

  const changeMonth = (delta: number) => {
    setView((v) => {
      if (!v) return v;
      const d = new Date(v.year, v.month + delta, 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
      {/* Calendar */}
      <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-semibold text-foreground">
            {MONTHS[view.month]} {view.year}
          </h3>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => changeMonth(-1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-pounamu-050"
              aria-label="Previous month"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              type="button"
              onClick={() => setView({ year: today.getFullYear(), month: today.getMonth() })}
              className="rounded-full px-3 py-1.5 text-xs font-semibold text-pounamu hover:bg-pounamu-050"
            >
              Today
            </button>
            <button
              type="button"
              onClick={() => changeMonth(1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-pounamu-050"
              aria-label="Next month"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-7 gap-1 text-center text-[11px] font-semibold uppercase tracking-wide text-muted">
          {WEEKDAYS.map((d) => (
            <div key={d} className="py-1">{d}</div>
          ))}
        </div>

        <div className="mt-1 grid grid-cols-7 gap-1">
          {cells.map((day, i) => {
            if (day === null) return <div key={i} className="aspect-square" />;
            const key = toKey(view.year, view.month, day);
            const dayBookings = byDate.get(key) ?? [];
            const isToday = key === todayKey;
            const isSelected = key === selected;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setSelected(key)}
                className={`group relative flex aspect-square flex-col items-center justify-start rounded-lg border p-1 text-sm transition-colors sm:p-1.5 ${
                  isSelected
                    ? "border-pounamu bg-pounamu-050"
                    : "border-transparent hover:border-border hover:bg-surface-muted"
                }`}
                aria-pressed={isSelected}
                aria-label={`${day} ${MONTHS[view.month]} — ${dayBookings.length} booking${dayBookings.length === 1 ? "" : "s"}`}
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold sm:h-7 sm:w-7 sm:text-sm ${
                    isToday ? "bg-ochre text-white" : "text-foreground"
                  }`}
                >
                  {day}
                </span>
                {dayBookings.length > 0 ? (
                  <span className="mt-auto flex flex-wrap items-center justify-center gap-0.5 pb-0.5">
                    {dayBookings.slice(0, 3).map((b) => (
                      <span
                        key={b.id}
                        className={`h-1.5 w-1.5 rounded-full ${venueColor[b.venue]}`}
                      />
                    ))}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-4 text-xs text-muted">
          <span className="font-semibold text-foreground">Venues:</span>
          {(Object.keys(venueColor) as Booking["venue"][]).map((v) => (
            <span key={v} className="inline-flex items-center gap-1.5">
              <span className={`h-2.5 w-2.5 rounded-full ${venueColor[v]}`} />
              {v}
            </span>
          ))}
        </div>
      </div>

      {/* Day detail panel */}
      <div className="flex flex-col rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ochre-600">
          Selected day
        </p>
        <h3 className="mt-1 font-[family-name:var(--font-fraunces)] text-xl font-semibold text-foreground">
          {selected
            ? new Date(selected + "T00:00:00").toLocaleDateString("en-NZ", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })
            : "Select a date"}
        </h3>

        <div className="mt-4 flex-1 space-y-3">
          {selectedBookings.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border bg-surface-muted/50 p-6 text-center text-sm text-muted">
              No confirmed bookings on this day.
              <br />
              The marae may be available — send an enquiry below.
            </div>
          ) : (
            selectedBookings.map((b) => (
              <div
                key={b.id}
                className="flex items-start gap-3 rounded-xl border border-border bg-background p-3.5"
              >
                <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${venueColor[b.venue]}`} />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">
                    {formatTimeRange(b)}
                  </p>
                  <p className="text-xs text-muted">
                    {b.venue} · {b.label}
                  </p>
                </div>
                <span className="ml-auto shrink-0 rounded-full bg-pounamu-050 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-pounamu">
                  Confirmed
                </span>
              </div>
            ))
          )}
        </div>

        <a
          href={maraebizEnquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ochre px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ochre-600"
        >
          Make a Booking Enquiry
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
      </div>
    </div>
  );
}
