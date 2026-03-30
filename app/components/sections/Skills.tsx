"use client";

import { motion } from "framer-motion";
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiPostgresql,
  SiPython, SiPhp, SiBootstrap, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiGit, SiOpenai,
} from "react-icons/si";
import { BsRobot, BsTerminalFill, BsGearFill, BsDiagram3, BsStars } from "react-icons/bs";
import SectionTitle from "@/app/components/ui/SectionTitle";
import AnimatedSection from "@/app/components/ui/AnimatedSection";

type BentoSkill = {
  name: string;
  Icon: React.ElementType;
  color: string;
  category: string;
  colSpan?: 2;
  rowSpan?: 2;
};

// Layout traces cleanly to a 4-col grid (2-col on mobile):
// Row 1–2: [React 2×2] [TypeScript] [JavaScript]
//                      [Python    ] [Node.js   ]
// Row 3:   [Next.js] [Tailwind] [Bootstrap] [Git]
// Row 4:   [HTML]    [CSS]      [PHP]        [PostgreSQL]
// Row 5:   [OpenAI 2×1        ] [Claude]     [n8n]
// Row 6:   [Cursor 2×1        ] [Make]       [GitHub Copilot]
const skills: BentoSkill[] = [
  { name: "React",          Icon: SiReact,        color: "#61dafb", category: "Framework",  colSpan: 2, rowSpan: 2 },
  { name: "TypeScript",     Icon: SiTypescript,   color: "#3178c6", category: "Language" },
  { name: "JavaScript",     Icon: SiJavascript,   color: "#f7df1e", category: "Language" },
  { name: "Python",         Icon: SiPython,       color: "#4584b6", category: "Language" },
  { name: "Node.js",        Icon: SiNodedotjs,    color: "#339933", category: "Runtime" },
  { name: "Next.js",        Icon: SiNextdotjs,    color: "#eeeeee", category: "Framework" },
  { name: "Tailwind CSS",   Icon: SiTailwindcss,  color: "#38bdf8", category: "Styling" },
  { name: "Bootstrap",      Icon: SiBootstrap,    color: "#7952b3", category: "Styling" },
  { name: "Git",            Icon: SiGit,          color: "#f05032", category: "Tool" },
  { name: "HTML",           Icon: SiHtml5,        color: "#e34c26", category: "Language" },
  { name: "CSS",            Icon: SiCss,          color: "#1572b6", category: "Language" },
  { name: "PHP",            Icon: SiPhp,          color: "#777bb4", category: "Language" },
  { name: "PostgreSQL",     Icon: SiPostgresql,   color: "#336791", category: "Database" },
  { name: "OpenAI API",     Icon: SiOpenai,       color: "#10a37f", category: "AI",        colSpan: 2 },
  { name: "Claude API",     Icon: BsRobot,        color: "#f59e0b", category: "AI" },
  { name: "n8n",            Icon: BsDiagram3,     color: "#ea4b71", category: "Automation" },
  { name: "Cursor",         Icon: BsTerminalFill, color: "#8b5cf6", category: "AI Tool",   colSpan: 2 },
  { name: "Make",           Icon: BsGearFill,     color: "#a855f7", category: "Automation" },
  { name: "GitHub Copilot", Icon: BsStars,        color: "#a78bfa", category: "AI Tool" },
];

function BentoCard({ skill, index }: { skill: BentoSkill; index: number }) {
  const { name, Icon, color, category, colSpan, rowSpan } = skill;
  const isHero = colSpan === 2 && rowSpan === 2;
  const isWide = colSpan === 2 && !rowSpan;

  return (
    <motion.div
      className={[
        colSpan === 2 ? "col-span-2" : "col-span-1",
        rowSpan === 2 ? "row-span-2" : "row-span-1",
        "group relative rounded-2xl border border-[rgba(255,255,255,0.08)]",
        "bg-[rgba(255,255,255,0.03)] overflow-hidden cursor-default",
        "flex flex-col items-center justify-center gap-2 p-5",
      ].join(" ")}
      initial={{ opacity: 0, scale: 0.93 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ delay: index * 0.04, duration: 0.4, ease: "easeOut" }}
      whileHover={{
        y: -4,
        borderColor: `${color}55`,
        boxShadow: `0 0 28px ${color}28, 0 8px 32px rgba(0,0,0,0.55)`,
      }}
    >
      {/* Radial glow that blooms up from below on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 110%, ${color}22, transparent 65%)`,
        }}
      />

      {/* Hero ambient background */}
      {isHero && (
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, ${color}18, transparent 70%)`,
          }}
        />
      )}

      <Icon
        size={isHero ? 52 : isWide ? 34 : 28}
        className="relative z-10 transition-transform duration-300 group-hover:scale-110"
        style={{ color }}
      />

      <span
        className={[
          "relative z-10 font-semibold text-[var(--color-text-heading)] text-center leading-tight",
          isHero ? "text-base" : "text-sm",
        ].join(" ")}
      >
        {name}
      </span>

      <span className="relative z-10 text-[10px] font-medium text-[var(--color-text-light)] uppercase tracking-widest">
        {category}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section bg-[var(--color-bg-light)] overflow-hidden relative">
      {/* Ambient glow */}
      <div aria-hidden className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/6 rounded-full blur-3xl pointer-events-none -translate-x-1/3 -translate-y-1/3" />
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <AnimatedSection animation="fade-up">
          <SectionTitle
title="Skills"
            subtitle="A growing tech stack spanning full stack development, AI tooling, and automation — built for shipping things that actually work"
          />
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 [grid-auto-rows:minmax(110px,auto)] gap-4">
          {skills.map((skill, i) => (
            <BentoCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
