"use client";

import { cn } from "cn";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  "Home",
  "Features",
  "Skills",
  "Resume",
  "Clients",
  "Contacts",
] as const;

type NavItem = (typeof NAV_LINKS)[number];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<NavItem>("Home");

  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-[#0f0f0f]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a href="/" className="flex shrink-0 items-center gap-3">
          <span className="relative size-11 overflow-hidden rounded-full ring-1 ring-white/15">
            <Image
              src="/images/profile.png"
              alt="Saber Mahmud"
              fill
              sizes="44px"
              className="object-cover object-top"
            />
          </span>
          <span className="text-lg md:text-xl lg:text-3xl font-extrabold tracking-[0.22em] text-white">
            SABER.<span className="text-amber-400">DEV</span>
          </span>
        </a>

        {/* Primary navigation */}
        <nav className="hidden items-center gap-5 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setActiveLink(link)}
              className={cn(
                "text-base font-bold uppercase tracking-[0.14em] transition-colors duration-200",
                activeLink === link
                  ? "text-white"
                  : "text-white/55 hover:text-amber-400",
              )}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2.5">
          <a
            href="#contact"
            className="hidden h-11 items-center rounded-md bg-amber-400 text-black px-6 text-base font-extrabold tracking-[0.12em] hover:text-white uppercase transition-colors hover:bg-amber-600 sm:inline-flex"
          >
            Contact us
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="grid size-11 place-items-center rounded-md bg-white/4 text-white/80 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
          >
            {isMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      {isMenuOpen && (
        <div className="border-t border-white/6 bg-[#141414] lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => {
                  setActiveLink(link);
                  setIsMenuOpen(false);
                }}
                className={cn(
                  "rounded-md px-3 py-2.5 text-[13px] font-bold uppercase tracking-[0.14em] transition-colors",
                  activeLink === link
                    ? "bg-white/6 text-white"
                    : "text-white/60 hover:bg-white/4 hover:text-amber-400",
                )}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
