import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "../components/images/logo.png";

// Custom Bluesky Icon Component
const BlueskyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.002 0C5.45 0 2.799 2.07 1.784 3.78c-.805 1.358-.766 3.064.13 4.355 1.166 1.68 3.192 2.444 4.864 2.017.132-.034.26-.07.386-.109a21 21 0 0 1-.536.744c-1.305 1.686-3.25 2.678-5.242 2.678a.5.5 0 0 0-.276.916c3.104 2.047 6.433 1.963 9.155-.24 2.722 2.203 6.051 2.287 9.155.24a.5.5 0 0 0-.276-.916c-1.992 0-3.937-.992-5.242-2.678a21 21 0 0 1-.536-.744c.127.038.254.075.386.109 1.672.427 3.698-.337 4.864-2.017.896-1.29.935-2.997.13-4.355C13.201 2.07 10.55 0 7.998 0Zm-.002 1.5c1.947 0 4.139 1.649 5.043 3.147.572.947.627 2.136.014 3.058-.9 1.354-2.54 1.947-3.877 1.6a7 7 0 0 1-.53-.146c.32-.452.638-.943.957-1.474.71-1.183 1.445-2.555 2.115-3.923a.5.5 0 1 0-.916-.429c-.654 1.335-1.363 2.661-2.05 3.806-.352.587-.7 1.138-1.036 1.627-.337-.489-.684-1.04-1.036-1.627-.687-1.145-1.396-2.471-2.05-3.806a.5.5 0 1 0-.916.429c.67 1.368 1.405 2.74 2.115 3.923.319.531.637 1.022.957 1.474q-.265.07-.53.146c-1.337.347-2.977-.246-3.877-1.6-.613-.922-.558-2.11.014-3.058C3.861 3.149 6.053 1.5 8 1.5Z"/>
  </svg>
);

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
      { name: "X", icon: Twitter, href: "https://x.com/rewardive" },
      { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/rewardive" },
      { name: "Bluesky", icon: BlueskyIcon, href: "https://bsky.app/profile/rewardive.bsky.social" },
      { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/rewardive.app/" },
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
