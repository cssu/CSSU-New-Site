import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/hero/hero-section";
import { SectionContainer } from "@/components/sections/section-container";
import { SectionHeader } from "@/components/sections/section-header";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { CTAButton } from "@/components/ui/cta-button";
import { Marquee } from "@/components/ui/marquee";
import { FeatureCard } from "@/components/cards/feature-card";
import { GuideCard } from "@/components/cards/guide-card";
import { EventCard } from "@/components/cards/event-card";
import { NewsCard } from "@/components/cards/news-card";
import { ExecutiveCard } from "@/components/cards/executive-card";
import { AsciiBackdrop } from "@/components/sections/ascii-backdrop";
import { objectives, missionStatement } from "@/data/about";
import { guides, newsItems } from "@/data/guides";
import { events } from "@/data/events";
import { executives } from "@/data/team";
import { sponsorTiers, sponsorSupporters } from "@/data/sponsors";
import { siteConfig } from "@/data/site";
import type { AccentColor } from "@/types";

const objectiveAccents: AccentColor[] = ["accent", "blue", "gold", "bronze"];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.fullName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Room BA2250, Bahen Centre for Information Technology",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  parentOrganization: {
    "@type": "CollegeOrUniversity",
    name: "University of Toronto",
  },
  sameAs: [
    "https://instagram.com/uoftcssu",
    "https://facebook.com/UofTCSSU",
    "https://linkedin.com/company/computer-science-student-union",
    "https://github.com/cssu",
  ],
};

export default function HomePage() {
  const upcomingEvents = events.filter((e) => e.status === "upcoming").slice(0, 3);
  const featuredExecs = executives.slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <HeroSection />

      {/* Images */}
      <SectionContainer spacing="md" width="wide" className="-my-30"> 
        <div className="flex flex-row justify-center gap-5">
          <Reveal className="rotate-355">
            <Image src="/assets/photo.png" alt="photo" width={200} height={200} />
          </Reveal>
          <Reveal className="mt-18 rotate-6">
            <Image src="/assets/pancakes.png" alt="photo" width={192} height={192} />
          </Reveal>
          <Reveal className="mt-1 rotate-3">
            <Image src="/assets/speaker.png" alt="photo" width={200} height={200} />
          </Reveal>
          <Reveal className="-mt-30">
            <Image src="/assets/pizzas.png" alt="photo" width={210} height={210} />
          </Reveal>
        </div>
      </SectionContainer>

      {/* Student resources & guides */}
      <SectionContainer spacing="md" width="wide" className="mt-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            label="Quick Start"
            title="Everything you need to thrive"
            description="Curated guides and resources to help you navigate your degree, your career, and your wellbeing."
          />
          <Reveal>
            <CTAButton href="/resources" variant="outline" icon={ArrowRight} className="shrink-0">
              All resources
            </CTAButton>
          </Reveal>
        </div>
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide) => (
            <StaggerItem key={guide.slug} className="h-full">
              <GuideCard guide={guide} />
            </StaggerItem>
          ))}
        </Stagger>
      </SectionContainer>

      {/* About */}
      <SectionContainer id="about" spacing="lg" width="wide">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <SectionHeader
            label="Who we are"
            title="A student-governed home for computer science at UofT"
            description={missionStatement}
          />
          <Stagger className="grid gap-5 sm:grid-cols-2">
            {objectives.map((item, i) => (
              <StaggerItem key={item.title} className="h-full">
                <FeatureCard item={item} accent={objectiveAccents[i]} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </SectionContainer>

      {/* Events */}
      <SectionContainer spacing="md" width="wide" className="-mt-18">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            label="Events"
            title="What's coming up"
            description="Socials, seminars, and networking nights that bring the community together."
          />
          <Reveal>
            <CTAButton href="/events" variant="outline" icon={ArrowRight} className="shrink-0">
              All events
            </CTAButton>
          </Reveal>
        </div>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <StaggerItem key={event.slug} className="h-full">
              <EventCard event={event} />
            </StaggerItem>
          ))}
        </Stagger>
      </SectionContainer>

      {/* Sponsors */}
      <SectionContainer spacing="md" width="wide">
        <SectionHeader
          align="center"
          label="Sponsors & partners"
          title="Backed by the people who power CS at UofT"
          description="We're proudly supported by our funding partners — and we'd love to add your organization to the list."
        />
       <Marquee className="mt-10">
          {sponsorSupporters.map((supporter) => (
            <div
              key={supporter.name}
              className="flex min-w-[160px] items-center justify-center opacity-60 px-6 py-5"
            >
              <Image src={supporter.src} alt={supporter.name} width={120} height={40} className="h-8 w-auto object-contain" />
            </div>
          ))}
        </Marquee>
        <Reveal className="mt-10" delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {sponsorTiers.map((tier) => (
              <Link
                key={tier.tier}
                href="/sponsorship"
                className="rounded-full border border-border bg-tint/[0.02] px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
              >
                {tier.name} · {tier.price}
              </Link>
            ))}
            <CTAButton href="/sponsorship" variant="subtle">
              Partner with us
            </CTAButton>
          </div>
        </Reveal>
      </SectionContainer>

      {/* Latest news */}
      <SectionContainer spacing="md" width="wide">
        <SectionHeader
          label="Latest"
          title="From the CSSU"
          description="The freshest from the union — guides, the lounge, and ways to get involved."
        />
        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {newsItems.map((item) => (
            <StaggerItem key={item.slug} className="h-full">
              <NewsCard item={item} />
            </StaggerItem>
          ))}
        </Stagger>
      </SectionContainer>

      {/* Executive highlights */}
      <SectionContainer spacing="md" width="wide">
        <AsciiBackdrop position="left" intensity="subtle" />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            label="The team"
            title="Meet your executives"
            description="A passionate council of students working year-round to serve the CS community."
          />
          <Reveal>
            <CTAButton href="/team" variant="outline" icon={ArrowRight} className="shrink-0">
              Meet the council
            </CTAButton>
          </Reveal>
        </div>
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredExecs.map((exec) => (
            <StaggerItem key={exec.name} className="h-full">
              <ExecutiveCard exec={exec} />
            </StaggerItem>
          ))}
        </Stagger>
      </SectionContainer>

      {/* CTA */}
      <CTASection
        label="Get involved"
        title="Your community is waiting"
        description="Whether you want to join the team, partner with us, or just drop by the lounge — there's a place for you in the CSSU."
        actions={[
          { label: "Join the CSSU", href: "/join", variant: "default" },
          { label: "Visit the lounge", href: "/ba2250", variant: "outline" },
        ]}
      />
    </>
  );
}
