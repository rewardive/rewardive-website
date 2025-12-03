import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logo from '../components/images/logo.png'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rewardive - Maximize Your Credit Card Rewards & Cashback",
  description: "Discover exclusive credit card offers, bank deals, and cashback opportunities. Scan UPI QR codes to find the best rewards for your cards. 10K+ active offers from 20+ banks.",
  icons: {
    icon: logo.src,
    shortcut: logo.src,
    apple: logo.src,
  },
  openGraph: {
    title: "Rewardive - Maximize Your Credit Card Rewards",
    description: "Never miss a cashback opportunity. Discover offers from HDFC, ICICI, SBI, Axis & more.",
    images: [logo.src],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rewardive - Maximize Your Credit Card Rewards",
    description: "Never miss a cashback opportunity. Discover offers from HDFC, ICICI, SBI, Axis & more.",
    images: [logo.src],
  },
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
