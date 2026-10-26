import type { IconType } from "react-icons";
import { DiMongodb } from "react-icons/di";
import { FaJs, FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiBetterauth,
  SiDaisyui,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si";

interface SkillsData {
  icon: IconType;
  title: string;
  color: string;
}

export function Skills() {
  const skills: SkillsData[] = [
    {
      icon: RiTailwindCssFill,
      title: "Tailwind CSS",
      color: "text-sky-400 border-sky-400/40 bg-sky-400/10 hover:bg-sky-400/20",
    },
    {
      icon: SiDaisyui,
      title: "DaisyUI",
      color:
        "text-pink-400 border-pink-400/40 bg-pink-400/10 hover:bg-pink-400/20",
    },
    {
      icon: SiShadcnui,
      title: "shadcn/ui",
      color: "text-white border-white/30 bg-white/5 hover:bg-white/10",
    },
    {
      icon: FaJs,
      title: "JavaScript",
      color:
        "text-yellow-400 border-yellow-400/40 bg-yellow-400/10 hover:bg-yellow-400/20",
    },
    {
      icon: SiTypescript,
      title: "TypeScript",
      color:
        "text-blue-400 border-blue-400/40 bg-blue-400/10 hover:bg-blue-400/20",
    },
    {
      icon: FaReact,
      title: "React",
      color:
        "text-cyan-400 border-cyan-400/40 bg-cyan-400/10 hover:bg-cyan-400/20",
    },
    {
      icon: RiNextjsLine,
      title: "Next.js",
      color: "text-white border-white/30 bg-white/5 hover:bg-white/10",
    },
    {
      icon: FaNodeJs,
      title: "Node.js",
      color:
        "text-green-400 border-green-400/40 bg-green-400/10 hover:bg-green-400/20",
    },
    {
      icon: DiMongodb,
      title: "MongoDB",
      color:
        "text-emerald-400 border-emerald-400/40 bg-emerald-400/10 hover:bg-emerald-400/20",
    },
    {
      icon: SiBetterauth,
      title: "Better Auth",
      color:
        "text-violet-400 border-violet-400/40 bg-violet-400/10 hover:bg-violet-400/20",
    },
  ];

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-20   px-6 py-24 sm:px-8 h-screen"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-10 space-y-4">
          <p className="text-[13px] font-bold tracking-[0.28em] text-red-500 uppercase">
            My Expertise
          </p>

          <h2
            id="skills-heading"
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Technologies I Work With
            <span className="text-red-500">.</span>
          </h2>

          <p className="max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
            Tools and technologies I use to build modern, responsive web
            applications.
          </p>
        </div>

        {/* Skills Badges */}
        <div className="grid grid-cols-2 items-center gap-3">
          {skills.map(({ icon: Icon, title, color }) => (
            <div
              key={title}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 transition-colors duration-200 w-40 md:w-full justify-center ${color}`}
            >
              <Icon size={25} aria-hidden="true" />

              <span className="text-base md:text-lg font-medium">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
