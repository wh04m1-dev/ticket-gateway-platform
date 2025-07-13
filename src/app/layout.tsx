import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ticket Gateway Platform",
  description: "Book tickets, manage events, and more on our platform.",
  keywords: ["tickets", "events", "booking", "ticket gateway"],
  openGraph: {
    title: "Ticket Gateway Platform",
    description: "Easily book your event tickets.",
    url: "https://ticket-gateway-platform.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Seo
            title="Buy Tickets Online | Ticket Gateway"
            description="Buy event tickets online easily. Fast, secure, and trusted ticket booking platform."
            url="https://ticket-gateway-platform.vercel.app"
          />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
