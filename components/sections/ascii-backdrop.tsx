import { ASCII_LOGO } from "@/data/ascii-logo";
import { cn } from "@/lib/utils";

export type AsciiPosition =
  | "right"
  | "left"
  | "top-right"
  | "bottom-left"
  | "center";

export type AsciiIntensity = "subtle" | "normal" | "strong";

interface AsciiBackdropProps {
  position?: AsciiPosition;
  intensity?: AsciiIntensity;
  className?: string;
}

const positions: Record<AsciiPosition, string> = {
  right: "top-1/2 right-0 -translate-y-1/2 translate-x-[5%]",
  left: "top-1/2 left-0 -translate-y-1/2 -translate-x-[5%]",
  "top-right": "top-0 right-0 -translate-y-[6%] translate-x-[10%]",
  "bottom-left": "bottom-0 left-0 translate-y-[6%] -translate-x-[10%]",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

const intensities: Record<AsciiIntensity, string> = {
  subtle: "opacity-[0.09] light:opacity-[0.11]",
  normal: "opacity-[0.15] light:opacity-[0.18]",
  strong: "opacity-[0.22] light:opacity-[0.26]",
};

/**
 * Very large, low-contrast ASCII rendering of the CSSU logo, used as decorative
 * branding behind a section. Non-interactive, behind all content, and faded at
 * the section edges so it blends in and out as you scroll. Adapts to the active
 * theme via the `tint` token (light gray on dark, dark gray on light).
 */
export function AsciiBackdrop({
  position = "right",
  intensity = "normal",
  className,
}: AsciiBackdropProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden mask-fade-y",
        className,
      )}
    >
      <pre
        className={cn(
          "absolute m-0 whitespace-pre font-mono leading-[1.05] tracking-widest text-tint",
          "text-[clamp(0.32rem,1.2vw,0.8rem)]",
          intensities[intensity],
          positions[position],
        )}
      >
        {ASCII_LOGO}
      </pre>
    </div>
  );
}
