import { cn } from "cn";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const QUICK_LINKS: FooterLink[] = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#myportfolio" },
  { label: "Contact", href: "#contact" },
];

const RESOURCE_LINKS: FooterLink[] = [
  { label: "Email", href: "mailto:sabermahmud01@gmail.com", external: true },
  { label: "GitHub", href: "https://github.com/sabermahmud", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saber-mahmud",
    external: true,
  },
  { label: "Twitter / X", href: "https://x.com/SaberMahmud01", external: true },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/sabermahmud",
    external: true,
  },
];

const SOCIALS = [
  { label: "Email", href: "mailto:sabermahmud01@gmail.com", Icon: FiMail },
  {
    label: "GitHub",
    href: "https://github.com/sabermahmud",
    Icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saber-mahmud",
    Icon: FiLinkedin,
  },
  {
    label: "Twitter / X",
    href: "https://x.com/SaberMahmud01",
    Icon: FaXTwitter,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/sabermahmud",
    Icon: SiLeetcode,
  },
];

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export function Footer({ className }: { className?: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className={cn("bg-[#0f0f0f] border-t border-amber-300 pt-20 pb-10", className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-x-8 gap-y-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* ---------------- Brand ---------------- */}
          <div>
            <a href="/" className="flex items-center gap-4">
              <span className="relative size-20 shrink-0 overflow-hidden rounded-full ring-1 ring-white/15">
                <Image
                  src="/images/profile.png"
                  alt="Saber Mahmud"
                  fill
                  sizes="80px"
                  priority
                  className="object-cover object-top"
                />
              </span>
              <span className="text-2xl font-extrabold tracking-[0.22em] text-white sm:text-3xl">
                SABER.<span className="text-amber-400">DEV</span>
              </span>
            </a>

            <div className="mt-8 flex flex-wrap gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-14 place-items-center rounded-lg border border-white/10 bg-[#151515] text-xl text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-400 hover:text-black"
                >
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* ---------------- Link columns ---------------- */}
          <LinkColumn title="Quick Link" links={QUICK_LINKS} />
          <LinkColumn title="Resources" links={RESOURCE_LINKS} />
        </div>

        {/* ---------------- Copyright ---------------- */}
        <p className="mt-14 border-t border-white/10 pt-7 text-center text-sm text-white/45">
          © {year}. All rights reserved by Saber Mahmud
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Parts                                                               */
/* ------------------------------------------------------------------ */

function LinkColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <nav aria-label={title}>
      <h3 className="text-base font-bold tracking-[0.08em] text-amber-400 uppercase">
        {title}
      </h3>
      <ul className="mt-6 grid grid-cols-2 gap-4">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="text-[17px] text-white/75 transition-colors duration-200 hover:text-amber-400"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
