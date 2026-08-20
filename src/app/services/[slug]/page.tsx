import { notFound } from "next/navigation";
import { servicesData } from "@/constants/servicesData";

// Base Sections
import ServiceOverview from "@/sections/Services/ServiceOverview";
import WhatWeOffer from "@/sections/Services/WhatWeOffer";
import Benefits from "@/sections/Services/Benefits";
import OurProcess from "@/sections/Services/OurProcess";
import IndustriesWeServe from "@/sections/Services/IndustriesWeServe";
import DocumentsRequired from "@/sections/Services/DocumentsRequired";
import FAQSection from "@/sections/Services/FAQSection";
import RelatedServices from "@/sections/Services/RelatedServices";
import RelatedBlogs from "@/sections/Services/RelatedBlogs";

// Unique Widgets
import ComplianceCalendar from "@/sections/Services/unique/ComplianceCalendar";
import TaxSavingTips from "@/sections/Services/unique/TaxSavingTips";

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const data = servicesData[slug as keyof typeof servicesData];

  if (!data) {
    notFound();
  }

  // Render the appropriate unique widget for the service
  const renderUniqueWidget = () => {
    const unique = data.uniqueData as any;
    if (!unique) return null;

    if (unique.tips && unique.deadlines) {
      return (
        <TaxSavingTips
          tips={unique.tips}
          deadlines={unique.deadlines}
        />
      );
    }

    if (unique.checklist && unique.calendar) {
      return (
        <ComplianceCalendar
          checklist={unique.checklist}
          calendar={unique.calendar}
        />
      );
    }

    return null;
  };

  return (
    <>
      {/* 1. Overview */}
      <ServiceOverview
        title={data.title}
        subtitle={data.overviewTitle}
        overview={data.overview}
        keyword={data.primaryKeyword}
      />

      {/* 2. What We Offer */}
      <WhatWeOffer offers={data.whatWeOffer} />

      {/* 3. Benefits */}
      <Benefits benefits={data.benefits} />

      {/* 4. Our Process */}
      <OurProcess steps={data.process} />

      {/* 5. Unique Section Widget */}
      {renderUniqueWidget()}

      {/* 6. Industries We Serve */}
      <IndustriesWeServe industries={data.industries} />

      {/* 7. Documents Required */}
      <DocumentsRequired documents={data.documents} />

      {/* 8. FAQ Accordion */}
      <FAQSection faqs={data.faqs} serviceTitle={data.title} />

      {/* 9. Related Services */}
      <RelatedServices relatedSlugs={data.related} />

      {/* 10. Related Blogs */}
      <RelatedBlogs />

    </>
  );
}
