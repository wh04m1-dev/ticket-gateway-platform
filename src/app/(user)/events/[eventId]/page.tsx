import EventDetails from "@/components/EventDetails";
import TicketList from "@/components/TicketList";
import OrganizerCard from "@/components/OrganizerCard";

const event = {
  title: "Tech Conference 2025",
  summary: "Join us for a 2-day innovation and technology showcase.",
  datetime: {
    start: "2025-11-01T09:00:00+07:00",
    end: "2025-11-02T17:00:00+07:00",
  },
  venue: {
    name: "Diamond Island Convention Center",
    address: "Koh Pich, Phnom Penh, Cambodia",
  },
  category: {
    name: "Technology",
  },
  is_online: false,
  media: {
    banner: "/images/event-banner.jpg", 
  },
};

const tickets = [
  {
    id: "std",
    name: "Standard Pass",
    price: 25,
    quantity: 500,
    currency: "USD",
    benefits: ["Event Access", "Free Swag", "Lunch Voucher"],
  },
  {
    id: "vip",
    name: "VIP Pass",
    price: 99,
    quantity: 100,
    currency: "USD",
    benefits: ["All Standard Perks", "VIP Lounge", "Meet Speakers"],
  },
];

const organizer = {
  id: "org-009",
  name: "TechWorld Inc.",
  contact_email: "info@techworld.com",
  website: "https://techworld.com",
  logo: "/images/organizer-logo.png", 
};

export default function EventPage() {
  return (
    <main className="max-w-4xl mx-auto py-10 px-4 space-y-8">
      <EventDetails event={event} />
      <TicketList tickets={tickets} currency="USD" />
      <OrganizerCard organizer={organizer} />
    </main>
  );
}
