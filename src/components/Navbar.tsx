"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AUTH_CHANGE_EVENT } from "@/lib/auth";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateUserState = () => {};
    updateUserState();

    window.addEventListener(AUTH_CHANGE_EVENT, updateUserState);
    window.addEventListener("focus", updateUserState);

    return () => {
      window.removeEventListener(AUTH_CHANGE_EVENT, updateUserState);
      window.removeEventListener("focus", updateUserState);
    };
  }, []);

  const isActive = (path: string) => pathname === path;

  const getLinkclassNames = (path: string) =>
    isActive(path)
      ? "text-teal-500 font-medium"
      : "text-slate-700 hover:text-teal-500 transition-colors";

  // Toggle mobile menu open state
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header>
      <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Ticket Gateway Platform
            </span>
          </Link>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
            {/* Show search input only on /apidoc */}
            {pathname === "/apidoc" && (
              <form
                className="flex items-center max-w-sm mx-auto"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="text-sm rounded-lg block w-full ps-10 p-2.5"
                    placeholder="Search branch name..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="p-2.5 ms-2 text-sm font-medium rounded-lg border"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </form>
            )}

            {/* Show Login and Sign up only if NOT on /apidoc */}
            {pathname !== "/apidoc" && (
              <>
                <a
                  href="/register"
                  className="font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 bg-teal-600 text-white"
                >
                  Register
                </a>
              </>
            )}

            {/* Hamburger menu button */}
            {pathname !== "/apidoc" && (
              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded={menuOpen}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Menu */}
          {pathname !== "/apidoc" && (
            <div
              className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                menuOpen ? "flex" : "hidden"
              }`}
              id="navbar-cta"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li>
                  <Link
                    href="/"
                    className={getLinkclassNames("/")}
                    aria-current={isActive("/") ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={getLinkclassNames("/about")}
                    aria-current={isActive("/about") ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product"
                    className={getLinkclassNames("/product")}
                    aria-current={isActive("/product") ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  {/* DocsAPI opens in a new tab */}
                  <a
                    href="/apidoc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={getLinkclassNames("/apidoc")}
                    onClick={() => setMenuOpen(false)}
                  >
                    DocsAPI
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
