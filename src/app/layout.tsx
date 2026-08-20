import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Figtree, Manrope } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VS Tax CPA LLC | Certified Public Accountant in Irving, TX",
  description: "VS Tax CPA LLC provides strategic tax planning, tax compliance, bookkeeping, Gusto payroll, business entity formation, and fractional CFO advisory services in Irving, TX.",
  keywords: [
    "VS Tax CPA LLC",
    "CPA Irving TX",
    "Tax Compliance",
    "Tax Planning",
    "Gusto Payroll",
    "Bookkeeping Irving",
    "Fractional CFO",
    "IRS Representation",
    "Vethavalli Ramakrishnan CPA"
  ],
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${figtree.variable} ${manrope.variable}`}
    >
      <body suppressHydrationWarning className="font-manrope antialiased bg-white text-body-text">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
