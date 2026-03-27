import SectionTitle from "@/app/components/ui/SectionTitle";
import AnimatedSection from "@/app/components/ui/AnimatedSection";
import PortfolioCard from "@/app/components/ui/PortfolioCard";
import { projects } from "@/app/data/portfolio";

export default function Portfolio() {
  return (
    <section id="portfolio" className="section bg-[var(--color-bg-light)]">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            title="Portfolio"
            subtitle="My best projects, demonstrating my expertise in front end, back end, and full stack development"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} animation="fade-up" delay={i * 0.1}>
              <PortfolioCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
