import Head from "next/head";

type SeoProps = {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
};

export default function Seo({
  title,
  description,
  keywords = "tickets, events, booking, ticket platform",
  image = "/preview.jpg",
  url = "https://ticket-gateway-platform.vercel.app",
}: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
