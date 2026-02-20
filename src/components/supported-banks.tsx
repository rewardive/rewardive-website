import Image from "next/image";

import visaLogo from "@/components/images/banks/visa.svg";
import mastercardLogo from "@/components/images/banks/mastercard.svg";
import rupayLogo from "@/components/images/banks/rupay.svg";
import amexLogo from "@/components/images/banks/amex.svg";
import hdfcLogo from "@/components/images/banks/hdfc.svg";
import iciciLogo from "@/components/images/banks/icici.svg";
import axisLogo from "@/components/images/banks/axis.svg";
import kotakLogo from "@/components/images/banks/kotak.svg";
import sbiLogo from "@/components/images/banks/sbi.svg";
import pnbLogo from "@/components/images/banks/pnb.svg";
import bobLogo from "@/components/images/banks/bob.png";
import canaraLogo from "@/components/images/banks/canara.svg";
import unionbankLogo from "@/components/images/banks/unionbank.svg";
import indusindLogo from "@/components/images/banks/indusind.svg";
import yesbankLogo from "@/components/images/banks/yesbank.svg";
import idfcLogo from "@/components/images/banks/idfc.svg";
import federalLogo from "@/components/images/banks/federal.svg";
import rblLogo from "@/components/images/banks/rbl.svg";
import standardcharteredLogo from "@/components/images/banks/standardchartered.svg";

export function SupportedBanks() {
  const networks = [
    { name: "Visa", logo: visaLogo },
    { name: "Mastercard", logo: mastercardLogo },
    { name: "RuPay", logo: rupayLogo },
    { name: "American Express", logo: amexLogo },
  ];

  const banksRow1 = [
    { name: "HDFC Bank", logo: hdfcLogo },
    { name: "ICICI Bank", logo: iciciLogo },
    { name: "SBI", logo: sbiLogo },
    { name: "Axis Bank", logo: axisLogo },
    { name: "Kotak", logo: kotakLogo },
    { name: "IndusInd", logo: indusindLogo },
    { name: "Yes Bank", logo: yesbankLogo },
  ];

  const banksRow2 = [
    { name: "IDFC First", logo: idfcLogo },
    { name: "PNB", logo: pnbLogo },
    { name: "Bank of Baroda", logo: bobLogo },
    { name: "Canara Bank", logo: canaraLogo },
    { name: "Union Bank", logo: unionbankLogo },
    { name: "Federal Bank", logo: federalLogo },
    { name: "RBL Bank", logo: rblLogo },
    { name: "Standard Chartered", logo: standardcharteredLogo },
  ];

  return (
    <section className="bg-white px-8 py-20 lg:px-[120px]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <span className="text-[13px] font-semibold tracking-wider text-[#3D8A5A]">
            Coverage
          </span>
          <h2 className="max-w-[650px] text-3xl font-bold leading-tight text-[#1A1918] sm:text-[44px]" style={{ letterSpacing: "-1.5px", lineHeight: 1.15 }}>
            We track offers from all major banks and card networks
          </h2>
        </div>

        {/* Card Networks */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-12">
          {networks.map((network, i) => (
            <div key={i} className="flex h-16 items-center justify-center">
              <Image
                src={network.logo}
                alt={network.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Bank Logos Row 1 */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-6">
          {banksRow1.map((bank, i) => (
            <div
              key={i}
              className="flex h-14 w-24 items-center justify-center rounded-xl bg-[#FAFAFA] p-3"
            >
              <Image
                src={bank.logo}
                alt={bank.name}
                width={80}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Bank Logos Row 2 */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {banksRow2.map((bank, i) => (
            <div
              key={i}
              className="flex h-14 w-24 items-center justify-center rounded-xl bg-[#FAFAFA] p-3"
            >
              <Image
                src={bank.logo}
                alt={bank.name}
                width={80}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
