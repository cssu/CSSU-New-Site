import {
  Facebook,
  Instagram,
  Linkedin,
  Github,
  MessageCircle,
} from "lucide-react";
import type { NavLink, SocialLink } from "@/types";

export const siteConfig = {
  name: "CSSU",
  fullName: "Computer Science Student Union",
  university: "University of Toronto",
  tagline: "Computer Science Student Union at the University of Toronto",
  description:
    "The Computer Science Student Union represents over 5,000 computer science students at the University of Toronto's St. George campus — building community, advocating for students, and creating opportunities.",
  url: "https://cssu.ca",
  email: "cssu@cdf.toronto.edu",
  executiveEmail: "utcssu@gmail.com",
  address: "Room BA2250, Bahen Centre for Information Technology",
  studentCount: "5,000+",
  constitutionUrl: "https://cssu.ca/constitution.pdf",
  mailingListUrl: "https://cssu.ca/#mailing-list",
  issueUrl:
    "https://github.com/cssu/cssu.github.io/issues/new?template=site-issue.yml&assignees=JasonBarahan,bbayazit16&labels=bug&title=[Site%20issue]%20your%20title%20goes%20here",
} as const;

export const mainNav: NavLink[] = [
  { label: "About", href: "/" },
  { label: "Student Guides", href: "/guides" },
  { label: "Resources", href: "/resources" },
  { label: "Sponsorship", href: "/sponsorship" },
  { label: "Join Us", href: "/join" },
];

export const mobileNav: NavLink[] = [
  { label: "About", href: "/", description: "Our mission & council" },
  { label: "Team", href: "/team", description: "Meet the executives" },
  { label: "Events", href: "/events", description: "Socials, seminars & more" },
  {
    label: "Student Guides",
    href: "/guides",
    description: "FAQ & first-year guide",
  },
  {
    label: "Resources",
    href: "/resources",
    description: "Academic & wellbeing support",
  },
  {
    label: "Sponsorship",
    href: "/sponsorship",
    description: "Partner with the CSSU",
  },
  { label: "Join Us", href: "/join", description: "Open positions" },
  {
    label: "Community",
    href: "/community",
    description: "Student groups on campus",
  },
  {
    label: "Student Lounge",
    href: "/ba2250",
    description: "BA2250 — our home base",
  },
  { label: "Contact", href: "/contact", description: "Get in touch" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "About", href: "/" },
      { label: "Team", href: "/team" },
      { label: "Events", href: "/events" },
      { label: "Student Guides", href: "/guides" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resources", href: "/resources" },
      { label: "Community", href: "/community" },
      { label: "Student Lounge", href: "/ba2250" },
      { label: "Constitution", href: "/constitution" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Join Us", href: "/join" },
      { label: "Sponsorship", href: "/sponsorship" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/guides/faq" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/uoftcssu",
    icon: Instagram,
  },
  {
    label: "Discord",
    href: "https://discord.gg/R9hneMaafD",
    icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/computer-science-student-union",
    icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/UofTCSSU",
    icon: Facebook,
  },
  {
    label: "GitHub",
    href: "https://github.com/cssu",
    icon: Github,
  },
];
