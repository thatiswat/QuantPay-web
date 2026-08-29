"use client";

import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  Banknote,
  Building2,
  CalendarDays,
  Car,
  CreditCard,
  IndianRupee,
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

type Expense = {
  id: string;
  description: string;
  category: string;
  vendor: string;
  date: string;
  method: "Cash" | "UPI" | "Bank Transfer" | "Card";
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
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export default function ExpensesPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<
    "All" | ExpenseStatus
  >("All");

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
    0
  );

  const paidExpenses = expenses
    .filter((expense) => expense.status === "Paid")
    .reduce((sum, expense) => sum + expense.amount, 0);

  const pendingExpenses = expenses
    .filter((expense) => expense.status === "Pending")
    .reduce((sum, expense) => sum + expense.amount, 0);

  const largestCategory = getLargestCategory(expenses);

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 sm:px-7 lg:py-10">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#16C784]">
            Expenses
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-4xl">
            Know where money goes.
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Record business spending, track what has been paid and
            keep every outgoing transaction organised.
          </p>
        </div>

        <button className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 text-xs font-semibold text-white transition hover:bg-black">
          <Plus className="h-4 w-4" />
          Add expense
        </button>
      </div>

      {/* =====================================================
          SUMMARY
      ===================================================== */}

      <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          icon={ArrowDownRight}
          label="Total expenses"
          value={formatCurrency(totalExpenses)}
          detail="Recorded this period"
        />

        <SummaryCard
          icon={Wallet}
          label="Paid"
          value={formatCurrency(paidExpenses)}
          detail="Money already spent"
          positive
        />

        <SummaryCard
          icon={Receipt}
          label="Pending"
          value={formatCurrency(pendingExpenses)}
          detail="Still to be paid"
          warning
        />

        <SummaryCard
          icon={ShoppingBag}
          label="Top category"
          value={largestCategory.name}
          detail={formatCurrency(largestCategory.amount)}
        />
      </div>

      {/* =====================================================
          SPENDING BREAKDOWN
      ===================================================== */}

      <section className="mt-6 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Category breakdown */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Spending
            </p>

            <h2 className="mt-1 text-base font-semibold text-slate-950">
              Where your money is going
            </h2>
          </div>

          <div className="mt-6 space-y-5">
            {getCategoryBreakdown(expenses).map((item) => (
              <CategoryRow
                key={item.name}
                name={item.name}
                amount={item.amount}
                percentage={
                  (item.amount / totalExpenses) * 100
                }
                icon={getCategoryIcon(item.name)}
              />
            ))}
          </div>
        </div>

        {/* Payment methods */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Payment methods
          </p>

          <h2 className="mt-1 text-base font-semibold text-slate-950">
            How expenses are paid
          </h2>

          <div className="mt-6 space-y-3">
            <ExpenseMethod
              icon={Banknote}
              label="Cash"
              amount={getMethodTotal(expenses, "Cash")}
            />

            <ExpenseMethod
              icon={CreditCard}
              label="Card"
              amount={getMethodTotal(expenses, "Card")}
            />

            <ExpenseMethod
              icon={Zap}
              label="UPI"
              amount={getMethodTotal(expenses, "UPI")}
            />

            <ExpenseMethod
              icon={Building2}
              label="Bank transfer"
              amount={getMethodTotal(
                expenses,
                "Bank Transfer"
              )}
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPENSE ACTIVITY
      ===================================================== */}

      <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="flex flex-col gap-4 border-b border-slate-100 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-sm font-semibold text-slate-950">
              Expense activity
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Every outgoing business transaction
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
                placeholder="Search expenses..."
                className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#16C784] focus:bg-white"
              />
            </div>

            <select
              value={filter}
              onChange={(event) =>
                setFilter(
                  event.target.value as
                    | "All"
                    | ExpenseStatus
                )
              }
              className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-600 outline-none focus:border-[#16C784]"
            >
              <option value="All">All expenses</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </div>

        {/* Desktop */}

        <div className="hidden overflow-x-auto md:block">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-6 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Expense
                </th>

                <th className="px-4 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Category
                </th>

                <th className="px-4 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Vendor
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
              {filteredExpenses.map((expense) => (
                <ExpenseRow
                  key={expense.id}
                  expense={expense}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile */}

        <div className="divide-y divide-slate-100 md:hidden">
          {filteredExpenses.map((expense) => (
            <MobileExpenseRow
              key={expense.id}
              expense={expense}
            />
          ))}
        </div>

        {filteredExpenses.length === 0 && (
          <div className="px-6 py-16 text-center">
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
        )}
      </section>

      {/* =====================================================
          SIGNAL
      ===================================================== */}

      <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5">
        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-300">
          Outgoing money
        </p>

        <p className="hidden text-[10px] text-slate-400 sm:block">
          Expense → Payment → Business cost
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   SUMMARY
============================================================ */

function SummaryCard({
  icon: Icon,
  label,
  value,
  detail,
  positive = false,
  warning = false,
}: {
  icon: typeof IndianRupee;
  label: string;
  value: string;
  detail: string;
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

      <p
        className={`mt-5 truncate text-2xl font-semibold tracking-tight ${
          warning
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

/* ============================================================
   CATEGORY
============================================================ */

function CategoryRow({
  name,
  amount,
  percentage,
  icon: Icon,
}: {
  name: string;
  amount: number;
  percentage: number;
  icon: typeof Store;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50">
            <Icon className="h-3.5 w-3.5 text-slate-500" />
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-800">
              {name}
            </p>

            <p className="mt-0.5 text-[10px] text-slate-400">
              {percentage.toFixed(0)}% of spending
            </p>
          </div>
        </div>

        <p className="text-xs font-semibold text-slate-900">
          {formatCurrency(amount)}
        </p>
      </div>

      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-slate-900"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}

/* ============================================================
   METHODS
============================================================ */

function ExpenseMethod({
  icon: Icon,
  label,
  amount,
}: {
  icon: typeof Banknote;
  label: string;
  amount: number;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-3">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
          <Icon className="h-3.5 w-3.5 text-slate-500" />
        </div>

        <span className="text-xs font-medium text-slate-700">
          {label}
        </span>
      </div>

      <span className="text-xs font-semibold text-slate-900">
        {formatCurrency(amount)}
      </span>
    </div>
  );
}

/* ============================================================
   DESKTOP ROW
============================================================ */

function ExpenseRow({
  expense,
}: {
  expense: Expense;
}) {
  return (
    <tr className="transition-colors hover:bg-slate-50/60">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50">
            <Receipt className="h-4 w-4 text-slate-500" />
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-900">
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

      <td className="px-4 py-4">
        <span className="text-xs text-slate-600">
          {expense.method}
        </span>
      </td>

      <td className="px-4 py-4 text-right text-xs font-semibold text-slate-900">
        {formatCurrency(expense.amount)}
      </td>

      <td className="px-4 py-4 text-center">
        <ExpenseStatus status={expense.status} />
      </td>

      <td className="px-4 py-4">
        <button className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-50 hover:text-slate-600">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </td>
    </tr>
  );
}

/* ============================================================
   MOBILE ROW
============================================================ */

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

            <p className="mt-1 text-[10px] text-slate-400">
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

      <div className="mt-4 flex items-center justify-between text-[10px] text-slate-400">
        <span>{expense.date}</span>

        <span>{expense.method}</span>
      </div>
    </div>
  );
}

/* ============================================================
   STATUS
============================================================ */

function ExpenseStatus({
  status,
}: {
  status: ExpenseStatus;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] font-semibold ${
        status === "Paid"
          ? "text-[#16C784]"
          : "text-amber-500"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          status === "Paid"
            ? "bg-[#16C784]"
            : "bg-amber-400"
        }`}
      />

      {status}
    </span>
  );
}

/* ============================================================
   HELPERS
============================================================ */

function getCategoryBreakdown(items: Expense[]) {
  const categories = new Map<string, number>();

  for (const item of items) {
    categories.set(
      item.category,
      (categories.get(item.category) ?? 0) + item.amount
    );
  }

  return Array.from(categories.entries())
    .map(([name, amount]) => ({
      name,
      amount,
    }))
    .sort((a, b) => b.amount - a.amount);
}

function getLargestCategory(items: Expense[]) {
  return (
    getCategoryBreakdown(items)[0] ?? {
      name: "None",
      amount: 0,
    }
  );
}

function getMethodTotal(
  items: Expense[],
  method: Expense["method"]
) {
  return items
    .filter((item) => item.method === method)
    .reduce((sum, item) => sum + item.amount, 0);
}

function getCategoryIcon(category: string) {
  switch (category) {
    case "Utilities":
      return Zap;

    case "Transport":
      return Car;

    case "Supplies":
      return ShoppingBag;

    case "Maintenance":
      return Store;

    default:
      return Receipt;
  }
}