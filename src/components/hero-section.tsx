import Link from "next/link";
import Image from "next/image";
import playStoreBadge from "./images/play-store-badge.svg";
import appStoreBadge from "./images/app-store-badge.svg";

export function HeroSection() {
  return (
    <section className="bg-white px-4 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-32 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-[#F5F5F5] px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-[#3D8A5A]" />
          <span className="text-[13px] font-medium text-[#6D6C6A]">
            Now in Beta on Android &amp; iOS
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-[900px] text-5xl font-bold leading-[1.05] tracking-tight text-[#1A1918] sm:text-7xl" style={{ letterSpacing: "-2px" }}>
          Maximize Your<br />Card Benefits
        </h1>

        {/* Description */}
        <p className="max-w-[640px] text-lg leading-relaxed text-[#6D6C6A] sm:text-xl" style={{ lineHeight: 1.6 }}>
          Find the best card to use for every purchase. We collect coupons
          and offers from across the web so you never miss a deal.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="https://play.google.com/store/apps/details?id=app.rewardive"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:opacity-90"
          >
            <Image
              src={playStoreBadge}
              alt="Get it on Google Play"
              width={200}
              height={60}
              sizes="(max-width: 768px) 164px, 200px"
              priority={true}
              className="h-[56px] w-auto"
            />
          </Link>
          <Link
            href="https://apps.apple.com/us/app/rewardive/id6756065738"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:opacity-90"
          >
            <Image
              src={appStoreBadge}
              alt="Download on the App Store"
              width={200}
              height={60}
              sizes="(max-width: 768px) 164px, 200px"
              priority={true}
              className="h-[56px] w-auto"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
