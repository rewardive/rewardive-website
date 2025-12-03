import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FAQSection() {
  const faqs = [
    {
      question: "What kind of businesses is this template built for?",
      answer: "Clario is designed for SaaS tools, dashboards, fintech platforms, or any digital product that needs a modern, conversion-focused landing page. It's fully customizable to fit a wide range of web-based services.",
    },
    {
      question: "Is the template mobile-friendly and responsive?",
      answer: "Absolutely. The layout adapts beautifully to all screen sizes, including desktops, tablets, and smartphones. Every section is designed to deliver a seamless experience across devices.",
    },
    {
      question: "Can I use this template without coding skills?",
      answer: "Yes — the template is fully editable in Framer with drag-and-drop tools. No coding knowledge is required to update text, swap images, or adjust layouts.",
    },
    {
      question: "Will I get access to future updates?",
      answer: "Yes. Once purchased, you'll automatically receive any future improvements or optimizations we make to the template. Your version stays up-to-date with best practices.",
    },
    {
      question: "Can I use this template for commercial projects?",
      answer: "Definitely. Clario is licensed for both personal and commercial use, so you can build client websites or launch your own product without any licensing issues.",
    },
    {
      question: "How can I get support if I run into issues?",
      answer: "We're here to help. If you have questions, you can reach us directly at hello@kadirov.design. We usually respond within 24 hours.",
    },
  ];

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Got questions? We've got answers.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Here's everything you need to know before getting started.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                <span className="mr-4 text-blue-600 dark:text-blue-400">0{index + 1}</span>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pl-8 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">Contact us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
