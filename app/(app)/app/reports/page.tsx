"use client";

import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowUpRight,
  BarChart3,
  Boxes,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  FileBarChart,
  FileText,
  Package,
  Receipt,
  Users,
  Wallet,
} from "lucide-react";

const reportModules = [
  {
    number: "01",
    title: "Executive Summary",
    description: "A clear overview of business performance and position.",
    href: "/app/reports/executive",
    icon: FileBarChart,
  },
  {
    number: "02",
    title: "Sales & Revenue",
    description: "Review sales activity, revenue and business trends.",
    href: "/app/reports/sales",
    icon: Receipt,
  },
  {
    number: "03",
    title: "Payments",
    description: "Understand collections, settlements and receivables.",
    href: "/app/reports/payments",
    icon: CreditCard,
  },
  {
    number: "04",
    title: "Expenses",
    description: "Review spending and business expense patterns.",
    href: "/app/reports/expenses",
    icon: Wallet,
  },
  {
    number: "05",
    title: "Customers",
    description: "Understand customer activity and relationships.",
    href: "/app/reports/customers",
    icon: Users,
  },
  {
    number: "06",
    title: "Products",
    description: "Review product performance and sales movement.",
    href: "/app/reports/products",
    icon: Package,
  },
  {
    number: "07",
    title: "Inventory",
    description: "Review stock movement, availability and activity.",
    href: "/app/reports/inventory",
    icon: Boxes,
  },
  {
    number: "08",
    title: "Business Report",
    description: "Generate a complete report for your business.",
    href: "/app/reports/business",
    icon: FileText,
  },
];

const periods = [
  "This month",
  "Last month",
  "This quarter",
  "This year",
];

