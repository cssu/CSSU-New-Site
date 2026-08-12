import { Reveal } from "@/components/ui/motion";
import { SectionLabel } from "@/components/sections/section-label";
import { AsciiBackdrop } from "@/components/sections/ascii-backdrop";
import { CTAButton } from "@/components/ui/cta-button";
// import { stats } from "@/data/about";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 sm:pt-48 lg:px-8">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[1100px] -translate-x-1/2 glow-accent opacity-80" />
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-40" />
        <div className="absolute -left-32 top-40 size-72 rounded-full bg-blue/10 blur-[120px]" />
        <div className="absolute -right-24 top-24 size-72 rounded-full bg-accent/10 blur-[120px]" />
      </div>
      <AsciiBackdrop position="right" intensity="subtle" />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Reveal>
          <SectionLabel>{siteConfig.university} · St. George</SectionLabel>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mt-7 text-balance text-hero font-semibold tracking-tight">
            <span className="text-gradient">The Computer Science</span>
            <br />
            <span className="text-gradient-accent">Student Union</span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Representing{" "}
            <span className="text-foreground">{siteConfig.studentCount} students</span>{" "}
            at the University of Toronto — building community, advocating for
            students, and creating opportunities in computer science.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <CTAButton href="/join" variant="default" size="lg">
              Join the CSSU
            </CTAButton>
            <CTAButton href="/resources" variant="outline" size="lg" icon={null}>
              Explore resources
            </CTAButton>
          </div>
        </Reveal>
      </div>

      {/* <Stagger className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
        {stats.map((stat) => (
          <StaggerItem
            key={stat.label}
            className="flex flex-col items-center gap-1.5 bg-background-soft px-4 py-7 text-center"
          >
            <span className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {stat.value}
            </span>
            <span className="text-xs text-muted-foreground sm:text-sm">
              {stat.label}
            </span>
          </StaggerItem>
        ))}
      </Stagger> */}
    </section>
  );
}
