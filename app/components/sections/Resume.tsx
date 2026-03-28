import { BsGeoAlt, BsLink45Deg } from "react-icons/bs";
import {
  BsCodeSquare,
  BsPcDisplayHorizontal,
  BsShop,
  BsFillMortarboardFill,
  BsBriefcase,
} from "react-icons/bs";
import SectionTitle from "@/app/components/ui/SectionTitle";
import AnimatedSection from "@/app/components/ui/AnimatedSection";
import { education, experience } from "@/app/data/resume";
import type { ResumeItem } from "@/app/data/resume";

function renderBullet(text: string): React.ReactNode[] {
  return text.split(/(<strong>.*?<\/strong>)/g).map((part, i) => {
    const match = part.match(/^<strong>(.*?)<\/strong>$/);
    return match ? <strong key={i}>{match[1]}</strong> : part;
  });
}

const bsIconMap: Record<string, React.ElementType> = {
  BsCodeSquare,
  BsPcDisplayHorizontal,
  BsShop,
};

function ResumeCard({ item }: { item: ResumeItem }) {
  const Icon = bsIconMap[item.icon];
  return (
    <div className="card-item mb-5">
      <h4 className="text-base font-semibold text-[var(--color-text-heading)] mb-1 flex items-start gap-2">
        {Icon && <Icon className="text-[var(--color-primary)] mt-0.5 shrink-0" size={16} />}
        {item.title}
      </h4>
      <p className="text-sm font-medium text-[var(--color-primary)] mb-1">{item.period}</p>

      {item.url && (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-[var(--color-text-light)] hover:text-[var(--color-primary)] mb-3 transition-colors"
        >
          <BsLink45Deg size={13} />
          <em>{item.url}</em>
        </a>
      )}

      {item.location && (
        <p className="text-xs text-[var(--color-text-light)] mb-2 flex items-center gap-1">
          <BsGeoAlt size={12} />
          {item.location}
        </p>
      )}

      <p className="text-sm text-[var(--color-text-light)] leading-relaxed mb-3">
        {item.description}
      </p>

      <ul className="space-y-1.5">
        {item.bullets.map((bullet) => (
          <li
            key={bullet}
            className="text-sm text-[var(--color-text)] flex items-start gap-2"
          >
            <span className="text-[var(--color-primary)] mt-1 shrink-0">›</span>
            <span>{renderBullet(bullet)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="section bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            title="Curriculum Vitae"
            subtitle="A snapshot of my education and experience, highlighting my journey from retail leadership to full stack development"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Education */}
          <AnimatedSection animation="fade-up" delay={0.1}>
            <h3 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4 flex items-center gap-2">
              <BsFillMortarboardFill className="text-[var(--color-primary)]" size={20} />
              Education
            </h3>
            {education.map((item) => (
              <ResumeCard key={item.id} item={item} />
            ))}
          </AnimatedSection>

          {/* Experience */}
          <AnimatedSection animation="fade-up" delay={0.15}>
            <h3 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4 flex items-center gap-2">
              <BsBriefcase className="text-[var(--color-primary)]" size={20} />
              Professional Experience
            </h3>
            {experience.map((item) => (
              <ResumeCard key={item.id} item={item} />
            ))}
          </AnimatedSection>
        </div>

        {/* Download CV */}
        <AnimatedSection animation="fade-up" delay={0.2}>
          <div className="flex justify-center mt-8">
            <a
              href="/files/Elliot-Cann-CV.docx"
              download
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[var(--color-primary)] text-white font-semibold text-sm shadow-[var(--shadow-accent)] hover:bg-[var(--color-primary-dark)] transition-colors duration-200"
            >
              <BsCodeSquare size={16} />
              Download CV
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
