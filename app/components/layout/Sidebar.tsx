"use client";

import { useEffect, useRef, useState } from "react";
import {
  BsHouseFill,
  BsPersonFill,
  BsImages,
  BsHddStack,
  BsFileEarmarkText,
  BsEnvelope,
  BsList,
  BsX,
} from "react-icons/bs";
import { navItems } from "@/app/data/nav";

const iconMap: Record<string, React.ElementType> = {
  BsHouseFill,
  BsPersonFill,
  BsImages,
  BsHddStack,
  BsFileEarmarkText,
  BsEnvelope,
};

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // IntersectionObserver scrollspy
  useEffect(() => {
    const sectionIds = navItems.map((n) => n.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!isMobileOpen) return;
    const handler = (e: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        setIsMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isMobileOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    // Smooth scroll to section
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hamburger — visible below xl */}
      <button
        className="fixed top-4 left-4 z-50 xl:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-bg-section)]/80 backdrop-blur-xl border border-[var(--color-border)] text-[var(--color-text-heading)] shadow-[var(--shadow-sm)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors duration-200"
        onClick={() => setIsMobileOpen((v) => !v)}
        aria-label={isMobileOpen ? "Close menu" : "Open menu"}
      >
        {isMobileOpen ? <BsX size={22} /> : <BsList size={22} />}
      </button>

      {/* Sidebar */}
      <header
        ref={navRef}
        className={[
          "fixed top-0 left-0 h-full z-40 flex flex-col justify-center",
          "bg-[var(--color-bg-section)]/70 backdrop-blur-2xl",
          "border-r border-[var(--color-border)]",
          // Subtle violet glow on the right edge
          "shadow-[1px_0_20px_rgba(124,58,237,0.08)]",
          // Width: collapsed icon-only on desktop, expands on hover
          "w-[64px] hover:w-[var(--width-sidebar)]",
          "transition-[width] duration-300 ease-in-out overflow-hidden",
          // Mobile: full-width drawer
          "xl:translate-x-0",
          isMobileOpen
            ? "translate-x-0 w-[var(--width-sidebar-mobile)]"
            : "-translate-x-full xl:translate-x-0",
        ].join(" ")}
      >
        <nav>
          <ul className="list-none p-0 m-0 py-6 flex flex-col gap-1">
            {navItems.map(({ href, label, icon }) => {
              const Icon = iconMap[icon];
              const id = href.slice(1);
              const isActive = activeSection === id;
              return (
                <li key={href} className="px-3">
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(href);
                    }}
                    className={[
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg whitespace-nowrap",
                      "transition-all duration-200",
                      isActive
                        ? "bg-[var(--color-primary-light)] text-[var(--color-primary)] font-medium shadow-[0_0_12px_rgba(124,58,237,0.2)]"
                        : "text-[var(--color-text-light)] hover:text-[var(--color-text-heading)] hover:bg-white/5",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {Icon && (
                      <Icon
                        size={17}
                        className={[
                          "shrink-0 transition-colors duration-200",
                          isActive ? "text-[var(--color-primary)]" : "",
                        ].join(" ")}
                      />
                    )}
                    <span className="text-sm tracking-wide">{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      {/* Mobile overlay backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 xl:hidden"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden
        />
      )}
    </>
  );
}
