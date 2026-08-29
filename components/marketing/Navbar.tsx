import Link from "next/link";
import QuantPayLogo from "@/components/ui/Logo";

const links = [
  { label: "Product", href: "/product" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6">
        {/* =====================================================
            BRAND
        ===================================================== */}

        <Link
          href="/"
          aria-label="QuantPay home"
          className="shrink-0 transition-opacity hover:opacity-80"
        >
          <QuantPayLogo
            variant="wordmark"
            size="sm"
          />
        </Link>

        {/* =====================================================
            NAVIGATION
        ===================================================== */}

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-9 md:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[13px] font-medium text-slate-500 transition-colors duration-200 hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* =====================================================
            ACTIONS
        ===================================================== */}

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden rounded-lg px-3 py-2 text-[13px] font-medium text-slate-500 transition-colors hover:text-slate-950 sm:inline-flex"
          >
            Sign in
          </Link>

          <Link
            href="/register"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-[#0D0D0D] px-4 text-[13px] font-semibold text-white transition-all duration-200 hover:bg-black hover:shadow-[0_6px_20px_rgba(13,13,13,0.14)]"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}