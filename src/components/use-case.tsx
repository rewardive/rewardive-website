import { ArrowRight, CreditCard, ShoppingCart } from "lucide-react";

export function UseCase() {
  return (
    <section className="bg-[#FAFAFA] px-8 py-24 lg:px-[120px]">
      <div className="mx-auto max-w-4xl">
        {/* Scenario intro */}
        <p className="mb-6 text-center text-[13px] font-semibold tracking-wider text-[#3D8A5A]">
          Real Example
        </p>

        {/* The story */}
        <h2
          className="mb-12 text-center text-3xl italic leading-snug text-[#1A1918] sm:text-[40px]"
          style={{ fontFamily: "var(--font-playfair)", lineHeight: 1.3, letterSpacing: "-0.5px" }}
        >
          You&rsquo;re at DMart, cart full, ready to pay.
          <br />
          <span className="text-[#9C9B99]">But which card should you swipe?</span>
        </h2>

        {/* Card comparison */}
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Winner card */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-[#3D8A5A] bg-white p-8">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3D8A5A]/10">
                  <CreditCard className="h-5 w-5 text-[#3D8A5A]" />
                </div>
                <span className="text-sm font-semibold text-[#1A1918]">HSBC Live+</span>
              </div>
              <span className="rounded-full bg-[#3D8A5A] px-3 py-1 text-xs font-semibold text-white">
                Best pick
              </span>
            </div>
            <div
              className="mb-2 text-5xl font-bold text-[#3D8A5A]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              10%
            </div>
            <p className="mb-4 text-sm text-[#6D6C6A]">cashback on groceries at DMart</p>
            <div className="rounded-xl bg-[#3D8A5A]/5 px-4 py-3">
              <p className="text-xs text-[#3D8A5A]">
                <span className="font-semibold">You save ~₹250</span> on a ₹2,500 bill
              </p>
            </div>
          </div>

          {/* Loser card */}
          <div className="relative overflow-hidden rounded-2xl border border-[#F0F0F0] bg-white p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0F0F0]">
                <CreditCard className="h-5 w-5 text-[#9C9B99]" />
              </div>
              <span className="text-sm font-semibold text-[#1A1918]">Amazon Pay ICICI</span>
            </div>
            <div
              className="mb-2 text-5xl font-bold text-[#D1D0CD]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              1%
            </div>
            <p className="mb-4 text-sm text-[#9C9B99]">cashback on groceries at DMart</p>
            <div className="rounded-xl bg-[#F5F5F5] px-4 py-3">
              <p className="text-xs text-[#9C9B99]">
                You save only ~₹25 on a ₹2,500 bill
              </p>
            </div>
          </div>
        </div>

        {/* Punchline */}
        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <p
            className="text-xl italic text-[#6D6C6A] sm:text-2xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Same purchase. 10x more savings.
          </p>
          <p className="text-sm text-[#9C9B99]">
            Rewardive tells you which card to use — before you tap.
          </p>
        </div>
      </div>
    </section>
  );
}
