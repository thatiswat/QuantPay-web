import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function ProductCTA() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-24 md:py-32">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#16C784]/[0.035] blur-[130px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-slate-200/70" />
      </div>

      {/* =========================================================
          CTA
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.06)]">
          {/* Subtle corner accents */}

          <div className="pointer-events-none absolute right-8 top-8 hidden md:block">
            <div className="h-12 w-12 border-r border-t border-[#16C784]/30" />
          </div>

          <div className="pointer-events-none absolute bottom-8 left-8 hidden md:block">
            <div className="h-12 w-12 border-b border-l border-slate-200" />
          </div>

          {/* Ambient glow */}

          <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#16C784]/[0.045] blur-[100px]" />

          <div className="relative px-7 py-16 sm:px-12 md:px-20 md:py-20">
            {/* =====================================================
                TOP
            ===================================================== */}

            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#16C784]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#16C784]">
                Start with QuantPay
              </span>
            </div>

            {/* =====================================================
                MAIN CONTENT
            ===================================================== */}

            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-4xl">
                <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.07em] text-[#0D0D0D] sm:text-6xl md:text-7xl">
                  Make every
                  <br />
                  <span className="text-[#16C784]">
                    transaction count.
                  </span>
                </h2>

                <p className="mt-7 max-w-xl text-[15px] leading-7 text-slate-500 sm:text-base sm:leading-8">
                  Start with the way you sell today. QuantPay keeps the
                  information behind every transaction connected as your
                  business grows.
                </p>
              </div>

              {/* =================================================
                  ACTION
              ================================================= */}

              <div className="lg:pb-1">
                <Link
                  href="/register"
                  className="group inline-flex h-12 items-center justify-center rounded-xl bg-[#0D0D0D] px-7 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(13,13,13,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_18px_40px_rgba(13,13,13,0.17)]"
                >
                  Get started

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="group mt-4 flex items-center justify-center text-xs font-semibold text-slate-400 transition-colors hover:text-slate-900"
                >
                  Talk to us

                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* =====================================================
                PRODUCT SIGNAL
            ===================================================== */}

            <div className="mt-14 border-t border-slate-100 pt-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16C784]/30" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#16C784]" />
                  </span>

                  <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                    One connected business
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] font-medium uppercase tracking-[0.2em] text-slate-300">
                  <span>Sell</span>

                  <span className="text-[#16C784]">→</span>

                  <span>Record</span>

                  <span className="text-[#16C784]">→</span>

                  <span>Collect</span>

                  <span className="text-[#16C784]">→</span>

                  <span>Grow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}