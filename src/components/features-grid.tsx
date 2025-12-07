"use client";

import { Card, CardContent } from "@/components/ui/card";
import { 
  CreditCard, 
  Network, 
  Ticket, 
  Bell, 
  Search, 
  Sparkles, 
  CheckCircle2,
  Building2,
  Gift,
  Zap
} from "lucide-react";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

export function FeaturesGrid() {
  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/50 to-background dark:via-blue-950/20" />
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[150px] -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[150px] -z-10 animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/20 bg-secondary/30 px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400 animate-pulse" />
            <AnimatedGradientText className="p-0 text-sm font-medium">
              Why Choose Rewardive?
            </AnimatedGradientText>
          </div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Everything You Need to{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-300">
                Make the Most
              </span>
              {/* Animated underline */}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 5 100 2 150 3C200 4 250 7 298 10" stroke="url(#gradient2)" strokeWidth="3" strokeLinecap="round" className="animate-pulse"/>
                <defs>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            {" "}of Your Cards
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover exclusive deals, maximize cashback, and never miss an offer with our comprehensive platform.
          </p>
        </div>

        {/* Enhanced Bento Grid - 6 Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-6">
          
          {/* Feature 1 - Bank-Specific Offers (Large Card) */}
          <Card className="feature-card md:col-span-2 lg:col-span-4 group relative overflow-hidden border-0 bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 dark:from-violet-500/5 dark:via-purple-500/5 dark:to-fuchsia-500/5 hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <CardContent className="relative p-8 md:p-12 h-full flex flex-col justify-between">
              <div>
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 text-white shadow-2xl shadow-violet-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Building2 className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-3xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 transition-all duration-300">
                  Bank-Specific Offers
                </h3>
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-6">
                  Access exclusive deals from all major banks including HDFC, ICICI, SBI, Axis, and more. Get personalized offers tailored to your specific credit and debit cards.
                </p>
                
                {/* Feature highlights */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {["HDFC Bank", "ICICI Bank", "SBI Cards", "Axis Bank", "Kotak Mahindra", "IndusInd Bank"].map((bank, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-violet-600 dark:text-violet-400 flex-shrink-0" />
                      <span>{bank}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bank Card Grid - Hidden for now */}
              {/* <div className="mt-8 relative">
                <div className="rounded-2xl bg-gradient-to-br from-white/50 to-violet-50/50 dark:from-gray-900/50 dark:to-violet-950/30 backdrop-blur-sm p-6 border border-violet-200/50 dark:border-violet-800/50">
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { name: "HDFC", color: "bg-gradient-to-br from-blue-600 to-blue-700" },
                      { name: "ICICI", color: "bg-gradient-to-br from-orange-500 to-red-600" },
                      { name: "SBI", color: "bg-gradient-to-br from-blue-500 to-cyan-600" },
                      { name: "Axis", color: "bg-gradient-to-br from-purple-600 to-pink-600" },
                      { name: "Kotak", color: "bg-gradient-to-br from-red-600 to-red-700" },
                      { name: "IDFC", color: "bg-gradient-to-br from-teal-600 to-emerald-600" }
                    ].map((bank, i) => (
                      <div 
                        key={i}
                        className="group/bank relative aspect-[3/2] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      >
                        <div className={`absolute inset-0 ${bank.color} p-4 flex flex-col justify-between`}>
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                          </div>
                          
                          <div className="relative">
                            <div className="text-white font-bold text-sm tracking-wide">{bank.name}</div>
                          </div>
                          
                          <div className="relative flex justify-end">
                            <div className="h-6 w-6 rounded bg-white/20 backdrop-blur-sm flex items-center justify-center">
                              <CreditCard className="h-3 w-3 text-white" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/bank:translate-x-full transition-transform duration-700" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-violet-200/50 dark:border-violet-800/50">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
                      <span className="font-medium">20+ Banks</span>
                    </div>
                  </div>
                </div>
              </div> */}
            </CardContent>
          </Card>

          {/* Feature 2 - Card Network Deals */}
          {/* <Card className="feature-card md:col-span-1 lg:col-span-2 group relative overflow-hidden border-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <CardContent className="relative p-8 h-full flex flex-col">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Network className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Card Network Deals</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Discover offers from Visa, Mastercard, RuPay, and American Express all in one place.
              </p>
              <div className="mt-auto pt-6 space-y-3">
                <div className="space-y-2">
                  {["Visa", "Mastercard", "RuPay", "Amex"].map((network, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                      <span>{network}</span>
                    </div>
                  ))}
                </div>
             
                <div className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <span>View all networks</span>
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </CardContent>
          </Card> */}

          {/* Feature 3 - Vouchers & Discounts */}
          <Card className="feature-card md:col-span-1 lg:col-span-2 group relative overflow-hidden border-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <CardContent className="relative p-8 h-full flex flex-col">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Ticket className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Vouchers & Discounts</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Find the best vouchers, cashback offers, and discount codes for your favorite brands.
              </p>
              <div className="mt-auto pt-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                  <Gift className="h-4 w-4" />
                  <span>1000+ Active Offers</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feature 4 - Real-Time Updates */}
          <Card className="feature-card md:col-span-1 lg:col-span-2 group relative overflow-hidden border-0 bg-gradient-to-br from-rose-500/10 to-pink-500/10 dark:from-rose-500/5 dark:to-pink-500/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <CardContent className="relative p-8 h-full flex flex-col">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Bell className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Real-Time Updates</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Get notified instantly about new offers and deals that match your cards.
              </p>
              <div className="mt-auto pt-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-rose-600 dark:text-rose-400 font-medium">
                  <Zap className="h-4 w-4" />
                  <span>Instant Notifications</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feature 5 - Smart Search */}
          <Card className="feature-card md:col-span-1 lg:col-span-2 group relative overflow-hidden border-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 dark:from-amber-500/5 dark:to-orange-500/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <CardContent className="relative p-8 h-full flex flex-col">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Search className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Smart Search</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Easily find relevant offers by searching for merchants, categories, or card types.
              </p>
              <div className="mt-auto pt-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 font-medium">
                  <Zap className="h-4 w-4" />
                  <span>AI-Powered Search</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feature 6 - Personalized Recommendations */}
          <Card className="feature-card md:col-span-1 lg:col-span-2 group relative overflow-hidden border-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 dark:from-indigo-500/5 dark:to-blue-500/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <CardContent className="relative p-8 h-full flex flex-col">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 text-white shadow-lg shadow-indigo-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Sparkles className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Personalized Recommendations</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Get tailored offer suggestions based on your cards and spending preferences.
              </p>
              <div className="mt-auto pt-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                  <Sparkles className="h-4 w-4" />
                  <span>Smart Matching</span>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
