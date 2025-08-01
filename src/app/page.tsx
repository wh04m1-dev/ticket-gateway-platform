import Head from "next/head";
import TicketCard from "@/components/TicketCard";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="isYe_fh1qMxNsO4WG8XRDNLNz3Rkw8Q3v4PX6hdId_w"
        />
        <title>MyAPI Gateway</title>
        <meta
          name="description"
          content="Ticket Gateway Platform. Discover and book tickets for events with ease. Secure payment and instant QR code delivery."
        />
        <meta name="author" content="Seng Chanthea" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Ticket Gateway" />
        <meta
          property="og:description"
          content="Platform built by Seng Chanthea. Book tickets for concerts, sports, and more."
        />
        <meta
          property="og:url"
          content="https://ticket-gateway-platform.vercel.app"
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <TicketCard
            event="FutureFest Tech Conference 2025"
            eventImage="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiz3HBBlnPp2ZppdEroEpeqTyhkcLn0tXQ9OeYpmwySSU4MPy7zcZeE-_T7QLQ6ONt9-ITC4LL7zl9NpAnbTBEiq5e_5xG3Yeo6diCxziDZ5C88J6vidEy0BlksBCh-E2CXf8qDeJ4tfq_jzgx-cw-vBa1R4E_Zr9MFzemNA5WaibEFXwqSegDOX2IE/s800/m4-world-championship-winning-moment.png"
            logoImage="https://liquipedia.net/commons/images/3/34/ONIC_Esports_2019_allmode.png"
            date="October 12, 2025"
            time="9:00 AM – 5:00 PM"
            venue="Phnom Penh Convention Center, Hall A"
            ticketType="VIP Access"
            seat="Section A – Seat 15"
            price="$75.00 USD"
            ticketId="TG-FF-2025-009827"
            orderId="INV-FF2025-1128"
            purchaseDate="Aug 15, 2025 – 10:24 AM"
            name="Seng Chanthea"
            email="chanthea@example.com"
          />
        </main>
      </div>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Seng Chanthea",
            "jobTitle": "Software Developer",
            "url": "https://ticket-gateway-platform.vercel.app",
            "worksFor": {
              "@type": "Organization",
              "name": "Ticket Gateway Platform"
            },
            "sameAs": [
              "https://github.com/sengchanthea",
              "https://linkedin.com/in/sengchanthea"
            ]
          }
        `}
      </script>
    </>
  );
}
