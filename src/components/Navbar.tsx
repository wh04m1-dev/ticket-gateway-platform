"use client";

import { useState } from "react";
import { NavigationMenuDemo } from "@/components/NavigationMenu";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="max-w-7xl mx-auto sticky top-0 z-50 p-4 border-b bg-background">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <h2 className="text-lg font-semibold">Ticket Gateway Platform</h2>
        </div>

        <nav className="hidden md:flex">
          <NavigationMenuDemo />
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="outline" className="hidden sm:inline-flex">
            Register
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-4">
          <NavigationMenuDemo mobile />
          <Button variant="outline" className="w-full">
            Register
          </Button>
        </div>
      )}
    </header>
  );
}
