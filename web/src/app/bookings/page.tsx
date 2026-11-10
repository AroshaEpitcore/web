import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHeader } from "@/components/Artwork";
import { BookingCalendar } from "@/components/BookingCalendar";

export const metadata: Metadata = {
  title: "Bookings Calendar",
  description:
    "View confirmed bookings for Te Whare Manaaki Marae. Check availability and make a booking enquiry.",
};

export default function BookingsPage() {
  return (
    <>
      <PageHeader eyebrow="Te maramataka" title="Bookings Calendar">
        Our public calendar shows approved and confirmed bookings only — date and
        time. Data updates automatically from MaraeBiz Bookings as statuses
        change. Select a day to see its bookings.
      </PageHeader>

      <section className="py-12 sm:py-16">
        <Container>
          <BookingCalendar />

          <div className="mt-8 rounded-2xl border border-border bg-surface-muted/60 p-5 text-sm text-muted">
            <p>
              <span className="font-semibold text-foreground">Note:</span> This
              calendar displays confirmed bookings for information only and does
              not reveal private booking details. To check availability for a
              specific date, please{" "}
              <a href="/enquiry" className="font-semibold text-pounamu underline underline-offset-2">
                submit a booking enquiry
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
