"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 80);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="relative isolate flex min-h-[calc(100svh-72px)] items-center overflow-hidden bg-[#fafafa]">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-300px] h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-[#16C784]/[0.045] blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-[100px]" />

        <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200/80" />
      </div>

      {/* Hero */}

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">

          {/* Eyebrow */}

          <div
            className={`flex items-center gap-4 transition-all duration-1000 ease-out ${
              mounted
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }`}
          >
            <span className="h-px w-8 bg-[#16C784]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.34em] text-slate-400 sm:text-[11px]">
              Built for scale
            </span>

            <span className="h-px w-8 bg-[#16C784]" />
          </div>

          {/* Main statement */}

          <h1
            className={`mt-9 select-none text-[clamp(4.5rem,11vw,10.5rem)] font-semibold leading-[0.82] tracking-[-0.09em] text-[#0D0D0D] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              mounted
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="block">
              Connect Your
            </span>

            <span className="relative mt-2 block text-[#16C784] sm:mt-3">
              Business.

              <span
                className={`absolute -bottom-4 left-1/2 h-[2px] w-24 -translate-x-1/2 origin-center bg-[#16C784]/30 transition-transform duration-[1200ms] delay-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:-bottom-5 sm:w-32 ${
                  mounted ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </span>
          </h1>

          {/* Copy */}

          <p
            className={`mt-12 max-w-xl text-[15px] leading-7 text-slate-500 transition-all duration-1000 delay-300 ease-out sm:text-lg sm:leading-8 ${
              mounted
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            Run your business from one connected system —
            <br className="hidden sm:block" />
            from the first bill to the final payment.
          </p>

          {/* Actions */}

          <div
            className={`mt-9 flex items-center gap-5 transition-all duration-1000 delay-500 ease-out ${
              mounted
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <Link
              href="/app"
              className="group inline-flex h-12 items-center justify-center rounded-xl bg-[#0D0D0D] px-7 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(13,13,13,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(13,13,13,0.16)]"
            >
              Get started

              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/product"
              className="group inline-flex h-12 items-center text-sm font-semibold text-slate-600 transition-colors duration-300 hover:text-[#16C784]"
            >
              Explore QuantPay

              <ArrowUpRight className="ml-1.5 h-4 w-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Minimal edge branding */}

      <div className="pointer-events-none absolute bottom-7 left-6 hidden text-[8px] font-medium uppercase tracking-[0.3em] text-slate-300 lg:block">
        QuantPay
      </div>

      <div className="pointer-events-none absolute bottom-7 right-6 hidden text-[8px] font-medium uppercase tracking-[0.3em] text-slate-300 lg:block">
        India
      </div>
    </section>
  );
}