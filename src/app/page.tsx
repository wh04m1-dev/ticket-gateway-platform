import { FrequentlyAskedQuestions } from "@/components/FAQ";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ticket Gateway Platform - Book Events Seamlessly</title>
        <meta
          name="description"
          content="Easily discover and book tickets for events. Secure payment and instant QR code delivery."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Ticket Gateway Platform" />
        <meta
          property="og:description"
          content="Find and book tickets for concerts, sports, and more."
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
    </>
  );
}