export default function ReportsPage() {
  return (
    <main className="h-[calc(100svh-64px)] overflow-hidden bg-[#fafafa]">
      <div className="mx-auto flex h-full max-w-[1500px] flex-col px-5 py-4 sm:px-7 lg:px-9">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="flex shrink-0 items-end justify-between">

          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-px w-7 bg-[#16C784]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#16C784]">
                Reports
              </span>
            </div>

            <h1 className="mt-2 text-3xl font-semibold leading-none tracking-[-0.065em] text-slate-950 sm:text-[36px]">
              Understand your business.
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Choose what you want to review, compare or download.
            </p>
          </div>

          {/* Header actions */}

          <div className="hidden items-center gap-2 sm:flex">

            <button
              type="button"
              className="
                flex
                h-9
                items-center
                gap-2
                rounded-lg
                border
                border-slate-200
                bg-white
                px-3
                text-xs
                font-medium
                text-slate-600
                transition
                hover:border-slate-300
                hover:text-slate-950
              "
            >
              <CalendarDays className="h-3.5 w-3.5 text-slate-400" />
              Reporting period
            </button>

            <button
              type="button"
              className="
                flex
                h-9
                items-center
                gap-2
                rounded-lg
                bg-slate-950
                px-3
                text-xs
                font-semibold
                text-white
                transition
                hover:bg-black
              "
            >
              <ArrowDownToLine className="h-3.5 w-3.5" />
              Download report
            </button>

          </div>
        </header>

        {/* =====================================================
            REPORTING CONTROL
        ===================================================== */}

        <section className="mt-4 shrink-0 rounded-2xl border border-slate-200 bg-white p-3">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            {/* Period */}

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50">
                <CalendarDays className="h-4 w-4 text-slate-500" />
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-900">
                  Reporting period
                </p>

                <p className="text-[10px] text-slate-400">
                  Select the period for your reports
                </p>
              </div>

            </div>

            {/* Period selector */}

            <div className="flex items-center gap-1 overflow-hidden rounded-lg bg-slate-50 p-1">

              {periods.map((period, index) => (
                <button
                  key={period}
                  type="button"
                  className={[
                    "h-8 rounded-md px-3 text-[10px] font-semibold transition",
                    index === 0
                      ? "bg-white text-slate-950 shadow-sm"
                      : "text-slate-400 hover:text-slate-700",
                  ].join(" ")}
                >
                  {period}
                </button>
              ))}

            </div>

          </div>
        </section>

        {/* =====================================================
            REPORT WORKSPACE
        ===================================================== */}

        <section className="mt-4 flex min-h-0 flex-1 flex-col">

          {/* Section heading */}

          <div className="flex shrink-0 items-end justify-between">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                Report center
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Independent reports for every part of your business.
              </p>
            </div>

            <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300 sm:block">
              08 reports
            </span>

          </div>

          {/* =================================================
              INDEPENDENT REPORT BUTTONS
          ================================================= */}

          <div className="mt-3 min-h-0 flex-1">

            <div className="grid h-full grid-cols-2 gap-2.5 lg:grid-cols-4 lg:grid-rows-2">

              {reportModules.map((report) => {
                const Icon = report.icon;

                return (
                  <Link
                    key={report.href}
                    href={report.href}
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
                      hover:shadow-[0_12px_30px_rgba(15,23,42,0.07)]
                      sm:p-5
                    "
                  >

                    {/* Green hover line */}

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
                        {report.number}
                      </span>

                      <div
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-lg
                          bg-slate-50
                          transition-colors
                          group-hover:bg-[#16C784]/10
                        "
                      >
                        <Icon
                          className="
                            h-4
                            w-4
                            text-slate-400
                            transition-colors
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
                        {report.title}
                      </h2>

                      <p className="mt-1.5 max-w-[260px] text-xs leading-4 text-slate-400">
                        {report.description}
                      </p>

                    </div>

                    {/* -----------------------------------------
                        ACTION
                    ----------------------------------------- */}

                    <div className="mt-auto flex items-center justify-between pt-4">

                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300 transition-colors group-hover:text-[#16C784]">
                        Open report
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
            BOTTOM ACTION STRIP
        ===================================================== */}

        <section className="mt-3 grid shrink-0 grid-cols-1 gap-2 sm:grid-cols-3">

          {/* Executive */}

          <Link
            href="/app/reports/executive"
            className="
              group
              flex
              h-11
              items-center
              gap-3
              rounded-xl
              border
              border-slate-200
              bg-white
              px-3.5
              transition-all
              hover:border-slate-300
              hover:shadow-[0_8px_20px_rgba(15,23,42,0.04)]
            "
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50">
              <BarChart3 className="h-3.5 w-3.5 text-slate-500" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-slate-900">
                Executive summary
              </p>

              <p className="text-[9px] text-slate-400">
                A complete business overview
              </p>
            </div>

            <ChevronRight className="h-3.5 w-3.5 text-slate-300 transition-transform group-hover:translate-x-0.5" />
          </Link>

          {/* Calendar */}

          <button
            type="button"
            className="
              group
              flex
              h-11
              items-center
              gap-3
              rounded-xl
              border
              border-slate-200
              bg-white
              px-3.5
              text-left
              transition-all
              hover:border-slate-300
              hover:shadow-[0_8px_20px_rgba(15,23,42,0.04)]
            "
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50">
              <CalendarDays className="h-3.5 w-3.5 text-slate-500" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-slate-900">
                Reporting calendar
              </p>

              <p className="text-[9px] text-slate-400">
                Choose dates and periods
              </p>
            </div>

            <ChevronRight className="h-3.5 w-3.5 text-slate-300 transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* Download */}

          <button
            type="button"
            className="
              group
              flex
              h-11
              items-center
              gap-3
              rounded-xl
              border
              border-slate-200
              bg-white
              px-3.5
              text-left
              transition-all
              hover:border-slate-300
              hover:shadow-[0_8px_20px_rgba(15,23,42,0.04)]
            "
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-950 text-white">
              <ArrowDownToLine className="h-3.5 w-3.5" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-slate-900">
                Download reports
              </p>

              <p className="text-[9px] text-slate-400">
                Export business reports
              </p>
            </div>

            <ArrowUpRight className="h-3.5 w-3.5 text-slate-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>

        </section>

        {/* =====================================================
            FOOTER SIGNAL
        ===================================================== */}

        <div className="mt-2 flex shrink-0 items-center justify-between">

          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-300">
            QuantPay Reports
          </span>

          <span className="text-[10px] text-slate-300">
            Clear reports. Better decisions.
          </span>

        </div>

      </div>
    </main>
  );
}