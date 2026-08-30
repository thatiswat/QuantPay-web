"use client";

import { useMemo, useState } from "react";
import {
  Check,
  ChevronDown,
  CreditCard,
  FileText,
  Minus,
  Plus,
  Search,
  Trash2,
  UserRound,
  Wallet,
  X,
} from "lucide-react";

type LineItem = {
  id: string;
  name: string;
  type: "Product" | "Service" | "Custom";
  quantity: number;
  rate: number;
};

const customers = [
  "Walk-in customer",
  "Avyay Enterprises",
  "Sharma Traders",
  "Nova Distributors",
  "Kumar Stores",
];

const catalogue: LineItem[] = [
  {
    id: "PRD-001",
    name: "Premium Rice 25kg",
    type: "Product",
    quantity: 1,
    rate: 1200,
  },
  {
    id: "PRD-002",
    name: "Basmati Rice 10kg",
    type: "Product",
    quantity: 1,
    rate: 700,
  },
  {
    id: "PRD-003",
    name: "Wholesale Pack",
    type: "Product",
    quantity: 1,
    rate: 1200,
  },
  {
    id: "SVC-001",
    name: "Consultation",
    type: "Service",
    quantity: 1,
    rate: 2000,
  },
  {
    id: "SVC-002",
    name: "Installation",
    type: "Service",
    quantity: 1,
    rate: 750,
  },
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export default function BillingPage() {
  const [customer, setCustomer] = useState("Walk-in customer");

  const [items, setItems] = useState<LineItem[]>([
    {
      ...catalogue[0],
      quantity: 1,
    },
  ]);

  const [search, setSearch] = useState("");

  const [discount, setDiscount] = useState(0);

  const [taxEnabled, setTaxEnabled] = useState(true);

  const [paymentMethod, setPaymentMethod] = useState<
    "Paid" | "Credit" | "Partial"
  >("Paid");

  const subtotal = useMemo(
    () =>
      items.reduce(
        (total, item) => total + item.rate * item.quantity,
        0,
      ),
    [items],
  );

  const taxableAmount = Math.max(subtotal - discount, 0);

  const tax = taxEnabled
    ? Math.round(taxableAmount * 0.05)
    : 0;

  const total = taxableAmount + tax;

  const filteredCatalogue = catalogue.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  function addItem(item: LineItem) {
    setItems((current) => {
      const existing = current.find(
        (existingItem) => existingItem.id === item.id,
      );

      if (existing) {
        return current.map((existingItem) =>
          existingItem.id === item.id
            ? {
                ...existingItem,
                quantity: existingItem.quantity + 1,
              }
            : existingItem,
        );
      }

      return [
        ...current,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  }

  function updateQuantity(id: string, delta: number) {
    setItems((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
            }
          : item,
      ),
    );
  }

  function removeItem(id: string) {
    setItems((current) =>
      current.filter((item) => item.id !== id),
    );
  }

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
                Billing
              </span>
            </div>

            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-4xl">
              Create a bill
            </h1>

            <p className="mt-1.5 text-sm text-slate-400">
              Record a sale, service, or charge in one place.
            </p>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300">
              Draft
            </span>

            <div className="rounded-lg border border-slate-200 bg-white px-3 py-2">
              <p className="text-[8px] uppercase tracking-[0.15em] text-slate-400">
                Bill number
              </p>

              <p className="mt-0.5 text-xs font-semibold text-slate-900">
                INV-2026-00483
              </p>
            </div>
          </div>
        </header>

        {/* =====================================================
            MAIN WORKSPACE
        ===================================================== */}

        <div className="mt-5 min-h-0 flex-1 grid gap-5 lg:grid-cols-[minmax(0,1fr)_350px]">

          {/* ===================================================
              LEFT — BILL BUILDER
          =================================================== */}

          <section className="min-h-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">

            {/* CUSTOMER */}

            <div className="border-b border-slate-100 px-5 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Customer
                  </p>

                  <h2 className="mt-1 text-base font-semibold tracking-tight text-slate-950">
                    Who is this bill for?
                  </h2>
                </div>

                <UserRound className="h-4 w-4 text-slate-300" />
              </div>

              <div className="mt-3 flex gap-2">
                <div className="relative min-w-0 flex-1">
                  <select
                    value={customer}
                    onChange={(event) =>
                      setCustomer(event.target.value)
                    }
                    className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 pr-10 text-sm font-medium text-slate-800 outline-none transition focus:border-[#16C784] focus:bg-white"
                  >
                    {customers.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>

                <button
                  type="button"
                  className="h-11 shrink-0 rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-950"
                >
                  + Customer
                </button>
              </div>
            </div>

            {/* ITEMS HEADER */}

            <div className="border-b border-slate-100 px-5 py-4 sm:px-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Items
                  </p>

                  <h2 className="mt-1 text-base font-semibold tracking-tight text-slate-950">
                    What are you charging for?
                  </h2>
                </div>

                <div className="relative hidden w-[260px] sm:block">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                  <input
                    value={search}
                    onChange={(event) =>
                      setSearch(event.target.value)
                    }
                    placeholder="Search products or services"
                    className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs outline-none transition placeholder:text-slate-400 focus:border-[#16C784] focus:bg-white"
                  />
                </div>
              </div>

              {/* CATALOGUE */}

              <div className="mt-3 flex gap-2 overflow-hidden">
                {filteredCatalogue.slice(0, 4).map((item) => {
                  const selected = items.some(
                    (current) => current.id === item.id,
                  );

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => addItem(item)}
                      className="group flex min-w-0 flex-1 items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5 text-left transition hover:border-slate-200 hover:bg-white"
                    >
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                          selected
                            ? "bg-[#16C784]/10 text-[#16C784]"
                            : "bg-white text-slate-400"
                        }`}
                      >
                        {selected ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-[11px] font-semibold text-slate-900">
                          {item.name}
                        </p>

                        <p className="mt-0.5 truncate text-[9px] text-slate-400">
                          {item.type} · {formatCurrency(item.rate)}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ITEM TABLE */}

            <div className="min-h-0">
              {items.length === 0 ? (
                <div className="flex h-[230px] items-center justify-center text-center">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50">
                      <FileText className="h-5 w-5 text-slate-300" />
                    </div>

                    <p className="mt-3 text-sm font-semibold text-slate-900">
                      No items added
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Choose a product or service above.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  {/* TABLE HEADER */}

                  <div className="hidden grid-cols-[1fr_90px_120px_100px_36px] gap-4 border-b border-slate-100 px-6 py-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-300 sm:grid">
                    <span>Item</span>
                    <span>Type</span>
                    <span>Quantity</span>
                    <span className="text-right">Amount</span>
                    <span />
                  </div>

                  {/* ITEMS */}

                  <div className="divide-y divide-slate-100">
                    {items.slice(0, 3).map((item) => (
                      <div
                        key={item.id}
                        className="grid gap-3 px-5 py-4 sm:grid-cols-[1fr_90px_120px_100px_36px] sm:items-center sm:px-6"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-slate-900">
                            {item.name}
                          </p>

                          <p className="mt-1 text-[10px] text-slate-400">
                            {formatCurrency(item.rate)} per unit
                          </p>
                        </div>

                        <span className="w-fit rounded-full bg-slate-50 px-2 py-1 text-[9px] font-medium text-slate-400">
                          {item.type}
                        </span>

                        <div className="flex w-fit items-center rounded-lg border border-slate-200">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, -1)
                            }
                            className="flex h-8 w-8 items-center justify-center text-slate-400 transition hover:text-slate-900"
                          >
                            <Minus className="h-3 w-3" />
                          </button>

                          <span className="w-8 text-center text-xs font-semibold text-slate-900">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, 1)
                            }
                            className="flex h-8 w-8 items-center justify-center text-slate-400 transition hover:text-slate-900"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        <p className="text-right text-sm font-semibold text-slate-900">
                          {formatCurrency(
                            item.rate * item.quantity,
                          )}
                        </p>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="hidden rounded-lg p-2 text-slate-300 transition hover:bg-red-50 hover:text-red-500 sm:block"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* ADD ITEM */}

            <div className="border-t border-slate-100 bg-slate-50/60 px-5 py-3 sm:px-6">
              <button
                type="button"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-[#16C784]"
              >
                <Plus className="h-3.5 w-3.5" />
                Add another item
              </button>
            </div>
          </section>

          {/* ===================================================
              RIGHT — SUMMARY
          =================================================== */}

          <aside className="flex min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">

            {/* SUMMARY HEADER */}

            <div className="border-b border-slate-100 px-5 py-4">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Bill summary
              </p>

              <h2 className="mt-1.5 truncate text-lg font-semibold tracking-tight text-slate-950">
                {customer}
              </h2>
            </div>

            <div className="flex min-h-0 flex-1 flex-col px-5 py-5">

              {/* TOTALS */}

              <div className="space-y-3">
                <SummaryRow
                  label="Items"
                  value={`${items.length}`}
                />

                <SummaryRow
                  label="Subtotal"
                  value={formatCurrency(subtotal)}
                />

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Discount
                  </span>

                  <input
                    type="number"
                    min="0"
                    value={discount || ""}
                    onChange={(event) =>
                      setDiscount(
                        Math.max(
                          0,
                          Number(event.target.value) || 0,
                        ),
                      )
                    }
                    placeholder="₹0"
                    className="h-8 w-20 rounded-lg border border-slate-200 bg-slate-50 px-2 text-right text-xs font-semibold text-slate-900 outline-none focus:border-[#16C784] focus:bg-white"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Tax
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setTaxEnabled((current) => !current)
                    }
                    className={`relative h-5 w-9 rounded-full transition ${
                      taxEnabled
                        ? "bg-[#16C784]"
                        : "bg-slate-200"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                        taxEnabled ? "left-[18px]" : "left-0.5"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* TOTAL */}

              <div className="mt-5 border-t border-slate-100 pt-5">
                <p className="text-xs text-slate-400">
                  Total to collect
                </p>

                <p className="mt-1 text-4xl font-semibold tracking-[-0.065em] text-slate-950">
                  {formatCurrency(total)}
                </p>

                <p className="mt-1 text-[10px] text-slate-400">
                  Including {formatCurrency(tax)} tax
                </p>
              </div>

              {/* PAYMENT */}

              <div className="mt-6">
                <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  How was this paid?
                </p>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    {
                      label: "Paid",
                      icon: Check,
                    },
                    {
                      label: "Credit",
                      icon: Wallet,
                    },
                    {
                      label: "Partial",
                      icon: CreditCard,
                    },
                  ].map((method) => {
                    const Icon = method.icon;

                    const active =
                      paymentMethod === method.label;

                    return (
                      <button
                        key={method.label}
                        type="button"
                        onClick={() =>
                          setPaymentMethod(
                            method.label as
                              | "Paid"
                              | "Credit"
                              | "Partial",
                          )
                        }
                        className={`flex h-[62px] flex-col items-center justify-center gap-1.5 rounded-xl border transition ${
                          active
                            ? "border-slate-950 bg-slate-950 text-white"
                            : "border-slate-200 bg-white text-slate-500 hover:border-slate-300"
                        }`}
                      >
                        <Icon className="h-4 w-4" />

                        <span className="text-[10px] font-semibold">
                          {method.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* COMPLETE */}

              <div className="mt-auto pt-6">
                <button
                  type="button"
                  className="flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#16C784] py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(22,199,132,0.18)] transition hover:bg-[#12b977]"
                >
                  <Check className="h-4 w-4" />
                  Complete bill
                </button>

                <button
                  type="button"
                  className="mt-2 flex w-full items-center justify-center gap-2 py-2 text-xs font-medium text-slate-400 transition hover:text-slate-700"
                >
                  <X className="h-3.5 w-3.5" />
                  Discard
                </button>
              </div>

              {/* SYSTEM MESSAGE */}

              <div className="mt-3 rounded-xl bg-slate-50 px-3 py-2.5">
                <p className="text-[10px] leading-4 text-slate-400">
                  Completing this bill keeps the customer,
                  inventory, invoice and payment records connected.
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* =====================================================
            BOTTOM SIGNAL
        ===================================================== */}

        <footer className="mt-4 flex shrink-0 items-center justify-between border-t border-slate-200 pt-3">
          <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-slate-300">
            QuantPay Billing
          </span>

          <span className="hidden text-[9px] text-slate-300 sm:block">
            One bill · connected business records
          </span>
        </footer>
      </div>
    </main>
  );
}

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-slate-400">
        {label}
      </span>

      <span className="text-sm font-semibold text-slate-900">
        {value}
      </span>
    </div>
  );
}