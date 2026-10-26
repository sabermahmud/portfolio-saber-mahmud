
"use client";

import { cn } from "cn";
import { ArrowUpRight, ExternalLink, Layers3 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { GiThunderBlade } from "react-icons/gi";

const FILTERS = ["All Projects", "Full-Stack", "Frontend"] as const;

type Filter = (typeof FILTERS)[number];

type Project = {
  title: string;
  description: string;
  category: Exclude<Filter, "All Projects">;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

type PortfolioProps = {
  items?: Project[];
  className?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Ajker Bajar Dor",
    description:
      "A Bengali marketplace experience for exploring products and market prices, with a focus on usability and responsive design.",
    category: "Full-Stack",
    image: "/images/projects-thumnails/ajker-bajar-dor.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://ajker-bajar-dor-webapp.vercel.app/",
    githubUrl: "https://github.com/sabermahmud/ajker-bajar-dor",
    featured: true,
  },
  {
    title: "Fitlog",
    description:
      "A fitness-focused web application featuring a dashboard and workout-related experiences, built with modern React technologies.",
    category: "Frontend",
    image: "/images/projects-thumnails/fitlog-app.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    liveUrl: "https://fitlog-app-six.vercel.app/",
    githubUrl: "https://github.com/sabermahmud/fitlog-app",
    featured: true,
  },
  {
    title: "Dev Stack App",
    description:
      "A web project focused on presenting developer tools and technology-related information through a responsive interface.",
    category: "Frontend",
    image: "/images/projects-thumnails/dev-stack-app.png",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://dev-stack-app-liart.vercel.app",
    githubUrl: "https://github.com/sabermahmud/dev-stack-app",
    featured: true,
  },
];

// Each technology keeps a consistent color across all project cards.
const TECHNOLOGY_COLORS: Record<string, string> = {
  "Next.js":
    "text-white border-white/30 bg-white/5 hover:bg-white/10",
  TypeScript:
    "text-blue-400 border-blue-400/40 bg-blue-400/10 hover:bg-blue-400/20",
  "Tailwind CSS":
    "text-sky-400 border-sky-400/40 bg-sky-400/10 hover:bg-sky-400/20",
  MongoDB:
    "text-emerald-400 border-emerald-400/40 bg-emerald-400/10 hover:bg-emerald-400/20",
  React:
    "text-cyan-400 border-cyan-400/40 bg-cyan-400/10 hover:bg-cyan-400/20",
  JavaScript:
    "text-yellow-400 border-yellow-400/40 bg-yellow-400/10 hover:bg-yellow-400/20",
  BetterAuth:
    "text-violet-400 border-violet-400/40 bg-violet-400/10 hover:bg-violet-400/20",
};

const DEFAULT_TECHNOLOGY_COLOR =
  "border-violet-400/30 bg-violet-400/10 text-violet-300 hover:bg-violet-400/20";

export function Portfolio({
  items = PROJECTS,
  className,
}: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>("All Projects");

  const visibleItems =
    activeFilter === "All Projects"
      ? items
      : items.filter((project) => project.category === activeFilter);

  return (
    <section
      id="myportfolio"
      aria-labelledby="myportfolio-heading"
      className={cn(
        "scroll-mt-20 bg-[#0f0f0f] py-20 text-white sm:py-24",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-amber-500 uppercase sm:text-sm">
            Selected Work
          </p>

          <h2
            id="myportfolio-heading"
            className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            My Projects
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
            A selection of projects where I turn ideas into practical web
            experiences using modern technologies.
          </p>
        </div>

        {/* Project filters */}
        <div
          className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3"
          role="group"
          aria-label="Filter projects"
        >
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors",
                  isActive
                    ? "border-amber-500 bg-red-500/10 text-amber-400"
                    : "border-white/10 bg-white/3 text-white/65 hover:border-white/20 hover:text-white",
                )}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Project cards */}
        {visibleItems.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {visibleItems.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : (
          <p className="mt-12 text-center text-sm text-white/50">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border bg-[#161616] p-4 transition duration-300",
        project.featured
          ? "border-white/10 hover:border-amber-500/40"
          : "border-white/6 hover:border-white/20",
      )}
    >
      {/* Project screenshot */}
      <div className="relative aspect-16/10 overflow-hidden rounded-xl bg-white/4">
        <Image
          src={project.image}
          alt={`${project.title} application screenshot`}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {project.featured && (
          <span className="absolute top-3 left-3 rounded-md border border-white/10 bg-black/70 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white backdrop-blur-sm">
            FEATURED
          </span>
        )}
      </div>

      {/* Project information */}
      <div className="flex flex-1 flex-col">
        <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-amber-400">
          <Layers3 className="size-3.5" aria-hidden="true" />
          {project.category}
        </div>

        <h3 className="mt-2 text-xl font-bold tracking-tight">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-white/60">
          {project.description}
        </p>

        {/* Technology badges with individual colors */}
        <div className="my-4 flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className={cn(
                "rounded-full border px-2.5 py-1.5 text-xs font-medium transition-colors duration-200",
                TECHNOLOGY_COLORS[technology] ??
                  DEFAULT_TECHNOLOGY_COLOR,
              )}
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project links */}
        <div className="mt-auto flex flex-wrap items-center justify-between border-t border-white/8 pt-4">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live demo`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-amber-400"
            >
              Live Demo
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          ) : (
            <span />
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/65 transition-colors hover:text-white"
            >
              <GiThunderBlade className="size-4" aria-hidden="true" />
              Source Code
              <ExternalLink className="size-3" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
