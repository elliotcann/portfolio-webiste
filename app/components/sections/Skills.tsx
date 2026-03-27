import {
  SiHtml5, SiCss3, SiJavascript, SiPostgresql,
  SiPython, SiPhp, SiBootstrap, SiJquery,
} from "react-icons/si";
import { BsCodeSlash, BsLayers } from "react-icons/bs";
import SectionTitle from "@/app/components/ui/SectionTitle";
import AnimatedSection from "@/app/components/ui/AnimatedSection";
import { skillCategories } from "@/app/data/skills";
import type { Skill } from "@/app/data/skills";

const siIconMap: Record<string, React.ElementType> = {
  SiHtml5, SiCss3, SiJavascript, SiPostgresql,
  SiPython, SiPhp, SiBootstrap, SiJquery,
};

const categoryIconMap: Record<string, React.ElementType> = {
  BsCodeSlash,
  BsLayers,
};

function SkillIcon({ skill }: { skill: Skill }) {
  const Icon = siIconMap[skill.icon];
  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-[var(--color-primary-light)] transition-colors duration-200 group">
      {Icon ? (
        <Icon
          size={48}
          className="transition-transform duration-200 group-hover:scale-110"
        />
      ) : (
        <div className="w-12 h-12 rounded-lg bg-[var(--color-gray-200)]" />
      )}
      <span className="text-xs font-medium text-[var(--color-text-heading)]">{skill.name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section bg-[var(--color-bg-light)]">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            title="Skills"
            subtitle="A versatile tech stack covering front end, back end, and everything in between to build dynamic, high performance web applications"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {skillCategories.map((cat, i) => {
            const CatIcon = categoryIconMap[cat.bsIcon];
            return (
              <AnimatedSection key={cat.id} animation="fade-up" delay={i * 0.1}>
                <div className="card-item h-full">
                  <h3 className="text-base font-semibold text-[var(--color-text-heading)] mb-4 flex items-center gap-2">
                    {CatIcon && <CatIcon className="text-[var(--color-primary)]" />}
                    {cat.title}
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {cat.skills.map((skill) => (
                      <SkillIcon key={`${cat.id}-${skill.name}`} skill={skill} />
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
