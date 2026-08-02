import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhotoCardProps {
  src: string;
  alt?: string;
  children: React.ReactNode;
  className?: string;
}

/** Card with a full-bleed image background and a low-opacity black overlay. */
export function PhotoCard({ src, alt = "", children, className }: PhotoCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg",
        "card-surface card-surface-hover",
        className,
      )}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative">{children}</div>
    </div>
  );
}
