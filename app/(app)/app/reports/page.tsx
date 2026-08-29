"use client";

import { useMemo, useState } from "react";
import {
  ArrowDownLeft,
  ArrowUpRight,
  BarChart3,
  Boxes,
  CalendarDays,
  CreditCard,
  Download,
  IndianRupee,
  Package,
  Receipt,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

type Period = "7 days" | "30 days" | "90 days" | "This year";

const salesData = [
  { label: "01", sales: 8200, collections: 7600 },
  { label: "05", sales: 12400, collections: 11800 },
  { label: "10", sales: 9800, collections: 9200 },
  { label: "15", sales: 15600, collections: 14300 },
  { label: "20", sales: 13200, collections: 12600 },
  { label: "25", sales: 18400, collections: 17100 },
  { label: "29", sales: 22100, collections: 19800 },
];

const topProducts = [
  {
    name: "Premium Rice 25kg",
    category: "Rice",
    units: 34,
    revenue: 40800,
  },
  {
    name: "Basmati Rice 10kg",
    category: "Rice",
    units: 28,
    revenue: 19600,
  },
  {
    name: "Wholesale Pack",
    category: "Wholesale",
    units: 21,
    revenue: 25200,
  },
  {
    name: "Toor Dal 5kg",
    category: "Pulses",
    units: 18,
    revenue: 14400,
  },
];

const customers = [
  {
    name: "Avyay Enterprises",
    invoices: 18,
    value: 184500,
  },
  {
    name: "Sharma Traders",
    invoices: 14,
    value: 126800,
  },
  {
    name: "Nova Distributors",
    invoices: 11,
    value: 94200,
  },
  {
    name: "Kumar Stores",
    invoices: 9,
    value: 71800,
  },
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export default function ReportsPage() {
  const [period, setPeriod] = useState<Period>("30 days");

  const totals = useMemo(() => {
    const sales = salesData.reduce(
      (sum, item) => sum + item.sales,
      0
    );

    const collections = salesData.reduce(
      (sum, item) => sum + item.collections,
      0
    );

    const expenses = 28600;

    return {
      sales,
      collections,
      expenses,
      outstanding: sales - collections,
      net: collections - expenses,
    };
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 sm:px-7 lg:py-10">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#16C784]">
            Reports
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-4xl">
            See how your business is moving.
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Turn your everyday transactions into a clear view of
            sales, collections, expenses and business performance.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="flex h-10 items-center rounded-lg border border-slate-200 bg-white p-1">
            {(["7 days", "30 days", "90 days", "This year"] as Period[]).map(
              (item) => (
                <button
                  key={item}
                  onClick={() => setPeriod(item)}
                  className={`h-8 rounded-md px-3 text-[10px] font-semibold transition ${
                    period === item
                      ? "bg-slate-950 text-white"
                      : "text-slate-400 hover:text-slate-900"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>

          <button className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950">
            <Download className="h-3.5 w-3.5" />
            Export
          </button>
        </div>
      </div>

      {/* =====================================================
          KEY NUMBERS
      ===================================================== */}

      <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          icon={IndianRupee}
          label="Sales"
          value={formatCurrency(totals.sales)}
          change="+12.8%"
          positive
        />

        <MetricCard
          icon={CreditCard}
          label="Collected"
          value={formatCurrency(totals.collections)}
          change="+9.4%"
          positive
        />

        <MetricCard
          icon={Receipt}
          label="Outstanding"
          value={formatCurrency(totals.outstanding)}
          change="To collect"
          warning
        />

        <MetricCard
          icon={ArrowDownLeft}
          label="Expenses"
          value={formatCurrency(totals.expenses)}
          change="This period"
        />
      </div>

      {/* =====================================================
          SALES PERFORMANCE
      ===================================================== */}

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white">
        <div className="flex flex-col gap-3 border-b border-slate-100 px-5 py-5 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Performance
            </p>

            <h2 className="mt-1 text-base font-semibold text-slate-950">
              Sales & collections
            </h2>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-medium">
            <span className="flex items-center gap-1.5 text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
              Sales
            </span>

            <span className="flex items-center gap-1.5 text-[#16C784]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#16C784]" />
              Collections
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex h-[260px] items-end gap-3 sm:gap-5">
            {salesData.map((item) => {
              const salesHeight =
                (item.sales / 24000) * 100;

              const collectionHeight =
                (item.collections / 24000) * 100;

              return (
                <div
                  key={item.label}
                  className="group flex h-full flex-1 flex-col justify-end"
                >
                  <div className="relative flex h-full items-end justify-center gap-1">
                    <div
                      className="w-[35%] max-w-8 rounded-t-md bg-slate-900 transition-opacity group-hover:opacity-80"
                      style={{
                        height: `${salesHeight}%`,
                      }}
                      title={`Sales ${formatCurrency(item.sales)}`}
                    />

                    <div
                      className="w-[35%] max-w-8 rounded-t-md bg-[#16C784] transition-opacity group-hover:opacity-80"
                      style={{
                        height: `${collectionHeight}%`,
                      }}
                      title={`Collections ${formatCurrency(
                        item.collections
                      )}`}
                    />
                  </div>

                  <span className="mt-3 text-center text-[9px] text-slate-400">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
            <span className="text-[10px] text-slate-400">
              Sales generated
            </span>

            <span className="text-xs font-semibold text-slate-900">
              {formatCurrency(totals.sales)}
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECONDARY REPORTS
      ===================================================== */}

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* Top products */}

        <section className="rounded-2xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Products
              </p>

              <h2 className="mt-1 text-base font-semibold text-slate-950">
                Best performing products
              </h2>
            </div>

            <Package className="h-4 w-4 text-slate-300" />
          </div>

          <div className="divide-y divide-slate-100">
            {topProducts.map((product, index) => (
              <div
                key={product.name}
                className="flex items-center gap-4 px-5 py-4 sm:px-6"
              >
                <span className="w-5 text-[10px] font-semibold text-slate-300">
                  0{index + 1}
                </span>

                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50">
                    <Boxes className="h-3.5 w-3.5 text-slate-500" />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-slate-900">
                      {product.name}
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      {product.category} · {product.units} units
                    </p>
                  </div>
                </div>

                <p className="text-xs font-semibold text-slate-900">
                  {formatCurrency(product.revenue)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Top customers */}

        <section className="rounded-2xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Customers
              </p>

              <h2 className="mt-1 text-base font-semibold text-slate-950">
                Highest customer value
              </h2>
            </div>

            <TrendingUp className="h-4 w-4 text-slate-300" />
          </div>

          <div className="divide-y divide-slate-100">
            {customers.map((customer, index) => (
              <div
                key={customer.name}
                className="flex items-center gap-4 px-5 py-4 sm:px-6"
              >
                <span className="w-5 text-[10px] font-semibold text-slate-300">
                  0{index + 1}
                </span>

                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-[10px] font-bold text-slate-500">
                    {customer.name.charAt(0)}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-slate-900">
                      {customer.name}
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      {customer.invoices} invoices
                    </p>
                  </div>
                </div>

                <p className="text-xs font-semibold text-slate-900">
                  {formatCurrency(customer.value)}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* =====================================================
          BUSINESS POSITION
      ===================================================== */}

      <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 text-white">
        <div className="relative p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#16C784]/10 blur-[90px]" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#16C784]">
                Business position
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                {formatCurrency(totals.net)}
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/45">
                Collected revenue after recorded expenses for the
                selected period.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 border-t border-white/10 pt-5 lg:border-t-0 lg:pt-0">
              <DarkMetric
                label="Collected"
                value={formatCurrency(totals.collections)}
              />

              <DarkMetric
                label="Expenses"
                value={formatCurrency(totals.expenses)}
              />

              <DarkMetric
                label="Outstanding"
                value={formatCurrency(totals.outstanding)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER SIGNAL
      ===================================================== */}

      <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5">
        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-300">
          Business intelligence
        </p>

        <p className="hidden text-[10px] text-slate-400 sm:block">
          Transactions → Insights → Decisions
        </p>
      </div>
    </div>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
  change,
  positive = false,
  warning = false,
}: {
  icon: typeof IndianRupee;
  label: string;
  value: string;
  change: string;
  positive?: boolean;
  warning?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-slate-500">
          {label}
        </p>

        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50">
          <Icon className="h-4 w-4 text-slate-500" />
        </div>
      </div>

      <p className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
        {value}
      </p>

      <div className="mt-2 flex items-center gap-1.5">
        {positive && (
          <ArrowUpRight className="h-3 w-3 text-[#16C784]" />
        )}

        {warning && (
          <ClockIcon />
        )}

        <span
          className={`text-[10px] font-medium ${
            positive
              ? "text-[#16C784]"
              : warning
                ? "text-amber-500"
                : "text-slate-400"
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  );
}

function DarkMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-white">
        {value}
      </p>
    </div>
  );
}

function ClockIcon() {
  return (
    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
  );
}