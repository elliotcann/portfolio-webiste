"use client";

import { useState } from "react";
import Image from "next/image";
import { BsGlobe } from "react-icons/bs";
import {
  BsPinMap,
  BsDatabase,
} from "react-icons/bs";
import type { Project } from "@/app/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  BsPinMap,
  BsDatabase,
};

interface PortfolioCardProps {
  project: Project;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const [isTouched, setIsTouched] = useState(false);
  const Icon = iconMap[project.icon];

  const handleTouchEnd = (e: React.TouchEvent) => {
    // Allow taps on the demo button to pass through
    if ((e.target as HTMLElement).closest(".portfolio-actions")) return;
    e.preventDefault();
    setIsTouched((v) => !v);
  };

  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-[var(--color-border)] shadow-[var(--shadow-sm)] cursor-pointer transition-all duration-300 hover:border-[rgba(124,58,237,0.35)] hover:shadow-[var(--shadow-accent)]"
      onTouchEnd={handleTouchEnd}
    >
      {/* Image */}
      <div className="relative aspect-video w-full">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Overlay */}
      <div
        className={[
          "absolute inset-0 flex flex-col justify-end p-5",
          "bg-gradient-to-t from-[rgba(30,10,60,0.97)] via-[rgba(124,58,237,0.6)] to-transparent",
          "transition-opacity duration-400",
          // Desktop: show on hover; Mobile: show when touched
          isTouched
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100",
        ].join(" ")}
      >
        <h3 className="text-white font-semibold text-lg mb-2 flex items-center gap-2">
          {Icon && <Icon size={18} />}
          {project.title}
        </h3>
        <p className="text-white/90 text-sm mb-3 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-white border border-white/30"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="portfolio-actions">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/60 text-white text-sm font-medium hover:bg-white hover:text-[var(--color-primary-dark)] transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <BsGlobe size={14} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
