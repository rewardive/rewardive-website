export function StatsBar() {
  const stats = [
    { value: "500+", label: "Spending Categories" },
    { value: "10K+", label: "Active Deals" },
    { value: "50+", label: "Banks Tracked" },
    { value: "100%", label: "Free & No Ads" },
  ];

  return (
    <section className="bg-white px-8 py-10 lg:px-[120px]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-0">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-[#1A1918] sm:text-[28px]" style={{ letterSpacing: "-1px" }}>
              {stat.value}
            </span>
            <span className="text-sm text-[#9C9B99]">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
