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
  TrendingUp,
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
];

export default function InventoryPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"All" | StockStatus>(
    "All"
  );

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
    0
  );

  const soldUnits = inventory.reduce(
    (total, item) => total + item.sold,
    0
  );

  const receivedUnits = inventory.reduce(
    (total, item) => total + item.received,
    0
  );

  const lowStock = inventory.filter(
    (item) => item.status === "Low stock"
  ).length;

  const outOfStock = inventory.filter(
    (item) => item.status === "Out of stock"
  ).length;

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 sm:px-7 lg:py-10">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#16C784]">
            Inventory
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-4xl">
            Know your stock.
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            See what is available, what moved and what needs replenishment.
          </p>
        </div>

        <button className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 text-xs font-semibold text-white transition hover:bg-black">
          <Plus className="h-4 w-4" />
          Stock adjustment
        </button>
      </div>

      {/* =====================================================
          SUMMARY
      ===================================================== */}

      <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
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
          value={(lowStock + outOfStock).toString()}
          detail={`${lowStock} low · ${outOfStock} empty`}
          warning
        />
      </div>

      {/* =====================================================
          STOCK HEALTH
      ===================================================== */}

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Stock health
            </p>

            <h2 className="mt-1 text-lg font-semibold tracking-tight text-slate-950">
              {lowStock + outOfStock === 0
                ? "Everything looks healthy."
                : `${lowStock + outOfStock} products need attention.`}
            </h2>
          </div>

          <div className="flex flex-wrap gap-5 text-xs">
            <HealthLegend
              label="Healthy"
              count={
                inventory.filter(
                  (item) => item.status === "Healthy"
                ).length
              }
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

        <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-[#16C784]"
            style={{
              width: `${
                (inventory.filter(
                  (item) => item.status === "Healthy"
                ).length /
                  inventory.length) *
                100
              }%`,
            }}
          />
        </div>
      </section>

      {/* =====================================================
          INVENTORY TABLE
      ===================================================== */}

      <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        {/* Toolbar */}

        <div className="flex flex-col gap-4 border-b border-slate-100 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-sm font-semibold text-slate-950">
              Stock levels
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Live inventory position
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
                placeholder="Search inventory..."
                className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#16C784] focus:bg-white"
              />
            </div>

            <select
              value={filter}
              onChange={(event) =>
                setFilter(
                  event.target.value as
                    | "All"
                    | StockStatus
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

        {/* Desktop */}

        <div className="hidden overflow-x-auto md:block">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
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
        </div>

        {/* Mobile */}

        <div className="divide-y divide-slate-100 md:hidden">
          {filteredInventory.map((item) => (
            <MobileInventoryRow
              key={item.id}
              item={item}
            />
          ))}
        </div>

        {/* Empty */}

        {filteredInventory.length === 0 && (
          <div className="px-6 py-16 text-center">
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
        )}
      </section>

      {/* =====================================================
          FOOTER SIGNAL
      ===================================================== */}

      <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5">
        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-300">
          Inventory position
        </p>

        <p className="hidden text-[10px] text-slate-400 sm:block">
          Billing decreases stock. Receiving increases it.
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
}: {
  icon: typeof Boxes;
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
        className={`mt-5 text-2xl font-semibold tracking-tight ${
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
    <span className={`flex items-center gap-2 font-semibold ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {count} {label}
    </span>
  );
}

function InventoryRow({
  item,
}: {
  item: InventoryItem;
}) {
  return (
    <tr className="transition-colors hover:bg-slate-50/60">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50">
            <Package className="h-4 w-4 text-slate-500" />
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-900">
              {item.name}
            </p>

            <p className="mt-1 text-[10px] text-slate-400">
              {item.sku}
            </p>
          </div>
        </div>
      </td>

      <td className="px-4 py-4 text-xs text-slate-600">
        {item.category}
      </td>

      <td className="px-4 py-4 text-right">
        <span className="text-xs font-semibold text-slate-900">
          {item.stock}
        </span>

        <span className="ml-1 text-[10px] text-slate-400">
          units
        </span>
      </td>

      <td className="px-4 py-4 text-right text-xs font-semibold text-slate-900">
        {item.sold}
      </td>

      <td className="px-4 py-4 text-right text-xs text-slate-500">
        {item.reorderLevel}
      </td>

      <td className="px-4 py-4 text-center">
        <StockStatus status={item.status} />
      </td>

      <td className="px-4 py-4">
        <button className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-50 hover:text-slate-600">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </td>
    </tr>
  );
}

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
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
      {status}
    </span>
  );
}