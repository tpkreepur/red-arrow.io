// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      {/* Brand / Logo */}
      <Link href="/">
        <span className="font-bold text-xl">red-arrow.io</span>
      </Link>
      {/* Right side (theme toggle) */}
      <ThemeToggle />
    </nav>
  );
}
