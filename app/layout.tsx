import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuantPay — Business Finance, Finally in One Place",
  description:
    "QuantPay helps Indian businesses manage customers, products, inventory, invoices, payments and business finances from one connected workspace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-950 antialiased">
        {children}
      </body>
    </html>
  );
}