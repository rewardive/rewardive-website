import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "../components/images/logo.png";

export function Footer() {
  const navigation = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "How it works", href: "#how-it-works" },
      { name: "Download", href: "#download" },
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Contact", href: "#contact" },
      { name: "Careers", href: "#careers" },
    ],
    legal: [
      { name: "Privacy", href: "#privacy" },
      { name: "Terms", href: "#terms" },
      { name: "Security", href: "#security" },
      { name: "Cookies", href: "#cookies" },
    ],
    social: [
      { name: "Facebook", icon: Facebook, href: "#" },
      { name: "Twitter", icon: Twitter, href: "#" },
      { name: "LinkedIn", icon: Linkedin, href: "#" },
      { name: "Instagram", icon: Instagram, href: "#" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300 dark:bg-background dark:text-muted-foreground border-t dark:border-border">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src={logo} alt="Rewardive" width={32} height={32} className="h-8 w-auto invert dark:invert-0" />
              <span className="text-xl font-bold text-white dark:text-foreground">Rewardive</span>
            </Link>
            <p className="text-sm text-gray-400 dark:text-muted-foreground mb-6">
              Maximize your credit card rewards and cashback. Scan UPI QR codes and find the best offers instantly.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white dark:text-muted-foreground dark:hover:text-foreground transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white dark:text-foreground">Product</h3>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-white dark:hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white dark:text-foreground">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-white dark:hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white dark:text-foreground">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-white dark:hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 dark:border-border pt-8">
          <p className="text-center text-sm text-gray-400 dark:text-muted-foreground">
            © {new Date().getFullYear()} Rewardive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
