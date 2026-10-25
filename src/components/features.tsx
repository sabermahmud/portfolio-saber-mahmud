import { cn } from "cn";
import {
  AlignJustify,
  BookOpen,
  type LucideIcon,
  Monitor,
  Smartphone,
  UserCog,
  Wifi,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: Monitor,
    title: "UI Implementation",
    description:
      "I transform design concepts into polished, consistent interfaces with reusable components and responsive layouts.",
  },
  {
    icon: Smartphone,
    title: "Frontend Development",
    description:
      "I build responsive, accessible, and user-friendly web interfaces using modern frontend technologies.",
  },
  {
    icon: BookOpen,
    title: "API Integration",
    description:
      "I integrate REST APIs into web applications, handling data fetching, loading states, error handling, and dynamic content.",
  },

  {
    icon: AlignJustify,
    title: "Full-Stack Web Development",
    description:
      "I develop end-to-end web applications by connecting interactive frontends with server-side logic, APIs, and databases",
  },
];

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

type FeaturesProps = {
  items?: Service[];
  className?: string;
};

export function Features({ items = SERVICES, className }: FeaturesProps) {
  return (
    <section
      id="features"
      className={cn(
        "scroll-mt-20 border-r border-amber-500/50 bg-[#0f0f0f] py-24",
        className,
      )}
    >
      <div className="mx-auto w-full px-4 sm:px-6">
        {/* ---------------- Section header ---------------- */}
        <p className="text-[13px] font-bold tracking-[0.28em] text-amber-500 uppercase">
          Features
        </p>
        <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          What I Do<span className="text-amber-500">.</span>
        </h2>
        <p className="text-white/50">
          I build modern web experiences by combining clean code, thoughtful UI
          design, and practical problem-solving.
        </p>

        {/* ---------------- Cards ---------------- */}
        <div className="mt-10 grid gap-8 grid-cols-1 lg:grid-cols-2">
          {items.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="flex flex-col items-center rounded-lg border border-white/[0.07] bg-[#151515] px-8 py-10 text-center transition-colors duration-300 hover:border-amber-500/40"
            >
              <item.icon
                aria-hidden="true"
                strokeWidth={1.75}
                className="size-9 shrink-0 text-amber-500"
              />
              <h3 className="mt-6 text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-[1.9] text-white/50">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
