"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../components/images/logo.png";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5 lg:px-[120px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image src={logo} alt="Rewardive" width={36} height={36} className="h-9 w-9" />
          <span className="text-xl font-semibold tracking-tight text-[#1A1918]">Rewardive</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] text-[#6D6C6A] transition-colors hover:text-[#1A1918]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#download"
            className="rounded-full bg-[#1A1918] px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Download App
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-full p-2 text-[#1A1918] transition-colors hover:bg-[#F5F5F5] md:hidden"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[#F0F0F0] bg-white px-8 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base text-[#6D6C6A] transition-colors hover:text-[#1A1918]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#download"
              className="mt-2 inline-flex w-fit rounded-full bg-[#1A1918] px-6 py-2.5 text-sm font-medium text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download App
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
