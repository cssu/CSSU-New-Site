import type { LucideIcon } from "lucide-react";

export type AccentColor =
  | "accent"
  | "bronze"
  | "silver"
  | "gold"
  | "platinum"
  | "blue";

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface Executive {
  name: string;
  role: string;
  bio: string;
  initials: string;
  photo?: string;
  accent: AccentColor;
  links?: {
    email?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface CouncilGroup {
  team: string;
  members: string[];
}

export interface ValueItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ResourceLink {
  title: string;
  href: string;
  description?: string;
  external?: boolean;
}

export interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  links: ResourceLink[];
}

export interface PartnerGroup {
  campus: string;
  description: string;
  organizations: string[];
}

export interface UniversityEntity {
  abbreviation: string;
  name: string;
}

export type EventStatus = "upcoming" | "past";

export interface CssuEvent {
  slug: string;
  title: string;
  date: string;
  isoDate: string;
  location: string;
  category: string;
  description: string;
  status: EventStatus;
  registrationUrl?: string;
  accent: AccentColor;
  image?: string;
}

export type SponsorTier = "bronze" | "silver" | "gold" | "platinum";

export interface SponsorTierInfo {
  tier: SponsorTier;
  name: string;
  price: string;
  blurb: string;
  accent: AccentColor;
  featured?: boolean;
  benefits: string[];
}

export interface SponsorBenefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Partner {
  name: string;
  src: string;
}

export interface OpenPosition {
  title: string;
  team: string;
  commitment: string;
  summary: string;
  responsibilities: string[];
  accent: AccentColor;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  icon: LucideIcon;
  accent: AccentColor;
  href?: string;
  external?: boolean;
}

export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  href: string;
  accent: AccentColor;
}

export interface StatItem {
  value: string;
  label: string;
}
