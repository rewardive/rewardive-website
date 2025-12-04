"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: 29,
      description: "Perfect for freelancers who want full control over their personal finances.",
      features: [
        "Track income & expenses",
        "Connect up to 2 accounts",
        "Monthly reports",
        "Smart alerts",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: 49,
      description: "Advanced tools to manage your money smarter and unlock powerful insights.",
      features: [
        "Unlimited accounts",
        "AI spending insights",
        "Custom alerts",
        "Advanced reporting",
      ],
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="bg-gray-50 dark:bg-muted/50 py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
            Pricing
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Simple plans.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Straightforward pricing with no hidden costs. Everything you need to manage your money better.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-lg bg-gray-200 dark:bg-muted p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`rounded-md px-6 py-2 text-sm font-medium transition-colors ${
                !isYearly ? "bg-white dark:bg-background text-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`rounded-md px-6 py-2 text-sm font-medium transition-colors ${
                isYearly ? "bg-white dark:bg-background text-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "border-2 border-blue-500 shadow-xl" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
                    POPULAR
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-4">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className={`mb-6 w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white" : ""}`} 
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href="#contact">Get {plan.name}</Link>
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 shrink-0 text-green-500 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enterprise Card */}
        <Card className="mx-auto mt-8 max-w-5xl">
          <CardContent className="flex flex-col items-center justify-between p-8 sm:flex-row">
            <div className="mb-4 sm:mb-0">
              <h3 className="mb-2 text-xl font-bold text-foreground">Trusted by teams worldwide</h3>
              <p className="text-muted-foreground">Invite your team, sync accounts in real time, and track shared goals with ease.</p>
            </div>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Talk to Sales</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
