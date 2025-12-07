"use client";

import { Button } from "@/components/ui/button";
import { Download, Github, Star, Users, Smartphone, CreditCard, Apple } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import testflightLogo from "../components/images/testflight.png";
import playStoreBadge from "../components/images/playstore.png";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

export function CTASection() {
  const stats = [
    { icon: CreditCard, value: "50+", label: "Banks Supported" },
    { icon: Star, value: "500+", label: "Spending Categories" },
    { icon: Download, value: "10K+", label: "Active Deals & Offers" },
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
            <AnimatedGradientText className="p-0 text-sm font-medium">
              🎉 Now Available on Android & iOS
            </AnimatedGradientText>
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
          <div className="flex flex-col items-center justify-center gap-4 mb-16">
            {/* Download Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Google Play Badge */}
              <Link 
                href="https://play.google.com/store/apps/details?id=app.rewardive" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-all hover:scale-105"
              >
                <Image 
                  src={playStoreBadge} 
                  alt="Get it on Google Play" 
                  width={220}
                  height={65}
                  className="h-[65px] w-auto"
                />
              </Link>

              {/* TestFlight Badge */}
              <Link 
                href="https://testflight.apple.com/join/fTgTNCqx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-all hover:scale-105"
              >
                <Image 
                  src={testflightLogo} 
                  alt="Join us on TestFlight" 
                  width={220}
                  height={65}
                  className="h-[65px] w-auto rounded-lg"
                />
              </Link>
            </div>
            
            {/* GitHub Button */}
            <Button 
              size="lg" 
              variant="outline"
              className="h-14 px-10 rounded-lg border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-105"
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
