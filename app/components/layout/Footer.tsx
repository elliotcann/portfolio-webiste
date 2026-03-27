import { BsGithub, BsLinkedin, BsEnvelope, BsPersonCircle, BsHeartFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[var(--color-bg-light)] border-t border-[var(--color-border)] py-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col items-center text-center gap-4">

          <h3 className="text-xl font-semibold text-[var(--color-text-heading)] flex items-center gap-2">
            <BsPersonCircle />
            Elliot Cann
          </h3>

          <p className="text-[var(--color-text-light)] max-w-md text-sm leading-relaxed">
            Web developer with retail management experience creating modern,
            responsive applications with a focus on clean code and intuitive
            user experiences.
          </p>

          <div className="social-links justify-center">
            {[
              {
                href: "https://github.com/elliotcann",
                Icon: BsGithub,
                label: "GitHub",
                external: true,
              },
              {
                href: "https://www.linkedin.com/in/elliotcann",
                Icon: BsLinkedin,
                label: "LinkedIn",
                external: true,
              },
              {
                href: "#contact",
                Icon: BsEnvelope,
                label: "Email",
                external: false,
              },
            ].map(({ href, Icon, label, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div className="text-xs text-[var(--color-text-light)] pt-2 border-t border-[var(--color-border)] w-full text-center">
            <span>Copyright © 2025</span>{" "}
            <strong className="text-[var(--color-text-heading)]">Elliot Cann</strong>{" "}
            <span>All Rights Reserved</span>
            <div className="mt-1 flex items-center justify-center gap-1">
              <span>Designed with</span>
              <BsHeartFill className="text-red-500" size={10} />
              <span>by Elliot Cann</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
