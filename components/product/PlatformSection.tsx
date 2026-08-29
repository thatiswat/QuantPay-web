"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  Monitor,
  Smartphone,
  Zap,
} from "lucide-react";

type Platform = "web" | "mobile";

export default function PlatformSection() {
  const [platform, setPlatform] = useState<Platform>("web");

  return (
    <section className="relative overflow-hidden bg-white py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#16C784]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#16C784]">
                One product
              </span>
            </div>

            <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.07em] text-[#0D0D0D] sm:text-6xl md:text-7xl">
              Your business
              <br />
              <span className="text-slate-400">
                wherever you are.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-slate-500 lg:ml-auto lg:text-lg lg:leading-8">
            QuantPay gives your team the same connected business
            across the counter, the office and everywhere in between.
          </p>
        </div>

        {/* =====================================================
            PLATFORM SWITCH
        ===================================================== */}

        <div className="mt-14 flex justify-center lg:justify-end">
          <div className="inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1">
            <button
              type="button"
              onClick={() => setPlatform("web")}
              className={[
                "flex h-10 items-center gap-2 rounded-lg px-5 text-xs font-semibold transition-all",
                platform === "web"
                  ? "bg-white text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-slate-700",
              ].join(" ")}
            >
              <Monitor className="h-4 w-4" />
              Web
            </button>

            <button
              type="button"
              onClick={() => setPlatform("mobile")}
              className={[
                "flex h-10 items-center gap-2 rounded-lg px-5 text-xs font-semibold transition-all",
                platform === "mobile"
                  ? "bg-white text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-slate-700",
              ].join(" ")}
            >
              <Smartphone className="h-4 w-4" />
              Mobile
            </button>
          </div>
        </div>

        {/* =====================================================
            EXPERIENCE
        ===================================================== */}

        <div className="mt-8 overflow-hidden rounded-[32px] border border-slate-200 bg-[#fafafa] shadow-[0_30px_90px_rgba(15,23,42,0.06)]">
          {platform === "web" ? <WebExperience /> : <MobileExperience />}
        </div>

        {/* =====================================================
            BOTTOM PRINCIPLES
        ===================================================== */}

        <div className="mt-12 grid border-y border-slate-200 md:grid-cols-3">
          <PlatformPoint
            number="01"
            title="One account"
            text="Your business information stays connected across the product."
          />

          <PlatformPoint
            number="02"
            title="One transaction record"
            text="Sales, customers, stock and payments build on the same data."
          />

          <PlatformPoint
            number="03"
            title="One system that grows"
            text="Start simple and add capability as the business gets bigger."
          />
        </div>

        {/* =====================================================
            SMALL SIGNATURE
        ===================================================== */}

        <div className="mt-8 flex items-center justify-between">
          <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-slate-300">
            QuantPay Business
          </span>

          <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16C784]" />
            Built for scale
          </span>
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   WEB
============================================================= */

function WebExperience() {
  return (
    <div className="grid min-h-[520px] lg:grid-cols-[1fr_0.8fr]">
      {/* Product visual */}

      <div className="flex items-center justify-center border-b border-slate-200 p-6 md:p-10 lg:border-b-0 lg:border-r">
        <div className="w-full max-w-[650px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.10)]">
          {/* Browser bar */}

          <div className="flex h-11 items-center border-b border-slate-100 px-4">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            </div>

            <div className="mx-auto rounded-md bg-slate-50 px-8 py-1.5 text-[9px] text-slate-400">
              app.quantpay.in
            </div>
          </div>

          <div className="grid grid-cols-[145px_1fr]">
            {/* Sidebar */}

            <div className="hidden border-r border-slate-100 bg-slate-50 p-4 sm:block">
              <div className="mb-6 text-xs font-bold text-slate-900">
                QuantPay
              </div>

              {[
                "Overview",
                "Billing",
                "Customers",
                "Products",
                "Inventory",
                "Payments",
              ].map((item, index) => (
                <div
                  key={item}
                  className={[
                    "mb-1 rounded-md px-2.5 py-2 text-[9px]",
                    index === 1
                      ? "bg-slate-950 font-semibold text-white"
                      : "text-slate-400",
                  ].join(" ")}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Main */}

            <div className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-slate-400">
                    Billing
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-950">
                    New invoice
                  </p>
                </div>

                <span className="rounded-md bg-[#16C784]/10 px-2 py-1 text-[8px] font-semibold text-[#16C784]">
                  DRAFT
                </span>
              </div>

              <div className="mt-5 rounded-xl border border-slate-100 p-4">
                <p className="text-[8px] uppercase tracking-[0.15em] text-slate-400">
                  Customer
                </p>

                <p className="mt-1.5 text-xs font-semibold text-slate-900">
                  Avyay Enterprises
                </p>

                <div className="mt-4 space-y-2">
                  <MiniLine
                    name="Premium Rice 25kg"
                    amount="₹4,800"
                  />

                  <MiniLine
                    name="Basmati Rice 10kg"
                    amount="₹4,200"
                  />

                  <MiniLine
                    name="Wholesale Pack"
                    amount="₹2,400"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-[9px] text-slate-400">
                    Total
                  </span>

                  <span className="text-base font-bold text-slate-950">
                    ₹12,768
                  </span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-[8px] text-slate-400">
                  GST included
                </span>

                <button className="rounded-lg bg-slate-950 px-4 py-2 text-[9px] font-semibold text-white">
                  Create invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copy */}

      <div className="flex flex-col justify-center p-7 md:p-12">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#16C784]/10">
          <Monitor className="h-5 w-5 text-[#16C784]" />
        </span>

        <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#16C784]">
          Web application
        </p>

        <h3 className="mt-4 text-3xl font-semibold leading-[0.95] tracking-[-0.05em] text-slate-950 md:text-4xl">
          Built for the
          <br />
          bigger picture.
        </h3>

        <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">
          Manage the full business from a larger workspace — from
          billing and inventory to customers, payments and reporting.
        </p>

        <div className="mt-7 space-y-3">
          <CheckItem text="Full business workspace" />
          <CheckItem text="Detailed records and reports" />
          <CheckItem text="Designed for teams" />
        </div>
      </div>
    </div>
  );
}

/* =============================================================
   MOBILE
============================================================= */

function MobileExperience() {
  return (
    <div className="grid min-h-[520px] lg:grid-cols-[0.8fr_1fr]">
      {/* Copy */}

      <div className="flex flex-col justify-center p-7 md:p-12 lg:order-first">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#16C784]/10">
          <Smartphone className="h-5 w-5 text-[#16C784]" />
        </span>

        <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#16C784]">
          Mobile application
        </p>

        <h3 className="mt-4 text-3xl font-semibold leading-[0.95] tracking-[-0.05em] text-slate-950 md:text-4xl">
          Your business,
          <br />
          in your hand.
        </h3>

        <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">
          Handle the work that cannot wait for a desk. Create bills,
          find customers and collect payments wherever you are.
        </p>

        <div className="mt-7 space-y-3">
          <CheckItem text="Fast billing on the move" />
          <CheckItem text="Customer access anywhere" />
          <CheckItem text="Same connected business data" />
        </div>
      </div>

      {/* Phone */}

      <div className="flex items-center justify-center border-t border-slate-200 p-8 lg:border-l lg:border-t-0">
        <div className="relative w-[270px] rounded-[36px] border-[6px] border-slate-950 bg-white p-2 shadow-[0_30px_70px_rgba(15,23,42,0.16)]">
          <div className="mx-auto h-5 w-24 rounded-full bg-slate-950" />

          <div className="px-4 pb-8 pt-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[8px] text-slate-400">
                  QuantPay
                </p>

                <p className="mt-1 text-lg font-bold text-slate-950">
                  ₹12,768
                </p>
              </div>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#16C784]/10">
                <Zap className="h-4 w-4 text-[#16C784]" />
              </span>
            </div>

            <div className="mt-6 rounded-xl bg-slate-50 p-3">
              <p className="text-[8px] uppercase tracking-[0.15em] text-slate-400">
                Customer
              </p>

              <p className="mt-1 text-xs font-semibold text-slate-900">
                Avyay Enterprises
              </p>
            </div>

            <div className="mt-3 space-y-2">
              <MiniLine
                name="Premium Rice 25kg"
                amount="₹4,800"
              />

              <MiniLine
                name="Basmati Rice 10kg"
                amount="₹4,200"
              />

              <MiniLine
                name="Wholesale Pack"
                amount="₹2,400"
              />
            </div>

            <button className="mt-4 flex h-10 w-full items-center justify-center rounded-xl bg-slate-950 text-[10px] font-semibold text-white">
              Collect payment
            </button>

            <div className="mt-5 flex items-center justify-center gap-2 text-[8px] uppercase tracking-[0.16em] text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#16C784]" />
              Connected
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =============================================================
   SMALL COMPONENTS
============================================================= */

function PlatformPoint({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="py-8 md:px-7 md:py-9">
      <span className="text-[10px] font-semibold tracking-[0.2em] text-[#16C784]">
        {number}
      </span>

      <h3 className="mt-5 text-lg font-semibold text-slate-950">
        {title}
      </h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
        {text}
      </p>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#16C784]/10">
        <Check className="h-3 w-3 text-[#16C784]" />
      </span>

      <span className="text-sm text-slate-600">{text}</span>
    </div>
  );
}

function MiniLine({
  name,
  amount,
}: {
  name: string;
  amount: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-slate-100 p-2.5">
      <span className="max-w-[150px] truncate text-[9px] text-slate-600">
        {name}
      </span>

      <span className="text-[9px] font-semibold text-slate-900">
        {amount}
      </span>
    </div>
  );
}