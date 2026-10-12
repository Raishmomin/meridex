import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meridex — Outsource Admin & Finance Work | Australia & USA",
  description:
    "Meridex supports mortgage brokers, insurance brokers, accountants and finance firms with accurate document, bookkeeping, tax and payroll support. Start with a small pilot. No lock-in.",
  keywords: [
    "outsourcing",
    "finance outsourcing",
    "bookkeeping",
    "mortgage broker support",
    "admin outsourcing",
    "payroll support",
    "tax preparation",
    "Australia",
    "USA",
  ],
  openGraph: {
    title: "Meridex — Outsource Admin & Finance Work",
    description:
      "Accurate document, bookkeeping, tax and payroll support for finance firms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
