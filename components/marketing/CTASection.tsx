import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-28 md:py-36">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#16C784]/[0.035] blur-[140px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-slate-200/70" />
      </div>

      {/* Content */}

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white px-7 py-16 shadow-[0_30px_90px_rgba(15,23,42,0.07)] sm:px-12 md:px-20 md:py-24">

          {/* Glows */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#16C784]/[0.06] blur-[90px]" />

          <div className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-slate-100 blur-[90px]" />

          {/* Decorative corner */}

          <div className="pointer-events-none absolute right-8 top-8 hidden h-16 w-16 md:block">
            <span className="absolute right-0 top-0 h-px w-10 bg-[#16C784]" />
            <span className="absolute right-0 top-0 h-10 w-px bg-[#16C784]" />
          </div>

          <div className="relative mx-auto max-w-4xl text-center">

            {/* Eyebrow */}

            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-[#16C784]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#16C784]">
                Start building with QuantPay
              </span>

              <span className="h-px w-7 bg-[#16C784]" />
            </div>

            {/* Heading */}

            <h2 className="mt-8 text-5xl font-semibold leading-[0.9] tracking-[-0.065em] text-[#0D0D0D] sm:text-6xl md:text-7xl">
              Built for today.
              <br />
              <span className="text-[#16C784]">
                Ready for tomorrow.
              </span>
            </h2>

            {/* Copy */}

            <p className="mx-auto mt-8 max-w-xl text-[15px] leading-7 text-slate-500 sm:text-base sm:leading-8">
              Start with the everyday tools your business needs and
              build on the same system as you grow.
            </p>

            {/* Actions */}

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://app.quantpay.in"
                className="group inline-flex h-12 items-center justify-center rounded-xl bg-[#0D0D0D] px-7 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(13,13,13,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_18px_40px_rgba(13,13,13,0.17)]"
              >
                Get started

                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-[#16C784]"
              >
                Talk to us

                <ArrowUpRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Bottom signal */}

            <div className="mx-auto mt-14 flex max-w-md items-center justify-center gap-4">
              <div className="h-px flex-1 bg-slate-100" />

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#16C784]" />

                <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-slate-300">
                  Simple. Connected. Built for scale.
                </span>
              </div>

              <div className="h-px flex-1 bg-slate-100" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}