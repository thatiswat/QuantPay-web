import {
  BarChart3,
  Boxes,
  CreditCard,
  FileText,
  Package,
  Receipt,
  Users,
  Wallet,
  ArrowUpRight,
} from "lucide-react";

const modules = [
  {
    icon: Users,
    number: "01",
    title: "Customers",
    description:
      "Know who you sell to. Keep profiles, balances, invoices and payment history together.",
  },
  {
    icon: Package,
    number: "02",
    title: "Products",
    description:
      "Keep your catalogue organised with products, pricing, taxes and the information behind every sale.",
  },
  {
    icon: Boxes,
    number: "03",
    title: "Inventory",
    description:
      "Know what is available, what moved and what needs attention without maintaining another system.",
  },
  {
    icon: Receipt,
    number: "04",
    title: "Billing",
    description:
      "Create GST-ready bills and invoices quickly while keeping every sale connected to the rest of your business.",
  },
  {
    icon: CreditCard,
    number: "05",
    title: "Payments",
    description:
      "Track what came in, what is pending and where every transaction stands.",
  },
  {
    icon: Wallet,
    number: "06",
    title: "Expenses",
    description:
      "Record business spending and keep the cost side of your operation visible.",
  },
  {
    icon: BarChart3,
    number: "07",
    title: "Reports",
    description:
      "Turn everyday transactions into a clearer picture of how your business is performing.",
  },
  {
    icon: FileText,
    number: "08",
    title: "Staff",
    description:
      "Bring your team into the same system with access and permissions built around their role.",
  },
];

export default function ModulesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-28 md:py-36">
      {/* Ambient detail */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#16C784]/[0.025] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#16C784]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#16C784]">
                QuantPay Business
              </span>
            </div>

            <h2 className="mt-7 max-w-2xl text-5xl font-semibold leading-[0.92] tracking-[-0.065em] text-[#0D0D0D] sm:text-6xl md:text-7xl">
              Everything
              <br />
              <span className="text-slate-400">connected.</span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto lg:pb-1">
            <p className="text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              QuantPay brings the core parts of your business together —
              from the first bill to the final payment.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              One system. One source of business information. Built to
              grow with you.
            </p>
          </div>
        </div>

        {/* =====================================================
            MODULE GRID
        ===================================================== */}

        <div className="mt-20 border-y border-slate-200">
          <div className="grid md:grid-cols-2 xl:grid-cols-4">
            {modules.map((module, index) => {
              const Icon = module.icon;

              return (
                <div
                  key={module.title}
                  className={[
                    "group relative min-h-[265px] border-slate-200 p-7 transition-all duration-300",
                    "hover:bg-slate-50",
                    "xl:border-r",
                    index % 4 === 3 ? "xl:border-r-0" : "",
                    index < 4 ? "xl:border-b" : "",
                    index % 2 === 0 ? "md:border-r" : "",
                    index % 2 === 1 ? "md:border-r-0" : "",
                    index < 6 ? "md:border-b" : "",
                    index >= 6 ? "md:border-b-0" : "",
                  ].join(" ")}
                >
                  {/* Number */}

                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white transition-all duration-300 group-hover:border-[#16C784]/30 group-hover:bg-[#16C784]/[0.06]">
                      <Icon className="h-[18px] w-[18px] text-slate-600 transition-colors duration-300 group-hover:text-[#16C784]" />
                    </div>

                    <span className="font-mono text-[10px] tracking-[0.15em] text-slate-300">
                      {module.number}
                    </span>
                  </div>

                  {/* Content */}

                  <div className="mt-12">
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                      {module.title}
                    </h3>

                    <p className="mt-3 max-w-[260px] text-sm leading-6 text-slate-500">
                      {module.description}
                    </p>
                  </div>

                  {/* Hover indicator */}

                  <ArrowUpRight className="absolute bottom-7 right-7 h-4 w-4 text-slate-200 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#16C784] group-hover:opacity-100" />
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            CLOSING LINE
        ===================================================== */}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            Start with what your business needs today.
          </p>

          <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16C784]" />
            Add more as you grow.
          </div>
        </div>
      </div>
    </section>
  );
}