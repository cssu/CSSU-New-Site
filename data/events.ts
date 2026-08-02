import type { CssuEvent } from "@/types";

export const eventsIntro =
  "From frosh socials to research seminars and networking nights, our events bring the CS community together all year round. Here's what's coming up — and a look back at what you might have missed.";

export const events: CssuEvent[] = [
  {
    slug: "frosh-welcome-social",
    title: "Frosh Welcome Social",
    date: "September 12, 2026",
    isoDate: "2026-09-12",
    location: "Bahen Centre · BA2250",
    category: "Social",
    description:
      "Kick off the year with the CS community. Meet upper-years, find your people, and grab some very cheap ice cream sandwiches on us.",
    status: "upcoming",
    registrationUrl: "/contact",
    accent: "accent",
    image: "/assets/frosh.png",
  },
  {
    slug: "resume-internship-night",
    title: "Resume & Internship Night",
    date: "October 2, 2026",
    isoDate: "2026-10-02",
    location: "Bahen Centre · Atrium",
    category: "Professional",
    description:
      "Get your resume reviewed by upper-years and recruiters, and learn how to land your first internship in tech.",
    status: "upcoming",
    registrationUrl: "/contact",
    accent: "blue",
    image: "/assets/event_dayforce.png",
  },
  {
    slug: "research-in-cs-seminar",
    title: "Research in CS Seminar",
    date: "October 21, 2026",
    isoDate: "2026-10-21",
    location: "Bahen Centre · BA1130",
    category: "Academic",
    description:
      "Faculty and graduate students share how to get involved in computer science research as an undergrad. Recorded and shared afterward.",
    status: "upcoming",
    registrationUrl: "/contact",
    accent: "gold",
    image: "/assets/panel.png",
  },
  {
    slug: "game-night",
    title: "Game Night @ BA2250",
    date: "November 7, 2026",
    isoDate: "2026-11-07",
    location: "Bahen Centre · BA2250",
    category: "Social",
    description:
      "Modern, arcade, retro, and party games in the lounge. Bring a friend or make new ones — snacks provided.",
    status: "upcoming",
    registrationUrl: "/contact",
    accent: "bronze",
  },
  {
    slug: "end-of-year-mixer",
    title: "End-of-Year Mixer",
    date: "April 4, 2026",
    isoDate: "2026-04-04",
    location: "Bahen Centre · Atrium",
    category: "Social",
    description:
      "We celebrated the end of the academic year with the whole community — food, music, and a thank-you to our volunteers.",
    status: "past",
    accent: "accent",
  },
  {
    slug: "hack-the-term-study-jam",
    title: "Hack the Term Study Jam",
    date: "March 14, 2026",
    isoDate: "2026-03-14",
    location: "Bahen Centre · BA2250",
    category: "Academic",
    description:
      "A collaborative study session before finals, with upper-year mentors on hand and plenty of caffeine.",
    status: "past",
    accent: "blue",
  },
  {
    slug: "industry-panel",
    title: "Industry Panel: Breaking into Tech",
    date: "February 13, 2026",
    isoDate: "2026-02-13",
    location: "Bahen Centre · BA1170",
    category: "Professional",
    description:
      "Engineers and recruiters from leading companies shared candid advice on interviews, internships, and early careers.",
    status: "past",
    accent: "gold",
  },
];
