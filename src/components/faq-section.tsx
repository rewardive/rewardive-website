import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export function FAQSection() {
  const faqs = [
    {
      question: "How does Rewardive track my credit card offers?",
      answer: "Rewardive uses advanced algorithms to scan and aggregate offers from major banks and card networks. We also allow you to scan UPI QR codes to instantly see which of your cards offers the best rewards for that specific merchant.",
    },
    {
      question: "Is my financial data safe?",
      answer: "Absolutely. We prioritize your security and privacy. Rewardive does not store your card numbers or sensitive banking credentials. We only track offer data and card types to provide recommendations.",
    },
    {
      question: "Which banks and cards are supported?",
      answer: "We support over 20+ major banks including HDFC, ICICI, SBI, Axis, and Amex, covering Visa, Mastercard, and RuPay networks. We are constantly adding more partners to our platform.",
    },
    {
      question: "Is the app free to use?",
      answer: "Yes, the core features of Rewardive, including offer discovery and UPI scanning, are completely free for users. We may introduce premium features for advanced analytics in the future.",
    },
    {
      question: "Can I track milestone benefits?",
      answer: "Definitely. Rewardive allows you to track progress towards annual fee waivers, bonus reward points, and other milestone-based benefits so you never miss a target.",
    },
    {
      question: "How do I get support if I have issues?",
      answer: "We're here to help. If you have questions or need assistance, you can reach out to our support team directly through the app or email us at support@rewardive.com.",
    },
  ];

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Got questions? We've got answers.
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Here's everything you need to know before getting started.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-start text-left w-full">
                  <span className="mr-4 text-blue-600 dark:text-blue-400">0{index + 1}</span>
                  <span className="flex-1">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-8  text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
