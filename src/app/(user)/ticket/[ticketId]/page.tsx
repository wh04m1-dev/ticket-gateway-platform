"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

export default function TicketPage() {
  interface Ticket {
    event: string;
    name: string;
    email: string;
    date: string;
    time: string;
    seat: string;
    ticketType: string;
    price: string;
  }
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!ticketId) return;

    axios
      .get(`https://api.yourdomain.com/tickets/${ticketId}`)
      .then((res) => {
        setTicket(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Ticket not found or failed to load.");
        setLoading(false);
      });
  }, [ticketId]);

  if (loading) return <div className="p-4">Loading ticket...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;
  if (!ticket) return <div className="p-4">No ticket data.</div>;

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-2">{ticket.event}</h2>
      <p>
        <strong>Name:</strong> {ticket.name}
      </p>
      <p>
        <strong>Email:</strong> {ticket.email}
      </p>
      <p>
        <strong>Date:</strong> {ticket.date}
      </p>
      <p>
        <strong>Time:</strong> {ticket.time}
      </p>
      <p>
        <strong>Seat:</strong> {ticket.seat}
      </p>
      <p>
        <strong>Type:</strong> {ticket.ticketType}
      </p>
      <p>
        <strong>Price:</strong> {ticket.price}
      </p>
    </div>
  );
}
