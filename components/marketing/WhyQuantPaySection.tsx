"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Boxes,
  CreditCard,
  FileText,
  Package,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

const systems = [
  {
    label: "Customers",
    description: "Relationships",
    icon: Users,
  },
  {
    label: "Products",
    description: "Catalog",
    icon: Boxes,
  },
  {
    label: "Inventory",
    description: "Stock",
    icon: Package,
  },
  {
    label: "Billing",
    description: "Transactions",
    icon: FileText,
  },
  {
    label: "Payments",
    description: "Collections",
    icon: CreditCard,
  },
];

export default function WhyQuantPaySection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % systems.length);
    }, 1800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0D0D0D] py-28 text-white md:py-36">
      {/* =========================================================
          ATMOSPHERE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#16C784]/[0.035] blur-[140px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.08]" />

        <div className="absolute inset-x-0 bottom-0 h-px bg-white/[0.08]" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
          {/* =====================================================
              LEFT
          ===================================================== */}

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#16C784]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#16C784]">
                The QuantPay way
              </span>
            </div>

            <h2 className="mt-7 max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-5xl md:text-6xl">
              Your business,
              <br />
              <span className="text-white/45">all connected.</span>
            </h2>

            <p className="mt-7 max-w-lg text-[15px] leading-7 text-white/50 sm:text-base sm:leading-8">
              Your customers, products, inventory, billing and payments
              shouldn't live in separate systems. QuantPay brings the
              everyday flow of your business together.
            </p>

            <Link
              href="/product"
              className="group mt-9 inline-flex items-center text-sm font-semibold text-white transition-colors hover:text-[#16C784]"
            >
              See how QuantPay works

              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* =====================================================
              RIGHT — CONNECTED SYSTEM
          ===================================================== */}

          <div className="relative">
            {/* Outer architecture */}

            <div className="relative min-h-[470px] overflow-hidden rounded-[32px] border border-white/[0.09] bg-white/[0.025]">
              {/* Grid */}

              <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:64px_64px]" />

              {/* =================================================
                  CONNECTION LINES
              ================================================= */}

              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 700 470"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line
                  x1="350"
                  y1="235"
                  x2="120"
                  y2="95"
                  stroke="rgba(255,255,255,0.10)"
                  strokeWidth="1"
                />

                <line
                  x1="350"
                  y1="235"
                  x2="580"
                  y2="95"
                  stroke="rgba(255,255,255,0.10)"
                  strokeWidth="1"
                />

                <line
                  x1="350"
                  y1="235"
                  x2="120"
                  y2="375"
                  stroke="rgba(255,255,255,0.10)"
                  strokeWidth="1"
                />

                <line
                  x1="350"
                  y1="235"
                  x2="580"
                  y2="375"
                  stroke="rgba(255,255,255,0.10)"
                  strokeWidth="1"
                />

                {/* Animated signal */}

                <circle
                  r="3"
                  fill="#16C784"
                >
                  <animateMotion
                    dur="3.5s"
                    repeatCount="indefinite"
                    path="M350,235 L120,95"
                  />
                </circle>

                <circle
                  r="3"
                  fill="#16C784"
                >
                  <animateMotion
                    dur="3.5s"
                    begin="0.8s"
                    repeatCount="indefinite"
                    path="M350,235 L580,95"
                  />
                </circle>

                <circle
                  r="3"
                  fill="#16C784"
                >
                  <animateMotion
                    dur="3.5s"
                    begin="1.6s"
                    repeatCount="indefinite"
                    path="M350,235 L120,375"
                  />
                </circle>

                <circle
                  r="3"
                  fill="#16C784"
                >
                  <animateMotion
                    dur="3.5s"
                    begin="2.4s"
                    repeatCount="indefinite"
                    path="M350,235 L580,375"
                  />
                </circle>
              </svg>

              {/* =================================================
                  CENTRAL QUANTPAY CORE
              ================================================= */}

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[#16C784]/30 bg-[#0D0D0D] shadow-[0_0_80px_rgba(22,199,132,0.08)]">
                  {/* Pulse */}

                  <span className="absolute inset-[-10px] rounded-full border border-[#16C784]/10 animate-pulse" />

                  <img
                    src="/quantpay-q.svg"
                    alt="QuantPay"
                    className="h-12 w-12 object-contain invert"
                  />
                </div>

                <p className="mt-5 text-center text-[9px] font-semibold uppercase tracking-[0.28em] text-white/40">
                  QuantPay
                </p>
              </div>

              {/* =================================================
                  SYSTEM NODES
              ================================================= */}

              <SystemNode
                system={systems[0]}
                position="left-[9%] top-[14%]"
                active={active === 0}
              />

              <SystemNode
                system={systems[1]}
                position="right-[9%] top-[14%]"
                active={active === 1}
              />

              <SystemNode
                system={systems[2]}
                position="left-[9%] bottom-[14%]"
                active={active === 2}
              />

              <SystemNode
                system={systems[3]}
                position="right-[9%] bottom-[14%]"
                active={active === 3}
              />

              {/* Payments sits as a small signal node */}

              <div
                className={`absolute bottom-[7%] left-1/2 -translate-x-1/2 transition-all duration-500 ${
                  active === 4 ? "opacity-100" : "opacity-60"
                }`}
              >
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 backdrop-blur">
                  <CreditCard
                    className={`h-3.5 w-3.5 ${
                      active === 4
                        ? "text-[#16C784]"
                        : "text-white/40"
                    }`}
                  />

                  <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/45">
                    Payments
                  </span>
                </div>
              </div>

              {/* Top label */}

              <div className="absolute left-6 top-6 text-[8px] font-medium uppercase tracking-[0.28em] text-white/25">
                Connected business system
              </div>

              {/* Bottom label */}

              <div className="absolute bottom-6 right-6 text-[8px] font-medium uppercase tracking-[0.28em] text-white/25">
                Built for scale
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemNode({
  system,
  position,
  active,
}: {
  system: (typeof systems)[number];
  position: string;
  active: boolean;
}) {
  const Icon = system.icon;

  return (
    <div
      className={`absolute ${position} transition-all duration-500 ${
        active
          ? "scale-105"
          : "scale-100"
      }`}
    >
      <div
        className={`flex w-[125px] flex-col items-center rounded-2xl border px-4 py-4 backdrop-blur-md transition-all duration-500 ${
          active
            ? "border-[#16C784]/30 bg-[#16C784]/[0.07]"
            : "border-white/[0.08] bg-black/20"
        }`}
      >
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors duration-500 ${
            active
              ? "bg-[#16C784]/10 text-[#16C784]"
              : "bg-white/[0.05] text-white/40"
          }`}
        >
          <Icon className="h-4 w-4" />
        </div>

        <span className="mt-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/70">
          {system.label}
        </span>

        <span className="mt-1 text-[8px] text-white/25">
          {system.description}
        </span>
      </div>
    </div>
  );
}