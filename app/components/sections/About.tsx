import Image from "next/image";
import {
  BsPersonFill,
  BsCheckCircleFill,
} from "react-icons/bs";
import SectionTitle from "@/app/components/ui/SectionTitle";
import AnimatedSection from "@/app/components/ui/AnimatedSection";

const strengths = [
  "Experienced in front end and back end development",
  "Strong leadership and team management skills",
  "Passionate about creating user friendly digital solutions",
];

export default function About() {
  return (
    <section id="about" className="section bg-[var(--color-bg-light)]">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            title="About Me"
            subtitle="Blending leadership, adaptability, and a passion for technology, I build seamless digital experiences with a problem solving mindset"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mt-6">
          {/* Profile image */}
          <AnimatedSection animation="fade-up" delay={0.1} className="flex justify-center">
            <div className="relative w-52 h-52 lg:w-64 lg:h-64">
              <Image
                src="/images/profile-img.jpg"
                alt="Elliot Cann"
                fill
                className="rounded-full object-cover shadow-[var(--shadow-md)]"
                sizes="256px"
              />
              {/* Accent ring */}
              <div className="absolute inset-[-8px] rounded-full border-2 border-[var(--color-primary)] opacity-30 animate-[subtlePulse_2s_ease-in-out_infinite]" />
            </div>
          </AnimatedSection>

          {/* Bio */}
          <AnimatedSection animation="fade-up" delay={0.15} className="lg:col-span-2">
            <div className="card-item">
              <h3 className="text-xl font-semibold text-[var(--color-text-heading)] mb-3 flex items-center gap-2">
                <BsPersonFill className="text-[var(--color-primary)]" />
                Full Stack Developer
              </h3>
              <p className="text-[var(--color-text-light)] leading-relaxed mb-4">
                I am a full stack developer with a passion for technology, problem
                solving, and continuous growth. While leading a high performing team
                as a Retail Store Manager, I mastered adaptability, leadership, and
                strategic thinking — skills I now apply to building seamless, high
                impact digital experiences.
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
