import { BsGithub, BsLinkedin, BsTwitterX, BsInstagram, BsEnvelope, BsArrowUpRight } from "react-icons/bs";
import SectionTitle from "@/app/components/ui/SectionTitle";
import AnimatedSection from "@/app/components/ui/AnimatedSection";
import ContactForm from "@/app/components/ui/ContactForm";

const contactLinks = [
  {
    Icon: BsGithub,
    label: "GitHub",
    value: "github.com/elliotcann",
    href: "https://github.com/elliotcann",
    external: true,
  },
  {
    Icon: BsLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/elliotcann",
    href: "https://www.linkedin.com/in/elliotcann",
    external: true,
  },
  {
    Icon: BsTwitterX,
    label: "X",
    value: "x.com/elliot_cann",
    href: "https://x.com/elliot_cann",
    external: true,
  },
  {
    Icon: BsInstagram,
    label: "Instagram",
    value: "instagram.com/elliot.cann",
    href: "https://www.instagram.com/elliot.cann",
    external: true,
  }
];

export default function Contact() {
  return (
    <section id="contact" className="section bg-[var(--color-bg)] relative overflow-hidden">
      {/* Ambient glow */}
      <div aria-hidden className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-violet-700/8 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />
      <div aria-hidden className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <AnimatedSection animation="fade-up">
          <SectionTitle
title="Get In Touch"
            subtitle="Let's connect — reach out for collaborations, questions, or just to chat about tech"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-8">
          {/* Contact info */}
          <AnimatedSection animation="fade-left" delay={0.1} className="md:col-span-2">
            <div className="card-item h-full flex flex-col gap-6">
              <div>
                <h3 className="text-base font-semibold text-[var(--color-text-heading)] mb-2">
                  Let&apos;s build something
                </h3>
                <p className="text-sm text-[var(--color-text-light)] leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just want to talk AI and
                  automation — my inbox is always open.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {contactLinks.map(({ Icon, label, value, href, external }) => (
                  <a
                    key={href}
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-3 p-3 rounded-xl border border-[var(--color-border)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(124,58,237,0.35)] hover:bg-[var(--color-primary-light)] transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[var(--color-primary-light)] border border-[rgba(124,58,237,0.2)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary)] group-hover:border-[var(--color-primary)] transition-all duration-300">
                      <Icon size={15} className="text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-medium text-[var(--color-text-light)] uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-xs text-[var(--color-text-heading)] truncate">{value}</p>
                    </div>
                    <BsArrowUpRight size={12} className="ml-auto text-[var(--color-text-light)] group-hover:text-[var(--color-primary)] transition-colors duration-300 shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection animation="fade-right" delay={0.2} className="md:col-span-3">
            <div className="card-item h-full">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
