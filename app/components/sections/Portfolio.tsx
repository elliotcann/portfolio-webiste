import { BsGithub, BsArrowRight } from "react-icons/bs";
import SectionTitle from "@/app/components/ui/SectionTitle";
import AnimatedSection from "@/app/components/ui/AnimatedSection";
import PortfolioCard from "@/app/components/ui/PortfolioCard";
import { projects } from "@/app/data/portfolio";

export default function Portfolio() {
  return (
    <section id="portfolio" className="section bg-[var(--color-bg)]">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            title="Portfolio"
            subtitle="A selection of projects spanning full stack web apps, automation tools, and AI experiments"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} animation="fade-up" delay={i * 0.1}>
              <PortfolioCard project={project} featured={i === 0} />
            </AnimatedSection>
          ))}

          {/* More on GitHub placeholder */}
          <AnimatedSection animation="fade-up" delay={projects.length * 0.1}>
            <a
              href="https://github.com/elliotcann"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-[rgba(124,58,237,0.3)] aspect-video hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-light)] transition-all duration-300"
            >
              <BsGithub size={32} className="text-[var(--color-text-light)] group-hover:text-[var(--color-primary)] transition-colors duration-300" />
              <div className="text-center">
                <p className="text-sm font-medium text-[var(--color-text-heading)]">More on GitHub</p>
                <p className="text-xs text-[var(--color-text-light)] mt-0.5 flex items-center justify-center gap-1">
                  github.com/elliotcann <BsArrowRight size={11} />
                </p>
              </div>
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
