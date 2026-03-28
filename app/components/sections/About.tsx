import Image from "next/image";
import {
  BsPersonFill,
  BsCheckCircleFill,
} from "react-icons/bs";
import SectionTitle from "@/app/components/ui/SectionTitle";
import AnimatedSection from "@/app/components/ui/AnimatedSection";

const strengths = [
  "Building AI-powered tools and automation workflows",
  "Full stack development with React, Next.js, and TypeScript",
  "Vibe coding mentality — ship fast, learn fast, iterate",
];

export default function About() {
  return (
    <section id="about" className="section bg-[var(--color-bg-light)]">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            title="About Me"
            subtitle="Builder of web apps and AI tools — combining a technical mindset with the leadership chops of someone who's managed high-performing teams"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mt-6">
          {/* Profile image */}
          <AnimatedSection animation="fade-in" delay={0.1} className="flex justify-center">
            <div className="relative w-52 h-52 lg:w-64 lg:h-64">
              {/* Violet glow behind image */}
              <div className="absolute inset-0 rounded-full bg-[var(--color-primary)] opacity-25 blur-2xl scale-110" />
              <Image
                src="/images/profile-img.jpg"
                alt="Elliot Cann"
                fill
                className="rounded-full object-cover shadow-[var(--shadow-md)] relative z-10"
                sizes="256px"
              />
              {/* Accent ring */}
              <div className="absolute inset-[-8px] rounded-full border-2 border-[var(--color-primary)] opacity-40 animate-[subtlePulse_2s_ease-in-out_infinite] z-10" />
            </div>
          </AnimatedSection>

          {/* Bio */}
          <AnimatedSection animation="fade-up" delay={0.15} className="lg:col-span-2">
            <div className="card-item">
              <h3 className="text-xl font-semibold text-[var(--color-text-heading)] mb-3 flex items-center gap-2">
                <BsPersonFill className="text-[var(--color-primary)]" />
                Full Stack Developer & AI Enthusiast
              </h3>
              <p className="text-[var(--color-text-light)] leading-relaxed mb-4">
                Full stack developer with a growing focus on AI and automation. I
                build production web apps, experiment with AI-powered workflows, and
                embrace the vibe coding mentality — ship fast, learn fast, iterate.
                The same mindset I developed managing a Vodafone store: adapt
                quickly, lead decisively, and deliver results.
              </p>
              <ul className="space-y-2">
                {strengths.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-[var(--color-text)]">
                    <BsCheckCircleFill
                      className="text-[var(--color-primary)] mt-0.5 shrink-0"
                      size={14}
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
