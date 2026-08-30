"use client";

import { useMemo, useState } from "react";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Boxes,
  MoreHorizontal,
  Package,
  Plus,
  Search,
  TrendingDown,
} from "lucide-react";

type StockStatus = "Healthy" | "Low stock" | "Out of stock";

type InventoryItem = {
  id: string;
  name: string;
  sku: string;
  category: string;
  stock: number;
  reorderLevel: number;
  sold: number;
  received: number;
  status: StockStatus;
};

const inventory: InventoryItem[] = [
  {
    id: "INV-001",
    name: "Premium Rice 25kg",
    sku: "RICE-25-P",
    category: "Rice",
    stock: 6,
    reorderLevel: 10,
    sold: 34,
    received: 40,
    status: "Low stock",
  },
  {
    id: "INV-002",
    name: "Basmati Rice 10kg",
    sku: "RICE-10-B",
    category: "Rice",
    stock: 8,
    reorderLevel: 15,
    sold: 28,
    received: 36,
    status: "Low stock",
  },
  {
    id: "INV-003",
    name: "Wholesale Pack",
    sku: "PACK-W-01",
    category: "Wholesale",
    stock: 4,
    reorderLevel: 10,
    sold: 21,
    received: 25,
    status: "Low stock",
  },
  {
    id: "INV-004",
    name: "Toor Dal 5kg",
    sku: "DAL-05-T",
    category: "Pulses",
    stock: 42,
    reorderLevel: 10,
    sold: 18,
    received: 60,
    status: "Healthy",
  },
  {
    id: "INV-005",
    name: "Sunflower Oil 5L",
    sku: "OIL-05-S",
    category: "Oil",
    stock: 28,
    reorderLevel: 8,
    sold: 12,
    received: 40,
    status: "Healthy",
  },
  {
    id: "INV-006",
    name: "Sugar 25kg",
    sku: "SUG-25-W",
    category: "Grocery",
    stock: 0,
    reorderLevel: 10,
    sold: 30,
    received: 30,
    status: "Out of stock",
  },
  {
    id: "INV-007",
    name: "Wheat Flour 10kg",
    sku: "WHT-10-F",
    category: "Flour",
    stock: 31,
    reorderLevel: 10,
    sold: 22,
    received: 53,
    status: "Healthy",
  },
  {
    id: "INV-008",
    name: "Cooking Salt 5kg",
    sku: "SLT-05-C",
    category: "Grocery",
    stock: 18,
    reorderLevel: 8,
    sold: 16,
    received: 34,
    status: "Healthy",
  },
  {
    id: "INV-009",
    name: "Red Chilli Powder 1kg",
    sku: "CHL-01-R",
    category: "Spices",
    stock: 5,
    reorderLevel: 10,
    sold: 19,
    received: 24,
    status: "Low stock",
  },
  {
    id: "INV-010",
    name: "Turmeric Powder 1kg",
    sku: "TUR-01-P",
    category: "Spices",
    stock: 24,
    reorderLevel: 8,
    sold: 14,
    received: 38,
    status: "Healthy",
  },
];

