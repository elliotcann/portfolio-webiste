export interface Skill {
  name: string;
  icon: string; // react-icons/si or react-icons/bs name
}

export interface SkillCategory {
  id: string;
  title: string;
  bsIcon: string; // react-icons/bs name for category heading
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    bsIcon: "BsCodeSlash",
    skills: [
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "Python",     icon: "SiPython" },
      { name: "HTML",       icon: "SiHtml5" },
      { name: "CSS",        icon: "SiCss" },
      { name: "PHP",        icon: "SiPhp" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Tools",
    bsIcon: "BsLayers",
    skills: [
      { name: "React",      icon: "SiReact" },
      { name: "Next.js",    icon: "SiNextdotjs" },
      { name: "Tailwind",   icon: "SiTailwindcss" },
      { name: "Node.js",    icon: "SiNodedotjs" },
      { name: "Bootstrap",  icon: "SiBootstrap" },
      { name: "Git",        icon: "SiGit" },
    ],
  },
  {
    id: "ai",
    title: "AI & Automation",
    bsIcon: "BsRobot",
    skills: [
      { name: "OpenAI API",       icon: "SiOpenai" },
      { name: "Claude API",       icon: "BsRobot" },
      { name: "Cursor",           icon: "BsTerminalFill" },
      { name: "Make",             icon: "BsGearFill" },
      { name: "n8n",              icon: "BsDiagram3" },
      { name: "GitHub Copilot",   icon: "BsStars" },
    ],
  },
];
