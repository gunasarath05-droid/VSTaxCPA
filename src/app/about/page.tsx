import type { Metadata } from "next";
import AboutHero from "@/sections/About/AboutHero";
import MissionVision from "@/sections/About/MissionVision";
import Founder from "@/sections/About/Founder"
import TeamMembers from "@/sections/About/TeamMembers";
import Affiliations from "@/sections/About/Affiliations";

export const metadata: Metadata = {
  title: "About Us | Aegis Financial Advisory — Certified CPA & Audit Firm",
  description:
    "Learn about Aegis Financial Advisory — a certified CPA firm specializing in independent attestations, corporate tax planning, bookkeeping, and financial consulting since 2013.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <Founder/>
      <TeamMembers />
      <Affiliations />
    </>
  );
}
