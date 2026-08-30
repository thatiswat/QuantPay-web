"use client";

import { useMemo, useState } from "react";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Banknote,
  CheckCircle2,
  Clock3,
  CreditCard,
  IndianRupee,
  MoreHorizontal,
  Plus,
  Search,
  Smartphone,
  TrendingUp,
  Wallet,
} from "lucide-react";

type PaymentStatus = "Completed" | "Pending" | "Failed";
type PaymentMethod = "UPI" | "Bank Transfer" | "Cash" | "Card";

type Payment = {
  id: string;
  customer: string;
  invoice: string;
  date: string;
  method: PaymentMethod;
  amount: number;
  status: PaymentStatus;
};

const payments: Payment[] = [
  {
    id: "PAY-2026-00941",
    customer: "Avyay Enterprises",
    invoice: "INV-2026-00482",
    date: "29 Aug 2026 · 14:32",
    method: "UPI",
    amount: 12768,
    status: "Completed",
  },
  {
    id: "PAY-2026-00940",
    customer: "Sharma Traders",
    invoice: "INV-2026-00481",
    date: "28 Aug 2026 · 16:18",
    method: "Bank Transfer",
    amount: 8420,
    status: "Completed",
  },
  {
    id: "PAY-2026-00939",
    customer: "Kumar Stores",
    invoice: "INV-2026-00479",
    date: "26 Aug 2026 · 11:42",
    method: "Cash",
    amount: 4260,
    status: "Completed",
  },
  {
    id: "PAY-2026-00938",
    customer: "Nova Distributors",
    invoice: "INV-2026-00480",
    date: "27 Aug 2026 · 10:14",
    method: "UPI",
    amount: 6840,
    status: "Pending",
  },
  {
    id: "PAY-2026-00937",
    customer: "Metro Wholesale",
    invoice: "INV-2026-00478",
    date: "24 Aug 2026 · 15:06",
    method: "Bank Transfer",
    amount: 9200,
    status: "Pending",
  },
  {
    id: "PAY-2026-00936",
    customer: "Ravi & Sons",
    invoice: "INV-2026-00477",
    date: "22 Aug 2026 · 12:26",
    method: "Card",
    amount: 5680,
    status: "Failed",
  },
  {
    id: "PAY-2026-00935",
    customer: "Mehta Agencies",
    invoice: "INV-2026-00476",
    date: "21 Aug 2026 · 13:14",
    method: "UPI",
    amount: 7350,
    status: "Completed",
  },
  {
    id: "PAY-2026-00934",
    customer: "Sri Lakshmi Stores",
    invoice: "INV-2026-00475",
    date: "20 Aug 2026 · 17:08",
    method: "Cash",
    amount: 3200,
    status: "Completed",
  },
  {
    id: "PAY-2026-00933",
    customer: "Apex Wholesale",
    invoice: "INV-2026-00474",
    date: "19 Aug 2026 · 10:26",
    method: "Bank Transfer",
    amount: 11500,
    status: "Pending",
  },
  {
    id: "PAY-2026-00932",
    customer: "Krishna Mart",
    invoice: "INV-2026-00473",
    date: "18 Aug 2026 · 12:41",
    method: "UPI",
    amount: 4680,
    status: "Completed",
  },
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export default function PaymentsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"All" | PaymentStatus>("All");

  const filteredPayments = useMemo(() => {
    const query = search.trim().toLowerCase();

    return payments.filter((payment) => {
      const matchesSearch =
        !query ||
        payment.id.toLowerCase().includes(query) ||
        payment.customer.toLowerCase().includes(query) ||
        payment.invoice.toLowerCase().includes(query);

      const matchesFilter =
        filter === "All" || payment.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const completed = payments
    .filter((payment) => payment.status === "Completed")
    .reduce((total, payment) => total + payment.amount, 0);

  const pending = payments
    .filter((payment) => payment.status === "Pending")
    .reduce((total, payment) => total + payment.amount, 0);

  const failed = payments
    .filter((payment) => payment.status === "Failed")
    .reduce((total, payment) => total + payment.amount, 0);

  const transactionCount = payments.filter(
    (payment) => payment.status === "Completed",
  ).length;

  const expectedCollection = completed + pending;

  const collectionPercentage =
    expectedCollection === 0
      ? 0
      : (completed / expectedCollection) * 100;

  const methodTotals = {
    UPI: payments
      .filter((p) => p.method === "UPI")
      .reduce((sum, p) => sum + p.amount, 0),

    "Bank Transfer": payments
      .filter((p) => p.method === "Bank Transfer")
      .reduce((sum, p) => sum + p.amount, 0),

    Cash: payments
      .filter((p) => p.method === "Cash")
      .reduce((sum, p) => sum + p.amount, 0),

    Card: payments
      .filter((p) => p.method === "Card")
      .reduce((sum, p) => sum + p.amount, 0),
  };

  return (
    <main className="h-[calc(100svh-64px)] overflow-hidden bg-[#f8faf9]">
      <div className="mx-auto flex h-full max-w-[1500px] flex-col px-5 py-5 sm:px-7 lg:px-9">

        {/* =====================================================
            PAGE HEADER
        ===================================================== */}

        <header className="flex shrink-0 items-end justify-between border-b border-slate-200 pb-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#16C784]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#16C784]">
                Payments
              </span>
            </div>

            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-4xl">
              Follow the money.
            </h1>

            <p className="mt-1.5 text-sm text-slate-400">
              Track collections, payment methods and outstanding money.
            </p>
          </div>

          <button
            type="button"
            className="hidden h-10 shrink-0 items-center gap-2 rounded-xl bg-slate-950 px-4 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-black sm:inline-flex"
          >
            <Plus className="h-4 w-4" />
            Record payment
          </button>
        </header>

        {/* =====================================================
            COMMAND METRICS
        ===================================================== */}

        <section className="mt-4 grid shrink-0 grid-cols-2 gap-3 xl:grid-cols-4">
          <SummaryCard
            icon={ArrowDownLeft}
            label="Collected"
            value={formatCurrency(completed)}
            detail={`${transactionCount} completed transactions`}
            positive
          />

          <SummaryCard
            icon={Clock3}
            label="Pending"
            value={formatCurrency(pending)}
            detail="Awaiting collection"
            warning
          />

          <SummaryCard
            icon={IndianRupee}
            label="Failed"
            value={formatCurrency(failed)}
            detail="Requires attention"
            danger
          />

          <SummaryCard
            icon={CreditCard}
            label="Transactions"
            value={payments.length.toString()}
            detail="Payment activity"
          />
        </section>

        {/* =====================================================
            COLLECTION COMMAND STRIP
        ===================================================== */}

        <section className="mt-4 grid shrink-0 gap-4 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Collection */}

          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Collection position
                </p>

                <div className="mt-1 flex items-baseline gap-2">
                  <h2 className="text-xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-2xl">
                    {formatCurrency(completed)}
                  </h2>

                  <span className="text-[10px] font-medium text-[#16C784]">
                    collected
                  </span>
                </div>
              </div>

              <div className="hidden h-9 w-9 items-center justify-center rounded-lg bg-[#16C784]/10 sm:flex">
                <TrendingUp className="h-4 w-4 text-[#16C784]" />
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between text-[9px]">
                <span className="text-slate-400">
                  Expected collection
                </span>

                <span className="font-semibold text-slate-700">
                  {formatCurrency(expectedCollection)}
                </span>
              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-[#16C784] transition-all duration-500"
                  style={{
                    width: `${collectionPercentage}%`,
                  }}
                />
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[9px] font-semibold text-[#16C784]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#16C784]" />
                  {collectionPercentage.toFixed(0)}% collected
                </span>

                <span className="text-[9px] text-amber-500">
                  {formatCurrency(pending)} pending
                </span>
              </div>
            </div>
          </div>

          {/* Methods */}

          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Payment methods
                </p>

                <h2 className="mt-1 text-sm font-semibold text-slate-950">
                  How customers pay
                </h2>
              </div>

              <Wallet className="hidden h-4 w-4 text-slate-300 sm:block" />
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <MethodCompact
                icon={Smartphone}
                label="UPI"
                value={methodTotals.UPI}
              />

              <MethodCompact
                icon={ArrowUpRight}
                label="Bank"
                value={methodTotals["Bank Transfer"]}
              />

              <MethodCompact
                icon={Banknote}
                label="Cash"
                value={methodTotals.Cash}
              />

              <MethodCompact
                icon={CreditCard}
                label="Card"
                value={methodTotals.Card}
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            PAYMENT ACTIVITY
            ONLY THIS AREA SCROLLS
        ===================================================== */}

        <section className="mt-4 min-h-0 flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white">

          {/* Toolbar */}

          <div className="flex shrink-0 flex-col gap-3 border-b border-slate-100 px-5 py-3.5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-950">
                Payment activity
              </h2>

              <p className="mt-0.5 text-[10px] text-slate-400">
                {filteredPayments.length} payments shown
              </p>
            </div>

            <div className="flex gap-2">
              <div className="relative min-w-0 flex-1 sm:w-[250px] sm:flex-none">
                <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search payments..."
                  className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#16C784] focus:bg-white"
                />
              </div>

              <select
                value={filter}
                onChange={(event) =>
                  setFilter(
                    event.target.value as "All" | PaymentStatus,
                  )
                }
                className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-600 outline-none focus:border-[#16C784]"
              >
                <option value="All">All payments</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
                <option value="Failed">Failed</option>
              </select>
            </div>
          </div>

          {/* Desktop */}

          <div className="hidden h-full min-h-0 overflow-y-auto md:block">
            <table className="w-full border-collapse">
              <thead className="sticky top-0 z-10 bg-white">
                <tr className="border-b border-slate-100 bg-slate-50/95 backdrop-blur">
                  <th className="px-6 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Payment
                  </th>

                  <th className="px-4 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Customer
                  </th>

                  <th className="px-4 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Date
                  </th>

                  <th className="px-4 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Method
                  </th>

                  <th className="px-4 py-3 text-right text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Amount
                  </th>

                  <th className="px-4 py-3 text-center text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Status
                  </th>

                  <th className="w-12 px-4 py-3" />
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredPayments.map((payment) => (
                  <PaymentRow
                    key={payment.id}
                    payment={payment}
                  />
                ))}
              </tbody>
            </table>

            {filteredPayments.length === 0 && <EmptyState />}
          </div>

          {/* Mobile */}

          <div className="h-full min-h-0 overflow-y-auto md:hidden">
            {filteredPayments.length > 0 ? (
              <div className="divide-y divide-slate-100">
                {filteredPayments.map((payment) => (
                  <MobilePaymentRow
                    key={payment.id}
                    payment={payment}
                  />
                ))}
              </div>
            ) : (
              <EmptyState />
            )}
          </div>
        </section>

        {/* =====================================================
            FOOTER SIGNAL
        ===================================================== */}

        <footer className="mt-3 flex shrink-0 items-center justify-between pt-1">
          <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-slate-300">
            QuantPay · Money movement
          </p>

          <p className="hidden text-[9px] text-slate-300 sm:block">
            Invoice → Payment → Collection
          </p>
        </footer>
      </div>
    </main>
  );
}

/* =============================================================
   SUMMARY CARD
============================================================= */

function SummaryCard({
  icon: Icon,
  label,
  value,
  detail,
  positive = false,
  warning = false,
  danger = false,
}: {
  icon: typeof IndianRupee;
  label: string;
  value: string;
  detail: string;
  positive?: boolean;
  warning?: boolean;
  danger?: boolean;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 sm:px-5">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400">
          {label}
        </p>

        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50">
          <Icon className="h-4 w-4 text-slate-500" />
        </div>
      </div>

      <p
        className={[
          "mt-2 text-xl font-semibold tracking-[-0.04em] sm:text-2xl",
          danger
            ? "text-red-500"
            : warning
              ? "text-amber-500"
              : positive
                ? "text-[#16C784]"
                : "text-slate-950",
        ].join(" ")}
      >
        {value}
      </p>

      <p className="mt-0.5 text-[9px] text-slate-400">
        {detail}
      </p>
    </div>
  );
}

/* =============================================================
   COMPACT METHOD
============================================================= */

function MethodCompact({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Smartphone;
  label: string;
  value: number;
}) {
  return (
    <div className="flex min-w-0 items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
      <div className="flex min-w-0 items-center gap-2">
        <Icon className="h-3.5 w-3.5 shrink-0 text-slate-400" />

        <span className="truncate text-[10px] font-medium text-slate-600">
          {label}
        </span>
      </div>

      <span className="ml-2 shrink-0 text-[10px] font-semibold text-slate-900">
        {formatCurrency(value)}
      </span>
    </div>
  );
}

/* =============================================================
   DESKTOP PAYMENT ROW
============================================================= */

function PaymentRow({
  payment,
}: {
  payment: Payment;
}) {
  return (
    <tr className="group transition-colors hover:bg-slate-50/60">
      <td className="px-6 py-3.5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50">
            <CreditCard className="h-4 w-4 text-slate-500" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-slate-900">
              {payment.id}
            </p>

            <p className="mt-0.5 text-[10px] text-slate-400">
              {payment.invoice}
            </p>
          </div>
        </div>
      </td>

      <td className="px-4 py-3.5 text-xs font-medium text-slate-700">
        {payment.customer}
      </td>

      <td className="px-4 py-3.5 text-xs text-slate-500">
        {payment.date}
      </td>

      <td className="px-4 py-3.5">
        <PaymentMethod method={payment.method} />
      </td>

      <td className="px-4 py-3.5 text-right text-xs font-semibold text-slate-900">
        {formatCurrency(payment.amount)}
      </td>

      <td className="px-4 py-3.5 text-center">
        <PaymentStatus status={payment.status} />
      </td>

      <td className="px-4 py-3.5">
        <button
          type="button"
          aria-label={`More actions for ${payment.id}`}
          className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-50 hover:text-slate-600"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </td>
    </tr>
  );
}

/* =============================================================
   MOBILE PAYMENT ROW
============================================================= */

function MobilePaymentRow({
  payment,
}: {
  payment: Payment;
}) {
  return (
    <div className="p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50">
            <CreditCard className="h-4 w-4 text-slate-500" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-slate-900">
              {payment.id}
            </p>

            <p className="mt-1 text-[10px] text-slate-400">
              {payment.customer}
            </p>
          </div>
        </div>

        <PaymentStatus status={payment.status} />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
            Amount
          </p>

          <p className="mt-1 text-xs font-semibold text-slate-900">
            {formatCurrency(payment.amount)}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
            Method
          </p>

          <p className="mt-1 text-xs font-semibold text-slate-900">
            {payment.method}
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-[9px] text-slate-400">
        <span>{payment.date}</span>

        <span>{payment.invoice}</span>
      </div>
    </div>
  );
}

/* =============================================================
   PAYMENT METHOD
============================================================= */

function PaymentMethod({
  method,
}: {
  method: PaymentMethod;
}) {
  const icons = {
    UPI: Smartphone,
    "Bank Transfer": ArrowUpRight,
    Cash: Banknote,
    Card: CreditCard,
  };

  const Icon = icons[method];

  return (
    <span className="inline-flex items-center gap-2 text-xs text-slate-600">
      <Icon className="h-3.5 w-3.5 text-slate-400" />
      {method}
    </span>
  );
}

/* =============================================================
   PAYMENT STATUS
============================================================= */

function PaymentStatus({
  status,
}: {
  status: PaymentStatus;
}) {
  const config = {
    Completed: {
      icon: CheckCircle2,
      className: "text-[#16C784]",
    },

    Pending: {
      icon: Clock3,
      className: "text-amber-500",
    },

    Failed: {
      icon: ArrowUpRight,
      className: "text-red-500",
    },
  };

  const { icon: Icon, className } = config[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] font-semibold ${className}`}
    >
      <Icon className="h-3.5 w-3.5" />
      {status}
    </span>
  );
}

/* =============================================================
   EMPTY
============================================================= */

function EmptyState() {
  return (
    <div className="flex min-h-[260px] items-center justify-center px-6 text-center">
      <div>
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50">
          <Wallet className="h-5 w-5 text-slate-400" />
        </div>

        <p className="mt-4 text-sm font-medium text-slate-900">
          No payments found
        </p>

        <p className="mt-1 text-xs text-slate-400">
          Try another search or payment status.
        </p>
      </div>
    </div>
  );
}