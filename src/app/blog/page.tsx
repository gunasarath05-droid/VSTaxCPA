import type { Metadata } from "next";
import BlogHeader from "@/sections/Blog/BlogHeader";
import BlogGrid from "@/sections/Blog/BlogGrid";

export const metadata: Metadata = {
  title: "Financial Blog | Aegis Financial Advisory — Tax, Audit & CPA Insights",
  description:
    "Expert articles on corporate tax planning, compliance audit preparation, bookkeeping best practices, outsourced CFO strategy, and cost optimization — by Aegis Financial CPAs.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHeader />
      <BlogGrid />
    </>
  );
}
