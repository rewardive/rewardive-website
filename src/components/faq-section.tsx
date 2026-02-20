"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Rewardive find credit card offers?",
      answer: "Rewardive collects publicly available offers and coupons from bank websites and card networks. You can also scan UPI QR codes to identify the merchant category and see which of your cards gives the best rewards for that purchase.",
    },
    {
      question: "Does Rewardive access my financial data?",
      answer: "No. Rewardive does not access, store, or process any financial data. We do not provide financial services. We simply aggregate publicly available coupons and offer information to help you pick the right card.",
    },
    {
      question: "Which banks and cards do you track offers for?",
      answer: "We collect offers from 20+ major banks including HDFC, ICICI, SBI, Axis, and Amex, covering Visa, Mastercard, and RuPay networks. We are constantly expanding the list of banks we track.",
    },
    {
      question: "Is the app free to use?",
      answer: "Yes, the core features of Rewardive, including offer discovery and UPI scanning, are completely free for users. We may introduce premium features for advanced analytics in the future.",
    },
    {
      question: "Can I track milestone benefits?",
      answer: "Definitely. Rewardive allows you to track progress towards annual fee waivers, bonus reward points, and other milestone-based benefits so you never miss a target.",
    },
  ];

  return (
    <section id="faq" className="bg-white px-8 py-20 lg:px-[120px]">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <span className="text-[13px] font-semibold tracking-wider text-[#3D8A5A]">
            FAQ
          </span>
          <h2 className="text-3xl font-bold text-[#1A1918] sm:text-4xl" style={{ letterSpacing: "-1px" }}>
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="overflow-hidden rounded-2xl border border-[#F0F0F0]">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-[#FAFAFA]"
              >
                <span className="text-base font-medium text-[#1A1918]">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-[#9C9B99] transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-[15px] leading-relaxed text-[#9C9B99]">
                  {faq.answer}
                </div>
              )}
              {i < faqs.length - 1 && <div className="mx-6 h-px bg-[#F0F0F0]" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
