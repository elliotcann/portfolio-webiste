import SectionTitle from "@/app/components/ui/SectionTitle";
import AnimatedSection from "@/app/components/ui/AnimatedSection";
import ContactForm from "@/app/components/ui/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="section bg-[var(--color-bg-light)]">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            title="Contact"
            subtitle="Let's connect! Feel free to reach out for collaborations, questions, or just to chat about tech"
          />
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={0.1}>
          <div className="max-w-2xl mx-auto">
            <div className="card-item">
              <ContactForm />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
