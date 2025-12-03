"use client";

import { QrCode, ScanLine, Gift, Smartphone, ArrowRight, CheckCircle2, Zap } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Scan QR Code",
      description: "Open the app and scan any UPI QR code at merchant locations using your phone's camera. Instant recognition powered by advanced ML.",
      icon: QrCode,
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-500/10 to-purple-500/10",
      features: ["Instant Recognition", "Works Offline", "Any UPI QR"]
    },
    {
      number: "02",
      title: "Get MCC Code",
      description: "Instantly identify the Merchant Category Code to understand the type of business and discover all applicable offers.",
      icon: ScanLine,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      features: ["500+ Categories", "Auto-Detection", "Real-Time"]
    },
    {
      number: "03",
      title: "Discover Offers",
      description: "Browse personalized cashback offers and discounts that match your cards and the merchant category. Smart recommendations just for you.",
      icon: Gift,
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-500/10 to-teal-500/10",
      features: ["10K+ Offers", "Personalized", "Best Match First"]
    },
    {
      number: "04",
      title: "Maximize Rewards",
      description: "Apply the best offer and complete your payment to earn maximum cashback and rewards on every transaction. Track all your savings.",
      icon: Smartphone,
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-500/10 to-orange-500/10",
      features: ["Max Cashback", "Auto-Apply", "Savings Tracker"]
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/30 to-background dark:via-blue-950/10" />
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm shadow-lg">
            <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400 animate-pulse" />
            <span>Simple & Fast</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            How{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-300">
                Rewardive
              </span>
              {/* Animated underline */}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 5 100 2 150 3C200 4 250 7 298 10" stroke="url(#gradient3)" strokeWidth="3" strokeLinecap="round" className="animate-pulse"/>
                <defs>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            {" "}Works
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Four simple steps to start maximizing your rewards on every purchase
          </p>
        </div>

        {/* Enhanced Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Animated Connection Line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 via-blue-500 via-emerald-500 to-amber-500 opacity-20 hidden md:block rounded-full">
            <div className="absolute inset-0 bg-gradient-to-b from-violet-500 via-blue-500 via-emerald-500 to-amber-500 opacity-50 blur-sm animate-pulse" />
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative flex flex-col md:flex-row gap-8 items-start group"
              >
                {/* Enhanced Number Circle */}
                <div className="relative flex-shrink-0 md:ml-0">
                  <div className={`flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-3xl bg-gradient-to-br ${step.color} text-white shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10 relative`}>
                    <step.icon className="h-10 w-10 md:h-12 md:w-12" />
                  </div>
                  {/* Enhanced Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-500`} />
                  
                  {/* Pulse Ring */}
                  <div className={`absolute inset-0 rounded-3xl border-2 border-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 animate-ping`} style={{ animationDuration: '2s' }} />
                </div>

                {/* Enhanced Content Card */}
                <div className="flex-1 group-hover:-translate-y-2 transition-all duration-500">
                  <div className={`relative overflow-hidden rounded-3xl border-2 border-border/50 bg-gradient-to-br ${step.bgColor} dark:${step.bgColor} backdrop-blur-sm p-8 md:p-10 shadow-lg group-hover:shadow-2xl group-hover:border-border transition-all duration-500`}>
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Large Step Number Background */}
                    <div className="absolute top-4 right-4 text-8xl md:text-9xl font-black text-muted-foreground/5 select-none">
                      {step.number}
                    </div>

                    <div className="relative">
                      {/* Title with Arrow */}
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                          {step.title}
                        </h3>
                        <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:translate-x-2 group-hover:text-foreground transition-all duration-300" />
                      </div>
                      
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Feature Pills */}
                      <div className="flex flex-wrap gap-2">
                        {step.features.map((feature, i) => (
                          <div 
                            key={i} 
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${step.color} text-white text-sm font-medium shadow-lg group-hover:scale-105 transition-transform duration-300`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                          >
                            <CheckCircle2 className="h-4 w-4" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>

                {/* Animated Connector Dot */}
                <div className={`absolute left-[38px] md:left-[46px] top-10 md:top-12 h-3 w-3 rounded-full bg-gradient-to-br ${step.color} hidden md:block shadow-lg animate-pulse`} />
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { label: "Avg. Scan Time", value: "<2s", icon: Zap },
            { label: "MCC Codes", value: "500+", icon: ScanLine },
            { label: "Active Offers", value: "10K+", icon: Gift },
            { label: "Avg. Savings", value: "15%", icon: Smartphone },
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
