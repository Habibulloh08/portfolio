import ecoDataImg from "@/assets/projects/EcoData.png";
import qadamImg from "@/assets/projects/Qadam.png";
import erpImg from "@/assets/projects/ERP.png";
import usasImg from "@/assets/projects/Usas.png";
import nextTripImg from "@/assets/projects/Next-Trip.png";
import hgtImg from "@/assets/projects/Hgt-kiosk.png";
import resumePdf from "@/resume/Karimov_Habibulloh_CV.pdf";

export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  accent: string;
  points: string[];
}

export interface Project {
  name: string;
  desc: string;
  tags: string[];
  gradient: [string, string];
  year: string;
  image: string;
  url: string | null;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface CoreSkill {
  name: string;
  meta: string;
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export const PROFILE = {
  name: "Habibulloh",
  surname: "Karimov",
  role: "Frontend Developer",
  location: "Tashkent, Uzbekistan",
  email: "karimovhabibulloh147@gmail.com",
  phone: "+998 91-345-72-45",
  phoneHref: "tel:+998913457245",
  portfolio: "https://portfolio-phi-two-rikqt3zgv1.vercel.app/",
  resume: resumePdf,
  resumeFileName: "Karimov_Habibulloh_CV.pdf",
  summary:
    "Frontend developer with ~3 years of experience, specializing in high-performance web applications, complex ERP ecosystems and government platforms (USAS). Deep expertise in React, Next.js and TypeScript, with a proven record of applying Clean Architecture and designing complex RBAC systems across 8 major projects. I integrate cutting-edge AI and voice automation (Google Gemini, MediaPipe) and lead cross-functional Agile teams to ship secure, scalable, user-centered software.",
};

export const SOCIALS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Habibulloh08",
    handle: "@Habibulloh08",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/habibulloh-karimov-5b87a2293/",
    handle: "habibulloh-karimov",
  },
  {
    label: "Telegram",
    href: "https://t.me/habibulloh90",
    handle: "@habibulloh90",
  },
];

export const STATS = [
  { value: 3, suffix: "+", label: "Years of experience" },
  { value: 8, suffix: "", label: "Large-scale projects" },
  { value: 100, suffix: "+", label: "RBAC roles secured" },
  { value: 70, suffix: "+", label: "ERP pages delivered" },
];

