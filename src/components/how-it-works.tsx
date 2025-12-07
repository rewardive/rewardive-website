"use client";

import { QrCode, ScanLine, Gift, Smartphone, Zap } from "lucide-react";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Scan QR Code",
      description: "Open the app and scan any UPI QR code at merchant locations using your phone's camera.",
      icon: QrCode,
    },
    {
      number: "02",
      title: "Get MCC Code",
      description: "Instantly identify the Merchant Category Code to understand the type of business and discover all applicable offers.",
      icon: ScanLine,
    },
    {
      number: "03",
      title: "Discover Offers",
      description: "Browse personalized cashback offers and discounts that match your cards and the merchant category.",
      icon: Gift,
    },
    {
      number: "04",
      title: "Maximize Rewards",
      description: "Apply the best offer and complete your payment to earn maximum cashback and rewards on every transaction.",
      icon: Smartphone,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/20 bg-secondary/30 px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-violet-600 dark:text-violet-400" />
            <AnimatedGradientText className="p-0 text-sm font-medium">
              Simple & Fast
            </AnimatedGradientText>
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            How{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 dark:from-violet-400 dark:via-purple-400 dark:to-cyan-300">
                Rewardive
              </span>
              {/* Animated underline */}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 5 100 2 150 3C200 4 250 7 298 10" stroke="url(#gradient3)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#A855F7" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            {" "}Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Four simple steps to start maximizing your rewards on every purchase
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 items-start">
              {/* Icon */}
              <div className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 dark:from-violet-500 dark:to-purple-500 shadow-lg">
                <step.icon className="h-8 w-8 text-white" />
              </div>
              
              {/* Content */}
              <div className="flex-1 pt-1">
                {/* Step Number */}
                <div className="mb-2 text-sm font-semibold text-violet-600 dark:text-violet-400">
                  Step {step.number}
                </div>
                
                {/* Title */}
                <h3 className="mb-2 text-2xl font-bold text-foreground">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
