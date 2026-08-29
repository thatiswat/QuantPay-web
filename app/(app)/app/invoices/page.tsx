"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Download,
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
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export default function InvoicesPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"All" | InvoiceStatus>(
    "All"
  );

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
    0
  );

  const collected = invoices.reduce(
    (total, invoice) => total + (invoice.amount - invoice.due),
    0
  );

  const outstanding = invoices.reduce(
    (total, invoice) => total + invoice.due,
    0
  );

  const overdue = invoices
    .filter((invoice) => invoice.status === "Overdue")
    .reduce((total, invoice) => total + invoice.due, 0);

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 sm:px-7 lg:py-10">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#16C784]">
            Invoices
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-4xl">
            Your invoices.
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Every bill, payment and outstanding amount in one place.
          </p>
        </div>

        <a
          href="/app/billing"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 text-xs font-semibold text-white transition hover:bg-black"
        >
          <Plus className="h-4 w-4" />
          Create invoice
        </a>
      </div>

      {/* =====================================================
          SUMMARY
      ===================================================== */}

      <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
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
      </div>

      {/* =====================================================
          INVOICE LIST
      ===================================================== */}

      <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        {/* Toolbar */}

        <div className="flex flex-col gap-4 border-b border-slate-100 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-sm font-semibold text-slate-950">
              Invoice history
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              {filteredInvoices.length} invoices shown
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
                placeholder="Search invoices..."
                className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#16C784] focus:bg-white"
              />
            </div>

            <select
              value={filter}
              onChange={(event) =>
                setFilter(
                  event.target.value as
                    | "All"
                    | InvoiceStatus
                )
              }
              className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-600 outline-none focus:border-[#16C784]"
            >
              <option value="All">All invoices</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Overdue">Overdue</option>
            </select>
          </div>
        </div>

        {/* Desktop table */}

        <div className="hidden overflow-x-auto md:block">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
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
        </div>

        {/* Mobile */}

        <div className="divide-y divide-slate-100 md:hidden">
          {filteredInvoices.map((invoice) => (
            <MobileInvoiceRow
              key={invoice.id}
              invoice={invoice}
            />
          ))}
        </div>

        {/* Empty */}

        {filteredInvoices.length === 0 && (
          <div className="px-6 py-16 text-center">
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
        )}
      </section>

      {/* =====================================================
          FOOTER SIGNAL
      ===================================================== */}

      <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5">
        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-300">
          Invoice records
        </p>

        <p className="hidden text-[10px] text-slate-400 sm:block">
          Billing creates the invoice. Payments close it.
        </p>
      </div>
    </div>
  );
}

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
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-xs font-medium text-slate-500">
        {label}
      </p>

      <p
        className={`mt-4 text-2xl font-semibold tracking-tight ${
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

function InvoiceRow({
  invoice,
}: {
  invoice: Invoice;
}) {
  return (
    <tr className="group transition-colors hover:bg-slate-50/60">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50">
            <FileText className="h-4 w-4 text-slate-500" />
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-900">
              {invoice.id}
            </p>

            <p className="mt-1 text-[10px] text-slate-400">
              Due {invoice.dueDate}
            </p>
          </div>
        </div>
      </td>

      <td className="px-4 py-4">
        <p className="text-xs font-medium text-slate-800">
          {invoice.customer}
        </p>
      </td>

      <td className="px-4 py-4 text-xs text-slate-500">
        {invoice.date}
      </td>

      <td className="px-4 py-4 text-right text-xs font-semibold text-slate-900">
        {formatCurrency(invoice.amount)}
      </td>

      <td className="px-4 py-4 text-right">
        <span
          className={`text-xs font-semibold ${
            invoice.due > 0
              ? "text-slate-900"
              : "text-slate-400"
          }`}
        >
          {formatCurrency(invoice.due)}
        </span>
      </td>

      <td className="px-4 py-4 text-center">
        <InvoiceStatus status={invoice.status} />
      </td>

      <td className="px-4 py-4">
        <button
          aria-label={`Actions for ${invoice.id}`}
          className="rounded-lg p-2 text-slate-300 transition hover:bg-white hover:text-slate-600"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </td>
    </tr>
  );
}

function MobileInvoiceRow({
  invoice,
}: {
  invoice: Invoice;
}) {
  return (
    <div className="p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50">
            <FileText className="h-4 w-4 text-slate-500" />
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-900">
              {invoice.id}
            </p>

            <p className="mt-1 text-[10px] text-slate-400">
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

      <div className="mt-4 flex items-center justify-between text-[10px] text-slate-400">
        <span>Issued {invoice.date}</span>

        <button className="inline-flex items-center gap-1 font-semibold text-slate-500">
          View
          <ArrowUpRight className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}

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