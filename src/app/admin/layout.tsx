import React from "react";
import "@/app/globals.css";
import Link from "next/link";

const sidebarItems = [
  { name: "Events", href: "/admin/events" },
  { name: "Orders", href: "/admin/orders" },
  { name: "Settings", href: "/admin/settings" },
  { name: "Tickets", href: "/admin/tickets" },
  { name: "Users", href: "/admin/users" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 h-screen bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 p-4">
        <ul className="space-y-2 font-medium">
          {sidebarItems.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9 1v16M1 9h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ms-3">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 mt-16">{children}</main>
    </div>
  );
}
