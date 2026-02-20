import { Building2, Ticket, Bell, Search } from "lucide-react";

export function FeaturesGrid() {
  const features = [
    {
      icon: Building2,
      title: "Bank-Specific Offers",
      description: "Browse collected offers and coupons from HDFC, ICICI, SBI, Axis, and 50+ more banks.",
    },
    {
      icon: Ticket,
      title: "Vouchers & Discounts",
      description: "Browse 1,000+ active offers, vouchers, and exclusive card deals in real-time.",
    },
    {
      icon: Bell,
      title: "Real-Time Updates",
      description: "Stay updated when we find new coupons and offers relevant to your card type.",
    },
    {
      icon: Search,
      title: "AI-Powered Search",
      description: "Search and find the best card to use for any purchase based on publicly available offers.",
    },
  ];

  return (
    <section id="features" className="bg-white px-8 py-20 lg:px-[120px]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <span className="text-[13px] font-semibold tracking-wider text-[var(--accent)]">
            Features
          </span>
          <h2 className="max-w-[700px] text-3xl font-bold leading-tight leading-[1.15] text-[var(--foreground)] sm:text-[44px]" style={{ letterSpacing: "-1.5px" }}>
            Everything you need to maximize your rewards
          </h2>
          <p className="text-lg text-[var(--muted-foreground)]">
            One app to discover coupons and find the right card for every purchase.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col gap-5 rounded-2xl bg-[var(--surface)] p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--border)]">
                <feature.icon className="h-6 w-6 text-[var(--muted-foreground)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">{feature.title}</h3>
              <p className="text-[15px] leading-relaxed leading-[1.6] text-[var(--muted-foreground)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
