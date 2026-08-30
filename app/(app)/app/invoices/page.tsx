"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  FileText,
  MoreHorizontal,
  Plus,
  Search,
} from "lucide-react";

type InvoiceStatus = "Paid" | "Pending" | "Overdue";

type Invoice = {
  id: string;
  customer: string;
  date: string;
  dueDate: string;
  amount: number;
  due: number;
  status: InvoiceStatus;
};

const invoices: Invoice[] = [
  {
    id: "INV-2026-00482",
    customer: "Avyay Enterprises",
    date: "29 Aug 2026",
    dueDate: "29 Aug 2026",
    amount: 12768,
    due: 0,
    status: "Paid",
  },
  {
    id: "INV-2026-00481",
    customer: "Sharma Traders",
    date: "28 Aug 2026",
    dueDate: "28 Aug 2026",
    amount: 8420,
    due: 0,
    status: "Paid",
  },
  {
    id: "INV-2026-00480",
    customer: "Nova Distributors",
    date: "27 Aug 2026",
    dueDate: "10 Sep 2026",
    amount: 6840,
    due: 6840,
    status: "Pending",
  },
  {
    id: "INV-2026-00479",
    customer: "Kumar Stores",
    date: "26 Aug 2026",
    dueDate: "26 Aug 2026",
    amount: 4260,
    due: 0,
    status: "Paid",
  },
  {
    id: "INV-2026-00478",
    customer: "Metro Wholesale",
    date: "24 Aug 2026",
    dueDate: "27 Aug 2026",
    amount: 9200,
    due: 9200,
    status: "Overdue",
  },
  {
    id: "INV-2026-00477",
    customer: "Ravi & Sons",
    date: "22 Aug 2026",
    dueDate: "05 Sep 2026",
    amount: 5680,
    due: 5680,
    status: "Pending",
  },
  {
    id: "INV-2026-00476",
    customer: "Mehta Hardware",
    date: "21 Aug 2026",
    dueDate: "04 Sep 2026",
    amount: 7340,
    due: 7340,
    status: "Pending",
  },
  {
    id: "INV-2026-00475",
    customer: "Green Valley Foods",
    date: "19 Aug 2026",
    dueDate: "19 Aug 2026",
    amount: 11800,
    due: 0,
    status: "Paid",
  },
  {
    id: "INV-2026-00474",
    customer: "Srinivas & Co.",
    date: "18 Aug 2026",
    dueDate: "25 Aug 2026",
    amount: 4920,
    due: 4920,
    status: "Overdue",
  },
  {
    id: "INV-2026-00473",
    customer: "City Mart",
    date: "16 Aug 2026",
    dueDate: "30 Aug 2026",
    amount: 6280,
    due: 6280,
    status: "Pending",
  },
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export default function InvoicesPage() {
  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState<
    "All" | InvoiceStatus
  >("All");

  const filteredInvoices = useMemo(() => {
    const query = search.trim().toLowerCase();

    return invoices.filter((invoice) => {
      const matchesSearch =
        !query ||
        invoice.id.toLowerCase().includes(query) ||
        invoice.customer.toLowerCase().includes(query);

      const matchesFilter =
        filter === "All" || invoice.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const totalValue = invoices.reduce(
    (total, invoice) => total + invoice.amount,
    0,
  );

  const collected = invoices.reduce(
    (total, invoice) =>
      total + (invoice.amount - invoice.due),
    0,
  );

  const outstanding = invoices.reduce(
    (total, invoice) => total + invoice.due,
    0,
  );

  const overdue = invoices
    .filter((invoice) => invoice.status === "Overdue")
    .reduce((total, invoice) => total + invoice.due, 0);

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
                Invoices
              </span>
            </div>

            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-4xl">
              Your invoices.
            </h1>

            <p className="mt-1.5 text-sm text-slate-400">
              Every bill, payment and outstanding amount in one place.
            </p>
          </div>

          <a
            href="/app/billing"
            className="group hidden h-10 shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-black sm:inline-flex"
          >
            <Plus className="h-4 w-4" />

            Create invoice
          </a>
        </header>

        {/* =====================================================
            SUMMARY
        ===================================================== */}

        <section className="mt-4 grid shrink-0 grid-cols-2 gap-3 xl:grid-cols-4">
          <SummaryCard
            label="Invoice value"
            value={formatCurrency(totalValue)}
            detail={`${invoices.length} invoices`}
          />

          <SummaryCard
            label="Collected"
            value={formatCurrency(collected)}
            detail="Successfully received"
            positive
          />

          <SummaryCard
            label="Outstanding"
            value={formatCurrency(outstanding)}
            detail="Still to be collected"
          />

          <SummaryCard
            label="Overdue"
            value={formatCurrency(overdue)}
            detail="Requires attention"
            warning
          />
        </section>

        {/* =====================================================
            INVOICE WORKSPACE
        ===================================================== */}

        <section className="mt-4 min-h-0 flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white">

          {/* ===================================================
              TOOLBAR — FIXED
          =================================================== */}

          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-slate-100 px-5 py-3.5 sm:px-6">
            <div className="min-w-0">
              <h2 className="text-sm font-semibold text-slate-950">
                Invoice history
              </h2>

              <p className="mt-0.5 text-[10px] text-slate-400">
                {filteredInvoices.length} invoices shown
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2">

              {/* Search */}

              <div className="relative hidden sm:block sm:w-[230px] lg:w-[270px]">
                <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />

                <input
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search invoices..."
                  className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#16C784] focus:bg-white"
                />
              </div>

              {/* Filter */}

              <select
                value={filter}
                onChange={(event) =>
                  setFilter(
                    event.target.value as
                      | "All"
                      | InvoiceStatus,
                  )
                }
                className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs font-medium text-slate-600 outline-none focus:border-[#16C784]"
              >
                <option value="All">All</option>
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Overdue">Overdue</option>
              </select>
            </div>
          </div>

          {/* ===================================================
              MOBILE SEARCH
          =================================================== */}

          <div className="shrink-0 border-b border-slate-100 px-5 py-3 sm:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search invoices..."
                className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-3 text-xs text-slate-900 outline-none focus:border-[#16C784] focus:bg-white"
              />
            </div>
          </div>

          {/* ===================================================
              DESKTOP INVOICE SCROLL AREA
          =================================================== */}

          <div className="hidden min-h-0 h-full overflow-y-auto md:block">

            <table className="w-full border-collapse">
              <thead className="sticky top-0 z-10 bg-white">
                <tr className="border-b border-slate-100 bg-slate-50/95 backdrop-blur">

                  <th className="px-6 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Invoice
                  </th>

                  <th className="px-4 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Customer
                  </th>

                  <th className="px-4 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Date
                  </th>

                  <th className="px-4 py-3 text-right text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Amount
                  </th>

                  <th className="px-4 py-3 text-right text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Due
                  </th>

                  <th className="px-4 py-3 text-center text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Status
                  </th>

                  <th className="w-12 px-4 py-3" />
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredInvoices.map((invoice) => (
                  <InvoiceRow
                    key={invoice.id}
                    invoice={invoice}
                  />
                ))}
              </tbody>
            </table>

            {filteredInvoices.length === 0 && (
              <EmptyState />
            )}
          </div>

          {/* ===================================================
              MOBILE INVOICE SCROLL AREA
          =================================================== */}

          <div className="min-h-0 h-full overflow-y-auto md:hidden">
            {filteredInvoices.length > 0 ? (
              <div className="divide-y divide-slate-100">
                {filteredInvoices.map((invoice) => (
                  <MobileInvoiceRow
                    key={invoice.id}
                    invoice={invoice}
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
            QuantPay · Invoice records
          </p>

          <p className="hidden text-[9px] text-slate-300 sm:block">
            Billing creates the invoice · Payments close it
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
  label,
  value,
  detail,
  positive = false,
  warning = false,
}: {
  label: string;
  value: string;
  detail: string;
  positive?: boolean;
  warning?: boolean;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 sm:px-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400">
          {label}
        </p>

        {positive && (
          <span className="h-1.5 w-1.5 rounded-full bg-[#16C784]" />
        )}

        {warning && (
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
        )}
      </div>

      <p
        className={[
          "mt-2 text-xl font-semibold tracking-[-0.04em] sm:text-2xl",
          warning
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
   DESKTOP ROW
============================================================= */

function InvoiceRow({
  invoice,
}: {
  invoice: Invoice;
}) {
  return (
    <tr className="group transition-colors hover:bg-slate-50/70">

      <td className="px-6 py-3.5">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50">
            <FileText className="h-4 w-4 text-slate-400" />
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-900">
              {invoice.id}
            </p>

            <p className="mt-0.5 text-[9px] text-slate-400">
              Due {invoice.dueDate}
            </p>
          </div>
        </div>
      </td>

      <td className="px-4 py-3.5">
        <p className="text-xs font-medium text-slate-800">
          {invoice.customer}
        </p>
      </td>

      <td className="px-4 py-3.5 text-xs text-slate-500">
        {invoice.date}
      </td>

      <td className="px-4 py-3.5 text-right text-xs font-semibold text-slate-900">
        {formatCurrency(invoice.amount)}
      </td>

      <td className="px-4 py-3.5 text-right">
        <span
          className={[
            "text-xs font-semibold",
            invoice.due > 0
              ? "text-slate-900"
              : "text-slate-300",
          ].join(" ")}
        >
          {formatCurrency(invoice.due)}
        </span>
      </td>

      <td className="px-4 py-3.5 text-center">
        <InvoiceStatus status={invoice.status} />
      </td>

      <td className="px-4 py-3.5">
        <button
          type="button"
          aria-label={`Actions for ${invoice.id}`}
          className="rounded-lg p-2 text-slate-300 transition hover:bg-white hover:text-slate-600"
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

function MobileInvoiceRow({
  invoice,
}: {
  invoice: Invoice;
}) {
  return (
    <div className="p-5">

      <div className="flex items-start justify-between gap-3">

        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50">
            <FileText className="h-4 w-4 text-slate-500" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-slate-900">
              {invoice.id}
            </p>

            <p className="mt-1 truncate text-[10px] text-slate-400">
              {invoice.customer}
            </p>
          </div>
        </div>

        <InvoiceStatus status={invoice.status} />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">

        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
            Amount
          </p>

          <p className="mt-1 text-xs font-semibold text-slate-900">
            {formatCurrency(invoice.amount)}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
            Due
          </p>

          <p className="mt-1 text-xs font-semibold text-slate-900">
            {formatCurrency(invoice.due)}
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400">
        <span>
          Issued {invoice.date}
        </span>

        <button
          type="button"
          className="inline-flex items-center gap-1 font-semibold text-slate-500"
        >
          View

          <ArrowUpRight className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}

/* =============================================================
   STATUS
============================================================= */

function InvoiceStatus({
  status,
}: {
  status: InvoiceStatus;
}) {
  const config = {
    Paid: {
      icon: CheckCircle2,
      text: "text-[#16C784]",
    },

    Pending: {
      icon: Clock3,
      text: "text-amber-500",
    },

    Overdue: {
      icon: ArrowUpRight,
      text: "text-red-500",
    },
  };

  const { icon: Icon, text } = config[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] font-semibold ${text}`}
    >
      <Icon className="h-3.5 w-3.5" />

      {status}
    </span>
  );
}

/* =============================================================
   EMPTY STATE
============================================================= */

function EmptyState() {
  return (
    <div className="flex min-h-[260px] items-center justify-center px-6 text-center">
      <div>
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50">
          <FileText className="h-5 w-5 text-slate-400" />
        </div>

        <p className="mt-4 text-sm font-medium text-slate-900">
          No invoices found
        </p>

        <p className="mt-1 text-xs text-slate-400">
          Try changing your search or filter.
        </p>
      </div>
    </div>
  );
}