"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LayoutDashboard, TrendingUp, PieChart, Target } from "lucide-react";

export function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Smart Dashboard",
      description: "See all your accounts in one view — balances, spending, and goals.",
      icon: LayoutDashboard,
    },
    {
      title: "Cashflow Overview",
      description: "Track your daily income and expenses to understand your financial flow.",
      icon: TrendingUp,
    },
    {
      title: "Spending Breakdown",
      description: "See exactly how your money is split across categories.",
      icon: PieChart,
    },
    {
      title: "Savings Goal",
      description: "Stay focused on your savings targets and follow your progress.",
      icon: Target,
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-muted/50 py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            See your money in real time, clearly.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Clario shows your income, spending, and goals in simple visuals you can act on — right away.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Tabs */}
          <div className="space-y-4">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left transition-all ${
                  activeTab === index ? "opacity-100" : "opacity-60 hover:opacity-80"
                }`}
              >
                <Card className={activeTab === index ? "border-2 border-blue-500 dark:border-blue-500" : ""}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`rounded-lg p-2 ${activeTab === index ? "bg-blue-100 dark:bg-blue-900/30" : "bg-gray-100 dark:bg-gray-800"}`}>
                        <tab.icon className={`h-6 w-6 ${activeTab === index ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400"}`} />
                      </div>
                      <div>
                        <h3 className="mb-1 font-bold text-foreground">{tab.title}</h3>
                        <p className="text-sm text-muted-foreground">{tab.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </button>
            ))}
          </div>

          {/* Preview Area */}
          <div className="flex items-center justify-center">
            <Card className="w-full border-2">
              <CardContent className="p-8">
                <div className="aspect-video flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-gray-100 dark:from-blue-950/30 dark:to-gray-900">
                  <div className="text-center">
                    {(() => {
                      const ActiveIcon = tabs[activeTab].icon;
                      return <ActiveIcon className="mx-auto mb-4 h-16 w-16 text-blue-600 dark:text-blue-400" />;
                    })()}
                    <p className="text-sm font-medium text-muted-foreground">{tabs[activeTab].title} Preview</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center rounded-full bg-background px-6 py-3 shadow-sm border">
            <span className="text-sm font-medium text-foreground">
              ✨ Trusted by 3k+ Freelancers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
