"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Boxes,
  ChevronRight,
  CreditCard,
  FileText,
  Package,
  Plus,
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
    description: "Update catalogue",
    href: "/app/products",
    icon: Package,
  },
];

const modules = [
  {
    number: "01",
    title: "Billing",
    description: "Create bills and record sales.",
    metric: "24 bills today",
    href: "/app/billing",
    icon: Receipt,
  },
  {
    number: "02",
    title: "Invoices",
    description: "Manage invoices and collections.",
    metric: "₹12,200 outstanding",
    href: "/app/invoices",
    icon: FileText,
  },
  {
    number: "03",
    title: "Customers",
    description: "Manage your customer relationships.",
    metric: "128 active customers",
    href: "/app/customers",
    icon: Users,
  },
  {
    number: "04",
    title: "Products",
    description: "Manage your catalogue and pricing.",
    metric: "342 products",
    href: "/app/products",
    icon: Package,
  },
  {
    number: "05",
    title: "Inventory",
    description: "Track stock and movement.",
    metric: "8 items running low",
    href: "/app/inventory",
    icon: Boxes,
  },
  {
    number: "06",
    title: "Payments",
    description: "Track collections and payments.",
    metric: "₹36,420 received",
    href: "/app/payments",
    icon: CreditCard,
  },
  {
    number: "07",
    title: "Expenses",
    description: "Track where your money goes.",
    metric: "₹8,240 this month",
    href: "/app/expenses",
    icon: Wallet,
  },
  {
    number: "08",
    title: "Reports",
    description: "Understand business performance.",
    metric: "View business insights",
    href: "/app/reports",
    icon: BarChart3,
  },
];

