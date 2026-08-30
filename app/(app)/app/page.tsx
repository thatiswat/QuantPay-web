"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Boxes,
  ChevronRight,
  CreditCard,
  FileText,
  Package,
  Receipt,
  Search,
  Users,
  Wallet,
} from "lucide-react";

const quickActions = [
  {
    title: "New bill",
    description: "Record a sale",
    href: "/app/billing",
    icon: Receipt,
    primary: true,
  },
  {
    title: "New invoice",
    description: "Create a receivable",
    href: "/app/invoices",
    icon: FileText,
  },
  {
    title: "Add customer",
    description: "Create customer",
    href: "/app/customers",
    icon: Users,
  },
  {
    title: "Add product",
    description: "Add to catalogue",
    href: "/app/products",
    icon: Package,
  },
];

const modules = [
  {
    number: "01",
    title: "Billing",
    description: "Bills & sales",
    metric: "24 today",
    href: "/app/billing",
    icon: Receipt,
  },
  {
    number: "02",
    title: "Invoices",
    description: "Receivables",
    metric: "₹12,200 due",
    href: "/app/invoices",
    icon: FileText,
  },
  {
    number: "03",
    title: "Customers",
    description: "Relationships",
    metric: "128 active",
    href: "/app/customers",
    icon: Users,
  },
  {
    number: "04",
    title: "Products",
    description: "Catalogue",
    metric: "342 items",
    href: "/app/products",
    icon: Package,
  },
  {
    number: "05",
    title: "Inventory",
    description: "Stock & movement",
    metric: "8 low stock",
    href: "/app/inventory",
    icon: Boxes,
  },
  {
    number: "06",
    title: "Payments",
    description: "Collections",
    metric: "₹36,420",
    href: "/app/payments",
    icon: CreditCard,
  },
  {
    number: "07",
    title: "Expenses",
    description: "Business spending",
    metric: "₹8,240",
    href: "/app/expenses",
    icon: Wallet,
  },
  {
    number: "08",
    title: "Reports",
    description: "Business insight",
    metric: "View insights",
    href: "/app/reports",
    icon: BarChart3,
  },
];

const transactions = [
  {
    customer: "Avyay Enterprises",
    invoice: "INV-2026-00482",
    amount: "₹12,768",
    status: "Paid",
    time: "2 min ago",
  },
  {
    customer: "Sharma Traders",
    invoice: "INV-2026-00481",
    amount: "₹8,420",
    status: "Paid",
    time: "24 min ago",
  },
  {
    customer: "Nova Distributors",
    invoice: "INV-2026-00480",
    amount: "₹6,840",
    status: "Pending",
    time: "1 hr ago",
  },
];

