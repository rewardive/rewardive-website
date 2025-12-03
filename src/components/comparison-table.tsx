import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export function ComparisonTable() {
  const comparisons = [
    {
      feature: "Tracking",
      other: "Messy spreadsheets, manual tracking",
      clario: "Smart dashboard, real-time updates",
    },
    {
      feature: "Pricing",
      other: "Complicated pricing, hidden fees",
      clario: "Simple, transparent pricing",
    },
    {
      feature: "Automation",
      other: "Limited automation, manual workflows",
      clario: "Automated reports & smart alerts",
    },
    {
      feature: "Collaboration",
      other: "No team collaboration",
      clario: "Team-friendly, sync accounts easily",
    },
    {
      feature: "Support",
      other: "Generic support, slow replies",
      clario: "Priority support, fast response",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-muted/50 py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
            Why Clario?
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
                    <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 dark:text-blue-400">Clario</th>
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
                          <span className="text-sm text-foreground">{item.clario}</span>
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
