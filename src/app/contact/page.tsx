import type { Metadata } from "next";
import ContactHero from "@/sections/Contact/ContactHero";
import ContactForm from "@/sections/Contact/ContactForm";
import OfficeDetails from "@/sections/Contact/OfficeDetails";

export const metadata: Metadata = {
  title: "Contact Us | Aegis Financial Advisory — Book a Free Consultation",
  description:
    "Schedule a confidential financial diagnostic session with our certified CPAs. Reach out to discuss tax planning, audit compliance, consulting, bookkeeping, or cost reporting services.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <OfficeDetails />
    </>
  );
}
