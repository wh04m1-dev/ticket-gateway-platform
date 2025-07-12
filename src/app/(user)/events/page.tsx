"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  venue: string;
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    setEvents([
      {
        id: "1",
        title: "Concert A",
        description: "Live Music Event",
        date: "2025-08-01",
        venue: "Stadium",
      },
      {
        id: "2",
        title: "Tech Talk B",
        description: "Developer Conference",
        date: "2025-08-10",
        venue: "Convention Center",
      },
    ]);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      {events.map((event) => (
        <div key={event.id} className="bg-white p-4 shadow rounded mb-4">
          <h2 className="text-xl font-semibold">{event.title}</h2>
          <p className="text-gray-600">{event.description}</p>
          <p className="text-sm text-gray-500">
            {event.date} at {event.venue}
          </p>
          <Link
            href={`/events/${event.id}`}
            className="text-blue-500 underline"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}
