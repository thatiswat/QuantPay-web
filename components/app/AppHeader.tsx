"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowLeft,
  ChevronDown,
  Search,
} from "lucide-react";

import QuantPayLogo from "@/components/ui/Logo";

export default function AppHeader() {
  const pathname = usePathname();

  const isOverview = pathname === "/app";

  return (
    <header className="sticky top-0 z-50 h-[64px] shrink-0 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex h-full items-center justify-between px-5 sm:px-7 lg:px-9">

        {/* =====================================================
            LEFT
        ===================================================== */}

        <div className="flex min-w-0 items-center gap-4">

          {/* Back */}

          {!isOverview && (
            <>
              <Link
                href="/app"
                aria-label="Back to overview"
                className="group flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
              </Link>

              <div className="hidden h-5 w-px bg-slate-200 sm:block" />
            </>
          )}

          {/* Brand */}

          <Link
            href="/app"
            aria-label="QuantPay overview"
            className="flex shrink-0 origin-left scale-[0.8] items-center"
          >
            <QuantPayLogo
              variant="wordmark"
              size="md"
              className="shrink-0 text-slate-950"
            />
          </Link>
        </div>

        {/* =====================================================
            SEARCH
        ===================================================== */}

        <div className="hidden md:flex">
          <button
            type="button"
            aria-label="Search"
            className="flex h-9 w-[280px] items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 text-left transition-colors hover:border-slate-300 hover:bg-white"
          >
            <Search className="h-4 w-4 shrink-0 text-slate-400" />

            <span className="text-xs text-slate-400">
              Search anything...
            </span>

            <span className="ml-auto rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[9px] text-slate-400">
              ⌘ K
            </span>
          </button>
        </div>

        {/* =====================================================
            BUSINESS SWITCHER
        ===================================================== */}

        <button
          type="button"
          aria-label="Switch business"
          className="flex shrink-0 items-center gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-slate-50"
        >
          <div className="hidden text-right sm:block">
            <p className="text-[10px] font-medium text-slate-400">
              Business
            </p>

            <p className="text-xs font-semibold text-slate-900">
              Avyay Enterprises
            </p>
          </div>

          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#16C784]/10 text-xs font-bold text-[#16C784]">
            A
          </div>

          <ChevronDown className="h-4 w-4 text-slate-400" />
        </button>
      </div>
    </header>
  );
}