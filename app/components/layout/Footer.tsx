import { BsGithub, BsLinkedin, BsTwitterX, BsInstagram } from "react-icons/bs";

const socials = [
  { href: "https://github.com/elliotcann",               Icon: BsGithub,   label: "GitHub"    },
  { href: "https://www.linkedin.com/in/elliotcann",      Icon: BsLinkedin, label: "LinkedIn"  },
  { href: "https://x.com/elliot_cann",                   Icon: BsTwitterX, label: "X"         },
  { href: "https://www.instagram.com/elliot.cann",       Icon: BsInstagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-[var(--color-bg-light)] border-t border-[var(--color-border)] py-6">
      <div className="container mx-auto px-4 max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[var(--color-text-light)] text-center sm:text-left">
          © 2025 <strong className="text-[var(--color-text-heading)]">Elliot Cann</strong> — Built with ❤️ — All Rights Reserved 
        </p>
        <div className="social-links">
          {socials.map(({ href, Icon, label }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