const attention = [
  {
    icon: Wallet,
    eyebrow: "Collections",
    title: "₹12,200 outstanding",
    description: "6 invoices are awaiting payment.",
    href: "/app/invoices",
    action: "Review invoices",
  },
  {
    icon: Package,
    eyebrow: "Inventory",
    title: "8 products running low",
    description: "Stock is below your reorder levels.",
    href: "/app/inventory",
    action: "Review stock",
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
  {
    customer: "Kumar Stores",
    invoice: "INV-2026-00479",
    amount: "₹4,260",
    status: "Paid",
    time: "2 hrs ago",
  },
];

export default function AppPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#fafafa]">
      <div className="mx-auto max-w-[1440px] px-5 py-7 sm:px-7 lg:px-10 lg:py-10">

        {/* =====================================================
            COMMAND HEADER
        ===================================================== */}

        <section>
          <div className="flex flex-col gap-3">
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#16C784]">
              Command Center
            </p>

            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <div>
                <h1 className="text-4xl font-semibold tracking-[-0.065em] text-slate-950 sm:text-5xl">
                  Run Avyay Enterprises.
                </h1>

                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                  Operate your sales, customers, inventory and money
                  from one connected workspace.
                </p>
              </div>

              <div className="text-left lg:text-right">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300">
                  Today
                </p>

                <p className="mt-1 text-sm font-medium text-slate-600">
                  29 August 2026
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            COMMAND SEARCH
        ===================================================== */}

        <section className="mt-8">
          <button
            type="button"
            className="group flex w-full items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left shadow-[0_12px_40px_rgba(15,23,42,0.035)] transition-all duration-200 hover:border-slate-300 hover:shadow-[0_16px_50px_rgba(15,23,42,0.06)]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
              <Search className="h-4 w-4" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-slate-700">
                What do you want to do?
              </p>

              <p className="mt-0.5 truncate text-xs text-slate-400">
                Search customers, invoices, products, transactions...
              </p>
            </div>

            <span className="hidden rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[9px] font-medium text-slate-400 sm:block">
              ⌘ K
            </span>

            <ChevronRight className="h-4 w-4 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-500" />
          </button>
        </section>

        {/* =====================================================
            QUICK ACTIONS
        ===================================================== */}

        <section className="mt-9">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                Quick actions
              </p>

              <h2 className="mt-1.5 text-xl font-semibold tracking-[-0.04em] text-slate-950">
                Start from here.
              </h2>
            </div>

            <span className="hidden text-[9px] font-medium uppercase tracking-[0.2em] text-slate-300 sm:block">
              Most used
            </span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.href}
                  href={action.href}
                  className={`group flex min-h-[108px] items-center gap-4 rounded-2xl border p-5 transition-all duration-200 ${
                    action.primary
                      ? "border-slate-950 bg-slate-950 text-white shadow-[0_12px_35px_rgba(15,23,42,0.12)] hover:-translate-y-0.5 hover:bg-black"
                      : "border-slate-200 bg-white text-slate-950 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_12px_35px_rgba(15,23,42,0.06)]"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      action.primary
                        ? "bg-[#16C784] text-white"
                        : "bg-slate-50 text-slate-500 group-hover:bg-[#16C784]/10 group-hover:text-[#16C784]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-sm font-semibold ${
                        action.primary
                          ? "text-white"
                          : "text-slate-950"
                      }`}
                    >
                      {action.title}
                    </p>

                    <p
                      className={`mt-1 text-xs ${
                        action.primary
                          ? "text-white/45"
                          : "text-slate-400"
                      }`}
                    >
                      {action.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    className={`h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                      action.primary
                        ? "text-white/40"
                        : "text-slate-300"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            BUSINESS STATE
        ===================================================== */}

        <section className="mt-10 grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Sales */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Business today
                </p>

                <div className="mt-4 flex items-end gap-3">
                  <p className="text-4xl font-semibold tracking-[-0.07em] text-slate-950 sm:text-5xl">
                    ₹48,620
                  </p>

                  <span className="mb-1.5 inline-flex items-center gap-1 text-xs font-semibold text-[#16C784]">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                    12.8%
                  </span>
                </div>

                <p className="mt-2 text-xs text-slate-400">
                  Sales generated today compared with yesterday.
                </p>
              </div>

              <div className="hidden h-10 w-10 items-center justify-center rounded-xl bg-[#16C784]/10 sm:flex">
                <Receipt className="h-4 w-4 text-[#16C784]" />
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 border-t border-slate-100 pt-5">
              <MiniMetric label="Bills" value="24" />
              <MiniMetric label="Collected" value="₹36,420" />
              <MiniMetric label="Outstanding" value="₹12,200" />
              <MiniMetric label="Collection" value="74.9%" />
            </div>
          </div>

          {/* Attention */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Attention
                </p>

                <h2 className="mt-1.5 text-lg font-semibold tracking-[-0.035em] text-slate-950">
                  Keep things moving.
                </h2>
              </div>

              <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[9px] font-medium text-slate-400">
                2 items
              </span>
            </div>

            <div className="mt-5 space-y-2">
              {attention.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex items-center gap-3 rounded-xl border border-slate-100 p-3 transition-colors hover:border-slate-200 hover:bg-slate-50"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50">
                      <Icon className="h-4 w-4 text-slate-500 group-hover:text-[#16C784]" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-300">
                        {item.eyebrow}
                      </p>

                      <p className="mt-0.5 text-xs font-semibold text-slate-900">
                        {item.title}
                      </p>
                    </div>

                    <span className="hidden text-[9px] font-semibold text-slate-400 sm:block">
                      {item.action}
                    </span>

                    <ChevronRight className="h-3.5 w-3.5 text-slate-300 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            OPERATE
        ===================================================== */}

        <section className="mt-11">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#16C784]">
                Operate
              </p>

              <h2 className="mt-1.5 text-2xl font-semibold tracking-[-0.045em] text-slate-950">
                Everything connected.
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Move between every part of your business.
              </p>
            </div>

            <span className="hidden text-[9px] font-medium uppercase tracking-[0.2em] text-slate-300 sm:block">
              08 modules
            </span>
          </div>

          <div className="mt-5 grid overflow-hidden rounded-2xl border border-slate-200 bg-white sm:grid-cols-2 xl:grid-cols-4">
            {modules.map((module, index) => {
              const Icon = module.icon;

              return (
                <Link
                  key={module.href}
                  href={module.href}
                  className={[
                    "group relative flex min-h-[155px] flex-col p-5 transition-colors duration-200",
                    "border-slate-200 hover:bg-slate-50",
                    index % 4 !== 3 ? "xl:border-r" : "",
                    index < 4 ? "xl:border-b" : "",
                    index % 2 === 0 ? "sm:border-r" : "",
                    index < 6 ? "sm:border-b xl:border-b-0" : "",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-semibold tracking-[0.2em] text-slate-300">
                      {module.number}
                    </span>

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 transition-colors group-hover:bg-[#16C784]/10">
                      <Icon className="h-3.5 w-3.5 text-slate-400 transition-colors group-hover:text-[#16C784]" />
                    </div>
                  </div>

                  <div className="mt-5">
                    <h3 className="text-base font-semibold tracking-tight text-slate-950">
                      {module.title}
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-slate-400">
                      {module.description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-5">
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

        {/* =====================================================
            RECENT ACTIVITY
        ===================================================== */}

        <section className="mt-11">
          <div className="flex items-end justify-between border-b border-slate-200 pb-4">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                Activity
              </p>

              <h2 className="mt-1.5 text-xl font-semibold tracking-[-0.04em] text-slate-950">
                Recent transactions
              </h2>
            </div>

            <Link
              href="/app/invoices"
              className="text-[10px] font-semibold text-slate-400 transition-colors hover:text-slate-950"
            >
              View all →
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {transactions.map((transaction) => (
              <Link
                key={transaction.invoice}
                href="/app/invoices"
                className="group flex items-center gap-4 py-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-white">
                  <FileText className="h-4 w-4 text-slate-400 transition-colors group-hover:text-[#16C784]" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold text-slate-900">
                    {transaction.customer}
                  </p>

                  <p className="mt-1 text-[10px] text-slate-400">
                    {transaction.invoice} · {transaction.time}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs font-semibold text-slate-900">
                    {transaction.amount}
                  </p>

                  <p
                    className={`mt-1 text-[10px] font-medium ${
                      transaction.status === "Paid"
                        ? "text-[#16C784]"
                        : "text-amber-500"
                    }`}
                  >
                    {transaction.status}
                  </p>
                </div>

                <ChevronRight className="hidden h-4 w-4 text-slate-200 transition group-hover:translate-x-0.5 group-hover:text-slate-500 sm:block" />
              </Link>
            ))}
          </div>
        </section>

        {/* =====================================================
            FOOTER SIGNAL
        ===================================================== */}

        <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-5">
          <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-slate-300">
            QuantPay Command Center
          </p>

          <p className="hidden text-[10px] text-slate-400 sm:block">
            Everything your business does, connected.
          </p>
        </div>
      </div>
    </div>
  );
}

function MiniMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-[9px] uppercase tracking-[0.16em] text-slate-300">
        {label}
      </p>

      <p className="mt-1 text-xs font-semibold text-slate-700">
        {value}
      </p>
    </div>
  );
}