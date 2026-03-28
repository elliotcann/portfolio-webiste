"use client";

import { useState, useCallback } from "react";
import { BsGithub, BsLinkedin, BsEnvelope, BsChevronDown } from "react-icons/bs";
import TypedText from "@/app/components/ui/TypedText";

// Static particles — defined outside component to avoid hydration mismatch
const PARTICLES = [
  { left: "8%",  top: "15%", delay: "0s",   dur: "9s",  size: 2 },
  { left: "18%", top: "70%", delay: "1.2s", dur: "11s", size: 3 },
  { left: "30%", top: "40%", delay: "2.5s", dur: "8s",  size: 2 },
  { left: "45%", top: "85%", delay: "0.8s", dur: "13s", size: 1 },
  { left: "60%", top: "25%", delay: "3.1s", dur: "10s", size: 3 },
  { left: "72%", top: "55%", delay: "1.8s", dur: "12s", size: 2 },
  { left: "85%", top: "10%", delay: "0.4s", dur: "9s",  size: 1 },
  { left: "92%", top: "75%", delay: "2.2s", dur: "11s", size: 2 },
  { left: "50%", top: "60%", delay: "4.0s", dur: "14s", size: 1 },
  { left: "25%", top: "90%", delay: "1.0s", dur: "10s", size: 2 },
  { left: "78%", top: "38%", delay: "3.5s", dur: "8s",  size: 3 },
  { left: "12%", top: "50%", delay: "2.8s", dur: "12s", size: 1 },
];

const HEADING = "Elliot Cann".split("");

export default function Hero() {
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setSpotlight(s => ({ ...s, visible: false }));
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-bg)]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Radial gradient glow from top */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-5%,_rgba(124,58,237,0.22)_0%,_transparent_65%)]" />

      {/* CSS grid pattern */}
      <div className="absolute inset-0 hero-grid opacity-40" />

      {/* Mouse spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: spotlight.visible ? 1 : 0,
          background: `radial-gradient(600px circle at ${spotlight.x}px ${spotlight.y}px, rgba(124,58,237,0.10), transparent 40%)`,
        }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          aria-hidden
          className="absolute rounded-full bg-[var(--color-primary)] opacity-30 animate-[subtlePulse_2s_ease-in-out_infinite]"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: p.delay,
            animationDuration: p.dur,
          }}
        />
      ))}

      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-violet-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {HEADING.map((char, i) => (
            <span
              key={i}
              className="inline-block gradient-text animate-[fadeInDown_0.5s_ease_forwards] opacity-0"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p className="text-lg sm:text-xl text-[var(--color-text)] mb-8 animate-[fadeInUp_0.8s_ease_0.6s_forwards] opacity-0">
          I&apos;m a{" "}
          <span className="text-[var(--color-accent)] font-semibold">
            <TypedText
              strings={["AI Developer.", "Automation Engineer.", "Full Stack Developer.", "Vibe Coder."]}
              typeSpeed={80}
              backSpeed={40}
              backDelay={2000}
            />
          </span>
        </p>

        <div className="flex flex-col items-center gap-6 animate-[fadeIn_0.8s_ease_0.8s_forwards] opacity-0">
          <div className="social-links justify-center">
            <a href="https://github.com/elliotcann" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <BsGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/elliotcann" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <BsLinkedin size={18} />
            </a>
            <a href="#contact" aria-label="Email">
              <BsEnvelope size={18} />
            </a>
          </div>

          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[rgba(124,58,237,0.5)] text-[var(--color-text-heading)] text-sm font-medium bg-[var(--color-primary-light)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(124,58,237,0.15)]"
          >
            View my work
            <BsChevronDown size={13} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-[subtlePulse_2s_ease-in-out_infinite]">
        <span className="text-[10px] text-[var(--color-text-light)] tracking-[0.2em] uppercase">Scroll</span>
        <BsChevronDown className="text-[var(--color-primary)]" size={14} />
      </div>
    </section>
  );
}
