"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { useState } from "react";
import logo from '../components/images/logo.png'
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 20);
    });
  }

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Download", href: "#download" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav 
        className={`
          flex items-center justify-between px-6 py-3 rounded-xl transition-all duration-300
          ${scrolled || mobileMenuOpen 
            ? "bg-background/80 backdrop-blur-lg border shadow-lg w-full max-w-5xl" 
            : "bg-transparent w-full max-w-7xl border-transparent"
          }
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-foreground">Rewardive</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          <div className="flex items-center space-x-1 rounded-xl bg-secondary/50 p-1 border border-border/50">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:bg-background rounded-lg"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center space-x-4 md:flex">
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground p-2 rounded-full hover:bg-muted transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 p-4 rounded-2xl bg-background/95 backdrop-blur-xl border shadow-2xl md:hidden flex flex-col space-y-4 animate-in slide-in-from-top-5 fade-in duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-foreground p-2 hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

        </div>
      )}
    </div>
  );
}
