import { BsGithub, BsLinkedin, BsEnvelope, BsTelephone } from "react-icons/bs";
import SectionTitle from "@/app/components/ui/SectionTitle";
import AnimatedSection from "@/app/components/ui/AnimatedSection";
import ContactForm from "@/app/components/ui/ContactForm";

const contactLinks = [
  {
    Icon: BsEnvelope,
    label: "Email",
    value: "elliot@elliotcann.com",
    href: "mailto:elliot@elliotcann.com",
  },
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
];

export default function Contact() {
  return (
    <section id="contact" className="section bg-[var(--color-bg-light)]">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            title="Contact"
            subtitle="Let's connect — reach out for collaborations, questions, or just to chat about tech"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Social / contact links */}
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="card-item h-full flex flex-col justify-center gap-5">
              <h3 className="text-sm font-semibold text-[var(--color-text-heading)] uppercase tracking-wider mb-1">
                Get in touch
              </h3>
              {contactLinks.map(({ Icon, label, value, href, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-light)] text-[var(--color-primary)] shrink-0 transition-colors duration-200 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-light)] mb-0.5">{label}</p>
                    <p className="text-sm text-[var(--color-text-heading)] group-hover:text-[var(--color-primary)] transition-colors duration-200">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection animation="fade-up" delay={0.2}>
            <div className="card-item h-full">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
