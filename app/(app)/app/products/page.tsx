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
    ...Array.from(new Set(products.map((product) => product.category))),
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
    (product) => product.status === "Low stock"
  ).length;

  const outOfStock = products.filter(
    (product) => product.status === "Out of stock"
  ).length;

  const inventoryValue = products.reduce(
    (total, product) => total + product.price * product.stock,
    0
  );

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 sm:px-7 lg:py-10">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#16C784]">
            Products
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-4xl">
            Your catalogue.
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage products, pricing and stock across your business.
          </p>
        </div>

        <button className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 text-xs font-semibold text-white transition hover:bg-black">
          <Plus className="h-4 w-4" />
          Add product
        </button>
      </div>

      {/* =====================================================
          SUMMARY
      ===================================================== */}

      <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
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
      </div>

      {/* =====================================================
          PRODUCT TABLE
      ===================================================== */}

      <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        {/* Toolbar */}

        <div className="flex flex-col gap-4 border-b border-slate-100 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-sm font-semibold text-slate-950">
              Product catalogue
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              {filteredProducts.length} products shown
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            {/* Search */}

            <div className="relative sm:w-[250px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

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
              className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-600 outline-none focus:border-[#16C784]"
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
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
        </div>

        {/* Mobile */}

        <div className="divide-y divide-slate-100 md:hidden">
          {filteredProducts.map((product) => (
            <MobileProductRow
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* Empty */}

        {filteredProducts.length === 0 && (
          <div className="px-6 py-16 text-center">
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
        )}
      </section>

      {/* =====================================================
          FOOTER SIGNAL
      ===================================================== */}

      <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5">
        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-300">
          Product catalogue
        </p>

        <p className="hidden text-[10px] text-slate-400 sm:block">
          Products become inventory when your business starts moving them.
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
  warning = false,
}: {
  icon: typeof Package;
  label: string;
  value: string;
  detail: string;
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
          warning ? "text-amber-500" : "text-slate-950"
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

function ProductRow({
  product,
}: {
  product: Product;
}) {
  return (
    <tr className="group transition-colors hover:bg-slate-50/60">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50">
            <Package className="h-4 w-4 text-slate-500" />
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-900">
              {product.name}
            </p>

            <p className="mt-1 text-[10px] text-slate-400">
              {product.sku}
            </p>
          </div>
        </div>
      </td>

      <td className="px-4 py-4 text-xs text-slate-600">
        {product.category}
      </td>

      <td className="px-4 py-4 text-right text-xs font-semibold text-slate-900">
        {formatCurrency(product.price)}
      </td>

      <td className="px-4 py-4 text-right">
        <span className="text-xs font-semibold text-slate-900">
          {product.stock}
        </span>

        <span className="ml-1 text-[10px] text-slate-400">
          units
        </span>
      </td>

      <td className="px-4 py-4 text-center">
        <ProductStatus status={product.status} />
      </td>

      <td className="px-4 py-4">
        <button
          aria-label={`More actions for ${product.name}`}
          className="rounded-lg p-2 text-slate-300 transition hover:bg-white hover:text-slate-600"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </td>
    </tr>
  );
}

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
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
      {status}
    </span>
  );
}