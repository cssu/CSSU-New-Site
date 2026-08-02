import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Inner content width. */
  width?: "default" | "narrow" | "wide" | "full";
  /** Vertical padding rhythm. */
  spacing?: "none" | "sm" | "md" | "lg";
  id?: string;
  as?: "section" | "div" | "footer" | "header";
}

const widths: Record<NonNullable<SectionContainerProps["width"]>, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
  full: "max-w-none",
};

const spacings: Record<NonNullable<SectionContainerProps["spacing"]>, string> = {
  none: "",
  sm: "py-16 sm:py-20",
  md: "py-20 sm:py-24",
  lg: "py-28 sm:py-30",
};

/** Standard padded, max-width content container with vertical rhythm. */
export function SectionContainer({
  children,
  className,
  width = "default",
  spacing = "md",
  id,
  as: Tag = "section",
}: SectionContainerProps) {
  return (
    <Tag id={id} className={cn("relative px-6", spacings[spacing])}>
      <div className={cn("mx-auto w-full", widths[width], className)}>
        {children}
      </div>
    </Tag>
  );
}
