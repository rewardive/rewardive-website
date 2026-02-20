import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
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
      <body className={`${inter.className} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
