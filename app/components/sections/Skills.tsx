"use client";

import { motion } from "framer-motion";
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiPostgresql,
  SiPython, SiPhp, SiBootstrap, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiGit, SiOpenai,
} from "react-icons/si";
import {
  BsCodeSlash, BsLayers, BsRobot, BsTerminalFill, BsGearFill,
} from "react-icons/bs";
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
  BsRobot, BsTerminalFill, BsGearFill,
};

const categoryIconMap: Record<string, React.ElementType> = {
  BsCodeSlash,
  BsLayers,
  BsRobot,
};

function SkillIcon({ skill, index }: { skill: Skill; index: number }) {
  const Icon = siIconMap[skill.icon] ?? bsSkillIconMap[skill.icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-[var(--color-primary-light)] transition-colors duration-200 group cursor-default"
    >
      {Icon ? (
        <Icon
          size={40}
          className="text-[var(--color-text-light)] group-hover:text-[var(--color-primary)] transition-colors duration-200 group-hover:scale-110 transform"
        />
      ) : (
        <div className="w-10 h-10 rounded-lg bg-[var(--color-gray-200)]" />
      )}
      <span className="text-xs font-medium text-[var(--color-text-light)] group-hover:text-[var(--color-text-heading)] transition-colors duration-200">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section bg-[var(--color-bg-light)]">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            title="Skills"
            subtitle="A growing tech stack spanning full stack development, AI tooling, and automation — built for shipping things that actually work"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {skillCategories.map((cat, i) => {
            const CatIcon = categoryIconMap[cat.bsIcon];
            return (
              <AnimatedSection key={cat.id} animation="fade-up" delay={i * 0.1}>
                <div className="card-item h-full">
                  <h3 className="text-sm font-semibold text-[var(--color-text-heading)] mb-4 flex items-center gap-2 uppercase tracking-wider">
                    {CatIcon && <CatIcon className="text-[var(--color-primary)]" size={16} />}
                    {cat.title}
                  </h3>
                  <div className="grid grid-cols-3 gap-1">
                    {cat.skills.map((skill, idx) => (
                      <SkillIcon key={`${cat.id}-${skill.name}`} skill={skill} index={idx} />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
