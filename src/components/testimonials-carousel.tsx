import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsCarousel() {
  const testimonials = [
    {
      quote: "With Rewardive, I finally stopped missing out on credit card offers. I know exactly which card to use — and I'm maximizing my cashback.",
      author: "Danielle M.",
      role: "Freelance UX Designer",
    },
    {
      quote: "Rewardive made tracking rewards simple. All my offers are in one place.",
      author: "Alex T.",
      role: "Product Manager",
    },
    {
      quote: "I finally hit my milestone spend and got my annual fee waived.",
      author: "Reema K.",
      role: "Marketing Consultant",
    },
    {
      quote: "No more searching through bank emails. Just clean offer insights.",
      author: "Jonas W.",
      role: "Startup Founder",
    },
    {
      quote: "It feels like Rewardive understands how to maximize my wallet.",
      author: "Samira L.",
      role: "E-commerce Seller",
    },
    {
      quote: "It's the only rewards app I open daily — and actually save money with.",
      author: "Marco G.",
      role: "Freelance Developer",
    },
  ];

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Loved by smart spenders everywhere
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Smart spenders trust Rewardive to maximize rewards, discover offers, and make smarter payment decisions — all in one simple app.
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
