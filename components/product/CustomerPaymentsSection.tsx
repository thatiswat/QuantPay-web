import {
  ArrowDownLeft,
  ArrowUpRight,
  Check,
  CreditCard,
  IndianRupee,
  UserRound,
} from "lucide-react";

const payments = [
  {
    customer: "Avyay Enterprises",
    invoice: "INV-2026-00482",
    amount: "₹12,768",
    status: "Received",
    type: "credit",
  },
  {
    customer: "Bharat Wholesale",
    invoice: "INV-2026-00479",
    amount: "₹8,450",
    status: "Pending",
    type: "pending",
  },
  {
    customer: "Mehta Stores",
    invoice: "INV-2026-00471",
    amount: "₹6,280",
    status: "Received",
    type: "credit",
  },
];

export default function CustomerPaymentsSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#16C784]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#16C784]">
                Customers & payments
              </span>
            </div>

            <h2 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.92] tracking-[-0.065em] text-[#0D0D0D] sm:text-6xl md:text-7xl">
              Know who you serve.
              <br />
              <span className="text-slate-400">
                Know what you collect.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-500 lg:ml-auto lg:text-lg lg:leading-8">
            Every customer interaction and every payment builds on the
            same transaction history. QuantPay keeps the relationship
            and the money trail together.
          </p>
        </div>

        {/* =====================================================
            MAIN EXPERIENCE
        ===================================================== */}

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* ===================================================
              CUSTOMER
          =================================================== */}

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_25px_70px_rgba(15,23,42,0.05)] md:p-8">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#16C784]/10">
                  <UserRound className="h-5 w-5 text-[#16C784]" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Customer
                  </p>

                  <h3 className="mt-1 text-xl font-semibold text-slate-950">
                    Avyay Enterprises
                  </h3>
                </div>
              </div>

              <span className="rounded-full bg-[#16C784]/10 px-3 py-1.5 text-[10px] font-semibold text-[#16C784]">
                ACTIVE
              </span>
            </div>

            {/* Customer metrics */}

            <div className="mt-8 grid grid-cols-2 gap-3">
              <Metric
                label="Total purchases"
                value="₹4.82L"
              />

              <Metric
                label="Outstanding"
                value="₹18,450"
              />
            </div>

            {/* Customer information */}

            <div className="mt-3 rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Customer since
                </span>

                <span className="text-xs font-medium text-slate-700">
                  Apr 2026
                </span>
              </div>

              <div className="my-4 h-px bg-slate-200" />

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Last transaction
                </span>

                <span className="text-xs font-medium text-slate-700">
                  Today
                </span>
              </div>

              <div className="my-4 h-px bg-slate-200" />

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Payment behaviour
                </span>

                <span className="flex items-center gap-1.5 text-xs font-semibold text-[#16C784]">
                  <Check className="h-3.5 w-3.5" />
                  Reliable
                </span>
              </div>
            </div>

            {/* Customer CTA */}

            <button className="mt-5 flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white py-3 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950">
              View customer history
            </button>
          </div>

          {/* ===================================================
              PAYMENTS
          =================================================== */}

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_25px_70px_rgba(15,23,42,0.05)] md:p-8">
            <div className="flex items-start justify-between border-b border-slate-100 pb-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Payments
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  Money, clearly tracked.
                </h3>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50">
                <CreditCard className="h-5 w-5 text-slate-500" />
              </div>
            </div>

            {/* Collection summary */}

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-950 p-5 text-white">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                  Collected
                </p>

                <p className="mt-3 text-2xl font-bold tracking-tight">
                  ₹8.42L
                </p>

                <div className="mt-2 flex items-center gap-1 text-[10px] font-medium text-[#16C784]">
                  <ArrowUpRight className="h-3 w-3" />
                  12.4%
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  Pending
                </p>

                <p className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                  ₹64.8K
                </p>

                <div className="mt-2 flex items-center gap-1 text-[10px] font-medium text-slate-400">
                  <ArrowDownLeft className="h-3 w-3" />
                  18 invoices
                </div>
              </div>
            </div>

            {/* Transactions */}

            <div className="mt-6 divide-y divide-slate-100">
              {payments.map((payment) => (
                <div
                  key={payment.invoice}
                  className="flex items-center gap-4 py-4"
                >
                  <div
                    className={[
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                      payment.type === "credit"
                        ? "bg-[#16C784]/10"
                        : "bg-slate-100",
                    ].join(" ")}
                  >
                    {payment.type === "credit" ? (
                      <IndianRupee className="h-4 w-4 text-[#16C784]" />
                    ) : (
                      <CreditCard className="h-4 w-4 text-slate-400" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-semibold text-slate-900">
                      {payment.customer}
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      {payment.invoice}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-900">
                      {payment.amount}
                    </p>

                    <p
                      className={[
                        "mt-1 text-[10px] font-semibold",
                        payment.type === "credit"
                          ? "text-[#16C784]"
                          : "text-amber-500",
                      ].join(" ")}
                    >
                      {payment.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            PRINCIPLE
        ===================================================== */}

        <div className="mt-16 border-t border-slate-200 pt-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#16C784]">
                The QuantPay principle
              </p>

              <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Your customer record should tell the story of the business.
              </p>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              From the first sale to the latest payment, QuantPay keeps
              the history connected instead of scattering it across
              separate tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
      <p className="text-[10px] uppercase tracking-[0.15em] text-slate-400">
        {label}
      </p>

      <p className="mt-3 text-xl font-bold tracking-tight text-slate-950">
        {value}
      </p>
    </div>
  );
}