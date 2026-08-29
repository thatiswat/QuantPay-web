"use client";

import {
  ArrowRight,
  Check,
  ChevronRight,
  FileText,
  Package,
  Plus,
  Smartphone,
  Users,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const products = [
  {
    id: "billing",
    label: "Billing",
    title: "Create. Send. Get paid.",
    description:
      "Create professional invoices in seconds and keep every transaction connected to the customer and product.",
    icon: FileText,
  },
  {
    id: "customers",
    label: "Customers",
    title: "Every customer in context.",
    description:
      "Keep customer information, invoices and payment history together instead of scattered across different tools.",
    icon: Users,
  },
  {
    id: "products",
    label: "Products",
    title: "Know what you sell.",
    description:
      "Manage products, pricing and inventory from one place as your business grows.",
    icon: Package,
  },
  {
    id: "payments",
    label: "Payments",
    title: "Know what is paid.",
    description:
      "Track collections, outstanding payments and transaction history without manual reconciliation.",
    icon: Wallet,
  },
];

export default function ProductSection() {
  const [active, setActive] = useState("billing");

  const current =
    products.find((product) => product.id === active) ?? products[0];

  const CurrentIcon = current.icon;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((currentId) => {
        const index = products.findIndex(
          (product) => product.id === currentId
        );

        return products[(index + 1) % products.length].id;
      });
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-28 md:py-36">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-350px] h-[750px] w-[750px] -translate-x-1/2 rounded-full bg-[#16C784]/[0.035] blur-[140px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-slate-200/70" />

        <div className="absolute inset-x-0 bottom-0 h-px bg-slate-200/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* =======================================================
            INTRO
        ======================================================= */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#16C784]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#16C784]">
              QuantPay Business
            </span>

            <span className="h-px w-7 bg-[#16C784]" />
          </div>

          <h2 className="mt-7 text-5xl font-semibold leading-[0.9] tracking-[-0.065em] text-[#0D0D0D] sm:text-6xl md:text-7xl">
            Everything your business needs.
            <br />
            <span className="text-slate-400">
              Built into QuantPay.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-slate-500 sm:text-base sm:leading-8">
            From your browser to your phone, QuantPay gives you the
            tools to bill customers, manage products, track payments
            and keep your business moving.
          </p>
        </div>

        {/* =======================================================
            PRODUCT EXPERIENCE
        ======================================================= */}

        <div className="mt-20">
          <div className="relative mx-auto max-w-6xl">
            {/* ===================================================
                WEB APP
            =================================================== */}

            <div className="relative z-10 overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_40px_100px_rgba(15,23,42,0.11)]">
              {/* Browser */}

              <div className="flex h-12 items-center justify-between border-b border-slate-200 bg-white px-5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                </div>

                <div className="hidden rounded-md bg-slate-50 px-20 py-1.5 text-[9px] text-slate-400 sm:block">
                  business.quantpay.in
                </div>

                <div className="h-6 w-6 rounded-full bg-slate-100" />
              </div>

              {/* Application */}

              <div className="grid min-h-[480px] md:grid-cols-[175px_1fr]">
                {/* Sidebar */}

                <aside className="hidden border-r border-slate-200 bg-[#fcfcfc] p-4 md:block">
                  <div className="flex items-center gap-2 px-2">
                    <img
                      src="/quantpay-q.svg"
                      alt=""
                      className="h-6 w-6 object-contain"
                    />

                    <span className="text-xs font-bold tracking-[0.08em] text-slate-950">
                      QUANTPAY
                    </span>
                  </div>

                  <div className="mt-8 space-y-1">
                    {products.map((product) => {
                      const Icon = product.icon;
                      const isActive = active === product.id;

                      return (
                        <button
                          key={product.id}
                          type="button"
                          onMouseEnter={() => setActive(product.id)}
                          onClick={() => setActive(product.id)}
                          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all duration-300 ${
                            isActive
                              ? "bg-slate-950 text-white"
                              : "text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                          }`}
                        >
                          <Icon
                            className={`h-4 w-4 ${
                              isActive
                                ? "text-[#16C784]"
                                : "text-slate-400"
                            }`}
                          />

                          <span className="text-[11px] font-medium">
                            {product.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </aside>

                {/* Main */}

                <main className="relative overflow-hidden p-5 md:p-8">
                  {/* Product heading */}

                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#16C784]">
                        {current.label}
                      </p>

                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-slate-950 md:text-3xl">
                        {current.title}
                      </h3>

                      <p className="mt-2 max-w-md text-xs leading-5 text-slate-400">
                        {current.description}
                      </p>
                    </div>

                    <button className="hidden items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-semibold text-white sm:flex">
                      <Plus className="h-3.5 w-3.5" />
                      New bill
                    </button>
                  </div>

                  {/* Product surface */}

                  <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_0.7fr]">
                    {/* Billing card */}

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] text-slate-400">
                            New invoice
                          </p>

                          <p className="mt-1 text-sm font-semibold text-slate-950">
                            INV-2026-0148
                          </p>
                        </div>

                        <span className="rounded-full bg-[#16C784]/10 px-2.5 py-1 text-[9px] font-semibold text-[#16C784]">
                          Draft
                        </span>
                      </div>

                      <div className="mt-6 rounded-xl bg-slate-50 p-4">
                        <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
                          Customer
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-900">
                          Acme Traders
                        </p>
                      </div>

                      <div className="mt-3 space-y-2">
                        <BillRow
                          name="Premium Product"
                          quantity="2 × ₹8,500"
                          amount="₹17,000"
                        />

                        <BillRow
                          name="Service"
                          quantity="1 × ₹4,500"
                          amount="₹4,500"
                        />
                      </div>

                      <div className="mt-5 border-t border-slate-100 pt-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-400">
                            Total
                          </span>

                          <span className="text-xl font-bold tracking-[-0.03em] text-slate-950">
                            ₹21,500
                          </span>
                        </div>
                      </div>

                      <button className="mt-5 flex h-10 w-full items-center justify-center rounded-xl bg-slate-950 text-xs font-semibold text-white transition hover:bg-black">
                        Create invoice
                      </button>
                    </div>

                    {/* Activity */}

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] text-slate-400">
                            Business activity
                          </p>

                          <p className="mt-1 text-sm font-semibold text-slate-950">
                            Today
                          </p>
                        </div>

                        <CurrentIcon className="h-4 w-4 text-[#16C784]" />
                      </div>

                      <div className="mt-6 space-y-3">
                        <ActivityRow
                          title="Payment received"
                          name="Acme Traders"
                          amount="₹24,500"
                        />

                        <ActivityRow
                          title="Invoice created"
                          name="Sharma Industries"
                          amount="₹18,200"
                        />

                        <ActivityRow
                          title="Payment received"
                          name="Nova Enterprises"
                          amount="₹12,400"
                        />
                      </div>

                      <div className="mt-5 rounded-xl border border-[#16C784]/10 bg-[#16C784]/[0.05] p-4">
                        <p className="text-[10px] text-slate-400">
                          Collected today
                        </p>

                        <p className="mt-1 text-xl font-bold text-slate-950">
                          ₹55,100
                        </p>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>

            {/* ===================================================
                MOBILE PRODUCT
            =================================================== */}

            <div className="absolute -bottom-14 right-3 z-20 hidden w-[210px] overflow-hidden rounded-[30px] border-[6px] border-slate-950 bg-white shadow-[0_35px_80px_rgba(15,23,42,0.25)] sm:block lg:-right-8 lg:w-[235px]">
              {/* Phone top */}

              <div className="relative h-7 bg-slate-950">
                <div className="absolute left-1/2 top-1.5 h-4 w-20 -translate-x-1/2 rounded-full bg-black" />
              </div>

              {/* Mobile screen */}

              <div className="bg-white px-4 pb-5 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[8px] text-slate-400">
                      QuantPay Business
                    </p>

                    <p className="mt-0.5 text-sm font-bold text-slate-950">
                      New bill
                    </p>
                  </div>

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#16C784]/10">
                    <FileText className="h-3.5 w-3.5 text-[#16C784]" />
                  </div>
                </div>

                <div className="mt-5 rounded-xl bg-slate-50 p-3">
                  <p className="text-[8px] text-slate-400">
                    Customer
                  </p>

                  <p className="mt-1 text-[11px] font-semibold text-slate-900">
                    Acme Traders
                  </p>
                </div>

                <div className="mt-3 rounded-xl border border-slate-200 p-3">
                  <div className="flex justify-between">
                    <span className="text-[9px] text-slate-400">
                      Premium Product
                    </span>

                    <span className="text-[9px] font-semibold">
                      ₹17,000
                    </span>
                  </div>

                  <div className="mt-2 flex justify-between">
                    <span className="text-[9px] text-slate-400">
                      Service
                    </span>

                    <span className="text-[9px] font-semibold">
                      ₹4,500
                    </span>
                  </div>

                  <div className="mt-3 border-t border-slate-100 pt-3">
                    <div className="flex justify-between">
                      <span className="text-[9px] text-slate-400">
                        Total
                      </span>

                      <span className="text-sm font-bold text-slate-950">
                        ₹21,500
                      </span>
                    </div>
                  </div>
                </div>

                <button className="mt-4 flex h-9 w-full items-center justify-center rounded-xl bg-[#16C784] text-[10px] font-bold text-white">
                  Create bill
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-[8px] text-slate-300">
                  <Smartphone className="h-3 w-3" />
                  QuantPay Business
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            PRODUCT CAPABILITIES
        ======================================================= */}

        <div className="mt-24 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-3">
          <Capability
            title="Web"
            description="Run your business from a full desktop workspace."
          />

          <Capability
            title="Mobile"
            description="Create bills and stay on top of business from anywhere."
          />

          <Capability
            title="Billing"
            description="Turn every sale into a clear, trackable transaction."
          />
        </div>

        {/* =======================================================
            CTA
        ======================================================= */}

        <div className="mt-12 flex justify-center">
          <Link
            href="/product"
            className="group inline-flex items-center text-sm font-semibold text-slate-800 transition-colors hover:text-[#16C784]"
          >
            Explore QuantPay Business

            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   BILL ROW
================================================================ */

function BillRow({
  name,
  quantity,
  amount,
}: {
  name: string;
  quantity: string;
  amount: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-100 px-3 py-3">
      <div>
        <p className="text-xs font-medium text-slate-800">
          {name}
        </p>

        <p className="mt-0.5 text-[9px] text-slate-400">
          {quantity}
        </p>
      </div>

      <span className="text-xs font-semibold text-slate-900">
        {amount}
      </span>
    </div>
  );
}

/* ================================================================
   ACTIVITY ROW
================================================================ */

function ActivityRow({
  title,
  name,
  amount,
}: {
  title: string;
  name: string;
  amount: string;
}) {
  return (
    <div className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3 transition hover:border-slate-300">
      <div className="flex items-center gap-2.5">
        <div className="h-7 w-7 rounded-full bg-slate-100" />

        <div>
          <p className="text-[10px] font-semibold text-slate-800">
            {title}
          </p>

          <p className="mt-0.5 text-[8px] text-slate-400">
            {name}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <span className="text-[10px] font-semibold text-[#16C784]">
          {amount}
        </span>

        <ChevronRight className="h-3 w-3 text-slate-200 transition-transform group-hover:translate-x-0.5" />
      </div>
    </div>
  );
}

/* ================================================================
   CAPABILITY
================================================================ */

function Capability({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#16C784]" />

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-800">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}