import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Use frosted glassmorphism instead of the subtle gradient surface. */
  glass?: boolean;
  /** Enable hover elevation + border highlight. */
  interactive?: boolean;
  className?: string;
}

/** Base card: large radius, thin border, subtle gradient (or glass) surface. */
export function GlassCard({
  children,
  glass = false,
  interactive = false,
  className,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg",
        glass ? "glass" : "card-surface",
        interactive && "card-surface-hover",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
