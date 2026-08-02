import Image from "next/image";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { GlassCard } from "@/components/cards/glass-card";
import { Badge } from "@/components/ui/badge";
import { getAccent } from "@/lib/accent";
import { cn } from "@/lib/utils";
import type { CssuEvent } from "@/types";

export function EventCard({ event }: { event: CssuEvent }) {
  const accent = getAccent(event.accent);
  const isUpcoming = event.status === "upcoming";

  return (
    <GlassCard interactive className="group flex h-full flex-col">
      <div className="relative h-48 overflow-hidden border-b border-border">
        {event.image ? (
          <>
          <Image
            src={event.image}
            alt=""
            fill
            className="object-cover"
          />
          <div className={`absolute inset-0 bg-linear-to-t from-black/90 to-transparent`}>
          </div>
          </>
        ) : (
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br to-transparent",
              accent.gradientFrom,
            )}
          />
        )}
        <div className="absolute inset-0 bg-dot opacity-50" />
        <div className="relative flex h-full items-end justify-between p-5">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 text-2xl font-semibold tracking-tight",
              accent.text,
            )}
          >
            {event.category}
          </span>
          {!isUpcoming ? <Badge variant="outline">Past</Badge> : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
        <div className="mt-3 flex flex-col gap-1.5 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <Calendar className="size-4 shrink-0" />
            {event.date}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4 shrink-0" />
            {event.location}
          </span>
        </div>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {event.description}
        </p>

        {isUpcoming && event.registrationUrl ? (
          <a
            href={event.registrationUrl}
            className={cn(
              "group/reg mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium transition-colors",
              accent.text,
            )}
          >
            Register
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover/reg:translate-x-0.5" />
          </a>
        ) : null}
      </div>
    </GlassCard>
  );
}
