"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CreditCard,
  Minus,
  Plus,
  Smartphone,
  Monitor,
} from "lucide-react";

type View = "web" | "mobile";

export default function ProductExperience() {
  const [view, setView] = useState<View>("web");

  return (
    <section
      id="product"
      className="relative overflow-hidden bg-white py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#16C784]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#16C784]">
              The product
            </span>

            <span className="h-px w-7 bg-[#16C784]" />
          </div>

          <h2 className="mt-7 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] text-[#0D0D0D] sm:text-6xl md:text-7xl">
            One business.
            <br />
            <span className="text-slate-400">
              Every transaction connected.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
            Work from the web or your phone. QuantPay keeps your
            business information connected wherever the work happens.
          </p>
        </div>

        {/* =====================================================
            VIEW SWITCHER
        ===================================================== */}

        <div className="mt-14 flex justify-center">
          <div className="inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1">
            <button
              type="button"
              onClick={() => setView("web")}
              className={[
                "inline-flex h-10 items-center gap-2 rounded-lg px-5 text-sm font-medium transition-all",
                view === "web"
                  ? "bg-white text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-slate-700",
              ].join(" ")}
            >
              <Monitor className="h-4 w-4" />
              Web
            </button>

            <button
              type="button"
              onClick={() => setView("mobile")}
              className={[
                "inline-flex h-10 items-center gap-2 rounded-lg px-5 text-sm font-medium transition-all",
                view === "mobile"
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
            PRODUCT STAGE
        ===================================================== */}

        <div className="mt-12">
          {view === "web" ? <WebBilling /> : <MobileBilling />}
        </div>

        {/* =====================================================
            PRODUCT FOOTER
        ===================================================== */}

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#16C784]/10">
              <Check className="h-3.5 w-3.5 text-[#16C784]" />
            </span>

            <span className="text-sm text-slate-500">
              Changes stay connected across QuantPay.
            </span>
          </div>

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
            Web + Mobile
          </span>
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   WEB BILLING
============================================================= */

function WebBilling() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.08)]">
      {/* Browser */}

      <div className="flex h-14 items-center border-b border-slate-200 px-5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
        </div>

        <div className="mx-auto hidden rounded-lg bg-slate-50 px-10 py-2 text-[10px] text-slate-400 sm:block">
          app.quantpay.in
        </div>
      </div>

      <div className="grid min-h-[560px] lg:grid-cols-[210px_1fr]">
        {/* Sidebar */}

        <aside className="hidden border-r border-slate-200 bg-slate-50 p-5 lg:block">
          <div className="mb-8 text-sm font-bold tracking-tight text-slate-950">
            QuantPay
          </div>

          <div className="space-y-1">
            {[
              "Overview",
              "Billing",
              "Customers",
              "Products",
              "Inventory",
              "Payments",
            ].map((item) => (
              <div
                key={item}
                className={[
                  "rounded-lg px-3 py-2.5 text-xs",
                  item === "Billing"
                    ? "bg-slate-950 font-medium text-white"
                    : "text-slate-500",
                ].join(" ")}
              >
                {item}
              </div>
            ))}
          </div>
        </aside>

        {/* Billing */}

        <div className="bg-[#fafafa] p-5 md:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">Billing</p>

              <h3 className="mt-1 text-xl font-semibold text-slate-950">
                New invoice
              </h3>
            </div>

            <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600">
              Save draft
            </button>
          </div>

          <div className="mt-7 grid gap-5 xl:grid-cols-[1fr_320px]">
            {/* Invoice */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Customer
                  </p>

                  <p className="mt-2 text-sm font-semibold text-slate-950">
                    Avyay Enterprises
                  </p>
                </div>

                <ChevronDown className="h-4 w-4 text-slate-300" />
              </div>

              <div className="mt-5 space-y-3">
                <BillItem
                  name="Premium Rice 25kg"
                  quantity="4"
                  amount="₹4,800"
                />

                <BillItem
                  name="Basmati Rice 10kg"
                  quantity="6"
                  amount="₹4,200"
                />

                <BillItem
                  name="Wholesale Pack"
                  quantity="2"
                  amount="₹2,400"
                />
              </div>

              <button className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#16C784]">
                <Plus className="h-3.5 w-3.5" />
                Add product
              </button>
            </div>

            {/* Summary */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-medium text-slate-400">
                Invoice summary
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <SummaryRow label="Subtotal" value="₹11,400" />
                <SummaryRow label="GST" value="₹1,368" />
              </div>

              <div className="my-5 h-px bg-slate-100" />

              <div className="flex items-end justify-between">
                <span className="text-sm font-medium text-slate-500">
                  Total
                </span>

                <span className="text-2xl font-bold tracking-tight text-slate-950">
                  ₹12,768
                </span>
              </div>

              <button className="mt-7 flex h-11 w-full items-center justify-center rounded-xl bg-slate-950 text-sm font-semibold text-white transition hover:bg-black">
                Create invoice
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-slate-400">
                <CreditCard className="h-3.5 w-3.5" />
                Ready for payment
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =============================================================
   MOBILE BILLING
============================================================= */

function MobileBilling() {
  return (
    <div className="flex min-h-[560px] items-center justify-center overflow-hidden rounded-[28px] border border-slate-200 bg-[#f7f8f8] p-8 shadow-[0_30px_90px_rgba(15,23,42,0.08)] md:p-14">
      <div className="relative w-[300px] rounded-[38px] border-[7px] border-slate-950 bg-white p-3 shadow-[0_35px_80px_rgba(15,23,42,0.18)]">
        {/* Dynamic island */}

        <div className="mx-auto h-5 w-24 rounded-full bg-slate-950" />

        <div className="px-3 pb-7 pt-7">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] text-slate-400">New bill</p>

              <p className="mt-1 text-base font-bold text-slate-950">
                ₹12,768
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#16C784]/10">
              <ReceiptIcon />
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-slate-50 p-3">
            <p className="text-[8px] uppercase tracking-[0.16em] text-slate-400">
              Customer
            </p>

            <p className="mt-1 text-xs font-semibold text-slate-900">
              Avyay Enterprises
            </p>
          </div>

          <div className="mt-3 space-y-2">
            <MobileItem
              name="Premium Rice 25kg"
              amount="₹4,800"
            />

            <MobileItem
              name="Basmati Rice 10kg"
              amount="₹4,200"
            />

            <MobileItem
              name="Wholesale Pack"
              amount="₹2,400"
            />
          </div>

          <button className="mt-4 flex h-10 w-full items-center justify-center rounded-xl bg-slate-950 text-xs font-semibold text-white">
            Collect payment
          </button>

          <div className="mt-5 flex items-center justify-center gap-2 text-[8px] uppercase tracking-[0.18em] text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16C784]" />
            QuantPay
          </div>
        </div>
      </div>

      {/* Side statement */}

      <div className="ml-14 hidden max-w-xs lg:block">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#16C784]">
          Mobile
        </p>

        <h3 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-slate-950">
          Your business,
          <br />
          in your hand.
        </h3>

        <p className="mt-5 text-sm leading-6 text-slate-500">
          Create bills, find customers and collect payments wherever
          the work takes you.
        </p>
      </div>
    </div>
  );
}

/* =============================================================
   SMALL COMPONENTS
============================================================= */

function BillItem({
  name,
  quantity,
  amount,
}: {
  name: string;
  quantity: string;
  amount: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-100 p-3">
      <div className="min-w-0">
        <p className="truncate text-xs font-medium text-slate-800">
          {name}
        </p>

        <p className="mt-1 text-[10px] text-slate-400">
          Qty {quantity}
        </p>
      </div>

      <span className="ml-4 text-xs font-semibold text-slate-900">
        {amount}
      </span>
    </div>
  );
}

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between">
      <span className="text-slate-400">{label}</span>
      <span className="font-medium text-slate-700">{value}</span>
    </div>
  );
}

function MobileItem({
  name,
  amount,
}: {
  name: string;
  amount: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3">
      <span className="max-w-[150px] truncate text-[10px] font-medium text-slate-700">
        {name}
      </span>

      <span className="text-[10px] font-semibold text-slate-900">
        {amount}
      </span>
    </div>
  );
}

function ReceiptIcon() {
  return (
    <div className="flex h-4 w-4 flex-col justify-center gap-1">
      <span className="h-px w-full bg-[#16C784]" />
      <span className="h-px w-3/4 bg-[#16C784]" />
      <span className="h-px w-1/2 bg-[#16C784]" />
    </div>
  );
}