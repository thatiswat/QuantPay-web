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
    description: "Create bills and record sales",
    metric: "24 bills today",
    href: "/app/billing",
    icon: Receipt,
  },
  {
    number: "02",
    title: "Invoices",
    description: "Create and manage receivables",
    metric: "₹12,200 outstanding",
    href: "/app/invoices",
    icon: FileText,
  },
  {
    number: "03",
    title: "Customers",
    description: "Manage customer relationships",
    metric: "128 active",
    href: "/app/customers",
    icon: Users,
  },
  {
    number: "04",
    title: "Products",
    description: "Manage products and catalogue",
    metric: "342 products",
    href: "/app/products",
    icon: Package,
  },
  {
    number: "05",
    title: "Inventory",
    description: "Track stock and movement",
    metric: "8 need attention",
    href: "/app/inventory",
    icon: Boxes,
  },
  {
    number: "06",
    title: "Payments",
    description: "Track collections and payments",
    metric: "₹36,420 collected",
    href: "/app/payments",
    icon: CreditCard,
  },
  {
    number: "07",
    title: "Expenses",
    description: "Manage business spending",
    metric: "₹8,240 this month",
    href: "/app/expenses",
    icon: Wallet,
  },
  {
    number: "08",
    title: "Reports",
    description: "Understand business performance",
    metric: "View insights",
    href: "/app/reports",
    icon: BarChart3,
  },
];

