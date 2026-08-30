"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  IndianRupee,
  MoreHorizontal,
  Plus,
  Search,
  UserRound,
  Users,
} from "lucide-react";

type Customer = {
  id: string;
  name: string;
  phone: string;
  location: string;
  invoices: number;
  totalValue: number;
  outstanding: number;
  type: "Business" | "Individual";
};

const customers: Customer[] = [
  {
    id: "CUS-001",
    name: "Avyay Enterprises",
    phone: "+91 98765 43210",
    location: "Bengaluru, Karnataka",
    invoices: 18,
    totalValue: 184500,
    outstanding: 0,
    type: "Business",
  },
  {
    id: "CUS-002",
    name: "Sharma Traders",
    phone: "+91 98452 11842",
    location: "Mysuru, Karnataka",
    invoices: 14,
    totalValue: 126800,
    outstanding: 0,
    type: "Business",
  },
  {
    id: "CUS-003",
    name: "Nova Distributors",
    phone: "+91 99801 44231",
    location: "Tumakuru, Karnataka",
    invoices: 11,
    totalValue: 94200,
    outstanding: 6840,
    type: "Business",
  },
  {
    id: "CUS-004",
    name: "Kumar Stores",
    phone: "+91 99021 77412",
    location: "Bengaluru, Karnataka",
    invoices: 9,
    totalValue: 71800,
    outstanding: 0,
    type: "Business",
  },
  {
    id: "CUS-005",
    name: "Metro Wholesale",
    phone: "+91 97316 22108",
    location: "Hosur, Karnataka",
    invoices: 7,
    totalValue: 58600,
    outstanding: 9200,
    type: "Business",
  },
  {
    id: "CUS-006",
    name: "Ravi & Sons",
    phone: "+91 98441 66218",
    location: "Mandya, Karnataka",
    invoices: 6,
    totalValue: 42100,
    outstanding: 5680,
    type: "Business",
  },
  {
    id: "CUS-007",
    name: "Mehta Hardware",
    phone: "+91 98201 33122",
    location: "Bengaluru, Karnataka",
    invoices: 12,
    totalValue: 88300,
    outstanding: 7340,
    type: "Business",
  },
  {
    id: "CUS-008",
    name: "Green Valley Foods",
    phone: "+91 97422 11984",
    location: "Mangaluru, Karnataka",
    invoices: 16,
    totalValue: 142600,
    outstanding: 0,
    type: "Business",
  },
  {
    id: "CUS-009",
    name: "City Mart",
    phone: "+91 99000 18273",
    location: "Bengaluru, Karnataka",
    invoices: 8,
    totalValue: 62800,
    outstanding: 6280,
    type: "Business",
  },
  {
    id: "CUS-010",
    name: "Srinivas & Co.",
    phone: "+91 98802 77112",
    location: "Hassan, Karnataka",
    invoices: 10,
    totalValue: 79400,
    outstanding: 4920,
    type: "Business",
  },
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export default function CustomersPage() {
  const [search, setSearch] = useState("");

  const filteredCustomers = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return customers;

    return customers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(query) ||
        customer.phone.toLowerCase().includes(query) ||
        customer.location.toLowerCase().includes(query),
    );
  }, [search]);

  const totalCustomers = customers.length;

  const totalSales = customers.reduce(
    (total, customer) => total + customer.totalValue,
    0,
  );

  const outstanding = customers.reduce(
    (total, customer) => total + customer.outstanding,
    0,
  );

  const activeCustomers = customers.filter(
    (customer) => customer.invoices > 0,
  ).length;

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
                Customers
              </span>
            </div>

            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-4xl">
              Your customers.
            </h1>

            <p className="mt-1.5 text-sm text-slate-400">
              Keep every customer, transaction and balance connected.
            </p>
          </div>

          <button
            type="button"
            className="hidden h-10 shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 text-xs font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-black sm:inline-flex"
          >
            <Plus className="h-4 w-4" />
            Add customer
          </button>
        </header>

        {/* =====================================================
            SUMMARY
        ===================================================== */}

        <section className="mt-4 grid shrink-0 grid-cols-2 gap-3 xl:grid-cols-4">
          <SummaryCard
            icon={Users}
            label="Customers"
            value={totalCustomers.toString()}
            detail="Across your workspace"
          />

          <SummaryCard
            icon={UserRound}
            label="Active"
            value={activeCustomers.toString()}
            detail="With transaction history"
          />

          <SummaryCard
            icon={IndianRupee}
            label="Customer value"
            value={formatCurrency(totalSales)}
            detail="Total billed"
          />

          <SummaryCard
            icon={IndianRupee}
            label="Outstanding"
            value={formatCurrency(outstanding)}
            detail="Yet to be collected"
            warning={outstanding > 0}
          />
        </section>

        {/* =====================================================
            CUSTOMER WORKSPACE
        ===================================================== */}

        <section className="mt-4 min-h-0 flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white">

          {/* ===================================================
              TOOLBAR
          =================================================== */}

          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-slate-100 px-5 py-3.5 sm:px-6">
            <div className="min-w-0">
              <h2 className="text-sm font-semibold text-slate-950">
                Customer directory
              </h2>

              <p className="mt-0.5 text-[10px] text-slate-400">
                {filteredCustomers.length} customers shown
              </p>
            </div>

            <div className="relative w-[220px] sm:w-[260px]">
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search customers..."
                className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#16C784] focus:bg-white"
              />
            </div>
          </div>

          {/* ===================================================
              DESKTOP TABLE — INTERNAL SCROLL
          =================================================== */}

          <div className="hidden h-full min-h-0 overflow-y-auto md:block">
            <table className="w-full border-collapse">
              <thead className="sticky top-0 z-10 bg-white">
                <tr className="border-b border-slate-100 bg-slate-50/95 backdrop-blur">
                  <th className="px-6 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Customer
                  </th>

                  <th className="px-4 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Contact
                  </th>

                  <th className="px-4 py-3 text-center text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Invoices
                  </th>

                  <th className="px-4 py-3 text-right text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Billed
                  </th>

                  <th className="px-4 py-3 text-right text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Outstanding
                  </th>

                  <th className="w-12 px-4 py-3" />
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredCustomers.map((customer) => (
                  <CustomerRow
                    key={customer.id}
                    customer={customer}
                  />
                ))}
              </tbody>
            </table>

            {filteredCustomers.length === 0 && <EmptyState />}
          </div>

          {/* ===================================================
              MOBILE — INTERNAL SCROLL
          =================================================== */}

          <div className="h-full min-h-0 overflow-y-auto md:hidden">
            {filteredCustomers.length > 0 ? (
              <div className="divide-y divide-slate-100">
                {filteredCustomers.map((customer) => (
                  <MobileCustomerRow
                    key={customer.id}
                    customer={customer}
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
            QuantPay · Customer relationships
          </p>

          <p className="hidden text-[9px] text-slate-300 sm:block">
            Every customer carries their transaction history with them.
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
  warning = false,
}: {
  icon: typeof Users;
  label: string;
  value: string;
  detail: string;
  warning?: boolean;
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
          warning ? "text-amber-500" : "text-slate-950",
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
   DESKTOP CUSTOMER ROW
============================================================= */

function CustomerRow({
  customer,
}: {
  customer: Customer;
}) {
  return (
    <tr className="group transition-colors hover:bg-slate-50/60">
      <td className="px-6 py-3.5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50">
            <Building2 className="h-4 w-4 text-slate-500" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-slate-900">
              {customer.name}
            </p>

            <p className="mt-0.5 text-[10px] text-slate-400">
              {customer.id}
            </p>
          </div>
        </div>
      </td>

      <td className="px-4 py-3.5">
        <p className="text-xs text-slate-700">
          {customer.phone}
        </p>

        <p className="mt-0.5 text-[10px] text-slate-400">
          {customer.location}
        </p>
      </td>

      <td className="px-4 py-3.5 text-center text-xs font-semibold text-slate-900">
        {customer.invoices}
      </td>

      <td className="px-4 py-3.5 text-right text-xs font-semibold text-slate-900">
        {formatCurrency(customer.totalValue)}
      </td>

      <td className="px-4 py-3.5 text-right">
        <span
          className={[
            "text-xs font-semibold",
            customer.outstanding > 0
              ? "text-amber-500"
              : "text-slate-300",
          ].join(" ")}
        >
          {formatCurrency(customer.outstanding)}
        </span>
      </td>

      <td className="px-4 py-3.5">
        <button
          type="button"
          aria-label={`Actions for ${customer.name}`}
          className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-50 hover:text-slate-600"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </td>
    </tr>
  );
}

/* =============================================================
   MOBILE CUSTOMER ROW
============================================================= */

function MobileCustomerRow({
  customer,
}: {
  customer: Customer;
}) {
  return (
    <div className="p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50">
            <Building2 className="h-4 w-4 text-slate-500" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-slate-900">
              {customer.name}
            </p>

            <p className="mt-1 text-[10px] text-slate-400">
              {customer.id}
            </p>
          </div>
        </div>

        <button
          type="button"
          aria-label={`Actions for ${customer.name}`}
          className="rounded-lg p-2 text-slate-300 transition hover:text-slate-600"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
            Billed
          </p>

          <p className="mt-1 text-xs font-semibold text-slate-900">
            {formatCurrency(customer.totalValue)}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
            Outstanding
          </p>

          <p
            className={[
              "mt-1 text-xs font-semibold",
              customer.outstanding
                ? "text-amber-500"
                : "text-slate-900",
            ].join(" ")}
          >
            {formatCurrency(customer.outstanding)}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-slate-400">
            {customer.phone}
          </p>

          <p className="mt-1 text-[10px] text-slate-400">
            {customer.invoices} invoices
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500 transition hover:text-slate-950"
        >
          View

          <ArrowUpRight className="h-3 w-3" />
        </button>
      </div>
    </div>
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
          <Users className="h-5 w-5 text-slate-400" />
        </div>

        <p className="mt-4 text-sm font-medium text-slate-900">
          No customers found
        </p>

        <p className="mt-1 text-xs text-slate-400">
          Try a different name, phone number or location.
        </p>
      </div>
    </div>
  );
}