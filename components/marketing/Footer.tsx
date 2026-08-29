import Link from "next/link";
import QuantPayLogo from "@/components/ui/Logo";

const productLinks = [
  { label: "Product", href: "/product" },
  { label: "Pricing", href: "/pricing" },
];

const companyLinks = [
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* =======================================================
            MAIN FOOTER
        ======================================================= */}

        <div className="grid gap-12 py-14 md:grid-cols-[1fr_auto_auto] md:py-16">
          {/* Brand */}

          <div>
            <Link
              href="/"
              className="inline-flex transition-opacity hover:opacity-80"
              aria-label="QuantPay home"
            >
              <QuantPayLogo
                variant="wordmark"
                size="sm"
                className="text-slate-950"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              One connected workspace for businesses to sell, bill,
              manage and grow.
            </p>
          </div>

          {/* Product */}

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-300">
              Product
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-500 transition-colors hover:text-slate-950"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-300">
              Company
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-500 transition-colors hover:text-slate-950"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* =======================================================
            BOTTOM BAR
        ======================================================= */}

        <div className="flex flex-col gap-4 border-t border-slate-100 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} QuantPay. All rights reserved.
          </p>

          <div className="flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.25em] text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16C784]" />

            <span>Built for scale</span>
          </div>
        </div>
      </div>
    </footer>
  );
}