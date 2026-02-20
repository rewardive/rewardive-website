export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Scan QR Code",
      description: "Scan any UPI QR code at a merchant location.",
    },
    {
      number: "2",
      title: "Get MCC Code",
      description: "Instantly identify the merchant category type.",
    },
    {
      number: "3",
      title: "Discover Offers",
      description: "See which of your cards gives the best rewards for that merchant category.",
    },
    {
      number: "4",
      title: "Maximize Rewards",
      description: "Apply the best offer and save money on every transaction.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-white px-8 py-20 lg:px-[120px]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <span className="text-[13px] font-semibold tracking-wider text-[#3D8A5A]">
            How It Works
          </span>
          <h2 className="max-w-[600px] text-3xl font-bold leading-tight text-[#1A1918] sm:text-[44px]" style={{ letterSpacing: "-1.5px", lineHeight: 1.15 }}>
            Four simple steps to never miss a reward
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1A1918]">
                <span className="text-base font-semibold text-white">{step.number}</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1918]">{step.title}</h3>
              <p className="text-[15px] leading-relaxed text-[#9C9B99]" style={{ lineHeight: 1.6 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