export default function InventoryPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"All" | StockStatus>("All");

  const filteredInventory = useMemo(() => {
    const query = search.trim().toLowerCase();

    return inventory.filter((item) => {
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.sku.toLowerCase().includes(query);

      const matchesFilter =
        filter === "All" || item.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const totalUnits = inventory.reduce(
    (total, item) => total + item.stock,
    0,
  );

  const soldUnits = inventory.reduce(
    (total, item) => total + item.sold,
    0,
  );

  const receivedUnits = inventory.reduce(
    (total, item) => total + item.received,
    0,
  );

  const healthyCount = inventory.filter(
    (item) => item.status === "Healthy",
  ).length;

  const lowStock = inventory.filter(
    (item) => item.status === "Low stock",
  ).length;

  const outOfStock = inventory.filter(
    (item) => item.status === "Out of stock",
  ).length;

  const attentionCount = lowStock + outOfStock;

  const healthyPercentage =
    inventory.length === 0
      ? 0
      : (healthyCount / inventory.length) * 100;

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
                Inventory
              </span>
            </div>

            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-4xl">
              Know your stock.
            </h1>

            <p className="mt-1.5 text-sm text-slate-400">
              See what is available, what moved and what needs replenishment.
            </p>
          </div>

          <button
            type="button"
            className="hidden h-10 shrink-0 items-center gap-2 rounded-xl bg-slate-950 px-4 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-black sm:inline-flex"
          >
            <Plus className="h-4 w-4" />
            Stock adjustment
          </button>
        </header>

        {/* =====================================================
            COMMAND METRICS
        ===================================================== */}

        <section className="mt-4 grid shrink-0 grid-cols-2 gap-3 xl:grid-cols-4">
          <SummaryCard
            icon={Boxes}
            label="Available units"
            value={totalUnits.toLocaleString("en-IN")}
            detail="Current stock"
          />

          <SummaryCard
            icon={ArrowUpRight}
            label="Units sold"
            value={soldUnits.toLocaleString("en-IN")}
            detail="Through billing"
            positive
          />

          <SummaryCard
            icon={ArrowDownLeft}
            label="Units received"
            value={receivedUnits.toLocaleString("en-IN")}
            detail="Added to stock"
          />

          <SummaryCard
            icon={TrendingDown}
            label="Needs attention"
            value={attentionCount.toString()}
            detail={`${lowStock} low · ${outOfStock} empty`}
            warning
          />
        </section>

        {/* =====================================================
            STOCK HEALTH
        ===================================================== */}

        <section className="mt-4 shrink-0 rounded-2xl border border-slate-200 bg-white px-5 py-4 sm:px-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Stock health
              </p>

              <h2 className="mt-1 text-base font-semibold tracking-[-0.025em] text-slate-950 sm:text-lg">
                {attentionCount === 0
                  ? "Everything looks healthy."
                  : `${attentionCount} products need attention.`}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px]">
              <HealthLegend
                label="Healthy"
                count={healthyCount}
                className="text-[#16C784]"
              />

              <HealthLegend
                label="Low stock"
                count={lowStock}
                className="text-amber-500"
              />

              <HealthLegend
                label="Out of stock"
                count={outOfStock}
                className="text-red-500"
              />
            </div>
          </div>

          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-[#16C784] transition-all duration-500"
              style={{
                width: `${healthyPercentage}%`,
              }}
            />
          </div>
        </section>

        {/* =====================================================
            INVENTORY WORKSPACE
            ONLY THIS REGION SCROLLS
        ===================================================== */}

        <section className="mt-4 min-h-0 flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white">

          {/* ===================================================
              TOOLBAR
          =================================================== */}

          <div className="flex shrink-0 flex-col gap-3 border-b border-slate-100 px-5 py-3.5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-950">
                Stock levels
              </h2>

              <p className="mt-0.5 text-[10px] text-slate-400">
                {filteredInventory.length} products shown
              </p>
            </div>

            <div className="flex gap-2">
              <div className="relative min-w-0 flex-1 sm:w-[250px] sm:flex-none">
                <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search inventory..."
                  className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#16C784] focus:bg-white"
                />
              </div>

              <select
                value={filter}
                onChange={(event) =>
                  setFilter(
                    event.target.value as "All" | StockStatus,
                  )
                }
                className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-600 outline-none focus:border-[#16C784]"
              >
                <option value="All">All stock</option>
                <option value="Healthy">Healthy</option>
                <option value="Low stock">Low stock</option>
                <option value="Out of stock">Out of stock</option>
              </select>
            </div>
          </div>

          {/* ===================================================
              DESKTOP RECORDS
          =================================================== */}

          <div className="hidden h-full min-h-0 overflow-y-auto md:block">
            <table className="w-full border-collapse">
              <thead className="sticky top-0 z-10 bg-white">
                <tr className="border-b border-slate-100 bg-slate-50/95 backdrop-blur">
                  <th className="px-6 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Product
                  </th>

                  <th className="px-4 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Category
                  </th>

                  <th className="px-4 py-3 text-right text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Available
                  </th>

                  <th className="px-4 py-3 text-right text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Sold
                  </th>

                  <th className="px-4 py-3 text-right text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Reorder at
                  </th>

                  <th className="px-4 py-3 text-center text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Status
                  </th>

                  <th className="w-12 px-4 py-3" />
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredInventory.map((item) => (
                  <InventoryRow
                    key={item.id}
                    item={item}
                  />
                ))}
              </tbody>
            </table>

            {filteredInventory.length === 0 && <EmptyState />}
          </div>

          {/* ===================================================
              MOBILE RECORDS
          =================================================== */}

          <div className="h-full min-h-0 overflow-y-auto md:hidden">
            {filteredInventory.length > 0 ? (
              <div className="divide-y divide-slate-100">
                {filteredInventory.map((item) => (
                  <MobileInventoryRow
                    key={item.id}
                    item={item}
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
            QuantPay · Inventory
          </p>

          <p className="hidden text-[9px] text-slate-300 sm:block">
            Billing decreases stock. Receiving increases it.
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
}: {
  icon: typeof Boxes;
  label: string;
  value: string;
  detail: string;
  positive?: boolean;
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
   HEALTH LEGEND
============================================================= */

function HealthLegend({
  label,
  count,
  className,
}: {
  label: string;
  count: number;
  className: string;
}) {
  return (
    <span
      className={`flex items-center gap-2 font-semibold ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {count} {label}
    </span>
  );
}

/* =============================================================
   DESKTOP ROW
============================================================= */

function InventoryRow({
  item,
}: {
  item: InventoryItem;
}) {
  return (
    <tr className="group transition-colors hover:bg-slate-50/60">
      <td className="px-6 py-3.5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50">
            <Package className="h-4 w-4 text-slate-500" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-slate-900">
              {item.name}
            </p>

            <p className="mt-0.5 text-[10px] text-slate-400">
              {item.sku}
            </p>
          </div>
        </div>
      </td>

      <td className="px-4 py-3.5 text-xs text-slate-600">
        {item.category}
      </td>

      <td className="px-4 py-3.5 text-right">
        <span className="text-xs font-semibold text-slate-900">
          {item.stock}
        </span>

        <span className="ml-1 text-[10px] text-slate-400">
          units
        </span>
      </td>

      <td className="px-4 py-3.5 text-right text-xs font-semibold text-slate-900">
        {item.sold}
      </td>

      <td className="px-4 py-3.5 text-right text-xs text-slate-500">
        {item.reorderLevel}
      </td>

      <td className="px-4 py-3.5 text-center">
        <StockStatus status={item.status} />
      </td>

      <td className="px-4 py-3.5">
        <button
          type="button"
          aria-label={`More actions for ${item.name}`}
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

function MobileInventoryRow({
  item,
}: {
  item: InventoryItem;
}) {
  return (
    <div className="p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50">
            <Package className="h-4 w-4 text-slate-500" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-slate-900">
              {item.name}
            </p>

            <p className="mt-1 text-[10px] text-slate-400">
              {item.sku}
            </p>
          </div>
        </div>

        <StockStatus status={item.status} />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
            Available
          </p>

          <p className="mt-1 text-xs font-semibold text-slate-900">
            {item.stock}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
            Sold
          </p>

          <p className="mt-1 text-xs font-semibold text-slate-900">
            {item.sold}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
            Reorder
          </p>

          <p className="mt-1 text-xs font-semibold text-slate-900">
            {item.reorderLevel}
          </p>
        </div>
      </div>
    </div>
  );
}

/* =============================================================
   STATUS
============================================================= */

function StockStatus({
  status,
}: {
  status: StockStatus;
}) {
  const config = {
    Healthy: {
      dot: "bg-[#16C784]",
      text: "text-[#16C784]",
    },

    "Low stock": {
      dot: "bg-amber-400",
      text: "text-amber-500",
    },

    "Out of stock": {
      dot: "bg-red-400",
      text: "text-red-500",
    },
  };

  const style = config[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] font-semibold ${style.text}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${style.dot}`}
      />

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
          <Package className="h-5 w-5 text-slate-400" />
        </div>

        <p className="mt-4 text-sm font-medium text-slate-900">
          No inventory found
        </p>

        <p className="mt-1 text-xs text-slate-400">
          Try another search or stock filter.
        </p>
      </div>
    </div>
  );
}