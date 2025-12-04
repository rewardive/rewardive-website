import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export function ComparisonTable() {
  const comparisons = [
    {
      feature: "MCC Code Detection",
      other: "Manual lookup",
      rewardive: "Instant detection via UPI QR",
    },
    {
      feature: "Bank-Specific Offers",
      other: "Generic cashback apps",
      rewardive: "Tailored to your specific cards",
    },
    {
      feature: "Real-time Updates",
      other: "Static data",
      rewardive: "Live offer tracking",
    },
    {
      feature: "Card Network Coverage",
      other: "Limited networks",
      rewardive: "Visa, Mastercard, RuPay, Amex",
    },
    {
      feature: "Smart Search",
      other: "Basic filtering",
      rewardive: "Smart search by merchant/category",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-muted/50 py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
            Why Rewardive?
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            There's a smarter way to manage money
          </h2>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-100 dark:bg-muted">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Feature</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Other Tools</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 dark:text-blue-400">Rewardive</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                      <td className="px-6 py-4 text-sm font-medium text-foreground">{item.feature}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-2">
                          <X className="h-5 w-5 shrink-0 text-red-500 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{item.other}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-2">
                          <Check className="h-5 w-5 shrink-0 text-green-500 mt-0.5" />
                          <span className="text-sm text-foreground">{item.rewardive}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
