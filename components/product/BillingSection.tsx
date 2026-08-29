"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CreditCard,
  FileText,
  Package,
  UserRound,
} from "lucide-react";
import { useEffect, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Create the bill",
    description:
      "Choose the customer, add the products and create the invoice in seconds.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Keep everything in sync",
    description:
      "The same sale updates the customer, inventory and transaction record automatically.",
    icon: Package,
  },
  {
    number: "03",
    title: "Know what happened",
    description:
      "See what was collected, what remains pending and what needs attention.",
    icon: CreditCard,
  },
];

export default function BillingSection() {
  const [activeRecord, setActiveRecord] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveRecord((current) => (current + 1) % 4);
    }, 1800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-28 md:py-36">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-300px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#16C784]/[0.025] blur-[130px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-slate-200/70" />

        <div className="absolute inset-x-0 bottom-0 h-px bg-slate-200/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#16C784]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#16C784]">
                Billing
              </span>
            </div>

            <h2 className="mt-6 max-w-xl text-5xl font-semibold leading-[0.9] tracking-[-0.07em] text-[#0D0D0D] sm:text-6xl md:text-7xl">
              One sale.
              <br />
              <span className="text-slate-400">
                Everything connected.
              </span>
            </h2>
          </div>

          <div className="lg:ml-auto lg:max-w-xl">
            <p className="text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              With QuantPay, a sale does more than create an invoice.
              It becomes a connected business event — updating the
              customer, inventory and payment record together.
            </p>
          </div>
        </div>

        {/* =====================================================
            MAIN TRANSACTION EXPERIENCE
        ===================================================== */}

        <div className="mt-16 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {/* ===================================================
              INVOICE
          =================================================== */}

          <div className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.07)]">
            {/* Top bar */}

            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5 md:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950">
                  <FileText className="h-4 w-4 text-white" />
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    QuantPay Billing
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-slate-950">
                    New invoice
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-[#16C784]/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#16C784]">
                Ready
              </span>
            </div>

            {/* Invoice body */}

            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between border-b border-slate-100 pb-6">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Customer
                  </p>

                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                    Avyay Enterprises
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    INV-2026-00482 · 29 Aug 2026
                  </p>
                </div>

                <div className="hidden text-right sm:block">
                  <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
                    Status
                  </p>

                  <p className="mt-1 text-xs font-semibold text-[#16C784]">
                    Paid
                  </p>
                </div>
              </div>

              {/* Items */}

              <div className="mt-6">
                <div className="mb-3 grid grid-cols-[1fr_auto_auto] gap-5 px-3 text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                  <span>Product</span>
                  <span>Qty</span>
                  <span>Amount</span>
                </div>

                <div className="space-y-2">
                  <InvoiceRow
                    product="Premium Rice 25kg"
                    quantity="4"
                    amount="₹4,800"
                  />

                  <InvoiceRow
                    product="Basmati Rice 10kg"
                    quantity="6"
                    amount="₹4,200"
                  />

                  <InvoiceRow
                    product="Wholesale Pack"
                    quantity="2"
                    amount="₹2,400"
                  />
                </div>
              </div>

              {/* Total */}

              <div className="mt-7 flex items-end justify-between border-t border-slate-100 pt-6">
                <div>
                  <p className="text-xs text-slate-400">
                    Total collected
                  </p>

                  <p className="mt-1 text-3xl font-bold tracking-[-0.04em] text-slate-950">
                    ₹12,768
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-[#16C784]/10 px-3 py-2">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#16C784]">
                    <Check className="h-2.5 w-2.5 text-white" />
                  </span>

                  <span className="text-[9px] font-semibold text-[#16C784]">
                    Payment received
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom accent */}

            <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#16C784] to-transparent opacity-40" />
          </div>

          {/* ===================================================
              CONNECTED BUSINESS
          =================================================== */}

          <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-6 md:p-8">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Connected records
              </p>

              <h3 className="mt-3 max-w-sm text-2xl font-semibold leading-[1] tracking-[-0.05em] text-slate-950 md:text-3xl">
                The transaction
                <br />
                keeps moving.
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
                One completed sale creates the context your business
                needs everywhere else.
              </p>
            </div>

            {/* Records */}

            <div className="relative mt-8 space-y-2.5">
              {/* Connecting rail */}

              <div className="absolute left-[19px] top-6 bottom-6 w-px bg-slate-100" />

              <ConnectedItem
                icon={UserRound}
                title="Customer"
                value="Avyay Enterprises"
                status="Updated"
                active={activeRecord === 0}
              />

              <ConnectedItem
                icon={Package}
                title="Inventory"
                value="12 units sold"
                status="Updated"
                active={activeRecord === 1}
              />

              <ConnectedItem
                icon={FileText}
                title="Invoice"
                value="INV-2026-00482"
                status="Created"
                active={activeRecord === 2}
              />

              <ConnectedItem
                icon={CreditCard}
                title="Payment"
                value="₹12,768 received"
                status="Completed"
                active={activeRecord === 3}
              />
            </div>

            {/* Signal */}

            <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
              <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-300">
                One source of truth
              </span>

              <span className="flex items-center gap-2 text-[10px] font-semibold text-[#16C784]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#16C784]" />
                Synced
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <div className="mt-16 border-y border-slate-200">
          <div className="grid md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className={[
                    "group relative px-1 py-9 md:px-8 md:py-10",
                    index !== steps.length - 1
                      ? "border-b border-slate-200 md:border-b-0 md:border-r"
                      : "",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-[#16C784]">
                      {step.number}
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 transition-all duration-300 group-hover:bg-[#16C784]/10">
                      <Icon className="h-4 w-4 text-slate-400 transition-colors duration-300 group-hover:text-[#16C784]" />
                    </div>
                  </div>

                  <h3 className="mt-7 text-lg font-semibold tracking-tight text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>

                  {index !== steps.length - 1 && (
                    <ArrowRight className="absolute bottom-10 right-5 hidden h-4 w-4 text-slate-200 md:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ===================================================== */}

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-300">
            Transaction → Business data
          </p>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ArrowUpRight className="h-4 w-4 text-[#16C784]" />
            Every transaction adds context.
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   INVOICE ROW
============================================================= */

function InvoiceRow({
  product,
  quantity,
  amount,
}: {
  product: string;
  quantity: string;
  amount: string;
}) {
  return (
    <div className="grid grid-cols-[1fr_auto_auto] items-center gap-5 rounded-xl border border-slate-100 bg-slate-50/40 px-3 py-3.5 transition-all duration-300 hover:border-slate-200 hover:bg-white">
      <span className="min-w-0 truncate text-xs font-medium text-slate-800">
        {product}
      </span>

      <span className="text-[10px] text-slate-400">
        {quantity}
      </span>

      <span className="text-xs font-semibold text-slate-900">
        {amount}
      </span>
    </div>
  );
}

/* =============================================================
   CONNECTED ITEM
============================================================= */

function ConnectedItem({
  icon: Icon,
  title,
  value,
  status,
  active,
}: {
  icon: typeof UserRound;
  title: string;
  value: string;
  status: string;
  active: boolean;
}) {
  return (
    <div
      className={[
        "relative flex items-center gap-3 rounded-2xl border p-3.5 transition-all duration-500",
        active
          ? "border-[#16C784]/20 bg-[#16C784]/[0.035] shadow-[0_8px_25px_rgba(22,199,132,0.06)]"
          : "border-slate-100 bg-white",
      ].join(" ")}
    >
      <div
        className={[
          "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-500",
          active
            ? "bg-[#16C784]/10"
            : "bg-slate-50",
        ].join(" ")}
      >
        <Icon
          className={[
            "h-4 w-4 transition-colors duration-500",
            active ? "text-[#16C784]" : "text-slate-400",
          ].join(" ")}
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[9px] uppercase tracking-[0.16em] text-slate-400">
          {title}
        </p>

        <p className="mt-1 truncate text-xs font-semibold text-slate-900">
          {value}
        </p>
      </div>

      <span
        className={[
          "shrink-0 text-[9px] font-semibold transition-colors duration-500",
          active ? "text-[#16C784]" : "text-slate-300",
        ].join(" ")}
      >
        {status}
      </span>
    </div>
  );
}