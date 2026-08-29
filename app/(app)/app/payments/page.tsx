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
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export default function PaymentsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<
    "All" | PaymentStatus
  >("All");

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
    (payment) => payment.status === "Completed"
  ).length;

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 sm:px-7 lg:py-10">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#16C784]">
            Payments
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-4xl">
            Follow the money.
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Track collections, payment methods and outstanding money.
          </p>
        </div>

        <button className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 text-xs font-semibold text-white transition hover:bg-black">
          <Plus className="h-4 w-4" />
          Record payment
        </button>
      </div>

      {/* =====================================================
          SUMMARY
      ===================================================== */}

      <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
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
      </div>

      {/* =====================================================
          COLLECTION OVERVIEW
      ===================================================== */}

      <section className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Collection position */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Collection position
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                {formatCurrency(completed)}
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Successfully collected
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#16C784]/10">
              <TrendingIcon />
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between text-[10px]">
              <span className="font-medium text-slate-400">
                Collected
              </span>

              <span className="font-semibold text-slate-700">
                {formatCurrency(completed + pending)}
              </span>
            </div>

            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-[#16C784]"
                style={{
                  width: `${
                    completed + pending === 0
                      ? 0
                      : (completed /
                          (completed + pending)) *
                        100
                  }%`,
                }}
              />
            </div>

            <div className="mt-3 flex items-center gap-5 text-[10px]">
              <span className="flex items-center gap-1.5 text-[#16C784]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#16C784]" />
                Collected
              </span>

              <span className="flex items-center gap-1.5 text-amber-500">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Pending
              </span>
            </div>
          </div>
        </div>

        {/* Methods */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Payment methods
          </p>

          <h2 className="mt-2 text-base font-semibold text-slate-950">
            How customers pay
          </h2>

          <div className="mt-5 space-y-3">
            <MethodRow
              icon={Smartphone}
              label="UPI"
              value={formatCurrency(
                payments
                  .filter((p) => p.method === "UPI")
                  .reduce((sum, p) => sum + p.amount, 0)
              )}
            />

            <MethodRow
              icon={ArrowUpRight}
              label="Bank transfer"
              value={formatCurrency(
                payments
                  .filter((p) => p.method === "Bank Transfer")
                  .reduce((sum, p) => sum + p.amount, 0)
              )}
            />

            <MethodRow
              icon={Banknote}
              label="Cash"
              value={formatCurrency(
                payments
                  .filter((p) => p.method === "Cash")
                  .reduce((sum, p) => sum + p.amount, 0)
              )}
            />

            <MethodRow
              icon={CreditCard}
              label="Card"
              value={formatCurrency(
                payments
                  .filter((p) => p.method === "Card")
                  .reduce((sum, p) => sum + p.amount, 0)
              )}
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          PAYMENT ACTIVITY
      ===================================================== */}

      <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="flex flex-col gap-4 border-b border-slate-100 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-sm font-semibold text-slate-950">
              Payment activity
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Every money movement recorded in QuantPay
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative sm:w-[250px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search payments..."
                className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#16C784] focus:bg-white"
              />
            </div>

            <select
              value={filter}
              onChange={(event) =>
                setFilter(
                  event.target.value as
                    | "All"
                    | PaymentStatus
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

        <div className="hidden overflow-x-auto md:block">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
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
        </div>

        {/* Mobile */}

        <div className="divide-y divide-slate-100 md:hidden">
          {filteredPayments.map((payment) => (
            <MobilePaymentRow
              key={payment.id}
              payment={payment}
            />
          ))}
        </div>

        {filteredPayments.length === 0 && (
          <div className="px-6 py-16 text-center">
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
        )}
      </section>

      {/* =====================================================
          SIGNAL
      ===================================================== */}

      <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5">
        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-300">
          Money movement
        </p>

        <p className="hidden text-[10px] text-slate-400 sm:block">
          Invoice → Payment → Collection
        </p>
      </div>
    </div>
  );
}

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
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-slate-500">
          {label}
        </p>

        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50">
          <Icon className="h-4 w-4 text-slate-500" />
        </div>
      </div>

      <p
        className={`mt-5 text-2xl font-semibold tracking-tight ${
          danger
            ? "text-red-500"
            : warning
              ? "text-amber-500"
              : positive
                ? "text-[#16C784]"
                : "text-slate-950"
        }`}
      >
        {value}
      </p>

      <p className="mt-1 text-[10px] text-slate-400">
        {detail}
      </p>
    </div>
  );
}

function MethodRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Smartphone;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5">
      <div className="flex items-center gap-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white">
          <Icon className="h-3.5 w-3.5 text-slate-500" />
        </div>

        <span className="text-xs font-medium text-slate-700">
          {label}
        </span>
      </div>

      <span className="text-xs font-semibold text-slate-900">
        {value}
      </span>
    </div>
  );
}

function PaymentRow({
  payment,
}: {
  payment: Payment;
}) {
  return (
    <tr className="transition-colors hover:bg-slate-50/60">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50">
            <CreditCard className="h-4 w-4 text-slate-500" />
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-900">
              {payment.id}
            </p>

            <p className="mt-1 text-[10px] text-slate-400">
              {payment.invoice}
            </p>
          </div>
        </div>
      </td>

      <td className="px-4 py-4 text-xs font-medium text-slate-700">
        {payment.customer}
      </td>

      <td className="px-4 py-4 text-xs text-slate-500">
        {payment.date}
      </td>

      <td className="px-4 py-4">
        <PaymentMethod method={payment.method} />
      </td>

      <td className="px-4 py-4 text-right text-xs font-semibold text-slate-900">
        {formatCurrency(payment.amount)}
      </td>

      <td className="px-4 py-4 text-center">
        <PaymentStatus status={payment.status} />
      </td>

      <td className="px-4 py-4">
        <button className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-50 hover:text-slate-600">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </td>
    </tr>
  );
}

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

      <div className="mt-4 flex items-center justify-between text-[10px] text-slate-400">
        <span>{payment.date}</span>

        <span>{payment.invoice}</span>
      </div>
    </div>
  );
}

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

function TrendingIcon() {
  return <TrendingUp className="h-5 w-5 text-[#16C784]" />;
}

function TrendingUp(props: React.SVGProps<SVGSVGElement>) {
  return <ArrowUpRight {...props} />;
}