import Image from "next/image";
import { Mail, Linkedin, Github } from "lucide-react";
import { GlassCard } from "@/components/cards/glass-card";
import { getAccent } from "@/lib/accent";
import { cn } from "@/lib/utils";
import type { Executive } from "@/types";

export function ExecutiveCard({ exec }: { exec: Executive }) {
  const accent = getAccent(exec.accent);

  return (
    <GlassCard interactive className="group flex h-full flex-col p-6">
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "relative size-16 shrink-0 overflow-hidden rounded-full border transition-transform duration-500 group-hover:scale-105",
            accent.border,
            !exec.photo && ["grid place-items-center text-lg font-semibold", accent.bg, accent.text],
          )}
        >
          {exec.photo ? (
            <Image
              src={exec.photo}
              alt={`${exec.name} profile picture`}
              fill
              sizes="64px"
              className="object-cover"
            />
          ) : (
            exec.initials
          )}
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold text-foreground">
            {exec.name}
          </h3>
          <p className={cn("text-sm font-medium", accent.text)}>{exec.role}</p>
        </div>
      </div>

      <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {exec.bio}
      </p>

      {exec.links ? (
        <div className="mt-6 flex items-center gap-2">
          {exec.links.email ? (
            <SocialPill
              href={`mailto:${exec.links.email}`}
              label={`Email ${exec.name}`}
            >
              <Mail className="size-4" />
            </SocialPill>
          ) : null}
          {exec.links.linkedin ? (
            <SocialPill href={exec.links.linkedin} label={`${exec.name} on LinkedIn`} external>
              <Linkedin className="size-4" />
            </SocialPill>
          ) : null}
          {exec.links.github ? (
            <SocialPill href={exec.links.github} label={`${exec.name} on GitHub`} external>
              <Github className="size-4" />
            </SocialPill>
          ) : null}
        </div>
      ) : null}
    </GlassCard>
  );
}

function SocialPill({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="grid size-9 place-items-center rounded-full border border-border bg-tint/[0.02] text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
    >
      {children}
    </a>
  );
}