export const EXPERIENCE: Job[] = [
  {
    company: "Nextin",
    role: "Frontend Developer",
    period: "01.2026 — Present",
    location: "Tashkent",
    accent: "var(--accent)",
    points: [
      "Built Eco Data — a modular registry & cartography platform on Vue 3 / TypeScript / Vite with Pinia, an interactive GIS layer (OpenLayers, KML/GeoJSON) and national e-signature integration (E-IMZO, PKCS7).",
      "Developed the official USAS platform for the State Academy of Uzbekistan, a hotel booking ecosystem, and a touch interface for HGT infokiosks with RTK Query and a custom JWT refresh mutex.",
      "Collaborated with backend, design and QA teams in an Agile environment to ship scalable UI structures fast.",
    ],
  },
  {
    company: "Yurtal",
    role: "ReactJS Team Lead",
    period: "09.2025 — 12.2025",
    location: "Tashkent",
    accent: "var(--accent-2)",
    points: [
      "Led frontend development of Qadam AI — a personal AI-trainer fitness platform built with React, TypeScript, Tailwind CSS and Material UI.",
      "Integrated Google Gemini AI and Porcupine voice recognition for hands-free workouts, plus MediaPipe computer vision for on-device pose detection and rep counting.",
      "Managed state with Redux Toolkit & React Query, shipped real-time features on Socket.IO and full i18next localization.",
    ],
  },
  {
    company: "ExaSoft",
    role: "ReactJS Team Lead",
    period: "11.2023 — 08.2025",
    location: "Tashkent",
    accent: "var(--accent-3)",
    points: [
      "Built a modular ERP client (70+ pages: Accounting, HR, POS, WMS, CashFlow) with React, TypeScript and Ant Design; led the migration to Clean Architecture, cutting tech debt by 25%.",
      "Designed a fault-tolerant RBAC system protecting 100+ user roles.",
      "Created a window-configuration admin panel with dynamic pricing and the fully responsive Tri-Logistics platform.",
      "Led the frontend team: code reviews, Agile/Scrum (−20% sprint delivery time) and mentoring.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Eco Data",
    desc: "Registry management & cartography platform with an interactive GIS layer and national e-signature (E-IMZO) support.",
    tags: ["Vue 3", "TypeScript", "Pinia", "OpenLayers"],
    gradient: ["#0ea5e9", "#22d3ee"],
    year: "2026",
    image: ecoDataImg,
    url: "https://ecodata.uznature.uz/auth/one-id",
  },
  {
    name: "Qadam AI",
    desc: "AI personal-trainer fitness ecosystem: voice-driven hands-free workouts and computer-vision rep counting.",
    tags: ["React", "Gemini AI", "MediaPipe", "Socket.IO"],
    gradient: ["#8b5cf6", "#d946ef"],
    year: "2025",
    image: qadamImg,
    url: "https://t.me/qadampodbot",
  },
  {
    name: "ERP Ecosystem",
    desc: "70+ page modular ERP client — Accounting, HR, POS, WMS, CashFlow — on Clean Architecture with RBAC for 100+ roles.",
    tags: ["React", "TypeScript", "Ant Design", "RBAC"],
    gradient: ["#f43f5e", "#fb923c"],
    year: "2024",
    image: erpImg,
    url: null,
  },
  {
    name: "USAS Platform",
    desc: "Official web resource of the State Academy of Uzbekistan — a fast, accessible government platform.",
    tags: ["React", "TypeScript", "Government"],
    gradient: ["#10b981", "#34d399"],
    year: "2026",
    image: usasImg,
    url: "https://usas.ibber.uz/",
  },
  {
    name: "Hotel Booking Suite",
    desc: "End-to-end hotel booking and room-fund management ecosystem with complex availability logic.",
    tags: ["React", "RTK Query", "TypeScript"],
    gradient: ["#6366f1", "#38bdf8"],
    year: "2026",
    image: nextTripImg,
    url: "https://nexttrip.uz/home",
  },
  {
    name: "HGT Kiosk",
    desc: "Touch-first interface for interactive infokiosks with a custom mutex-based JWT refresh mechanism.",
    tags: ["React", "RTK Query", "Kiosk UI"],
    gradient: ["#f59e0b", "#f472b6"],
    year: "2026",
    image: hgtImg,
    url: "https://egaz.savdolog.uz/",
  },
];

export const CORE_STACK: CoreSkill[] = [
  {
    name: "React / Next.js",
    meta: "ERP ecosystems, government platforms & AI products across 8 major projects",
  },
  {
    name: "TypeScript",
    meta: "Strictly-typed codebases — from 70+ page ERP clients to GIS platforms",
  },
  {
    name: "Vue 3 / Pinia",
    meta: "Eco Data — registry & cartography platform with OpenLayers GIS and E-IMZO",
  },
  {
    name: "State & Data",
    meta: "Redux Toolkit · RTK Query · React Query · Zustand · Socket.IO real-time",
  },
  {
    name: "Rect Native",
    meta: "Mobile development with React Native and TypeScript",
  },
  {
    name: "Architecture",
    meta: "Clean Architecture · SOLID · fault-tolerant RBAC for 100+ roles",
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frameworks & Languages",
    items: [
      "React",
      "Next.js",
      "Vue 3",
      "React Native",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML",
      "CSS",
      "Sass",
      "Tailwind CSS",
    ],
  },
  {
    title: "State & Data",
    items: [
      "Redux Toolkit",
      "RTK Query",
      "Pinia",
      "Zustand",
      "React Query",
      "Socket.IO",
    ],
  },
  {
    title: "Advanced Integrations",
    items: [
      "OpenLayers GIS",
      "KML / GeoJSON",
      "Google Gemini AI",
      "OpenAI",
      "MediaPipe",
      "E-IMZO (ERI)",
    ],
  },
  {
    title: "Architecture & Tools",
    items: [
      "Clean Architecture",
      "SOLID",
      "RBAC",
      "Vitest / Jest",
      "Git & GitHub",
      "Agile / Scrum",
    ],
  },
];

export const MARQUEE_ITEMS = [
  "React",
  "Next.js",
  "Vue 3",
  "TypeScript",
  "Tailwind CSS",
  "GSAP",
  "Three.js",
  "Redux Toolkit",
  "RTK Query",
  "Pinia",
  "Zustand",
  "React Query",
  "Socket.IO",
  "OpenLayers",
  "Gemini AI",
  "MediaPipe",
  "Clean Architecture",
  "RBAC",
  "E-IMZO",
];

export const EDUCATION = {
  course: "Frontend Development Course — Najot Ta'lim",
  period: "03.2023 – 10.2023 · Tashkent",
  certificate: "React Developer Certification — Najot Ta'lim",
  certDate: "October 2023",
};
