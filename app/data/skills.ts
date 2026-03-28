export interface Skill {
  name: string;
  icon: string; // react-icons/si name
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
      { name: "HTML",       icon: "SiHtml5" },
      { name: "CSS",        icon: "SiCss" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "Python",     icon: "SiPython" },
      { name: "PHP",        icon: "SiPhp" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    bsIcon: "BsLayers",
    skills: [
      { name: "Bootstrap", icon: "SiBootstrap" },
      { name: "jQuery",    icon: "SiJquery" },
    ],
  },
];
