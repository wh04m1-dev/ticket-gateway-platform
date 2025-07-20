"use client";

import React from "react";

interface TicketType {
  id: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
  benefits: string[];
}

export default function TicketList({
  tickets,
  currency,
}: {
  tickets: TicketType[];
  currency: string;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">🎟️ Tickets</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="border rounded-xl p-4 shadow-sm bg-white space-y-2"
          >
            <h3 className="text-lg font-bold">{ticket.name}</h3>
            <p className="text-green-600 font-medium">
              {currency} ${ticket.price}
            </p>
            <p className="text-sm text-gray-500">{ticket.quantity} available</p>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {ticket.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <button className="mt-2 bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
