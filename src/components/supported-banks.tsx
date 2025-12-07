"use client";

import Image from "next/image";
import { Building2, CreditCard } from "lucide-react";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

// Import all bank logos
import visaLogo from '@/components/images/banks/visa.svg';
import mastercardLogo from '@/components/images/banks/mastercard.svg';
import rupayLogo from '@/components/images/banks/rupay.svg';
import amexLogo from '@/components/images/banks/amex.svg';
import hdfcLogo from '@/components/images/banks/hdfc.svg';
import iciciLogo from '@/components/images/banks/icici.svg';
import axisLogo from '@/components/images/banks/axis.svg';
import kotakLogo from '@/components/images/banks/kotak.svg';
import sbiLogo from '@/components/images/banks/sbi.svg';
import pnbLogo from '@/components/images/banks/pnb.svg';
import bobLogo from '@/components/images/banks/bob.png';
import canaraLogo from '@/components/images/banks/canara.svg';
import unionbankLogo from '@/components/images/banks/unionbank.svg';
import indusindLogo from '@/components/images/banks/indusind.svg';
import yesbankLogo from '@/components/images/banks/yesbank.svg';
import idfcLogo from '@/components/images/banks/idfc.svg';
import federalLogo from '@/components/images/banks/federal.svg';
import rblLogo from '@/components/images/banks/rbl.svg';
import standardcharteredLogo from '@/components/images/banks/standardchartered.svg';

export function SupportedBanks() {
  const cardNetworks = [
    { name: "Visa", logo: visaLogo },
    { name: "Mastercard", logo: mastercardLogo },
    { name: "RuPay", logo: rupayLogo },
    { name: "American Express", logo: amexLogo },
  ];

  const banks = [
    { name: "HDFC Bank", logo: hdfcLogo },
    { name: "ICICI Bank", logo: iciciLogo },
    { name: "Axis Bank", logo: axisLogo },
    { name: "Kotak Mahindra", logo: kotakLogo },
    { name: "State Bank of India", logo: sbiLogo },
    { name: "Punjab National Bank", logo: pnbLogo },
    { name: "Bank of Baroda", logo: bobLogo },
    { name: "Canara Bank", logo: canaraLogo },
    { name: "Union Bank", logo: unionbankLogo },
    { name: "IndusInd Bank", logo: indusindLogo },
    { name: "Yes Bank", logo: yesbankLogo },
    { name: "IDFC First Bank", logo: idfcLogo },
    { name: "Federal Bank", logo: federalLogo },
    { name: "RBL Bank", logo: rblLogo },
    { name: "Standard Chartered", logo: standardcharteredLogo },
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-slate-50/50 to-background dark:via-slate-950/20" />
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-500/10 rounded-full blur-[150px] -z-10" />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/20 bg-secondary/30 px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm">
            <Building2 className="h-4 w-4 text-slate-600 dark:text-slate-400" />
            <AnimatedGradientText className="p-0 text-sm font-medium">
              Trusted Partners
            </AnimatedGradientText>
          </div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Supported{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-200">
              Banks & Networks
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Access exclusive offers from all major card networks and banking partners across India.
          </p>
        </div>

        {/* Card Networks Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <CreditCard className="h-5 w-5 text-muted-foreground" />
            <h3 className="text-lg font-semibold text-foreground">Card Networks</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cardNetworks.map((network, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 hover:shadow-xl hover:border-border transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Logo */}
                <div className="relative h-16 flex items-center justify-center">
                  <Image
                    src={network.logo}
                    alt={network.name}
                    width={120}
                    height={60}
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            ))}
          </div>
        </div>

        {/* Banks Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="h-5 w-5 text-muted-foreground" />
            <h3 className="text-lg font-semibold text-foreground">Banking Partners</h3>
            <span className="ml-auto text-sm text-muted-foreground">{banks.length} banks supported</span>
          </div>
          
          {/* Bento-style grid for banks */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {banks.map((bank, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm p-6 hover:shadow-lg hover:border-border transition-all duration-300 hover:-translate-y-1 hover:bg-card/50 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-backwards"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-slate-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Logo */}
                <div className="relative h-12 flex items-center justify-center">
                  <Image
                    src={bank.logo}
                    alt={bank.name}
                    width={100}
                    height={40}
                    className="object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                
                {/* Bank name on hover */}
                <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs text-center font-medium text-foreground truncate">{bank.name}</p>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "19", label: "Partners" },
            { value: "4", label: "Card Networks" },
            { value: "15", label: "Major Banks" },
            { value: "100%", label: "Coverage" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-200 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            More banks and card networks being added regularly
          </p>
        </div>
      </div>
    </section>
  );
}
