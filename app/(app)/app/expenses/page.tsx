"use client";

import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  Banknote,
  Building2,
  Car,
  Check,
  CreditCard,
  MoreHorizontal,
  Plus,
  Receipt,
  Search,
  ShoppingBag,
  Store,
  Wallet,
  Zap,
} from "lucide-react";

type ExpenseStatus = "Paid" | "Pending";

type ExpenseMethod =
  | "Cash"
  | "UPI"
  | "Bank Transfer"
  | "Card";

type Expense = {
  id: string;
  description: string;
  category: string;
  vendor: string;
  date: string;
  method: ExpenseMethod;
  amount: number;
  status: ExpenseStatus;
};

const expenses: Expense[] = [
  {
    id: "EXP-2026-00318",
    description: "Warehouse electricity",
    category: "Utilities",
    vendor: "BESCOM",
    date: "29 Aug 2026",
    method: "UPI",
    amount: 8420,
    status: "Paid",
  },
  {
    id: "EXP-2026-00317",
    description: "Delivery fuel",
    category: "Transport",
    vendor: "HPCL",
    date: "28 Aug 2026",
    method: "Card",
    amount: 4260,
    status: "Paid",
  },
  {
    id: "EXP-2026-00316",
    description: "Packaging materials",
    category: "Supplies",
    vendor: "Sri Packaging",
    date: "27 Aug 2026",
    method: "Bank Transfer",
    amount: 6800,
    status: "Paid",
  },
  {
    id: "EXP-2026-00315",
    description: "Shop maintenance",
    category: "Maintenance",
    vendor: "Kumar Services",
    date: "25 Aug 2026",
    method: "Cash",
    amount: 3500,
    status: "Paid",
  },
  {
    id: "EXP-2026-00314",
    description: "Internet & connectivity",
    category: "Utilities",
    vendor: "Airtel Business",
    date: "24 Aug 2026",
    method: "UPI",
    amount: 1899,
    status: "Paid",
  },
  {
    id: "EXP-2026-00313",
    description: "Vehicle service",
    category: "Transport",
    vendor: "Bharat Motors",
    date: "22 Aug 2026",
    method: "Bank Transfer",
    amount: 3720,
    status: "Pending",
  },
  {
    id: "EXP-2026-00312",
    description: "Store packaging",
    category: "Supplies",
    vendor: "PackRight",
    date: "21 Aug 2026",
    method: "UPI",
    amount: 2800,
    status: "Paid",
  },
  {
    id: "EXP-2026-00311",
    description: "Office repairs",
    category: "Maintenance",
    vendor: "Prime Services",
    date: "19 Aug 2026",
    method: "Cash",
    amount: 2150,
    status: "Pending",
  },
  {
    id: "EXP-2026-00310",
    description: "Power backup",
    category: "Utilities",
    vendor: "PowerTech",
    date: "18 Aug 2026",
    method: "Bank Transfer",
    amount: 5600,
    status: "Paid",
  },
  {
    id: "EXP-2026-00309",
    description: "Delivery vehicle fuel",
    category: "Transport",
    vendor: "IndianOil",
    date: "17 Aug 2026",
    method: "Card",
    amount: 3150,
    status: "Paid",
  },
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export default function ExpensesPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] =
    useState<"All" | ExpenseStatus>("All");

  const filteredExpenses = useMemo(() => {
    const query = search.trim().toLowerCase();

    return expenses.filter((expense) => {
      const matchesSearch =
        !query ||
        expense.description.toLowerCase().includes(query) ||
        expense.vendor.toLowerCase().includes(query) ||
        expense.category.toLowerCase().includes(query) ||
        expense.id.toLowerCase().includes(query);

      const matchesFilter =
        filter === "All" || expense.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  );

  const paidExpenses = expenses
    .filter((expense) => expense.status === "Paid")
    .reduce((sum, expense) => sum + expense.amount, 0);

  const pendingExpenses = expenses
    .filter((expense) => expense.status === "Pending")
    .reduce((sum, expense) => sum + expense.amount, 0);

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
                Expenses
              </span>
            </div>

            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-4xl">
              Know where money goes.
            </h1>

            <p className="mt-1.5 text-sm text-slate-400">
              Track every outgoing business payment in one place.
            </p>
          </div>

          <button
            type="button"
            className="hidden h-10 items-center gap-2 rounded-xl bg-slate-950 px-4 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black sm:inline-flex"
          >
            <Plus className="h-4 w-4" />
            Add expense
          </button>
        </header>

        {/* =====================================================
            CORE FINANCIAL SUMMARY
        ===================================================== */}

        <section className="mt-4 grid shrink-0 grid-cols-1 gap-3 sm:grid-cols-3">

          {/* TOTAL */}

          <Summary
            label="Total expenses"
            value={formatCurrency(totalExpenses)}
            detail="All recorded spending"
            icon={ArrowDownRight}
          />

          {/* PAID */}

          <Summary
            label="Paid"
            value={formatCurrency(paidExpenses)}
            detail="Money already spent"
            icon={Check}
            positive
          />

          {/* PENDING */}

          <Summary
            label="Pending"
            value={formatCurrency(pendingExpenses)}
            detail="Still needs payment"
            icon={Wallet}
            warning
          />
        </section>

        {/* =====================================================
            EXPENSE ACTIVITY
            THIS IS THE MAIN WORKSPACE
        ===================================================== */}

        <section className="mt-4 flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">

          {/* ===================================================
              ACTIVITY HEADER
          =================================================== */}

          <div className="flex shrink-0 flex-col gap-3 border-b border-slate-100 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-semibold tracking-[-0.02em] text-slate-950">
                  Expense activity
                </h2>

                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-semibold text-slate-500">
                  {filteredExpenses.length}
                </span>
              </div>

              <p className="mt-1 text-xs text-slate-400">
                Every outgoing business transaction
              </p>
            </div>

            <div className="flex gap-2">

              {/* SEARCH */}

              <div className="relative min-w-0 flex-1 sm:w-[280px] sm:flex-none">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search expenses..."
                  className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-3 text-xs text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#16C784] focus:bg-white"
                />
              </div>

              {/* FILTER */}

              <select
                value={filter}
                onChange={(event) =>
                  setFilter(
                    event.target.value as
                      | "All"
                      | ExpenseStatus,
                  )
                }
                className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-xs font-medium text-slate-600 outline-none focus:border-[#16C784]"
              >
                <option value="All">All</option>
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>

          {/* ===================================================
              DESKTOP ACTIVITY
          =================================================== */}

          <div className="hidden min-h-0 flex-1 overflow-y-auto md:block">
            <table className="w-full border-collapse">

              <thead className="sticky top-0 z-10 bg-white">
                <tr className="border-b border-slate-100 bg-slate-50/95 backdrop-blur">

                  <th className="px-6 py-3.5 text-left text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Expense
                  </th>

                  <th className="px-4 py-3.5 text-left text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Category
                  </th>

                  <th className="px-4 py-3.5 text-left text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Vendor
                  </th>

                  <th className="px-4 py-3.5 text-left text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Date
                  </th>

                  <th className="px-4 py-3.5 text-left text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Method
                  </th>

                  <th className="px-4 py-3.5 text-right text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Amount
                  </th>

                  <th className="px-4 py-3.5 text-center text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Status
                  </th>

                  <th className="w-12 px-4 py-3.5" />
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredExpenses.map((expense) => (
                  <ExpenseRow
                    key={expense.id}
                    expense={expense}
                  />
                ))}
              </tbody>
            </table>

            {filteredExpenses.length === 0 && (
              <EmptyState />
            )}
          </div>

          {/* ===================================================
              MOBILE ACTIVITY
          =================================================== */}

          <div className="min-h-0 flex-1 overflow-y-auto md:hidden">
            {filteredExpenses.length > 0 ? (
              <div className="divide-y divide-slate-100">
                {filteredExpenses.map((expense) => (
                  <MobileExpenseRow
                    key={expense.id}
                    expense={expense}
                  />
                ))}
              </div>
            ) : (
              <EmptyState />
            )}
          </div>
        </section>

        {/* =====================================================
            MOBILE ACTION
        ===================================================== */}

        <button
          type="button"
          className="mt-3 inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 text-xs font-semibold text-white sm:hidden"
        >
          <Plus className="h-4 w-4" />
          Add expense
        </button>
      </div>
    </main>
  );
}

/* =============================================================
   SUMMARY
============================================================= */

function Summary({
  label,
  value,
  detail,
  icon: Icon,
  positive = false,
  warning = false,
}: {
  label: string;
  value: string;
  detail: string;
  icon: typeof Wallet;
  positive?: boolean;
  warning?: boolean;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-5 py-4">

      <div className="flex items-center justify-between">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          {label}
        </p>

        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50">
          <Icon className="h-4 w-4 text-slate-500" />
        </div>
      </div>

      <p
        className={[
          "mt-2 text-2xl font-semibold tracking-[-0.045em]",
          positive
            ? "text-[#16C784]"
            : warning
              ? "text-amber-500"
              : "text-slate-950",
        ].join(" ")}
      >
        {value}
      </p>

      <p className="mt-1 text-[10px] text-slate-400">
        {detail}
      </p>
    </div>
  );
}

/* =============================================================
   DESKTOP ROW
============================================================= */

function ExpenseRow({
  expense,
}: {
  expense: Expense;
}) {
  return (
    <tr className="group transition-colors hover:bg-slate-50/70">

      <td className="px-6 py-4">
        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50">
            <Receipt className="h-4 w-4 text-slate-500" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-slate-900">
              {expense.description}
            </p>

            <p className="mt-1 text-[10px] text-slate-400">
              {expense.id}
            </p>
          </div>
        </div>
      </td>

      <td className="px-4 py-4 text-xs text-slate-600">
        {expense.category}
      </td>

      <td className="px-4 py-4 text-xs font-medium text-slate-700">
        {expense.vendor}
      </td>

      <td className="px-4 py-4 text-xs text-slate-500">
        {expense.date}
      </td>

      <td className="px-4 py-4 text-xs text-slate-600">
        {expense.method}
      </td>

      <td className="px-4 py-4 text-right text-xs font-semibold text-slate-900">
        {formatCurrency(expense.amount)}
      </td>

      <td className="px-4 py-4 text-center">
        <ExpenseStatus status={expense.status} />
      </td>

      <td className="px-4 py-4">
        <button
          type="button"
          aria-label={`More actions for ${expense.description}`}
          className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-50 hover:text-slate-600"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </td>
    </tr>
  );
}

/* =============================================================
   MOBILE ROW
============================================================= */

function MobileExpenseRow({
  expense,
}: {
  expense: Expense;
}) {
  return (
    <div className="p-5">

      <div className="flex items-start justify-between gap-3">

        <div className="flex min-w-0 items-center gap-3">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50">
            <Receipt className="h-4 w-4 text-slate-500" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-slate-900">
              {expense.description}
            </p>

            <p className="mt-1 truncate text-[10px] text-slate-400">
              {expense.vendor} · {expense.id}
            </p>
          </div>
        </div>

        <ExpenseStatus status={expense.status} />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">

        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
            Amount
          </p>

          <p className="mt-1 text-xs font-semibold text-slate-900">
            {formatCurrency(expense.amount)}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
            Category
          </p>

          <p className="mt-1 text-xs font-semibold text-slate-900">
            {expense.category}
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-[9px] text-slate-400">
        <span>{expense.date}</span>
        <span>{expense.method}</span>
      </div>
    </div>
  );
}

/* =============================================================
   STATUS
============================================================= */

function ExpenseStatus({
  status,
}: {
  status: ExpenseStatus;
}) {
  const paid = status === "Paid";

  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 text-[10px] font-semibold",
        paid ? "text-[#16C784]" : "text-amber-500",
      ].join(" ")}
    >
      <span
        className={[
          "h-1.5 w-1.5 rounded-full",
          paid ? "bg-[#16C784]" : "bg-amber-400",
        ].join(" ")}
      />

      {status}
    </span>
  );
}

/* =============================================================
   EMPTY
============================================================= */

function EmptyState() {
  return (
    <div className="flex min-h-[260px] items-center justify-center text-center">
      <div>
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50">
          <Receipt className="h-5 w-5 text-slate-400" />
        </div>

        <p className="mt-4 text-sm font-medium text-slate-900">
          No expenses found
        </p>

        <p className="mt-1 text-xs text-slate-400">
          Try another search or expense status.
        </p>
      </div>
    </div>
  );
}