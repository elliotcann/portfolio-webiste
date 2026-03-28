"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { BsPersonFill } from "react-icons/bs";
import SectionTitle from "@/app/components/ui/SectionTitle";
import AnimatedSection from "@/app/components/ui/AnimatedSection";
import StatCounter from "@/app/components/ui/StatCounter";

const TAGS = [
  "TypeScript", "React", "Next.js", "Node.js",
  "Python", "PostgreSQL", "OpenAI API", "Claude API",
  "n8n", "Tailwind CSS", "Git",
];

const STATS = [
  { value: 5,  suffix: "+", label: "Projects Built"   },
  { value: 2,  suffix: "+", label: "Years Coding"      },
  { value: 1,  suffix: "×", label: "Store of the Year" },
];

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2);
    const dy = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);
    setTilt({ x: dy * -12, y: dx * 12 });
  }, []);

  const handleMouseLeave = useCallback(() => setTilt({ x: 0, y: 0 }), []);

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
          {/* Profile image with 3D tilt */}
          <AnimatedSection animation="fade-left" delay={0.1} className="flex justify-center">
            <div
              ref={imageRef}
              className="relative w-52 h-52 lg:w-64 lg:h-64 cursor-default"
              style={{
                perspective: "800px",
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: tilt.x === 0 && tilt.y === 0 ? "transform 0.6s ease" : "transform 0.1s ease",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
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
          <AnimatedSection animation="fade-right" delay={0.15} className="lg:col-span-2">
            <div className="card-item">
              <h3 className="text-xl font-semibold text-[var(--color-text-heading)] mb-3 flex items-center gap-2">
                <BsPersonFill className="text-[var(--color-primary)]" />
                Full Stack Developer & AI Enthusiast
              </h3>
              <p className="text-[var(--color-text-light)] leading-relaxed mb-5">
                Full stack developer with a growing focus on AI and automation. I
                build production web apps, experiment with AI-powered workflows, and
                embrace the vibe coding mentality — ship fast, learn fast, iterate.
                The same mindset I developed managing a Vodafone store: adapt
                quickly, lead decisively, and deliver results.
              </p>
              <div className="flex flex-wrap gap-2">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] border border-[rgba(124,58,237,0.25)] hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-200 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Stat counters */}
        <AnimatedSection animation="fade-up" delay={0.25}>
          <div className="grid grid-cols-3 gap-4 mt-8 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] backdrop-blur-sm">
            {STATS.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
