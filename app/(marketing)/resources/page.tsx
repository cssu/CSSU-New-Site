import { ArrowUpRight, Phone, LifeBuoy } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { SectionContainer } from "@/components/sections/section-container";
import { SectionHeader } from "@/components/sections/section-header";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/ui/motion";
import { GlassCard } from "@/components/cards/glass-card";
import { ResourceExplorer } from "@/components/resources/resource-explorer";
import { AsciiBackdrop } from "@/components/sections/ascii-backdrop";
import { mentalHealthGroups, mentalHealthIntro } from "@/data/resources";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Resources",
  description:
    "A curated hub of academic, software, community, and mental health resources for computer science students at the University of Toronto.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        ascii
        asciiPosition="top-right"
        label="Resources"
        title="Your CS toolkit"
        description="Academic support, free software, community spaces, and wellbeing resources — all in one place, curated by the CSSU."
      />

      <SectionContainer spacing="md" width="wide">
        <ResourceExplorer />
      </SectionContainer>

      {/* Mental health */}
      <SectionContainer id="mental-health" spacing="md" width="wide">
        <AsciiBackdrop position="left" intensity="subtle" />
        <SectionHeader
          label="Wellbeing"
          title="Mental health resources"
          description="Your wellbeing comes first. These services are here for you, on campus and around the clock."
        />

        <Reveal className="mt-10">
          <GlassCard className="flex items-center justify-start gap-4 border-bronze/30 bg-bronze/[0.06] p-6">
            <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl border border-bronze/30 bg-bronze/10 text-bronze">
              <LifeBuoy className="size-5" />
            </span>
            <p className="text-sm leading-relaxed text-foreground/90">
              {mentalHealthIntro}
            </p>
          </GlassCard>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {mentalHealthGroups.map((group) => (
            <Reveal key={group.title}>
              <GlassCard className="flex h-full flex-col p-7">
                <h3 className="text-base font-semibold text-foreground">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-4">
                  {group.resources.map((resource) => (
                    <li
                      key={resource.title}
                      className="border-t border-border pt-4 first:border-t-0 first:pt-0"
                    >
                      {resource.href ? (
                        <a
                          href={resource.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
                        >
                          {resource.title}
                          <ArrowUpRight className="size-4 text-subtle-foreground transition-transform group-hover:translate-x-0.5" />
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-foreground">
                          {resource.title}
                        </span>
                      )}
                      {resource.phone ? (
                        <span className="mt-1.5 flex items-start gap-1.5 text-xs text-muted-foreground">
                          <Phone className="mt-0.5 size-3 shrink-0" />
                          {resource.phone}
                        </span>
                      ) : null}
                      {resource.description ? (
                        <p className="mt-1.5 text-xs leading-snug text-subtle-foreground">
                          {resource.description}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      <CTASection
        title="Can't find what you need?"
        description="Reach out and we'll point you in the right direction — or suggest a resource we should add."
        actions={[
          { label: "Contact us", href: "/contact", variant: "default" },
          { label: "Read the first-year guide", href: "/guides/first-year-guide", variant: "outline" },
        ]}
      />
    </>
  );
}
