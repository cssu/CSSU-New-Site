import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  /** Pause the animation when hovered. */
  pauseOnHover?: boolean;
}

/** Infinite horizontal marquee. Children are duplicated for a seamless loop. */
export function Marquee({ children, className, pauseOnHover = true }: MarqueeProps) {
  return (
    <div className={cn("group/marquee w-full overflow-hidden mask-fade-x", className)}>
      <div
        className={cn(
          "flex w-max animate-marquee items-center gap-4",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        <div className="flex shrink-0 items-center gap-4">{children}</div>
        <div aria-hidden className="flex shrink-0 items-center gap-4">
          {children}
        </div>
      </div>
    </div>
  );
}
