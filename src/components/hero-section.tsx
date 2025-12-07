"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CreditCard, Sparkles, Download } from "lucide-react";
import { useGsap } from "@/hooks/use-gsap";
import { useRef } from "react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { gsap, useIsomorphicLayoutEffect } = useGsap();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-content > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
      })
      .from(".hero-card", {
        x: 50,
        opacity: 0,
        rotateY: -15,
        duration: 1,
      }, "-=0.6")
      .from(".floating-element", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      }, "-=0.5");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-background pt-32 pb-20 sm:pt-40 sm:pb-32">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-grid-black/[0.05] dark:bg-grid-white/[0.05]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      
      {/* Multiple Gradient Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] -z-10 dark:bg-blue-500/10 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-[100px] -z-10 dark:bg-purple-500/8" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[100px] -z-10 dark:bg-cyan-500/8" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div className="hero-content max-w-2xl text-center lg:text-left space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300 shadow-lg shadow-blue-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span>🎉 Now Available on Google Play</span>
              <Sparkles className="h-3.5 w-3.5" />
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl leading-[1.1]">
              Maximize Your <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-300 animate-gradient">
                  Card Benefits
                </span>
                {/* Underline decoration */}
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 5 100 2 150 3C200 4 250 7 298 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#A855F7" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover all credit card, debit card, and bank offers in one place. Never miss out on discounts, vouchers, and exclusive deals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 group" asChild>
                <Link href="https://play.google.com/store/apps/details?id=app.rewardive" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce transition-transform" />
                  Download Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-secondary/50 transition-all hover:scale-105 group" asChild>
                <Link href="#features">
                  Explore Features
                  <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
                </Link>
              </Button>
            </div>
            
            {/* Social Proof - Hidden until real-time data available */}
            {/* <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex -space-x-3">
                {["Sarah", "Alex", "Maya", "John"].map((name, i) => (
                  <img
                    key={i}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}&backgroundColor=b6e3f4,c0aede,d1d4f9`}
                    alt={`${name}'s avatar`}
                    className="h-10 w-10 rounded-full border-2 border-background shadow-lg ring-2 ring-blue-500/20 hover:scale-110 hover:z-10 transition-transform duration-200"
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-semibold text-foreground">2,000+ early users</p>
                <p className="text-muted-foreground">Join the community</p>
              </div>
            </div> */}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              {[
                { value: "500+", label: "Spending Categories" },
                { value: "10K+", label: "Active Deals & Offers" },
                { value: "⚡", label: "Claim Rewards Instantly" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual - Enhanced Card */}
          <div className="hero-card flex justify-center lg:justify-end perspective-1000">
            <div className="relative h-[340px] w-[540px] max-w-full">
              {/* Main Card with 3D effect */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#000000] p-8 text-white shadow-2xl border border-white/10 backdrop-blur-xl z-20 transition-transform duration-500 hover:rotate-y-6 hover:rotate-x-6 preserve-3d group">
                {/* Animated Noise Texture */}
                <div className="absolute inset-0 rounded-[2rem] opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-pulse" style={{ animationDuration: '3s' }}></div>
                
                {/* Glossy Reflection */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>

                {/* Holographic Effect */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative flex h-full flex-col justify-between z-30">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-500/50">
                          R
                        </div>
                        <span className="text-xl font-bold tracking-wider">Rewardive</span>
                    </div>
                    <CreditCard className="h-10 w-10 text-white/80 group-hover:text-white transition-colors" />
                  </div>
                  
                  {/* Card Details */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-16 rounded-lg bg-gradient-to-r from-yellow-200 to-yellow-500 opacity-90 shadow-lg" /> {/* Chip */}
                      <div className="text-3xl font-mono tracking-widest text-white/90 drop-shadow-lg">
                        4582 •••• •••• 8924
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Card Holder</p>
                        <p className="font-medium tracking-wide text-lg">John Appleseed</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Expires</p>
                        <p className="font-medium tracking-wide text-lg">12/28</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements with better animations */}
              <div className="floating-element absolute -top-12 -right-12 h-32 w-32 rounded-2xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-md border border-white/20 z-10 animate-float-slow shadow-xl"></div>
              <div className="floating-element absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-md border border-white/20 z-10 animate-float shadow-xl"></div>
              <div className="floating-element absolute top-1/2 -right-6 h-16 w-16 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 backdrop-blur-md border border-white/20 z-10 animate-float shadow-xl" style={{ animationDelay: '0.5s' }}></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-2xl -z-10 animate-pulse" style={{ animationDuration: '3s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
