"use client";

import { useMemo, useState } from "react";
import {
  Boxes,
  MoreHorizontal,
  Package,
  Plus,
  Search,
  Tag,
} from "lucide-react";

type Product = {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  reorderLevel: number;
  status: "In stock" | "Low stock" | "Out of stock";
};

const products: Product[] = [
  {
    id: "PRD-001",
    name: "Premium Rice 25kg",
    sku: "RICE-25-P",
    category: "Rice",
    price: 1200,
    stock: 6,
    reorderLevel: 10,
    status: "Low stock",
  },
  {
    id: "PRD-002",
    name: "Basmati Rice 10kg",
    sku: "RICE-10-B",
    category: "Rice",
    price: 700,
    stock: 8,
    reorderLevel: 15,
    status: "Low stock",
  },
  {
    id: "PRD-003",
    name: "Wholesale Pack",
    sku: "PACK-W-01",
    category: "Wholesale",
    price: 1200,
    stock: 4,
    reorderLevel: 10,
    status: "Low stock",
  },
  {
    id: "PRD-004",
    name: "Toor Dal 5kg",
    sku: "DAL-05-T",
    category: "Pulses",
    price: 620,
    stock: 42,
    reorderLevel: 10,
    status: "In stock",
  },
  {
    id: "PRD-005",
    name: "Sunflower Oil 5L",
    sku: "OIL-05-S",
    category: "Oil",
    price: 780,
    stock: 28,
    reorderLevel: 8,
    status: "In stock",
  },
  {
    id: "PRD-006",
    name: "Sugar 25kg",
    sku: "SUG-25-W",
    category: "Grocery",
    price: 1180,
    stock: 0,
    reorderLevel: 10,
    status: "Out of stock",
  },
  {
    id: "PRD-007",
    name: "Wheat Flour 10kg",
    sku: "WHT-10-F",
    category: "Flour",
    price: 560,
    stock: 31,
    reorderLevel: 10,
    status: "In stock",
  },
  {
    id: "PRD-008",
    name: "Cooking Salt 5kg",
    sku: "SLT-05-C",
    category: "Grocery",
    price: 180,
    stock: 18,
    reorderLevel: 8,
    status: "In stock",
  },
  {
    id: "PRD-009",
    name: "Red Chilli Powder 1kg",
    sku: "CHL-01-R",
    category: "Spices",
    price: 260,
    stock: 5,
    reorderLevel: 10,
    status: "Low stock",
  },
  {
    id: "PRD-010",
    name: "Turmeric Powder 1kg",
    sku: "TUR-01-P",
    category: "Spices",
    price: 220,
    stock: 24,
    reorderLevel: 8,
    status: "In stock",
  },
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(
      new Set(products.map((product) => product.category)),
    ),
  ];

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.sku.toLowerCase().includes(query);

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const totalProducts = products.length;

  const lowStock = products.filter(
    (product) => product.status === "Low stock",
  ).length;

  const outOfStock = products.filter(
    (product) => product.status === "Out of stock",
  ).length;

  const inventoryValue = products.reduce(
    (total, product) => total + product.price * product.stock,
    0,
  );

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
                Products
              </span>
            </div>

            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-4xl">
              Your catalogue.
            </h1>

            <p className="mt-1.5 text-sm text-slate-400">
              Manage products, pricing and stock across your business.
            </p>
          </div>

          <button
            type="button"
            className="hidden h-10 shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 text-xs font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-black sm:inline-flex"
          >
            <Plus className="h-4 w-4" />
            Add product
          </button>
        </header>

        {/* =====================================================
            SUMMARY
        ===================================================== */}

        <section className="mt-4 grid shrink-0 grid-cols-2 gap-3 xl:grid-cols-4">
          <SummaryCard
            icon={Package}
            label="Products"
            value={totalProducts.toString()}
            detail="In your catalogue"
          />

          <SummaryCard
            icon={Tag}
            label="Inventory value"
            value={formatCurrency(inventoryValue)}
            detail="Current stock value"
          />

          <SummaryCard
            icon={Boxes}
            label="Low stock"
            value={lowStock.toString()}
            detail="Needs replenishment"
            warning
          />

          <SummaryCard
            icon={Package}
            label="Out of stock"
            value={outOfStock.toString()}
            detail="Currently unavailable"
            warning={outOfStock > 0}
          />
        </section>

        {/* =====================================================
            PRODUCT WORKSPACE
        ===================================================== */}

        <section className="mt-4 min-h-0 flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white">

          {/* ===================================================
              TOOLBAR
          =================================================== */}

          <div className="flex shrink-0 flex-col gap-3 border-b border-slate-100 px-5 py-3.5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <h2 className="text-sm font-semibold text-slate-950">
                Product catalogue
              </h2>

              <p className="mt-0.5 text-[10px] text-slate-400">
                {filteredProducts.length} products shown
              </p>
            </div>

            <div className="flex gap-2">
              {/* Search */}

              <div className="relative min-w-0 flex-1 sm:w-[250px] sm:flex-none">
                <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search products..."
                  className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#16C784] focus:bg-white"
                />
              </div>

              {/* Category */}

              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-600 outline-none transition focus:border-[#16C784]"
              >
                {categories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>

          {/* ===================================================
              DESKTOP TABLE
              ONLY THIS AREA SCROLLS
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
                    Price
                  </th>

                  <th className="px-4 py-3 text-right text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Stock
                  </th>

                  <th className="px-4 py-3 text-center text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Status
                  </th>

                  <th className="w-12 px-4 py-3" />
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredProducts.map((product) => (
                  <ProductRow
                    key={product.id}
                    product={product}
                  />
                ))}
              </tbody>
            </table>

            {filteredProducts.length === 0 && <EmptyState />}
          </div>

          {/* ===================================================
              MOBILE
              ONLY THIS AREA SCROLLS
          =================================================== */}

          <div className="h-full min-h-0 overflow-y-auto md:hidden">
            {filteredProducts.length > 0 ? (
              <div className="divide-y divide-slate-100">
                {filteredProducts.map((product) => (
                  <MobileProductRow
                    key={product.id}
                    product={product}
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
            QuantPay · Product catalogue
          </p>

          <p className="hidden text-[9px] text-slate-300 sm:block">
            Products become inventory when your business starts moving them.
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
  icon: typeof Package;
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
   DESKTOP PRODUCT ROW
============================================================= */

function ProductRow({
  product,
}: {
  product: Product;
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
              {product.name}
            </p>

            <p className="mt-0.5 text-[10px] text-slate-400">
              {product.sku}
            </p>
          </div>
        </div>
      </td>

      <td className="px-4 py-3.5 text-xs text-slate-600">
        {product.category}
      </td>

      <td className="px-4 py-3.5 text-right text-xs font-semibold text-slate-900">
        {formatCurrency(product.price)}
      </td>

      <td className="px-4 py-3.5 text-right">
        <span className="text-xs font-semibold text-slate-900">
          {product.stock}
        </span>

        <span className="ml-1 text-[10px] text-slate-400">
          units
        </span>
      </td>

      <td className="px-4 py-3.5 text-center">
        <ProductStatus status={product.status} />
      </td>

      <td className="px-4 py-3.5">
        <button
          type="button"
          aria-label={`More actions for ${product.name}`}
          className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-50 hover:text-slate-600"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </td>
    </tr>
  );
}

/* =============================================================
   MOBILE PRODUCT ROW
============================================================= */

function MobileProductRow({
  product,
}: {
  product: Product;
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
              {product.name}
            </p>

            <p className="mt-1 text-[10px] text-slate-400">
              {product.sku}
            </p>
          </div>
        </div>

        <ProductStatus status={product.status} />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
            Category
          </p>

          <p className="mt-1 truncate text-xs font-semibold text-slate-900">
            {product.category}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
            Price
          </p>

          <p className="mt-1 text-xs font-semibold text-slate-900">
            {formatCurrency(product.price)}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
            Stock
          </p>

          <p className="mt-1 text-xs font-semibold text-slate-900">
            {product.stock}
          </p>
        </div>
      </div>
    </div>
  );
}

/* =============================================================
   STATUS
============================================================= */

function ProductStatus({
  status,
}: {
  status: Product["status"];
}) {
  const styles = {
    "In stock": {
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

  const style = styles[status];

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
          No products found
        </p>

        <p className="mt-1 text-xs text-slate-400">
          Try changing your search or category.
        </p>
      </div>
    </div>
  );
}