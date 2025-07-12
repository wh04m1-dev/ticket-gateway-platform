import type React from "react";
import type { Metadata } from "next";

import "./globals.css";

import ClientLayout from "./clientLayout";

export const metadata: Metadata = {
  title: "Ticket Gateway | Cambodia's No.1 Online Ticket Gateway Platform",
  description: "Gateway-based ticket booking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
