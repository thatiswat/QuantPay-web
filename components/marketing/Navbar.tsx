import Link from "next/link";
import QuantPayLogo from "@/components/ui/Logo";

const links = [
  { label: "Product", href: "/product" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-200/70 bg-white">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6">
        {/* Brand */}

        <Link
          href="/"
          aria-label="QuantPay home"
          className="flex shrink-0 origin-left scale-[0.8] items-center"
        >
          <QuantPayLogo
            variant="wordmark"
            size="md"
            className="shrink-0 text-slate-950"
          />
        </Link>

        {/* Navigation */}

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-slate-500 transition-colors duration-200 hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}

        <div className="flex shrink-0 items-center">
          <Link
            href="/app/billing"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-[#0D0D0D] px-4 text-[13px] font-semibold text-white transition-all duration-200 hover:bg-black hover:shadow-[0_6px_18px_rgba(13,13,13,0.12)]"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}