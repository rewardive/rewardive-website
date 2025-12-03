import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsCarousel() {
  const testimonials = [
    {
      quote: "With Clario, I finally stopped stressing about my cash flow. I know where my money is going — and I'm actually saving.",
      author: "Danielle M.",
      role: "Freelance UX Designer",
    },
    {
      quote: "Clario made my finances feel simple. Everything's in one place.",
      author: "Alex T.",
      role: "Product Manager",
    },
    {
      quote: "I finally set a savings goal and actually stuck to it.",
      author: "Reema K.",
      role: "Marketing Consultant",
    },
    {
      quote: "No more spreadsheet chaos. Just clean insights.",
      author: "Jonas W.",
      role: "Startup Founder",
    },
    {
      quote: "It feels like Clario understands how I think about money.",
      author: "Samira L.",
      role: "E-commerce Seller",
    },
    {
      quote: "It's the only finance tool I open daily — and enjoy using.",
      author: "Marco G.",
      role: "Freelance Developer",
    },
  ];

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Loved by individuals and small teams
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            People across industries trust Clario to manage money, reduce stress, and make smarter decisions — all in one simple dashboard.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <p className="mb-4 text-muted-foreground italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
