"use client";

import Image from "next/image";
import { BsGlobe, BsGithub } from "react-icons/bs";
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
  featured?: boolean;
}

export default function PortfolioCard({ project, featured = false }: PortfolioCardProps) {
  const Icon = iconMap[project.icon];

  return (
    <div className="group relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] backdrop-blur-sm shadow-[var(--shadow-sm)] transition-all duration-300 hover:border-[rgba(124,58,237,0.4)] hover:shadow-[var(--shadow-accent)] hover:-translate-y-1">

      {/* Featured ribbon */}
      {featured && (
        <div className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-full bg-[var(--color-primary)] text-white text-[10px] font-semibold uppercase tracking-wider shadow-[var(--shadow-accent)]">
          Featured
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Subtle always-on gradient at base of image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-section)]/50 to-transparent" />
      </div>

      {/* Info panel — always visible */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          {Icon && <Icon size={15} className="text-[var(--color-primary)] shrink-0" />}
          <h3 className="text-base font-semibold text-[var(--color-text-heading)]">{project.title}</h3>
        </div>

        <p className="text-xs text-[var(--color-text-light)] leading-relaxed mb-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] border border-[rgba(124,58,237,0.2)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[rgba(124,58,237,0.5)] text-[var(--color-text-heading)] text-xs font-medium bg-[var(--color-primary-light)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(124,58,237,0.15)]"
            >
              <BsGlobe size={12} />
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[rgba(124,58,237,0.5)] text-[var(--color-text-heading)] text-xs font-medium bg-[var(--color-primary-light)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(124,58,237,0.15)]"
            >
              <BsGithub size={12} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
