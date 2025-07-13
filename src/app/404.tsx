import Link from "next/link";

export default function Custom404() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="text-blue-600 underline mt-4 inline-block">
        Go Home
      </Link>
    </div>
  );
}
