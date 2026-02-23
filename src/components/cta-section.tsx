import Link from "next/link";
import Image from "next/image";
import playStoreBadge from "../components/images/play-store-badge.svg";
import appStoreBadge from "../components/images/app-store-badge.svg";

export function CTASection() {
  return (
    <section id="download" className="bg-[#FAFAFA] px-8 py-20 lg:px-[120px]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center">
        <h2 className="max-w-[600px] text-3xl font-bold leading-tight text-[#1A1918] sm:text-[44px]" style={{ letterSpacing: "-1.5px", lineHeight: 1.15 }}>
          Find the best card for every purchase
        </h2>

        <p className="text-lg text-[#9C9B99]">
          Currently in Beta. 100% Free. No Ads.
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
              className="h-[56px] w-auto"
            />
          </Link>
        </div>

        <a href="mailto:rewardive@gmail.com" className="text-sm text-[#9C9B99] hover:text-[#6D6C6A] transition-colors">rewardive@gmail.com</a>
      </div>
    </section>
  );
}
