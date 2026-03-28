import Image from "next/image";
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";
import TypedText from "@/app/components/ui/TypedText";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-[fadeInDown_0.8s_ease_forwards]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Elliot Cann
        </h1>
        <p
          className="text-lg sm:text-xl text-white/90 mb-8 animate-[fadeInUp_0.8s_ease_0.2s_forwards] opacity-0"
        >
          I am a{" "}
          <TypedText
            strings={["Back End Developer.", "Front End Developer."]}
            typeSpeed={100}
            backSpeed={50}
            backDelay={2000}
          />
        </p>
        <div
          className="social-links justify-center animate-[fadeIn_0.8s_ease_0.4s_forwards] opacity-0"
        >
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
