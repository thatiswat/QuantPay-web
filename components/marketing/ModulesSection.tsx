import {
  BarChart3,
  Boxes,
  CreditCard,
  FileText,
  Package,
  Receipt,
  Users,
  Wallet,
} from "lucide-react";

const modules = [
  {
    icon: Users,
    title: "Customers",
    description:
      "Keep customer profiles, balances, invoices and payment history together.",
  },
  {
    icon: Package,
    title: "Products",
    description:
      "Manage your products, pricing, taxes and business catalogue from one place.",
  },
  {
    icon: Boxes,
    title: "Inventory",
    description:
      "Track stock levels, movement and availability across your business.",
  },
  {
    icon: Receipt,
    title: "Invoices",
    description:
      "Create professional GST-ready invoices and keep every bill organised.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    description:
      "Track collections, pending payments and transaction activity.",
  },
  {
    icon: Wallet,
    title: "Expenses",
    description:
      "Record business expenses and understand where your money goes.",
  },
  {
    icon: BarChart3,
    title: "Reports",
    description:
      "Turn everyday business activity into useful financial insights.",
  },
  {
    icon: FileText,
    title: "Staff",
    description:
      "Give your team access to the tools they need with controlled permissions.",
  },
];

export default function ModulesSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Everything connected
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            One system for
            <br />
            running your business.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            QuantPay brings the everyday financial and operational
            workflows of your business into one connected workspace.
          </p>
        </div>

        {/* Modules */}

        <div className="mt-16 grid overflow-hidden rounded-[32px] border border-slate-200 md:grid-cols-2 xl:grid-cols-4">
          {modules.map((module, index) => {
            const Icon = module.icon;

            return (
              <div
                key={module.title}
                className={`group border-slate-200 bg-white p-7 transition hover:bg-slate-50 ${
                  index % 4 !== 3 ? "xl:border-r" : ""
                } ${
                  index < 4 ? "xl:border-b" : ""
                } ${
                  index % 2 === 0 ? "md:border-r xl:border-r" : ""
                } ${
                  index < 6 ? "md:border-b xl:border-b-0" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 transition group-hover:bg-emerald-50">
                    <Icon className="h-5 w-5 text-slate-700 transition group-hover:text-emerald-600" />
                  </div>

                  <span className="text-xs font-medium text-slate-300">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-bold text-slate-950">
                  {module.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {module.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}

        <div className="mt-12 flex flex-col gap-5 border-t border-slate-200 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            Start with the workflows your business needs today and
            build everything else around the same workspace.
          </p>

          <span className="text-sm font-semibold text-slate-900">
            Built for Indian businesses →
          </span>
        </div>
      </div>
    </section>
  );
}
