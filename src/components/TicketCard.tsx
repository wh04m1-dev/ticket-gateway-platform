"use client";

import Image from "next/image";
import { QRCodeCanvas } from "qrcode.react";

interface TicketProps {
  event: string;
  eventImage: string;
  logoImage: string;
  date: string;
  time: string;
  venue: string;
  ticketType: string;
  seat?: string;
  price: string;
  ticketId: string;
  orderId: string;
  purchaseDate: string;
  name: string;
  email: string;
}

export default function TicketCard(props: TicketProps) {
  const {
    event,
    eventImage,
    logoImage,
    date,
    time,
    venue,
    ticketType,
    seat,
    price,
    ticketId,
    orderId,
    purchaseDate,
    name,
    email,
  } = props;

  return (
    <div className="max-w-xl mx-auto border rounded-2xl shadow-lg bg-white text-gray-800 overflow-hidden font-sans">
      <div className="relative w-full h-48">
        <Image
          src={eventImage}
          alt="Event Banner"
          fill
          className="object-cover rounded"
          sizes="100vw"
          priority
        />

        <div className="absolute top-3 left-3 w-16 h-16">
          <Image
            src={logoImage}
            alt="Logo"
            fill
            className="object-contain bg-white p-1 rounded shadow"
          />
        </div>
      </div>

      <div className="p-6">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">Ticket Gateway</h2>
          <p className="text-sm text-gray-500">Official Event Ticket</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="font-semibold">Event:</p>
            <p>{event}</p>
            <p className="font-semibold mt-2">Date & Time:</p>
            <p>
              {date} – {time}
            </p>
            <p className="font-semibold mt-2">Venue:</p>
            <p>{venue}</p>
          </div>

          <div>
            <p className="font-semibold">Ticket Type:</p>
            <p>{ticketType}</p>
            {seat && (
              <>
                <p className="font-semibold mt-2">Seat:</p>
                <p>{seat}</p>
              </>
            )}
            <p className="font-semibold mt-2">Price:</p>
            <p>{price}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
          <div>
            <p className="font-semibold">Ticket ID:</p>
            <p>{ticketId}</p>
            <p className="font-semibold mt-2">Order #:</p>
            <p>{orderId}</p>
            <p className="font-semibold mt-2">Purchased:</p>
            <p>{purchaseDate}</p>
          </div>
          <div className="text-center">
            <QRCodeCanvas value={ticketId} size={100} />
            <QRCodeCanvas
              value={`https://yourdomain.com/ticket/${ticketId}`}
              size={100}
            />
            <p className="text-xs mt-2 text-gray-500">Scan for Entry</p>
          </div>
        </div>

        <div className="mb-4">
          <p className="font-semibold">Ticket Holder:</p>
          <p>{name}</p>
          <p>{email}</p>
        </div>

        <div className="text-sm text-gray-600 border-t pt-4">
          <p>
            <strong>Entry Instructions:</strong> Bring valid photo ID. Entry
            closes at 10:15 AM.
          </p>
          <p className="mt-1">
            <strong>Terms:</strong> Non-refundable after cutoff.
            Non-transferable.
          </p>
        </div>
      </div>
    </div>
  );
}
