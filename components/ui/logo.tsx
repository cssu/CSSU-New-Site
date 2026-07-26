import Link from "next/link";
import { cn } from "@/lib/utils";
import { DivideCircle } from "lucide-react";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  href?: string;
}

/** CSSU brand mark: a code-bracket monogram with optional wordmark. */
export function Logo({
  className,
  showWordmark = true,
}: LogoProps) {
  return (
    <div
      aria-label="CSSU — Computer Science Student Union, home"
      className={cn("group flex items-center gap-2.5", className)}
    >
      <span className="relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-xl border border-border bg-surface-elevated transition-colors duration-300 group-hover:border-accent/40">
        <span className="absolute inset-0 bg-gradient-to-br from-accent/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="relative size-4 text-foreground"
          aria-hidden
        >
          <path
            d="M9 7L4.5 12L9 17"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 7L19.5 12L15 17"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span className="text-base font-semibold tracking-tight text-foreground">
            CSSU
          </span>
        </span>
      ) : null}
    </div>
  );
}
