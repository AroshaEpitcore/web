export const site = {
  name: "Te Whare Manaaki Marae",
  tagline: "He whare manaaki mō te iwi — a house of care for the people",
  phone: "+64 9 555 0142",
  email: "kaitiaki@temanaaki.example.nz",
  address: "128 Awhina Road, Waimauku, Auckland 0881, Aotearoa New Zealand",
  // demo only — no real maps / backend
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Bookings Calendar", href: "/bookings" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];
