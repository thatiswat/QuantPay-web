import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Quantpay — Business Finance, Finally in One Place",
  description:
    "QuantPay helps Indian businesses manage customers, products, inventory, invoices, payments and business finances from one connected workspace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={spaceGrotesk.variable}
    >
      <body className="min-h-screen bg-white text-slate-950 antialiased">
        {children}
      </body>
    </html>
  );
}