export default function AppPage() {
  return (
    <main className="h-[calc(100svh-64px)] overflow-hidden bg-[#fafafa]">
      <div className="mx-auto flex h-full max-w-[1500px] flex-col px-5 py-4 sm:px-7 lg:px-9">

        {/* =====================================================
            COMMAND CENTER HEADER
        ===================================================== */}

        <section className="flex shrink-0 items-end justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#16C784]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#16C784]">
                Command Center
              </span>
            </div>

            <h1 className="mt-1.5 text-3xl font-semibold leading-none tracking-[-0.065em] text-slate-950 sm:text-[36px]">
              Good evening.
            </h1>

            <p className="mt-1.5 text-sm text-slate-400">
              Avyay Enterprises · Run your business from one place.
            </p>
          </div>

          <div className="hidden text-right sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">
              Today
            </p>

            <p className="mt-1 text-sm font-medium text-slate-600">
              29 August 2026
            </p>
          </div>
        </section>

        {/* =====================================================
            SEARCH
        ===================================================== */}

        <button
          type="button"
          aria-label="Search QuantPay"
          className="
            group
            mt-3
            flex
            h-10
            w-full
            shrink-0
            items-center
            gap-3
            rounded-xl
            border
            border-slate-200
            bg-white
            px-3.5
            text-left
            transition-all
            duration-200
            hover:border-slate-300
            hover:shadow-[0_8px_25px_rgba(15,23,42,0.04)]
          "
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white">
            <Search className="h-3.5 w-3.5" />
          </div>

          <span className="min-w-0 flex-1 text-sm font-medium text-slate-500">
            Search or jump to anything...
          </span>

          <span className="hidden rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] text-slate-400 sm:block">
            ⌘ K
          </span>

          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* =====================================================
            QUICK ACTIONS
        ===================================================== */}

        <section className="mt-3 shrink-0">
          <div className="flex items-center justify-between">
            <Label>Quick actions</Label>

            <span className="hidden text-[10px] text-slate-300 sm:block">
              Start something new
            </span>
          </div>

          <div className="mt-1.5 grid grid-cols-2 gap-2 lg:grid-cols-4">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.href}
                  href={action.href}
                  className={[
                    "group flex h-[52px] items-center gap-3 rounded-xl border px-3",
                    "transition-all duration-200",
                    action.primary
                      ? "border-slate-950 bg-slate-950 text-white hover:bg-black"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg",
                      action.primary
                        ? "bg-[#16C784] text-white"
                        : "bg-slate-50 text-slate-500 group-hover:bg-[#16C784]/10 group-hover:text-[#16C784]",
                    ].join(" ")}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className={[
                        "text-sm font-semibold",
                        action.primary
                          ? "text-white"
                          : "text-slate-900",
                      ].join(" ")}
                    >
                      {action.title}
                    </p>

                    <p
                      className={[
                        "mt-0.5 text-[11px]",
                        action.primary
                          ? "text-white/50"
                          : "text-slate-400",
                      ].join(" ")}
                    >
                      {action.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    className={[
                      "h-3 w-3 shrink-0 transition-all duration-200",
                      action.primary
                        ? "text-white/35 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        : "text-slate-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                    ].join(" ")}
                  />
                </Link>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            OPERATE
        ===================================================== */}

        <section className="mt-4 flex min-h-0 flex-1 flex-col">

          {/* Heading */}

          <div className="flex shrink-0 items-end justify-between">
            <div>
              <Label>Operate</Label>

              <p className="mt-1 text-sm text-slate-400">
                Everything you need to run your business.
              </p>
            </div>

            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300">
              08 modules
            </span>
          </div>

          {/* =================================================
              EIGHT INDEPENDENT MODULE BUTTONS
          ================================================= */}

          <div className="mt-2.5 min-h-0 flex-1">
            <div className="grid h-full grid-cols-2 gap-2.5 lg:grid-cols-4 lg:grid-rows-2">

              {modules.map((module) => {
                const Icon = module.icon;

                return (
                  <Link
                    key={module.href}
                    href={module.href}
                    className="
                      group
                      relative
                      flex
                      min-h-0
                      flex-col
                      overflow-hidden
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      p-4
                      shadow-[0_1px_3px_rgba(15,23,42,0.025)]
                      transition-all
                      duration-200
                      hover:-translate-y-0.5
                      hover:border-slate-300
                      hover:shadow-[0_10px_28px_rgba(15,23,42,0.07)]
                      sm:p-5
                    "
                  >
                    {/* Green hover accent */}

                    <span
                      className="
                        absolute
                        left-0
                        top-0
                        h-[2px]
                        w-0
                        bg-[#16C784]
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />

                    {/* -----------------------------------------
                        TOP
                    ----------------------------------------- */}

                    <div className="flex shrink-0 items-center justify-between">
                      <span className="text-[9px] font-semibold tracking-[0.2em] text-slate-300">
                        {module.number}
                      </span>

                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-slate-50
                          transition-colors
                          duration-200
                          group-hover:bg-[#16C784]/10
                        "
                      >
                        <Icon
                          className="
                            h-4
                            w-4
                            text-slate-400
                            transition-colors
                            duration-200
                            group-hover:text-[#16C784]
                          "
                        />
                      </div>
                    </div>

                    {/* -----------------------------------------
                        CONTENT
                    ----------------------------------------- */}

                    <div className="mt-3 min-w-0">
                      <h2
                        className="
                          text-lg
                          font-semibold
                          leading-tight
                          tracking-[-0.035em]
                          text-slate-950
                          sm:text-xl
                        "
                      >
                        {module.title}
                      </h2>

                      <p className="mt-1 max-w-[240px] text-xs leading-4 text-slate-400">
                        {module.description}
                      </p>
                    </div>

                    {/* -----------------------------------------
                        FOOTER
                    ----------------------------------------- */}

                    <div className="mt-auto flex min-w-0 items-center justify-between gap-2 pt-3">
                      <span className="min-w-0 truncate text-xs font-medium text-slate-500">
                        {module.metric}
                      </span>

                      <span
                        className="
                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-slate-200
                          transition-all
                          duration-200
                          group-hover:border-[#16C784]/30
                          group-hover:bg-[#16C784]/10
                        "
                      >
                        <ArrowUpRight
                          className="
                            h-3.5
                            w-3.5
                            text-slate-300
                            transition-all
                            duration-200
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                            group-hover:text-[#16C784]
                          "
                        />
                      </span>
                    </div>
                  </Link>
                );
              })}

            </div>
          </div>
        </section>

        {/* =====================================================
            FOOT SIGNAL
        ===================================================== */}

        <div className="mt-2 flex shrink-0 items-center justify-between">
          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-300">
            QuantPay Command Center
          </span>

          <span className="text-[10px] text-slate-300">
            One system. Every transaction. Your business.
          </span>
        </div>
      </div>
    </main>
  );
}

/* =============================================================
   LABEL
============================================================= */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">
      {children}
    </p>
  );
}