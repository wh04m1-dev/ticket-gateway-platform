"use client";

import Link from "next/link";
import { useState } from "react";
import { NavigationMenuDemo } from "@/components/NavigationMenu";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="max-w-7xl mx-auto sticky top-0 z-50 p-4 bg-background text-foreground dark:shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            variant="ghost"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>

          <Link href="/" passHref>
            <h2 className="text-lg font-semibold">MyAPI Gateway</h2>
          </Link>
        </div>

        <nav className="hidden md:flex">
          <NavigationMenuDemo />
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />

          <Link href="/register" passHref>
            <Button variant="outline" className="hidden sm:inline-flex">
              Register
            </Button>
          </Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-4">
          <NavigationMenuDemo mobile />
          <Link href="/register" passHref>
            <Button variant="outline" className="w-full sm:hidden">
              Register
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
