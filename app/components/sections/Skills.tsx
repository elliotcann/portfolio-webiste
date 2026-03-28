"use client";

import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiPostgresql,
  SiPython, SiPhp, SiBootstrap, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiGit, SiOpenai,
} from "react-icons/si";
import { BsRobot, BsTerminalFill, BsGearFill, BsDiagram3, BsStars } from "react-icons/bs";
import SectionTitle from "@/app/components/ui/SectionTitle";
import AnimatedSection from "@/app/components/ui/AnimatedSection";
import { skillCategories } from "@/app/data/skills";
import type { Skill } from "@/app/data/skills";

const siIconMap: Record<string, React.ElementType> = {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiPostgresql,
  SiPython, SiPhp, SiBootstrap, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiGit, SiOpenai,
};

const bsSkillIconMap: Record<string, React.ElementType> = {
  BsRobot, BsTerminalFill, BsGearFill, BsDiagram3, BsStars,
};

const ROW_SPEEDS   = [45, 38, 50];
const ROW_REPEATS  = [4,  4,  8 ];

function SkillChip({ skill }: { skill: Skill }) {
  const Icon = siIconMap[skill.icon] ?? bsSkillIconMap[skill.icon];
  return (
    <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] backdrop-blur-sm hover:border-[rgba(124,58,237,0.45)] hover:bg-[var(--color-primary-light)] transition-all duration-200 group cursor-default shrink-0">
      {Icon ? (
        <Icon size={20} className="text-[var(--color-text-light)] group-hover:text-[var(--color-primary)] transition-colors duration-200" />
      ) : (
        <div className="w-5 h-5 rounded bg-[var(--color-gray-300)]" />
      )}
      <span className="text-sm font-medium text-[var(--color-text-light)] group-hover:text-[var(--color-text-heading)] whitespace-nowrap transition-colors duration-200">
        {skill.name}
      </span>
    </div>
  );
}

function MarqueeRow({
  skills,
  direction,
  speed,
  repeat,
  label,
}: {
  skills: Skill[];
  direction: "left" | "right";
  speed: number;
  repeat: number;
  label: string;
}) {
  const doubled = Array.from({ length: repeat }, () => skills).flat();
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-semibold text-[var(--color-text-light)] uppercase tracking-[0.15em] px-4">
        {label}
      </p>
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div
          className={`flex gap-3 w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"} hover:[animation-play-state:paused]`}
          style={{
            "--marquee-duration": `${speed}s`,
            "--marquee-offset": `-${(100 / repeat).toFixed(4)}%`,
          } as React.CSSProperties}
        >
          {doubled.map((skill, i) => (
            <SkillChip key={`${skill.name}-${i}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section bg-[var(--color-bg-light)] overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            title="Skills"
            subtitle="A growing tech stack spanning full stack development, AI tooling, and automation — built for shipping things that actually work"
          />
        </AnimatedSection>
      </div>

      <div className="mt-10 space-y-5">
        {skillCategories.map((cat, i) => (
          <AnimatedSection key={cat.id} animation="fade-in" delay={i * 0.15}>
            <MarqueeRow
              skills={cat.skills}
              direction={i % 2 === 0 ? "left" : "right"}
              speed={ROW_SPEEDS[i]}
              repeat={ROW_REPEATS[i]}
              label={cat.title}
            />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
