"use client";

import React from "react";
import Image from "next/image";

interface Organizer {
  id: string;
  name: string;
  contact_email: string;
  website: string;
  logo: string;
}

export default function OrganizerCard({ organizer }: { organizer: Organizer }) {
  return (
    <div className="mt-8 p-4 border rounded-2xl flex items-center space-x-4 shadow-md bg-white">
      <Image
        src={organizer.logo}
        alt={organizer.name}
        width={64}
        height={64}
        className="rounded-full"
      />
      <div>
        <h4 className="text-lg font-semibold">{organizer.name}</h4>
        <p className="text-sm text-gray-600">{organizer.contact_email}</p>
        <a
          href={organizer.website}
          target="_blank"
          className="text-blue-600 hover:underline text-sm"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
}
