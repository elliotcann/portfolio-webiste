import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";
import TypedText from "@/app/components/ui/TypedText";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-bg)]"
    >
      {/* Radial gradient glow from top */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-5%,_rgba(124,58,237,0.22)_0%,_transparent_65%)]" />

      {/* CSS grid pattern */}
      <div className="absolute inset-0 hero-grid opacity-40" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-violet-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-[fadeInDown_0.8s_ease_forwards] gradient-text"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Elliot Cann
        </h1>

        <p className="text-lg sm:text-xl text-[var(--color-text)] mb-8 animate-[fadeInUp_0.8s_ease_0.2s_forwards] opacity-0">
          I&apos;m a{" "}
          <span className="text-[var(--color-accent)] font-semibold">
            <TypedText
              strings={[
                "AI Developer.",
                "Automation Engineer.",
                "Full Stack Developer.",
                "Vibe Coder.",
              ]}
              typeSpeed={80}
              backSpeed={40}
              backDelay={2000}
            />
          </span>
        </p>

        <div className="social-links justify-center animate-[fadeIn_0.8s_ease_0.4s_forwards] opacity-0">
          <a
            href="https://github.com/elliotcann"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <BsGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/elliotcann"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <BsLinkedin size={18} />
          </a>
          <a href="#contact" aria-label="Email">
            <BsEnvelope size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
