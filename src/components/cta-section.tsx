"use client";

import { Button } from "@/components/ui/button";
import { Download, Github, Star, Users, Smartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function CTASection() {
  const stats = [
    { icon: Users, value: "2K+", label: "Active Users" },
    { icon: Star, value: "500+", label: "MCC Codes" },
    { icon: Download, value: "10K+", label: "Active Offers" },
  ];

  return (
    <section id="download" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900" />
      <div className="absolute inset-0 bg-grid-white/[0.05]" />
      
      {/* Animated Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float-slow" />

      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white">
            <Smartphone className="h-4 w-4" />
            <span>🎉 Now Available on Google Play</span>
          </div>

          {/* Heading */}
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Download Rewardive
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-pink-200">
              Start Saving Today
            </span>
          </h2>

          {/* Description */}
          <p className="mb-12 text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Get the app now and never miss a cashback opportunity. Scan, discover, and save on every transaction.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="h-16 px-10 text-lg rounded-full bg-white text-blue-600 hover:bg-blue-50 shadow-2xl shadow-black/20 transition-all hover:scale-105 group"
              asChild
            >
              <Link href="https://play.google.com/store/apps/details?id=app.rewardive" target="_blank" rel="noopener noreferrer">
                <svg className="mr-3 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Get it on Google Play
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="h-16 px-10 text-lg rounded-full border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-105"
              asChild
            >
              <Link href="https://github.com/rewardive" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-white/20">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm text-white group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-12 text-sm text-blue-200/80">
            Available for Android • 100% Free • No Ads • Open Source
          </div>
        </div>
      </div>
    </section>
  );
}
