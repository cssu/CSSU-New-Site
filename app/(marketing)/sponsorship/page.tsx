import Image from "next/image";
import { PageHeader } from "@/components/layout/page-header";
import { SectionContainer } from "@/components/sections/section-container";
import { SectionHeader } from "@/components/sections/section-header";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { CTAButton } from "@/components/ui/cta-button";
import { Marquee } from "@/components/ui/marquee";
import { GlassCard } from "@/components/cards/glass-card";
import { PhotoCard } from "@/components/cards/photo-card";
import { FeatureCard } from "@/components/cards/feature-card";
import { SponsorCard } from "@/components/cards/sponsor-card";
import { SponsorInquiryForm } from "@/components/sponsorship/sponsor-inquiry-form";
import { AsciiBackdrop } from "@/components/sections/ascii-backdrop";
import {
  sponsorIntro,
  sponsorSupporters,
  sponsorBenefits,
  sponsorTiers,
  sponsoredEvents,
} from "@/data/sponsors";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";
import type { AccentColor } from "@/types";

export const metadata = createMetadata({
  title: "Sponsorship",
  description:
    "Partner with the CSSU and connect with over 5,000 computer science students at the University of Toronto. Explore our sponsorship tiers and benefits.",
  path: "/sponsorship",
});

const benefitAccents: AccentColor[] = ["accent", "gold", "blue", "bronze"];

export default function SponsorshipPage() {
  return (
    <>
      <PageHeader
        ascii
        asciiPosition="top-right"
        label="Sponsorship"
        title="Partner with the CSSU"
        description={sponsorIntro}
      >
        <CTAButton href="#inquiry">Become a sponsor</CTAButton>
        <CTAButton href="#tiers" variant="outline" icon={null}>
          View tiers
        </CTAButton>
      </PageHeader>
      

      {/* Supporters */}
      <SectionContainer spacing="sm" width="wide">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-subtle-foreground">
          Proudly supported by
        </p>
        <Marquee>
          {sponsorSupporters.map((supporter) => (
            <div
              key={supporter.name}
              className="flex min-w-[160px] items-center justify-center opacity-60 px-6 py-5"
            >
              <Image src={supporter.src} alt={supporter.name} width={120} height={40} className="h-8 w-auto object-contain" />
            </div>
          ))}
        </Marquee>
      </SectionContainer>

      {/* Previously sponsored events */}
      <SectionContainer spacing="md" width="wide">
        <SectionHeader
          align="center"
          title="Previously sponsored events"
          description="A snapshot of the recruiting and career programming our partners have powered."
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-3 h-80">
          {sponsoredEvents.map((event) => (
            <StaggerItem key={event.title} className="h-full">
              {event.image ? (
                <PhotoCard src={event.image} alt={event.title} className="flex h-full flex-col gap-3 p-7">
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                    with {event.partner}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {event.title}
                  </h3>
                </PhotoCard>
              ) : (
                <GlassCard interactive className="flex h-full flex-col gap-3 p-7">
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                    with {event.partner}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {event.title}
                  </h3>
                </GlassCard>
              )}
            </StaggerItem>
          ))}
        </Stagger>
      </SectionContainer>

      {/* Why sponsor */}
      <SectionContainer spacing="md" width="wide">
        <SectionHeader
          align="center"
          label="Why partner with us"
          title="Reach the next generation of builders"
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sponsorBenefits.map((benefit, i) => (
            <StaggerItem key={benefit.title} className="h-full">
              <FeatureCard item={benefit} accent={benefitAccents[i]} />
            </StaggerItem>
          ))}
        </Stagger>
      </SectionContainer>

      {/* Tiers */}
      <SectionContainer id="tiers" spacing="md" width="wide">
        <AsciiBackdrop position="left" intensity="subtle" />
        <SectionHeader
          align="center"
          label="Sponsorship tiers"
          title="Choose the partnership that fits"
          description="Every tier is flexible — reach out and we'll happily tailor a package to your goals."
        />
        <Stagger className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          {sponsorTiers.map((tier) => (
            <StaggerItem key={tier.tier} className="h-full">
              <SponsorCard tier={tier} />
            </StaggerItem>
          ))}
        </Stagger>
      </SectionContainer>

      {/* Inquiry form */}
      <SectionContainer id="inquiry" spacing="md" width="wide">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <SectionHeader
            label="Get started"
            title="Let's build something together"
            description={
              <>
                Tell us a little about your organization and goals, and we&apos;ll
                get back to you with a tailored proposal. Prefer email? Reach us at{" "}
                <a
                  href={`mailto:${siteConfig.executiveEmail}`}
                  className="text-accent underline-offset-4 hover:underline"
                >
                  {siteConfig.executiveEmail}
                </a>
                .
              </>
            }
          />
          <Reveal delay={0.1}>
            <GlassCard className="p-7 sm:p-9">
              <SponsorInquiryForm />
            </GlassCard>
          </Reveal>
        </div>
      </SectionContainer>
    </>
  );
}
