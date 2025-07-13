import { FrequentlyAskedQuestions } from "@/components/FAQ";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="isYe_fh1qMxNsO4WG8XRDNLNz3Rkw8Q3v4PX6hdId_w" />
        <title>
          Ticket Gateway Platform by Seng Chanthea – Book Events Seamlessly
        </title>
        <meta
          name="description"
          content="Ticket Gateway Platform developed by Seng Chanthea. Discover and book tickets for events with ease. Secure payment and instant QR code delivery."
        />
        <meta name="author" content="Seng Chanthea" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Ticket Gateway by Seng Chanthea" />
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
          <FrequentlyAskedQuestions />
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
