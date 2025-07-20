"use client";

import React from "react";
import Image from "next/image";
import { format, parseISO } from "date-fns";

interface EventProps {
  event: {
    title: string;
    summary: string;
    datetime: { start: string; end: string };
    venue: { name: string; address: string };
    category: { name: string };
    is_online: boolean;
    media: { banner: string };
  };
}

export default function EventDetails({
  event,
}: {
  event: EventProps["event"];
}) {
  const start = format(parseISO(event.datetime.start), "MMM d, yyyy h:mm a");
  const end = format(parseISO(event.datetime.end), "MMM d, yyyy h:mm a");

  return (
    <div className="space-y-4">
      <Image
        src={event.media.banner}
        alt={event.title}
        width={1200}
        height={500}
        className="rounded-2xl shadow-lg"
      />
      <h1 className="text-3xl font-bold">{event.title}</h1>
      <p className="text-gray-600">{event.summary}</p>
      <div className="text-sm text-gray-500">
        <p>
          📅 <span className="font-medium">From:</span> {start} –{" "}
          <span className="font-medium">To:</span> {end}
        </p>
        <p>
          📍 <span className="font-medium">Location:</span>{" "}
          {event.is_online
            ? "Online"
            : `${event.venue.name}, ${event.venue.address}`}
        </p>
        <p>🏷️ Category: {event.category.name}</p>
      </div>
    </div>
  );
}
