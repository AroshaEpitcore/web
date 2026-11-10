// Demo booking data for the Public Bookings Calendar.
// In production this is pulled live from MaraeBiz Bookings and shows
// APPROVED / CONFIRMED bookings only (date + time). Here it is mocked
// relative to the current month so the demo always displays data.

export type Booking = {
  id: string;
  date: string; // YYYY-MM-DD
  startTime: string; // HH:mm (24h)
  endTime: string; // HH:mm (24h)
  venue: "Wharenui" | "Wharekai" | "Grounds";
  // Public calendar shows date + time only; label is a neutral booking type.
  label: string;
  status: "confirmed";
};

const VENUES: Booking["venue"][] = ["Wharenui", "Wharekai", "Grounds"];
const LABELS = [
  "Hui / Meeting",
  "Wānanga",
  "Community Event",
  "Mārena / Wedding",
  "Kapa Haka Practice",
  "Private Function",
];

function iso(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate(),
  ).padStart(2, "0")}`;
}

// Deterministic pseudo-random so the demo is stable within a render.
function seeded(n: number): number {
  const x = Math.sin(n) * 10000;
  return x - Math.floor(x);
}

/**
 * Build a stable set of confirmed bookings spread across the previous,
 * current and next month relative to `reference` (defaults to today).
 */
export function getBookings(reference = new Date()): Booking[] {
  const bookings: Booking[] = [];
  const base = new Date(reference.getFullYear(), reference.getMonth(), 1);

  for (let m = -1; m <= 1; m++) {
    const monthStart = new Date(base.getFullYear(), base.getMonth() + m, 1);
    const daysInMonth = new Date(
      monthStart.getFullYear(),
      monthStart.getMonth() + 1,
      0,
    ).getDate();

    // ~8 bookings per month on varied days.
    for (let i = 0; i < 8; i++) {
      const seed = (monthStart.getMonth() + 1) * 100 + i * 7 + m * 13;
      const day = 2 + Math.floor(seeded(seed) * (daysInMonth - 3));
      const date = new Date(monthStart.getFullYear(), monthStart.getMonth(), day);
      const startHour = 9 + Math.floor(seeded(seed + 1) * 8); // 9–16
      const duration = 2 + Math.floor(seeded(seed + 2) * 3); // 2–4h
      const endHour = Math.min(startHour + duration, 21);

      bookings.push({
        id: `${iso(date)}-${i}`,
        date: iso(date),
        startTime: `${String(startHour).padStart(2, "0")}:00`,
        endTime: `${String(endHour).padStart(2, "0")}:00`,
        venue: VENUES[Math.floor(seeded(seed + 3) * VENUES.length)],
        label: LABELS[Math.floor(seeded(seed + 4) * LABELS.length)],
        status: "confirmed",
      });
    }
  }

  return bookings.sort(
    (a, b) =>
      a.date.localeCompare(b.date) || a.startTime.localeCompare(b.startTime),
  );
}

export function formatTimeRange(b: Pick<Booking, "startTime" | "endTime">) {
  const to12 = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    const period = h >= 12 ? "pm" : "am";
    const hr = h % 12 === 0 ? 12 : h % 12;
    return m === 0 ? `${hr}${period}` : `${hr}:${String(m).padStart(2, "0")}${period}`;
  };
  return `${to12(b.startTime)} – ${to12(b.endTime)}`;
}
