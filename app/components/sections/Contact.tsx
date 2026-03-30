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


          {/* Contact form */}
          <AnimatedSection animation="fade-up" delay={0.2}>
            <div className="card-item h-full">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
    </section>
  );
}
