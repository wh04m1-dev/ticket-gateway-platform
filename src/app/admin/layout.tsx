import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Admin Layout Header</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
