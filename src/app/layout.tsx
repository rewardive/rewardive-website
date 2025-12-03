import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import logo from '../components/images/logo.png'
import { ThemeProvider } from "@/components/theme-provider";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D73SPMKLJC"></script>
      <script id="google-analytics">
      {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-D73SPMKLJC');`}
      </script>
      </head>
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