export default function AppPage() {
  return (
    <main className="h-[calc(100svh-64px)] overflow-hidden bg-[#fafafa]">
      <div className="mx-auto flex h-full max-w-[1500px] flex-col px-5 py-5 sm:px-7 lg:px-9">

        {/* =====================================================
            TOP
        ===================================================== */}

        <div className="flex shrink-0 items-end justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#16C784]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#16C784]">
                Command Center
              </span>
            </div>

            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.065em] text-slate-950 sm:text-4xl">
              Good evening.
            </h1>

            <p className="mt-1 text-xs text-slate-400">
              Avyay Enterprises · Everything at a glance.
            </p>
          </div>

          <div className="hidden text-right sm:block">
            <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-300">
              Today
            </p>

            <p className="mt-1 text-xs font-medium text-slate-600">
              29 August 2026
            </p>
          </div>
        </div>

        {/* =====================================================
            COMMAND SEARCH
        ===================================================== */}

        <button
          type="button"
          className="group mt-4 flex h-11 w-full shrink-0 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 text-left transition-all hover:border-slate-300 hover:shadow-[0_8px_25px_rgba(15,23,42,0.04)]"
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white">
            <Search className="h-3.5 w-3.5" />
          </div>

          <div className="min-w-0 flex-1">
            <span className="text-xs font-medium text-slate-500">
              Search or jump to anything...
            </span>
          </div>

          <span className="hidden rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[8px] text-slate-400 sm:block">
            ⌘ K
          </span>

          <ChevronRight className="h-3.5 w-3.5 text-slate-300 transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* =====================================================
            QUICK ACTIONS
        ===================================================== */}

        <div className="mt-4 shrink-0">
          <Label>Quick actions</Label>

          <div className="mt-2 grid grid-cols-2 gap-2 lg:grid-cols-4">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.href}
                  href={action.href}
                  className={`group flex h-[58px] items-center gap-3 rounded-xl border px-3.5 transition-all duration-200 ${
                    action.primary
                      ? "border-slate-950 bg-slate-950 text-white hover:bg-black"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                      action.primary
                        ? "bg-[#16C784]"
                        : "bg-slate-50 text-slate-500 group-hover:bg-[#16C784]/10 group-hover:text-[#16C784]"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-[11px] font-semibold ${
                        action.primary
                          ? "text-white"
                          : "text-slate-900"
                      }`}
                    >
                      {action.title}
                    </p>

                    <p
                      className={`mt-0.5 text-[9px] ${
                        action.primary
                          ? "text-white/45"
                          : "text-slate-400"
                      }`}
                    >
                      {action.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    className={`h-3.5 w-3.5 ${
                      action.primary
                        ? "text-white/35"
                        : "text-slate-300"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            MAIN WORKSPACE
        ===================================================== */}

        <div className="mt-5 min-h-0 flex-1">

          {/* MODULES */}

          <section className="h-full">
            <div className="flex items-center justify-between">
              <Label>Operate</Label>

              <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-slate-300">
                08 modules
              </span>
            </div>

            <div className="mt-2 grid h-[calc(100%-24px)] grid-cols-2 overflow-hidden rounded-xl border border-slate-200 bg-white lg:grid-cols-4">
              {modules.map((module, index) => {
                const Icon = module.icon;

                return (
                  <Link
                    key={module.href}
                    href={module.href}
                    className={[
                      "group relative flex flex-col p-4 transition-colors hover:bg-slate-50",
                      "border-slate-200",
                      index % 4 !== 3 ? "lg:border-r" : "",
                      index < 4 ? "lg:border-b" : "",
                      index % 2 === 0 ? "border-r" : "",
                      index < 6 ? "border-b lg:border-b-0" : "",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-semibold tracking-[0.2em] text-slate-300">
                        {module.number}
                      </span>

                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 transition-colors group-hover:bg-[#16C784]/10">
                        <Icon className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#16C784]" />
                      </div>
                    </div>

                    <div className="mt-3">
                      <h3 className="text-sm font-semibold tracking-tight text-slate-950">
                        {module.title}
                      </h3>

                      <p className="mt-0.5 text-[9px] text-slate-400">
                        {module.description}
                      </p>
                    </div>

                    <div className="mt-auto flex items-end justify-between">
                      <span className="text-[9px] font-medium text-slate-400">
                        {module.metric}
                      </span>

                      <ArrowUpRight className="h-3 w-3 text-slate-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#16C784]" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>

        {/* =====================================================
            BOTTOM INFORMATION STRIP
        ===================================================== */}

        <div className="mt-5 grid h-[145px] shrink-0 gap-3 lg:grid-cols-[0.8fr_1.2fr]">

          {/* TODAY */}

          <section className="rounded-xl border border-slate-200 bg-white p-4">
            <Label>Today</Label>

            <div className="mt-3 grid grid-cols-3 gap-3">
              <Stat
                label="Sales"
                value="₹48,620"
                detail="+12.8%"
                positive
              />

              <Stat
                label="Collected"
                value="₹36,420"
                detail="74.9%"
              />

              <Stat
                label="Outstanding"
                value="₹12,200"
                detail="6 invoices"
                warning
              />
            </div>
          </section>

          {/* ACTIVITY */}

          <section className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <Label>Recent activity</Label>

              <Link
                href="/app/invoices"
                className="text-[9px] font-semibold text-slate-400 hover:text-slate-950"
              >
                View all →
              </Link>
            </div>

            <div className="mt-2 divide-y divide-slate-100">
              {transactions.map((transaction) => (
                <Link
                  key={transaction.invoice}
                  href="/app/invoices"
                  className="group flex items-center gap-3 py-2"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-50">
                    <FileText className="h-3 w-3 text-slate-400 group-hover:text-[#16C784]" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[10px] font-semibold text-slate-800">
                      {transaction.customer}
                    </p>

                    <p className="text-[8px] text-slate-400">
                      {transaction.invoice} · {transaction.time}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[10px] font-semibold text-slate-900">
                      {transaction.amount}
                    </p>

                    <p
                      className={`text-[8px] font-medium ${
                        transaction.status === "Paid"
                          ? "text-[#16C784]"
                          : "text-amber-500"
                      }`}
                    >
                      {transaction.status}
                    </p>
                  </div>

                  <ChevronRight className="h-3 w-3 text-slate-200 group-hover:text-slate-500" />
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* =====================================================
            SIGNAL
        ===================================================== */}

        <div className="mt-3 flex shrink-0 items-center justify-between">
          <span className="text-[7px] font-semibold uppercase tracking-[0.25em] text-slate-300">
            QuantPay Command Center
          </span>

          <span className="text-[8px] text-slate-300">
            One system. Every transaction. Your business.
          </span>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   LABEL
========================================================= */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[8px] font-semibold uppercase tracking-[0.28em] text-slate-400">
      {children}
    </p>
  );
}

/* =========================================================
   STAT
========================================================= */

function Stat({
  label,
  value,
  detail,
  positive,
  warning,
}: {
  label: string;
  value: string;
  detail: string;
  positive?: boolean;
  warning?: boolean;
}) {
  return (
    <div>
      <p className="text-[8px] uppercase tracking-[0.16em] text-slate-300">
        {label}
      </p>

      <p className="mt-1.5 text-lg font-semibold tracking-[-0.045em] text-slate-950">
        {value}
      </p>

      <p
        className={`mt-0.5 text-[8px] ${
          positive
            ? "font-medium text-[#16C784]"
            : warning
              ? "font-medium text-amber-500"
              : "text-slate-400"
        }`}
      >
        {detail}
      </p>
    </div>
  );
}