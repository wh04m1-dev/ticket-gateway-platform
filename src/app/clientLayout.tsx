"use client";

import type React from "react";
import { useEffect } from "react";
import { initAuth } from "@/lib/auth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    initAuth();
  }, []);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
