import Link from "next/link";
import Image from "next/image";
import logo from "../components/images/logo.png";

const columns = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "How it works", href: "#how-it-works" },
      { name: "Download", href: "#download" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy", href: "/privacy" },
      { name: "Copyright", href: "/copyright" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-white px-8 py-12 lg:px-[120px]">
      <div className="mx-auto max-w-7xl">
        {/* Top */}
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          {/* Brand */}
          <div className="max-w-[300px]">
            <Link href="/" className="mb-3 flex items-center gap-2.5">
              <Image src={logo} alt="Rewardive" width={28} height={28} className="h-7 w-7" />
              <span className="text-lg font-semibold text-[#1A1918]">Rewardive</span>
            </Link>
            <p className="text-sm leading-[1.6] text-[#9C9B99]">
              We collect coupons and offers from across the web and recommend the best card for every purchase.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="mb-4 text-sm font-semibold text-[#1A1918]">{col.title}</h3>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      {"href" in link && link.href ? (
                        <Link
                          href={link.href}
                          className="text-sm text-[#9C9B99] transition-colors hover:text-[#6D6C6A]"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <span
                          aria-disabled="true"
                          className="text-sm text-[#9C9B99] opacity-60"
                        >
                          {link.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-[#F0F0F0]" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-[13px] text-[#9C9B99]">
            &copy; {new Date().getFullYear()} Rewardive. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { name: "X", href: "https://x.com/rewardive" },
              { name: "LinkedIn", href: "https://www.linkedin.com/company/rewardive" },
              { name: "Reddit", href: "https://www.reddit.com/r/rewardive/" },
              { name: "Instagram", href: "https://www.instagram.com/rewardive.app/" },
              { name: "Bluesky", href: "https://bsky.app/profile/rewardive.bsky.social" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium text-[#9C9B99] transition-colors hover:text-[#6D6C6A]"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
