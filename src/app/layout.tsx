import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import logo from '../components/images/logo.png'
const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Rewardive - Maximize Your Credit Card Rewards & Cashback",
  description: "Find the best credit card for every purchase. We collect coupons and offers from across the web and recommend the right card to maximize your savings.",
  icons: {
    icon: logo.src,
    shortcut: logo.src,
    apple: logo.src,
  },
  openGraph: {
    title: "Rewardive - Maximize Your Credit Card Rewards",
    description: "Find the best card for every purchase. Coupons and offers collected from HDFC, ICICI, SBI, Axis & more.",
    images: [logo.src],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rewardive - Maximize Your Credit Card Rewards",
    description: "Find the best card for every purchase. Coupons and offers collected from HDFC, ICICI, SBI, Axis & more.",
    images: [logo.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable}`}>
        {children}
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
