export const site = {
  name: "Te Whare Manaaki Marae",
  tagline: "He whare manaaki mō te iwi — a house of care for the people",
  phone: "+64 9 555 0142",
  email: "kaitiaki@temanaaki.example.nz",
  address: "128 Awhina Road, Waimauku, Auckland 0881, Aotearoa New Zealand",
  // demo only — no real maps / backend
};

// Live MaraeBiz public Booking Enquiry form. All "Booking Enquiry"
// buttons across the site link here.
export const maraebizEnquiryUrl =
  "https://maraebizbookings-staging.azurewebsites.net/00a6bae2-2640-4799-9daa-942785abb80e/Public/BookingEnquiry";

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Bookings Calendar", href: "/bookings" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];
