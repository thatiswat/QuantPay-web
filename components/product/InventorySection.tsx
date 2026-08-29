import {
  ArrowDown,
  ArrowUp,
  Boxes,
  Package,
  ShoppingCart,
  Truck,
} from "lucide-react";

const movements = [
  {
    type: "Sale",
    product: "Premium Rice 25kg",
    quantity: "-4",
    time: "2 min ago",
    icon: ShoppingCart,
  },
  {
    type: "Restock",
    product: "Basmati Rice 10kg",
    quantity: "+40",
    time: "18 min ago",
    icon: Truck,
  },
  {
    type: "Sale",
    product: "Wholesale Pack",
    quantity: "-2",
    time: "34 min ago",
    icon: ShoppingCart,
  },
];

export default function InventorySection() {
  return (
    <section className="relative overflow-hidden bg-white py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#16C784]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#16C784]">
                Inventory
              </span>
            </div>

            <h2 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.92] tracking-[-0.065em] text-[#0D0D0D] sm:text-6xl md:text-7xl">
              Know what you have.
              <br />
              <span className="text-slate-400">
                Know what moved.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-500 lg:ml-auto lg:text-lg lg:leading-8">
            QuantPay keeps your inventory tied to the transactions
            that change it. Sales, purchases and stock movement stay
            in the same business record.
          </p>
        </div>

        {/* =====================================================
            INVENTORY EXPERIENCE
        ===================================================== */}

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Stock summary */}

          <div className="rounded-[28px] border border-slate-200 bg-[#fafafa] p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Inventory
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  Current stock
                </h3>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                <Boxes className="h-5 w-5 text-[#16C784]" />
              </div>
            </div>

            {/* Main number */}

            <div className="mt-10">
              <p className="text-5xl font-bold tracking-[-0.04em] text-slate-950">
                1,842
              </p>

              <p className="mt-2 text-sm text-slate-400">
                total units across products
              </p>
            </div>

            {/* Stock indicator */}

            <div className="mt-8">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  Stock health
                </span>

                <span className="font-semibold text-[#16C784]">
                  Healthy
                </span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-[78%] rounded-full bg-[#16C784]" />
              </div>
            </div>

            {/* Product */}

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50">
                  <Package className="h-4 w-4 text-slate-500" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-900">
                    Premium Rice 25kg
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    SKU PR-2501
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900">
                    186
                  </p>

                  <p className="text-[10px] text-slate-400">
                    units
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Movement */}

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_25px_70px_rgba(15,23,42,0.05)] md:p-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Stock movement
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  What's changing
                </h3>
              </div>

              <span className="rounded-full bg-[#16C784]/10 px-3 py-1.5 text-[10px] font-semibold text-[#16C784]">
                LIVE
              </span>
            </div>

            <div className="mt-6 divide-y divide-slate-100">
              {movements.map((movement) => {
                const Icon = movement.icon;
                const isPositive = movement.quantity.startsWith("+");

                return (
                  <div
                    key={`${movement.type}-${movement.product}`}
                    className="flex items-center gap-4 py-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50">
                      <Icon className="h-4 w-4 text-slate-500" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-xs font-semibold text-slate-900">
                          {movement.type}
                        </p>

                        <span className="h-1 w-1 rounded-full bg-slate-300" />

                        <span className="text-[10px] text-slate-400">
                          {movement.time}
                        </span>
                      </div>

                      <p className="mt-1 truncate text-sm text-slate-500">
                        {movement.product}
                      </p>
                    </div>

                    <div
                      className={[
                        "flex items-center gap-1 text-sm font-semibold",
                        isPositive
                          ? "text-[#16C784]"
                          : "text-slate-700",
                      ].join(" ")}
                    >
                      {isPositive ? (
                        <ArrowUp className="h-3.5 w-3.5" />
                      ) : (
                        <ArrowDown className="h-3.5 w-3.5" />
                      )}

                      {movement.quantity}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom */}

            <div className="mt-5 rounded-2xl bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-800">
                    Every transaction updates stock.
                  </p>

                  <p className="mt-1 text-[11px] text-slate-400">
                    No separate inventory workflow required.
                  </p>
                </div>

                <span className="h-2 w-2 rounded-full bg-[#16C784] shadow-[0_0_0_5px_rgba(22,199,132,0.08)]" />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM PRINCIPLE
        ===================================================== */}

        <div className="mt-14 border-t border-slate-200 pt-8">
          <div className="grid gap-6 sm:grid-cols-3">
            <Principle
              number="01"
              title="Sell"
              text="A completed sale records what left your inventory."
            />

            <Principle
              number="02"
              title="Move"
              text="Stock levels change as your business changes."
            />

            <Principle
              number="03"
              title="Know"
              text="Your team always has a clearer picture of what's available."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Principle({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <span className="text-[10px] font-semibold tracking-[0.2em] text-[#16C784]">
        {number}
      </span>

      <div>
        <h3 className="text-sm font-semibold text-slate-950">
          {title}
        </h3>

        <p className="mt-1.5 max-w-xs text-sm leading-6 text-slate-500">
          {text}
        </p>
      </div>
    </div>
  );
}